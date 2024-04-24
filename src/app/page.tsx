import FeaturedCources from "@/components/FeaturedCources";
import HeroSection from "@/components/HeroSection";
import MusicSchoolTestimonial from "@/components/Testimonialcards";
import WhyChooseUs from "@/components/WhyChooseUs";

// import { useEffect } from "react";
export default function Home() {
  return (

    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* <div className="text-2xl text-center font-bold text-white">ABK7</div> */}
      <HeroSection/>
      <FeaturedCources/>
      <WhyChooseUs/>
      <MusicSchoolTestimonial/>
    </main>
  );
}
