import HeroSection from "@/components/Herosection";
import Whoarewe from "@/components/Whoarewe";
import ServicesSection from "@/components/Services";
import FeaturedPortfolio from "@/components/FeaturedPortfolio";
import BannerSection from "@/components/banner";
import PortfolioSection from "@/components/Portfolio";
import TestimonialSlider from "@/components/ClientReviews";
import DevelopmentApproach from "@/components/DevelopmentApproach";
import TimelineSection from "@/components/Timeline";
import ImageWithtext from "@/components/Imagewithtext";
import WhatsappWidget from "@/components/WhatsappWidget";
import CounterSection from "@/components/CounterSection";
import Blog from "@/components/Blog";

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

export default function Home() {
  return (
    <>
      <ImageWithtext />
      <CounterSection />
      <ServicesSection />
      <Whoarewe />
      <HeroSection />
      <DevelopmentApproach />
      <TimelineSection />
      <FeaturedPortfolio />
      <TestimonialSlider testimonials={clientsData} />
      <BannerSection
        image="/teamwork2.jpg"
        heading="We Have Expertise To Build Customization Software From Idea"
        subheading="Bring Your Ideas to Reality"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
        mattis, pulvinar dapibus leo."
        button="Get in Touch"
        link="/contact"
      />
      <PortfolioSection limit={6} />
      <WhatsappWidget />
    </>
  );
}
