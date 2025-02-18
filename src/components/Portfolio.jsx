import Image from "next/image";
import Link from "next/link";

const portfolioItems = [
  { name: "Coreelle", image: "/portfolio/coreelle-long.png", link: "https://coreelle.com/" },
  { name: "Petra Palumbo", image: "/portfolio/Petra-Palumbo-long.png" },
  { name: "Solmo", image: "/portfolio/solmo-long.png" },
  { name: "Labels", image: "/portfolio/labels-long.png" },
  { name: "PRYA", image: "/portfolio/prya-long.png" },
  { name: "Behno", image: "/portfolio/behno-long.png" },
  { name: "Yomy", image: "/portfolio/yomy-long.png" },
  { name: "Wood Floor", image: "/portfolio/wood-floor-long.png" },
  { name: "Petra Palumbo", image: "/portfolio/petra-palumbo-long.png" },
  { name: "Know beauty", image: "/portfolio/knowbeauty-long.png" },
  { name: "Bulk Linen Supply", image: "/portfolio/bulklinensupply-long.png", link: "https://bulklinensupply.com/" },
  { name: "Detour", image: "/portfolio/detour-long.png", link: "https://www.detoursunglasses.com/" },
  { name: "Engineered Sleep", image: "/portfolio/engineered-sleep-long.png" },
  { name: "Wavylook", image: "/portfolio/wavylook-long.png", link: "https://wavylook.com/" },
  { name: "Baumashop24", image: "/portfolio/bumashop24-long.png", link: "https://www.baumashop24.com/" },
  { name: "Bolton Enginerring", image: "/portfolio/bolton-long.png", link: "https://bepltd.com/" },
  { name: "Labeauty", image: "/portfolio/labeauty.png", link: "https://www.labeauty.com/" },
  { name: "Wood Floor Store", image: "/portfolio/woodfloorstore.png", link: "https://woodfloorstore.ie/" },
  { name: "Highly Flavored", image: "/portfolio/shophighlyflavored.png", link: "https://woodfloorstore.ie/" },
];

export default function PortfolioSection({ page = false, limit }) {
  const displayedItems = portfolioItems.slice(0, limit);
  return (
    <section className="portfolio-section is__section">
      <div className="text__center container">
        <h2 className="portfolio-title is__heading has__margin">Portfolio</h2>
        <div className="portfolio-grid has__flex has__gap">
          {displayedItems.map((item, index) => (
            <div key={index} className="portfolio-item">
              <div className="portfolio-image">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={1000}
                  height={2000}
                />
              </div>
              <a href={item.link} className="portfolio-name">{item.name}</a>
            </div>
          ))}
        </div>
        {page === false && <div className="btn_wrapper has__flex justify__center">
          <Link href="/portfolio" className="button">View Portfolio</Link>
        </div>}
      </div>
    </section>
  );
};