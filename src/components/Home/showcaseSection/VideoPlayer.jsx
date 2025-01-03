import { useState, useRef } from "react";
import { CiPause1, CiPlay1 } from "react-icons/ci";

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className=" z-30 top-10 right-0 h-auto  lg:w-[46rem] w-full flex lg:absolute  md:absolute md:w-[24rem] ">
      <div className="relative w-full h-full bg-charcoalBlack flex justify-center items-center">
        {/* Video section */}
        <video ref={videoRef} className="w-full h-full">
          <source src="/images/team.mp4" />
          Your browser does not support the video tag...
        </video>

        {/* Stratified Customers Section */}
        <div className="absolute  lg:-left-20  lg:top-20 md:top-5 right-0 top-0 flex flex-col justify-center items-center bg-charcoalBlack md:rounded-tl-[1.5rem] lg:rounded-tl-[3rem] lg:rounded-bl-[3rem] lg:w-52 w-32 rounded-bl-[1.5rem]  md:w-24 md:-left-6 md:h-10   lg:h-20 lg:top-162">
          <h1 className="font-extrabold bg-gradient-custom bg-clip-text text-transparent text-xl lg:text-4xl  md:text-xl ">
            120k+
          </h1>
          <p className="lg:text-xs md:text-[0.40rem] text-[0.60rem]">Stratified Customers</p>
        </div>

        {/* Custom Play/Pause Button */}
        <button
          className="absolute flex justify-center items-center bg-gradient-custom outline-none text-white lg:p-6 p-3 rounded-full opacity-70 hover:opacity-100  "
          onClick={togglePlayPause}
        >
          {isPlaying ? (
            <CiPause1 className="lg:text-3xl text-xl " />
          ) : (
            <CiPlay1    className="lg:text-3xl text-xl "/>
          )}
        </button>
      </div>
    </div>
  );
}
