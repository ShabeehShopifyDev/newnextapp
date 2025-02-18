import Image from "next/image";
import Link from "next/link";

export default function BannerSection({ image, heading, subheading = "Bring Your Ideas", text, button = "Contact Us", link = "/contact" }) {
  return (
    <section className="banner-section" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`
    }}>
      <div class="banner-text has__flex flex__column has__gap">
        <h2>{heading}</h2>
        <p>{text}</p>
        <div className="btn_wrapper has__flex justify__center">
          <Link href={link} className="button has__gap">
            {button} <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
