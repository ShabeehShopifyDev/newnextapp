"use client"

import React, { useEffect } from 'react'
import Brandlogo from './Brandlogo'
import Navbar from './Navbar'
import Otheractions from './Otheractions'
import { Menu } from 'lucide-react'

export default function Header() {
  useEffect(() => {
    document.querySelector("header .bars").addEventListener("click", () => {
      document.querySelector(".header_wrapper .navbar").classList.toggle("active");
    });
    
    document.body.addEventListener("click", (e) => {
      if (!e.target.closest(".header_wrapper .navbar") && !e.target.closest("header .bars")) {
        document.querySelector(".header_wrapper .navbar").classList.remove("active");
      }
    });
  }, []);

  return (
    <header>
      <div className="header_wrapper container has__flex items__center">
        <Brandlogo />
        <Navbar />
        <Otheractions />
        <span className="bars">
          <Menu />
        </span>
      </div>
    </header>
  )
}