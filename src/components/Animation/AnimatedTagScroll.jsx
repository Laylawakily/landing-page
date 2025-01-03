import { motion } from "framer-motion";

export default function AnimatedTagScroll({ animate }) {
  return (
    <motion.img
      src="/images/tag-website.png"
      alt="Show case"
      className="absolute"
      animate={animate}
      transition={{
        repeat: Infinity,
        duration: 20,
        ease: "linear",
      }}
    ></motion.img>
  );
}
