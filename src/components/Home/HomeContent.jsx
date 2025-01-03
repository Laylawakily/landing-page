import { FaLongArrowAltRight } from "react-icons/fa";
import AnimatedIcon from "../Animation/AnimatedIcon";
import { starScore, userAvatar } from "@/lib/data";

export const StarScore = ({ itemScore }) => {
  return <img src={itemScore.imageSrc} alt={itemScore.imageSrc} />;
};

export const UserAvatar = ({ userItem }) => {
  return (
    <span className="w-8 h-8 bg-teal-700 border border-white rounded-full">
      {userItem.item}
    </span>
  );
};

export default function HomeContent() {
  return (
    <div className="max-w-3xl flex flex-col lg:pt-0 pt-10 lg:gap-4">
      <h1 className="lg:text-6xl text-3xl md:text-4xl font-bold lg:leading-[70px]">
        TOUCH.
        <br />
        <span className=" text-GoldenSun bg-gradient-custom bg-clip-text text-transparent">
          DIGITAL AGENCY
        </span>
      </h1>
      <p className="text-xs lg:max-w-[37rem] md:max-w-[30rem]">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English.
      </p>

      <div className="flex lg:flex-row flex-col md:flex-row items-center gap-8 mt-6">
        <button className="w-36 px-4 py-3 bg-gradient-custom rounded-full text-black text-sm flex gap-1 items-center">
          Get Started
          <AnimatedIcon>
            <FaLongArrowAltRight />
          </AnimatedIcon>
        </button>

        <div className="flex space-x-[-10px]">
          {userAvatar.map((item, i) => (
            <UserAvatar key={i} userItem={item}/>
          ))}
        </div>


        <div className="flex gap-1 items-center">
          {starScore.map((itemScore, index) => (
            <StarScore key={index} itemScore={itemScore} />
          ))}
        </div>
      </div>
    </div>
  );
}
