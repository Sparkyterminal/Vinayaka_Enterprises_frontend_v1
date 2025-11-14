/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Header from "../components/Header";
import HeroSection from "../sections/HeroSection";
import Aboutus from "../sections/Aboutus";
import OurApproach from "../sections/OurApproach";
import ClientTestimonials from "../sections/ClientTestimonials";
import NotableEvents from "../sections/NotableEvents";
import Footer from "../components/Footer";
import WhyChooseUs from "../sections/WhyChooseUs";
import OurServices from "../sections/OurServices";

// Optimized Animated Section Wrapper Component
const AnimatedSection = ({ children, id, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false, // Changed to false so animations can retrigger
    margin: "0px 0px -150px 0px", // Better threshold control
    amount: 0.1, // Reduced threshold for earlier trigger
  });

  return (
    <motion.div
      ref={ref}
      id={id}
      className={className}
      initial={{ opacity: 0, y: 30 }} // Reduced initial y offset
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.3, // Slightly faster animation
        ease: "easeOut", // Simpler easing for better performance
        opacity: { duration: 0.2 }, // Faster opacity transition
      }}
      style={{
        willChange: isInView ? "auto" : "transform, opacity", // Performance optimization
      }}
    >
      {children}
    </motion.div>
  );
};

const HomePage = () => {
  return (
    <div className="relative overflow-hidden">
      <Header />

      {/* Hero Section - No animation wrapper as it should be visible immediately */}
      <div id="home">
        <HeroSection />
      </div>

      {/* About Us Section */}
      <AnimatedSection id="about">
        <Aboutus />
      </AnimatedSection>

      {/* Our Approach Section */}
      <AnimatedSection id="Approach">
        <OurApproach />
      </AnimatedSection>

      {/* Our Services Section */}
      <AnimatedSection id="services">
        <OurServices />
      </AnimatedSection>

      {/* Why Choose Us Section */}
      <AnimatedSection id="choose">
        <WhyChooseUs />
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection id="testimonials">
        <ClientTestimonials />
      </AnimatedSection>

      {/* Notable Events Section */}
      <AnimatedSection id="events">
        <NotableEvents />
      </AnimatedSection>

      {/* Footer - Always visible, has its own animations */}
      <Footer />
    </div>
  );
};

export default HomePage;