"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FacebookIcon, LinkedinIcon } from "lucide-react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container has__flex container">
        <div className="social-icons has__flex has__gap">
          <Link className="media" href="https://www.facebook.com/techintegrations.net/"><FacebookIcon/></Link>
          <Link className="media" href="https://www.linkedin.com/company/techintegrations/"><LinkedinIcon/></Link>
        </div>

        <div className="contact-info">
          <p className="text">Customer support</p>
          <a className="email link" href="mailto:support@techintegrations.net">
            support@techintegrations.net
          </a>
          <p>Do you have any questions? Send us an e-mail and we will reply as soon as possible.</p>
        </div>

        <div className="whatsapp-info">
          <p className="text">Let's talk! Whatsapp us!</p>
          <a href="https://wa.link/morbt7" className="phone link">+92 349 349 0800</a>
          <p>82 Shaheen City Phase 2 Sheikhupura</p>
        </div>
      </div>

      <p className="copyright text__center font__sm">
        © Copyright 2024 Tech Integrations. All rights reserved.
      </p>

      {isVisible && (
        <button className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          ↑
        </button>
      )}
    </footer>
  );
};

export default Footer;
