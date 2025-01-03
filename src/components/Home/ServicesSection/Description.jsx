import AnimatedCard from "@/components/Animation/AnimatedCard";
import { motion, AnimatePresence } from "framer-motion";
export default function Description({description,TitleDescription}) {
  return (
    <div className="flex lg:flex-row md:flex-row flex-col md:space-x-3 lg:space-x-4 lg:px-0 px-5 ">
     {/* Left Section (Image Placeholder) */}
     <motion.div
     className="bg-deepTeal lg:h-52 md:h-32  md:w-1/2  h-16  flex rounded-full lg:w-1/2 border border-GoldenSun"
     initial={{ scale: 0.8, opacity: 0 }}
     animate={{ scale: 1, opacity: 1 }}
     transition={{ duration: 0.4 }}
   ></motion.div>

   {/* Right Section (Description) */}
   <div className="lg:w-1/2 md:w-1/2">
     <h1 className="uppercase lg:text-xl text-xs my-3 bg-gradient-custom bg-clip-text text-transparent font-extrabold">
       {TitleDescription}
     </h1>
     <AnimatedCard description={description} />
   </div>
   </div>
  )
}
