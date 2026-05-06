"use client";

import { usePathname } from "next/navigation";
import styles from "./PageRail.module.css";
import { navigationItems } from "./navigation";

export function PageRail() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <aside className={styles.rail} aria-hidden="true">
      {navigationItems.map((route) => (
        <span
          key={route.href}
          className={`${styles.dot} ${isActive(route.href) ? styles.active : ""}`.trim()}
        />
      ))}
    </aside>
  );
}
