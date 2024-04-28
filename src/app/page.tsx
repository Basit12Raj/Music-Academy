import FeaturedCources from "@/components/FeaturedCources";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MusicSchoolTestimonial from "@/components/Testimonialcards";
import TextGenerate from "@/components/TextGenerate";
import WhyChooseUs from "@/components/WhyChooseUs";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructors from "@/components/Instructors";

// import { useEffect } from "react";
export default function Home() {
  return (

    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* <div className="text-2xl text-center font-bold text-white">ABK7</div> */}
      <HeroSection/>
      {/* <TextGenerate/> */}
      <FeaturedCources/>
      <WhyChooseUs/>
      <MusicSchoolTestimonial/>
      <UpcomingWebinars/>
      <Instructors/>
      <Footer/>
    </main>
  );
}
