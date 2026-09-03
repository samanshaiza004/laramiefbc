export function formatDate(value: string, options: Intl.DateTimeFormatOptions = {}): string {
  const date = new Date(value.includes("T") ? value : `${value}T12:00:00`);

  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    ...options,
  }).format(date);
}

export function formatEventDate(start: string, end?: string): string {
  const startDate = formatDate(start, { weekday: "long" });
  if (!end) return startDate;

  const endDate = new Date(end);
  const startValue = new Date(start);
  if (Number.isNaN(endDate.getTime()) || Number.isNaN(startValue.getTime())) return startDate;

  const sameDay = startValue.toDateString() === endDate.toDateString();
  return sameDay ? startDate : `${startDate} – ${formatDate(end, { weekday: "long" })}`;
}

export function formatEventTime(start: string, end?: string): string {
  const startDate = new Date(start);
  if (Number.isNaN(startDate.getTime())) return "Time to be confirmed";

  const format = new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit" });
  if (!end) return format.format(startDate);

  const endDate = new Date(end);
  return Number.isNaN(endDate.getTime()) ? format.format(startDate) : `${format.format(startDate)} – ${format.format(endDate)}`;
}
