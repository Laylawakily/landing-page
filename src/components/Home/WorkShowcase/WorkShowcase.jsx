import React from "react";
import CardCarousel from "./CardCarousel";

const WorkShowcase = () => {
  return (
    <div className="h-screen">
      <section className="w-full bg-white justify-between lg:items-end p-10  lg:flex-row  flex-col  flex  lg:pt-40 lg:px-20">
        <div>
          <p className="text-xs text-black py-3 lg:py-5">Our Projects</p>
          <h1 className="lg:text-5xl md:text-4xl py-3 text-2xl lg:max-w-2xl uppercase font-bold text-black">
            Our Works
            <br />
            Speaks for itself
          </h1>
        </div>
        <p className="max-w-[550px] text-xs lg:text-lg h-fit text-black border-l-8 pl-6 border-GoldenSun">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal.
        </p>
      </section>
      <section className="bg-white lg:py-10">
        <CardCarousel />
      </section>
    </div>
  );
};

export default WorkShowcase;
