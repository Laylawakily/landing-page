import React from "react";
import VideoPlayer from "./VideoPlayer";
import { FaLongArrowAltRight } from "react-icons/fa";

import AnimatedIcon from "@/components/Animation/AnimatedIcon";
import TagScroll from "./TagScroll";

export default function ShowCaseSection() {
  return (
    <dvi className="h-auto relative">
      <div className="w-auto bg-white flex h-auto lg:flex-row  flex-col ">
        {/* Description section */}
        <section className="bg-gradient-custom flex   w-full lg:h-[27rem] h-auto flex-col lg:pl-24 lg:pt-20 p-5">
          <div className="lg:w-1/2 w-auto lg:space-y-5 space-y-3  flex flex-col justify-center items-start">
          <h1 className="flex uppercase text-charcoalBlack lg:text-3xl font-bold lg:w-72 ">
          WE Offer
              <br />
              Best Services our customer
          </h1>
            <div className="space-x-3 flex lg:flex-row md:flex-row  flex-col justify-center items-start lg:items-center">
              <div className="relative flex justify-center items-center">
                <img
                  src="/images/text-around.png"
                  className="lg:w-28 lg:h-28 w-14 h-14"
                  alt="text-around"
                />
                <img
                  src="/images/image.png"
                  className="rounded-full absolute top-0 lg:w-20  lg:h-20 w-10 h-10 translate-y-2 lg:translate-y-4"
                  alt="image-AI"
                />
              </div>
              <p className="text-charcoalBlack leading-5 text-xs max-w-72">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal.
              </p>
            </div>
            <button className="bg-charcoalBlack  border-charcoalBlack border hover:border-charcoalBlack hover:border hover:text-charcoalBlack hover:bg-gradient-custom flex flex-row justify-between items-center text-white  text-xs lg:w-28 lg:px-3 px-2 py-2 lg:py-3 rounded-3xl   ">
              Know More{" "}
              <AnimatedIcon>
                {" "}
                <FaLongArrowAltRight />
              </AnimatedIcon>
            </button>
          </div>
        </section>

        {/* video section */}
        <section>
          <VideoPlayer />
        </section>
      </div>
      <TagScroll />
    </dvi>
  );
}
