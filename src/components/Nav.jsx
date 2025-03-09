import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = ({ refs }) => {
  const { aboutRef, homeRef } = refs;
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleSroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleSroll);
    return () => window.removeEventListener("scroll", handleSroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-16 text-white flex items-center justify-between xl:px-[150px] lg:px-[120px] md:px-[120px] px-[40px] z-50 ${
        scrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <h1
        className={`lg:text-3xl md:text-2xl text-2xl font-sans font-semibold ${
          scrolled ? "text-black" : "text-white"
        }`}
      >
        Ameer.
      </h1>
      <div className="flex xl:space-x-10 xl:block hidden">
        <button
          onClick={() => scrollToSection(homeRef)}
          className={`text-lg hover:underline font-semibold cursor-pointer ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection(aboutRef)}
          className={`text-lg hover:underline font-semibold cursor-pointer ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          About
        </button>
        <button
          className={`text-lg hover:underline font-semibold cursor-pointer ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          Skills
        </button>
        <button
          className={`text-lg hover:underline font-semibold cursor-pointer ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          Contact
        </button>
      </div>
      <div className="xl:hidden block">
        <GiHamburgerMenu className="text-2xl cursor-pointer" />
      </div>
    </nav>
  );
};

export default Nav;
