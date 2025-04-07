import { useEffect, useState } from "react";

const Nav = ({ refs }) => {
  const { aboutRef, homeRef, journeyRef, skillsRef, contactRef } = refs;
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
      <div className="flex xl:space-x-7">
        <button
          onClick={() => scrollToSection(homeRef)}
          className={`text-lg hover:text-blue-500 hover:underline font-semibold cursor-pointer ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection(aboutRef)}
          className={`text-lg hover:text-blue-500 hover:underline font-semibold cursor-pointer ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          About
        </button>
        <button
          onClick={() => scrollToSection(journeyRef)}
          className={`text-lg hover:text-blue-500 hover:underline font-semibold cursor-pointer ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          Education
        </button>
        <button
          onClick={() => scrollToSection(skillsRef)}
          className={`text-lg hover:text-blue-500 hover:underline font-semibold cursor-pointer ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          Skills
        </button>
        <button
          onClick={() => scrollToSection(contactRef)}
          className={`text-lg hover:text-blue-500 hover:underline font-semibold cursor-pointer ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Nav;
