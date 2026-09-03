export const siteConfig = {
  shortName: "First Baptist",
  region: "Laramie, Wyoming",
  locale: "en-US",
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Visit", href: "/visit" },
  { label: "About", href: "/about" },
  { label: "Leadership", href: "/leadership" },
  { label: "Connect", href: "/connect" },
  { label: "Sermons", href: "/sermons" },
  { label: "Events", href: "/events" },
  { label: "Give", href: "/give" },
  { label: "Contact", href: "/contact" },
] as const;

export const primaryNavigation = navigation.filter(({ href }) => href !== "/contact");

export function normalizePath(pathname: string): string {
  const withoutIndex = pathname.replace(/\/index\.html$/, "/").replace(/\.html$/, "");
  if (withoutIndex === "/") return "/";
  return withoutIndex.replace(/\/$/, "");
}
