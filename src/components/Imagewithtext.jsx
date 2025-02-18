import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ImageWithtext() {
  return (
    <section className="imagewithtext is__section ">
      <div className="container has__flex">
        <div className="content has__flex flex__column justify__center has__gap">
          <h2 className="heading text__thin">
            Great <span className="highlight">Product</span> is <br />
            <span className="bold">built by great </span>
            <strong className="highlight">teams</strong>
          </h2>
          <p>
            We help build and manage a team of world-class developers to bring
            your vision to life.
          </p>
          <Link className="button" href="#">
            Let’s get started!
          </Link>
        </div>
        <div className="image">
          <Image src="/teamwork.png" alt="Team Collaboration" height={1024} width={1024} />
        </div>
      </div>
    </section>
  );
};
