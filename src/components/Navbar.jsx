"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Portfolio", href: "/portfolio" },
  ];

  return (
    <nav className="navbar has__flex justify__center">
      <ul className="navigations has__flex font__sm">
        {links.map((link, index) => (
          <li key={index} className="relative">
            <Link
              href={link.href}
              className={`menu_link ${pathname === link.href ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
