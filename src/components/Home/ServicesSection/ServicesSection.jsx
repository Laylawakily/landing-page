import { renderButtons } from "@/lib/data";
import AccordionMain from "./AccordionMain";

const RenderButtons = ({ item }) => {
  return (
      <button
        className={`lg:px-10 px-3  lg:py-3 py-1 ${item.style} bg-white rounded-full text-black text-sm`}>
        {item.item}
      </button>
  );
};


export default function ServicesSection() {
  return (
    <div>
    <div className="w-full  bg-charcoalBlack text-white flex lg:justify-start justify-center items-center relative z-20 pb-32">
      <div className="flex lg:flex-row md:flex-row  flex-col items-start gap-16">
        <div className="relative w-auto lg:h-auto h-60">
          <img
            src="/images/bg-linear.png"
            alt="bg-linear"
            className=" w-[46rem]"
          />
          <div className="absolute top-0 left-0 z-50 pt-8 lg:pl-12 px-5">
            <h1 className="lg:my-2  font-bold text-black">Brilliant minds</h1>
            <h1 className="lg:text-5xl md:text-xl font-bold lg:my-4 text-black uppercase">Our Services</h1>
            <p className="max-w-md lg:text-lg lg:max-w-xl text-white md:text-black md:text-xs md:max-w-sm ">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal.
            </p>
          </div>
        </div>
      
        <div className="lg:flex md:flex-wrap md:flex lg:flex-wrap grid grid-cols-2 gap-2 pl-5  lg:w-[40rem] lg:gap-6 lg:px-4 md:pt-24  lg:pt-28">
        {renderButtons.map((item, index) => (
          <RenderButtons key={index} item={item} />
        ))}
        </div>
      </div>


      
    </div>
    <AccordionMain />
    </div>
  );
}
