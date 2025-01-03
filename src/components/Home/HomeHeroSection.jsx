import HomeContent from "./HomeContent";

export default function HomeHeroSection() {
  return (
    <div className="h-auto pb-10 lg:pl-20 lg:p-10 pt-10 px-10">
        <div className="flex justify-center items-center">
          <div className="bg-deepTeal lg:mr-20 lg:h-48 lg:w-[37rem] w-[36rem]  h-32 rounded-full"></div>
        </div>
        <div>
          <img
            src="/images/map.png"
            alt="map"
            className="lg:absolute lg:flex hidden md:flex md:absolute md:w-52 md:top-52 right-10 top-64 lg:w-[20rem]"
          />
        </div>
        <HomeContent/>

        {/*  section dots */}
        <div className="lg:flex justify-center hidden  items-center gap-4 mt-16">
          <span className="w-2 h-2 rounded-full bg-white"></span>
          <span className="w-2 h-2 rounded-full bg-charcoalBlack border"></span>
          <span className="w-2 h-2 rounded-full bg-white"></span>
        </div>
      </div>
  )
}
