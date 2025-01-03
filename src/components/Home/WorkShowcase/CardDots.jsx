import React from "react";

export default function CardDots({ cards, currentIndex, setCurrentIndex }) {
  return (
    <div className="absolute  left-1/2 transform -translate-x-1/2 flex space-x-2">
      {cards.map((_, index) => (
        <div
          key={index}
          className={
            currentIndex === index
              ? "border border-coralPink w-3 h-3 bg-white rounded-full p-3 flex justify-center items-center"
              : ""
          }
        >
          <button
            className={`w-1 h-1 rounded-full ${
              currentIndex === index
                ? "bg-coralPink border-4 border-coralPink"
                : "bg-black"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        </div>
      ))}
    </div>
  );
}
