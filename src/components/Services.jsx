"use client";

import React from "react";
import { AppWindow, ChartArea, HandCoins, IdCard, TabletSmartphone, Volume2 } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperNavigations from "./SwiperNavigations";

export default function ServicesSection() {
  const services = [
    { id: 4, title: "Shopify Store Development", description: "Optimize your retail operations with our advanced POS solutions. We provide intuitive systems that streamline sales processes and inventory management.", icon: <HandCoins /> },
    { id: 1, title: "Digital Marketing", description: "Maximize your brand's reach with data-driven digital marketing. We specialize in social media, PPC, and content marketing to drive engagement and conversions.", icon: <Volume2 /> },
    { id: 2, title: "SEO Optimization", description: "Boost your online visibility with our expert SEO strategies. From keyword research to technical SEO, we help your website rank higher and attract more organic traffic.", icon: <ChartArea /> },
    { id: 3, title: "E-Commerce Integration", description: "Enhance your online store with seamless payment gateway integrations. We ensure secure and efficient transactions to improve customer experience.", icon: <IdCard /> },
    { id: 5, title: "Shopify App Development", description: "Enhance your online store with seamless payment gateway integrations. We ensure secure and efficient transactions to improve customer experience.", icon: <AppWindow /> },
    { id: 6, title: "Android App Development", description: "Enhance your online store with seamless payment gateway integrations. We ensure secure and efficient transactions to improve customer experience.", icon: <TabletSmartphone /> },
  ];

  return (
    <section className="services-section is__section has__gap">
      <div className="section-header text__center has__margin">
        <h2 className="is__heading text__thin has__margin">Discover Our <strong className="highlight">Service</strong></h2>
        <p>We love & know what we are do!</p>
      </div>

      <div className="services-wrapper has__flex container has__gap">
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 3 } 
          }}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={{
            nextEl: ".services-wrapper .right",
            prevEl: ".services-wrapper .left",
          }}          
          modules={[Autoplay, Pagination,Navigation]}
          className="slide"
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <div className="service-card has__flex flex__column items__center has__gap">
                <div className="service-icon has__flex justify__center align__center">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description font__sm">{service.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <SwiperNavigations/>
      </div>
    </section>
  );
}