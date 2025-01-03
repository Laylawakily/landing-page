import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { categories } from "@/lib/data";
import AnimatedAccordion from "@/components/Animation/AnimatedAccordion";

import Description from "./Description";

export default function AccordionMain() {
  const [activeCard, setActiveCard] = useState(0);

  const handleCardClick = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div>
        {/* Accordion section */}
        {categories.map((card, index) => (
          <div key={index} className="border-b  py-6 pr-8">
            <div className="flex flex-row justify-between">
              {/* Accordion header (Title) */}
              {activeCard === index ? (
                <div>
                  <div className="flex gap-4">
                    <h1 className="lg:text-4xl text-lg lg:pl-0 pl-5 font-medium bg-gradient-custom bg-clip-text text-transparent">
                      {card.number}
                    </h1>
                    <h1 className="lg:text-4xl text-lg lg:pl-0 pl-5 font-medium bg-gradient-custom bg-clip-text text-transparent">
                      {card.title}
                    </h1>
                  </div>
                </div>
              ) : (
                <div className="flex justify-between items-center">
                  <div className="lg:gap-8 gap-4 flex items-center cursor-pointer">
                    <h1 className="lg:text-2xl text-lg lg:pl-0 pl-5 text-gray-400 font-medium">
                      {card.number}
                    </h1>
                    <h1 className="lg:text-2xl text-lg lg:pl-0 pl-5 text-gray-400 font-medium">
                      {card.title}
                    </h1>
                  </div>
                  
                </div>
              )}
              {/* Accordion Icon */}
              <AnimatedAccordion
                src={card.image}
                alt={card.title}
                isOpen={activeCard === index}
                handleCardClick={() => handleCardClick(index)}
              />
            </div>

            {/* Accordion content */}
            <AnimatePresence>
              {activeCard === index && (
                <motion.div
                  className="flex items-center gap-6 mt-4"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                >
                  <Description  TitleDescription= {card.TitleDescription} description={card.description}/>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
