import { motion } from "framer-motion";

export default function AnimatedCard({ description }) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      className="mt-4 lg:text-lg text-xs text-gray-200 "
    >
      {description}
    </motion.div>
  );
}
