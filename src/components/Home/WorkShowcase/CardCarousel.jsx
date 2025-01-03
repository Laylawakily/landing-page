import React, { useState, useEffect } from "react";
import { cards } from "@/lib/data";
import CardDots from "./CardDots";
import AnimatedVisibleCards from "@/components/Animation/AnimatedVisibleCards";

export default function CardCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if the screen is mobile
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 425); // Adjust the breakpoint as needed
    };

    // Initial check
    checkIfMobile();

    // Event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        setDirection("right");
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
      } else if (e.key === "ArrowLeft") {
        setDirection("left");
        setCurrentIndex(
          (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Determine visible cards based on screen size
  const visibleCards = isMobile
    ? [cards[currentIndex % cards.length]]
    : [
        cards[currentIndex % cards.length],
        cards[(currentIndex + 1) % cards.length],
        cards[(currentIndex + 2) % cards.length],
      ];

  return (
    <div className="bg-white h-full">
      <div
        className={`relative w-full  mx-auto overflow-hidden  flex items-center justify-center`} 
      >
        {/* Cards */}
        <div className="flex transition-all duration-500 ease-in-out">
          {visibleCards.map((card, index) => (
            <AnimatedVisibleCards
              bg={card.bg}
              direction={direction === "right"}
              key={card.id}
              index={index}
              isMobile={isMobile}
            >
              {/* Cards details */}
              <div className="flex flex-row-reverse  md:flex-col justify-between items-center">
                {index === 1 && !isMobile && (
                  <img
                    src={card.img}
                    alt="Card Image"
                    className="lg:w-16 lg:h-16 md:ml-32 lg:ml-20 w-10 h-10"
                  />
                )}
                <div className="lg:h-32 flex flex-col lg:space-y-7">
                  <h3 className="lg:text-ms text-xs text-gray-500">
                    {card.subtitle}
                  </h3>
                  <h1 className="lg:text-2xl text-sm w-52 font-bold text-black">
                    {card.title}
                  </h1>
                </div>
              </div>

              {/* Card image */}
              <div
                className={`w-full bg-deepTeal mt-4 ${
                  isMobile ? "bg-deepTeal  w-64  h-60" : "lg:h-60 w-auto h-44"
                } `}
              ></div>
            </AnimatedVisibleCards>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <CardDots
        cards={cards}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </div>
  );
}