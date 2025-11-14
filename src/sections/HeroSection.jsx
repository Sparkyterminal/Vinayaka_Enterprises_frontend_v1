/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center">
  {/* Background video with faded effect */}
  <video
    className="absolute inset-0 w-full h-full object-cover z-0 opacity-80" 
    src="/assets/Herovideo.webm"
    autoPlay
    loop
    muted
    playsInline
  />
  
  {/* Black overlay with opacity to darken video */}
  <div className="absolute inset-0 bg-black opacity-60 z-10" />
  
  {/* Content above overlay */}
  <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 w-full">
    <motion.h1
      className="text-blue-500 font-serif text-4xl md:text-4xl lg:text-5xl font-extrabold mb-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      ELEVATE YOUR EVENTS WITH <br></br> VINAYAKA ENTERPRISES
    </motion.h1>
    <motion.p
      className="text-white text-4xl md:text-4xl font-light"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
    >
      Your Partner for Successful Event Management
    </motion.p>
  </div>
</section>

  );
};

export default HeroSection;