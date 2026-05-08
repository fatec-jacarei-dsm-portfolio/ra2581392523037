// Single source of truth for header links and side rail order.
export const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  // { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
] as const;

export type NavigationItem = (typeof navigationItems)[number];
