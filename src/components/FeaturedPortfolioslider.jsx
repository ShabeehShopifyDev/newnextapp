"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { MoveLeft, MoveRight } from "lucide-react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
const reviews = [
  {
    image: "/clients_site/prya.png",
    name: "Prya.co.uk",
    review:
      '"Tech Integrations helped us build a website that looks great and works smoothly. They understood our needs and made sure everything was simple for our customers."',
    website: "prya.co.uk",
  },
  {
    image: "/clients_site/repechage.png",
    name: "Repechage.com",
    review:
      '"We needed a website that could handle our growing business, and Tech Integrations did a great job. The site is easy to use, loads fast, and works well on all devices."',
    website: "repechage.com",
  },
  {
    image: "/clients_site/solmo.png",
    name: "SolmoParis.com",
    review:
      '"Ahmad Saeed and his team made a website that truly represents our brand. The design is elegant, and the shopping experience is smooth for our customers."',
    website: "solmoparis.com",
  },
  {
    image: "/clients_site/coreelle.png",
    name: "Coreelle.com",
    review:
      '"Tech Integrations built us a website that is not only beautiful but also very functional. They took care of every detail, from design to making sure the site runs fast."',
    website: "coreelle.com",
  },
  {
    image: "/clients_site/behno.png",
    name: "Behno.com",
    review: "Tech Integrations provided us with a seamless and modern website. Their expertise in development ensured a smooth user experience and a visually appealing design.",
    website: "behno.com",
  }
];

export default function FeaturedPortfolioslider() {
  return (
    <div className="slider-container">
      <Swiper spaceBetween={30}
        centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".slider-container .right",
          prevEl: ".slider-container .left",
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]} className="slide">
        {reviews.map((client, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <Image className="has__margin" width={1280} height={980} src={client.image} alt={client.name} />
            <h3 className="client-name has__margin">{client.name}</h3>
            <p className="client-review has__margin">{client.review}</p>
            <span className="client-website">{client.website}</span>
          </SwiperSlide>
        ))}
      </Swiper>
      <span className="left navigation">
        <MoveLeft />
      </span>
      <span className="right navigation">
        <MoveRight />
      </span>
    </div>
  );
}