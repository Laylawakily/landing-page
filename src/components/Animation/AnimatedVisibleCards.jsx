import React from "react";
import { motion } from "framer-motion";
export default function AnimatedVisibleCards({
  children,
  bg,
  direction,
  index,
}) {
  return (
    <motion.div
      className={`lg:w-96 p-4 ${bg} bg-gray-100  flex flex-col items-start justify-center ${
        index === 1 ? "bg-gradient-custom" : ""
      }`}
      initial={{ opacity: 0, x: direction ? 100 : -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: direction ? -100 : 100 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}
