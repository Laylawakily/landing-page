import React from "react";
import { motion } from "framer-motion";

export default function AnimatedIcon ({ children }) {
  return (
    <motion.div
      style={{ display: "flex", alignItems: "center", position: "relative" }}
      animate={{
        x: [0, 6],
        opacity: [1, 0.8],
      }}
      transition={{
        repeat: Infinity,
        duration: 1.3,
        ease: "backInOut",
      }}>
      {children}
    </motion.div>
  );
};
