import HeroDoctorsSection from "@/components/spandana/hero-doctors-section";
import HeroSection from "@/components/spandana/hero-section";
import HospitalInfoSection from "@/components/spandana/hospital-info-section";
import PartnerLogosSection from "@/components/spandana/partner-logos-section";
import ServicesSection from "@/components/spandana/services-section";
import StatsSection from "@/components/spandana/stats-section";
import TestimonialsSection from "@/components/spandana/testimonials-section";
import { Separator } from "@/components/ui/separator";
import React from "react";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />

      <Separator className="my-4 mt-24" />

      <HospitalInfoSection />
      <Separator className="my-4" />
      <ServicesSection />
      <Separator className="my-4" />

      <TestimonialsSection />

      <StatsSection />
      <HeroDoctorsSection />
      <PartnerLogosSection />
    </div>
  );
};

export default LandingPage;
