import AnimatedTagScroll from "@/components/Animation/AnimatedTagScroll";
import React from "react";

export default function TagScroll() {
  return (
    <div className="lg:h-52 h-32 flex items-center bg-white overflow-hidden relative">
      <AnimatedTagScroll animate={{ x:["0%", "100%"] }} />
      <AnimatedTagScroll animate={{ x: ["-100%", "0%"]}} />

    </div>
  );
}
