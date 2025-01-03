import React from "react";
import { motion } from "framer-motion";

export default function AnimatedAccordion({ src, alt, isOpen, handleCardClick }) {
  return (
    <motion.img
      src={src}
      alt={alt}
      className="lg:w-16 lg:h-16 w-10 h-7=10 cursor-pointer"
      animate={{ rotate: isOpen ? 180 : 0 }} 
      transition={{ duration: 0.5, ease: "linear" }}
      onClick={handleCardClick} 
    />
  );
}


                  