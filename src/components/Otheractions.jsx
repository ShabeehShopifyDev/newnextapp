"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <div className="others_wrapper has__flex has__gap">
            <select className="select">
                <option value="PK">PK</option>
                <option value="AD">AD</option>
                <option value="CD">CD</option>
                <option value="SK">SK</option>
            </select>
            <div className="relative font__sm">
                <Link
                    href="/contact"
                    className={`menu_link ${pathname === '/contact' && 'active'}`}
                >
                    + Become a customer
                </Link>
            </div>
        </div>
    );
}
