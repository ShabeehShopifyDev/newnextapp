import Image from 'next/image';

export default function HeroSection() {
  let userImage = ["/users/user1.jpg", "/users/user2.jpg", "/users/user3.jpg"];

  return (
    <section className="hero-section is__section has__flex justify__center text__center">
      <div className="hero-container">
        <h2 className="heading has__margin text__thin">
          Crafting High Performance<br />
          Websites That <span className="highlight">Drive Results</span>
        </h2>
        <div className="hero-actions has__flex items__center justify__center">
          <a href="#" className="button has__flex items__center">
            Request A Demo <span className="arrow">→</span>
          </a>
          <div className="hero-users has__flex justify__center items__center has__gap">
            <div className="user-images">
              {userImage.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt={`User ${index + 1}`}
                  width={40}
                  height={40}
                  className="user-image"
                />
              ))}
            </div>
            <div className="user-info">
              <p className="user-count">10K+</p>
              <span>Satisfied User <br /> From Worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
