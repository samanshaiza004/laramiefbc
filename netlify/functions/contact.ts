const MAX_BODY_BYTES = 12_000;
const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 4_000;

export interface ContactEvent {
  httpMethod?: string;
  headers?: Record<string, string | undefined>;
  body?: string | null;
  isBase64Encoded?: boolean;
}

export interface ContactSubmission {
  name: string;
  email: string;
  message: string;
}

export interface ContactResponse {
  statusCode: number;
  headers: Record<string, string>;
  body: string;
}

function header(event: ContactEvent, name: string): string {
  const headers = event.headers ?? {};
  const key = Object.keys(headers).find((candidate) => candidate.toLowerCase() === name.toLowerCase());
  return key ? headers[key] ?? "" : "";
}

function decodeBody(event: ContactEvent): string | null {
  if (!event.body) return null;

  try {
    return event.isBase64Encoded ? Buffer.from(event.body, "base64").toString("utf8") : event.body;
  } catch {
    return null;
  }
}

function normalize(value: string): string {
  return value.replace(/\r\n?/g, "\n").trim();
}

export function parseContactSubmission(event: ContactEvent): ContactSubmission | null {
  const body = decodeBody(event);
  if (!body || new TextEncoder().encode(body).byteLength > MAX_BODY_BYTES) return null;

  const values = new URLSearchParams(body);
  if (values.get("website")?.trim()) return null;

  const name = normalize(values.get("name") ?? "");
  const email = normalize(values.get("email") ?? "");
  const message = normalize(values.get("message") ?? "");
  const emailLooksValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!name || name.length > MAX_NAME_LENGTH) return null;
  if (!emailLooksValid || email.length > MAX_EMAIL_LENGTH) return null;
  if (message.length < 10 || message.length > MAX_MESSAGE_LENGTH) return null;

  return { name, email, message };
}

function pageResponse(statusCode: number, title: string, message: string): ContactResponse {
  return {
    statusCode,
    headers: {
      "Cache-Control": "no-store",
      "Content-Type": "text/html; charset=UTF-8",
      "X-Content-Type-Options": "nosniff",
    },
    body: `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>${title} · First Baptist Church</title></head><body><main><p>First Baptist Church of Laramie</p><h1>${title}</h1><p>${message}</p><p><a href="/contact">Return to Contact</a></p></main></body></html>`,
  };
}

async function deliverMessage(submission: ContactSubmission): Promise<boolean> {
  const to = process.env.CONTACT_TO_EMAIL?.trim();
  const from = process.env.CONTACT_FROM_EMAIL?.trim();
  const apiKey = process.env.CONTACT_EMAIL_API_KEY?.trim();

  if (!to || !from || !apiKey) return false;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8_000);

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: submission.email,
        subject: `Website message from ${submission.name}`,
        text: `Name: ${submission.name}\nEmail: ${submission.email}\n\n${submission.message}`,
      }),
      signal: controller.signal,
    });

    return response.ok;
  } catch {
    return false;
  } finally {
    clearTimeout(timeout);
  }
}

export async function handler(event: ContactEvent): Promise<ContactResponse> {
  if (event.httpMethod !== "POST") {
    return pageResponse(405, "Method not allowed", "Please use the contact form to send a message.");
  }

  const contentType = header(event, "content-type").toLowerCase();
  if (!contentType.startsWith("application/x-www-form-urlencoded")) {
    return pageResponse(415, "Message not sent", "Please use the contact form to send a message.");
  }

  const contentLength = Number.parseInt(header(event, "content-length"), 10);
  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
    return pageResponse(400, "Message not sent", "Please check your message and try again.");
  }

  const submission = parseContactSubmission(event);
  if (!submission) return pageResponse(400, "Message not sent", "Please check your message and try again.");

  if (!(await deliverMessage(submission))) {
    return pageResponse(503, "Message not sent", "The form is temporarily unavailable. Please try again later or contact the church directly.");
  }

  return pageResponse(200, "Message sent", "Thank you. Your message has been sent to the church.");
}
