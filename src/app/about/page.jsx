import TestimonialSlider from '@/components/ClientReviews';
import Newsletter from '@/components/Newsletter';
import PricingTable from '@/components/PricingTable';
import ServicesSection from '@/components/Services';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const clientsData = [
    {
        name: "Imran Khan",
        role: "Software Engineer",
        image: "/users/user2.jpg",
        rating: 5,
        review:
            "Without any doubt, I recommend Alcaline Solutions as one of the best web design and digital marketing agencies.",
    },
    {
        name: "Romeena De Silva",
        role: "M.Usman",
        image: "/users/user3.jpg",
        rating: 5,
        review:
            "One of the best agencies I’ve come across so far. Wouldn’t hesitate to introduce their work to someone else.",
    },
    {
        name: "Romeena De Silva",
        role: "Janet Cosmetics",
        image: "/users/user1.jpg",
        rating: 5,
        review:
            "One of the best agencies I’ve come across so far. Wouldn’t hesitate to introduce their work to someone else.",
    },
];

let tables = [
    {
        name: "Basic",
        subheading: "For small businesses",
        price: 300,
        serviceOverview: "Up to 10 products store",
        serviceDetails: [
            "Theme customizations",
            "Home Page with High Conversion Rate",
            "User-Friendly Collection and Product Pages",
            "3 Static pages",
            "3rd Party Apps Integrations (Up to 2)",
            "Responsive Design",
            "Quality Assurance",
            "Payments & Shipping configurations"
        ],
        color: "#636387"
    },
    {
        name: "Mid-level",
        subheading: "For mid-level business",
        price: 550,
        serviceOverview: "Up to 40 products store",
        serviceDetails: [
            "All Basic plans +",
            "A custom sections",
            "Highly modern product page",
            "Metafields - Metaobjects data",
            "3rd Party Apps Integrations (Upto 5)",
            "Custom Templates",
            "Quality Assurance",
            "Payments & Shipping configurations"
        ],
        color: "#50668D"
    },
    {
        name: "Advanced",
        subheading: "For Larger stores",
        price: 900,
        serviceOverview: "Up to 100 products store",
        serviceDetails: [
            "All Mid-level +",
            "Custom Theme development",
            "Custom Product Templates",
            "Subscriptions Products",
            "Advanced level product forms",
            "Upsell features",
            "Quality Assurance",
            "Payments & Shipping configurations"
        ],
        color: "#B65F5F"
    }
  ];
  
  let tables2 = [
    {
        name: "Bronze",
        subheading: "15 Hours / Month",
        price: 300,
        serviceOverview: "/Month",
        serviceDetails: [
            "Theme customizations",
            "Custom sections",
            "Custom Product templates",
            "Custom Landing pages",
            "3rd Party Apps Integrations",
            "UI/UX Changes",
            "Speed Optimizations"
        ],
        color: "#D19C60"
    },
    {
        name: "Silver",
        subheading: "30 Hours / Month",
        price: 500,
        serviceOverview: "/Month",
        serviceDetails: [
            "Theme customizations",
            "Custom sections",
            "Custom Product templates",
            "Custom Landing pages",
            "3rd Party Apps Integrations",
            "UI/UX Changes",
            "Speed Optimizations"
        ],
        color: "#A0A0A0"
    },
    {
        name: "Gold",
        subheading: "50 Hours / Month",
        price: 700,
        serviceOverview: "/Month",
        serviceDetails: [
            "Theme customizations",
            "Custom sections",
            "Custom Product templates",
            "Custom Landing pages",
            "3rd Party Apps Integrations",
            "UI/UX Changes",
            "Speed Optimizations"
        ],
        color: "#E1C16E"
    }
  ];
  


function ImageWithtext() {
    return (
        <section className="imagewithtext is__section ">
            <div className="container has__flex">
                <div className="content has__flex flex__column justify__center has__gap">
                    <span className="highlight">TECH INTEGRATIONS STORY</span>
                    <h2 className="heading text__thin">
                        Our Vision: <span className="highlight">Successful </span> Business
                    </h2>
                    <p className="text">
                        Tech Integratoins isn’t your average website development company. Our focus is on helping connect all aspects of your business, not simply creating a website for you. We will help with your startup website or tech implementation. Our main work is to help startups launch their brand and vision, but we are not limited to that. We specialize in connecting and maintaining all of the moving pieces involved in running your website and technology. Because a startup website requires flexible and multiple types of setup, we offer all kinds of different services. See all of our services below Tech Integratoins is a global leader in technology and outsourcing solutions.
                        We provide enterprises with strategic insights on what lies ahead and help them transform and thrive in a changing world. We enable clients to stay ahead of the competition and the innovation curve. We service small, medium, and large enterprises for all their IT and IT-related needs. We have a special interest in working with start-ups. With the experience and knowledge we have, we can make it possible for new and budding business to meet their requirements at a low cost, without compromising on quality.
                    </p>
                    <Link className="button" href="/contact">
                        Get in touch!
                    </Link>
                </div>
                <div className="image">
                    <Image src="/download-2.png" alt="Team Collaboration" height={1024} width={1024} />
                </div>
            </div>
        </section>
    );
};

export default function page() {
    return (
        <>
            <ImageWithtext />
            <ServicesSection />
            <PricingTable heading="Ready to Launch Your New Store?" tables={tables} />
            <PricingTable heading="Already Have a Store? In Need of a Dedicated Developer?" tables={tables2} />
            <Newsletter />
            <TestimonialSlider testimonials={clientsData} />
        </>
    )
}
