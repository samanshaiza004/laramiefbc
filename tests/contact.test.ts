import { describe, expect, test } from "bun:test";
import { parseContactSubmission, type ContactEvent } from "../netlify/functions/contact";

const validEvent: ContactEvent = {
  httpMethod: "POST",
  headers: { "content-type": "application/x-www-form-urlencoded" },
  body: "name=Alex+Visitor&email=alex%40example.com&message=I+would+like+to+learn+more.",
};

describe("contact endpoint validation", () => {
  test("normalizes a valid form submission", () => {
    expect(parseContactSubmission(validEvent)).toEqual({
      name: "Alex Visitor",
      email: "alex@example.com",
      message: "I would like to learn more.",
    });
  });

  test("rejects missing and oversized fields", () => {
    expect(parseContactSubmission({ ...validEvent, body: "name=Alex&email=not-an-email&message=short" })).toBeNull();
    expect(parseContactSubmission({ ...validEvent, body: `name=Alex&email=alex%40example.com&message=${"x".repeat(4_001)}` })).toBeNull();
  });

  test("rejects the honeypot field", () => {
    expect(parseContactSubmission({ ...validEvent, body: `${validEvent.body}&website=bot` })).toBeNull();
  });
});
