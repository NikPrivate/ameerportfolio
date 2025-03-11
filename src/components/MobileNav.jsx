import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SheetClose } from "./ui/sheet";

const MobileNav = ({ refs }) => {
  const { aboutRef, homeRef, journeyRef, skillsRef, ContactRef } = refs;
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
    <div
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
      <div>
        <Sheet>
          <SheetTrigger>
            <GiHamburgerMenu
              className={`text-xl cursor-pointer ${
                scrolled ? "text-black" : "text-white"
              }`}
            />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-xl text-5xl font-sans font-bold">
                Ameer.
              </SheetTitle>
            </SheetHeader>
            <div className="pl-10 space-y-6">
              <SheetClose asChild>
                <button
                  className="text-3xl font-sans font-bold hover:text-blue-500 cursor-pointer"
                  onClick={() => scrollToSection(homeRef)}
                >
                  Home
                </button>
              </SheetClose>
              <SheetClose asChild>
                <button
                  className="text-3xl font-sans font-bold hover:text-blue-500 cursor-pointer"
                  onClick={() => scrollToSection(aboutRef)}
                >
                  About
                </button>
              </SheetClose>
              <SheetClose asChild>
                <button
                  className="text-3xl font-sans font-bold hover:text-blue-500 cursor-pointer"
                  onClick={() => scrollToSection(journeyRef)}
                >
                  Education
                </button>
              </SheetClose>
              <SheetClose asChild>
                <button
                  className="text-3xl font-sans font-bold hover:text-blue-500 cursor-pointer"
                  onClick={() => scrollToSection(skillsRef)}
                >
                  Skills
                </button>
              </SheetClose>
              <SheetClose asChild>
                <button
                  className="text-3xl font-sans font-bold hover:text-blue-500 cursor-pointer"
                  onClick={() => scrollToSection(ContactRef)}
                >
                  Contact
                </button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default MobileNav;
