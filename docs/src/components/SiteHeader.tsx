"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems } from "./navigation";

type HeaderStyles = Record<string, string>;

type SiteHeaderProps = {
  styles: HeaderStyles;
};

export function SiteHeader({ styles }: SiteHeaderProps) {
  const pathname = usePathname();

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <header className={styles.nav}>
      <p className={styles.brand}>branchscode</p>
      <nav aria-label="Main navigation">
        <ul className={styles.menu}>
          {navigationItems.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${styles.menuLink ?? ""} ${isLinkActive(link.href) ? styles.active : ""}`.trim()}
                aria-current={isLinkActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
