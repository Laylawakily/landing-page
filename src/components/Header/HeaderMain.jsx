import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import AnimatedIcon from "@/components/Animation/AnimatedIcon";
import { headerItemLink } from "@/lib/data";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const RenderLink = ({ item }) => {
  return (
    <li className="text-sm list-none uppercase text-white bg-gradient-custom bg-clip-text text-transparent hover:bg-gradient-custom hover:text-clip-text hover:text-transparent">
      <Link href={item.href}>{item.item}</Link>
    </li>
  );
};

export default function HeaderMain() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gradient-to-r font-brands from-charcoalBlack via-gray-800 to-black text-white">
      <header className="py-10 flex flex-wrap justify-around items-center relative px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <img
          src="/images/Logo.png"
          alt="logo"
          className="w-28 object-contain"
        />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          {headerItemLink?.map((item, index) => (
            <RenderLink key={index} item={item} />
          ))}
        </nav>


        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="md:hidden absolute top-28 left-0 right-0 bg-charcoalBlack z-50">
            <ul className="flex flex-col   items-center gap-4 py-4">
              {headerItemLink?.map((item, index) => (
                <RenderLink key={index} item={item} />
              ))}
            </ul>
          </nav>
        )}
        

        {/* Right Section (Button and Icons) */}
        <div className="flex items-center gap-8 mt-4 md:mt-0">
          <button className="px-5 py-3 bg-gradient-custom rounded-full text-black text-sm flex gap-2 items-center">
            Let's Chat{" "}
            <AnimatedIcon>
              {" "}
              <FaLongArrowAltRight />
            </AnimatedIcon>
          </button>


        {/* Mobile Navigation Toggle */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

          {/* The right icon of header */}
          <div className="lg:grid lg:grid-cols-2 hidden gap-4 place-content-center">
            <div className="w-1 h-1 rounded-full bg-white"></div>
            <div className="w-1 h-1 rounded-full bg-white"></div>
            <div className="w-1 h-1 rounded-full bg-white"></div>
            <div className="w-1 h-1 rounded-full bg-white"></div>
          </div>
        </div>
      </header>
    </div>
  );
}