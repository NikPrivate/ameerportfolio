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
              className={`text-2xl cursor-pointer ${
                scrolled ? "text-black" : "text-white"
              }`}
            />
          </SheetTrigger>
          <SheetContent>
            <div className="pl-10 space-y-6 mt-[80px] pr-10">
              <div>
                <SheetClose asChild>
                  <button
                    className="text-2xl font-sans font-bold hover:text-blue-500 cursor-pointer border rounded border-black py-1 w-full text-start pl-2"
                    onClick={() => scrollToSection(homeRef)}
                  >
                    Home
                  </button>
                </SheetClose>
              </div>
              <div>
                <SheetClose asChild>
                  <button
                    className="text-2xl font-sans font-bold hover:text-blue-500 cursor-pointer border rounded border-black py-1 w-full text-start pl-2"
                    onClick={() => scrollToSection(aboutRef)}
                  >
                    About
                  </button>
                </SheetClose>
              </div>
              <div>
                <SheetClose asChild>
                  <button
                    className="text-2xl font-sans font-bold hover:text-blue-500 cursor-pointer border rounded border-black py-1 w-full text-start pl-2"
                    onClick={() => scrollToSection(journeyRef)}
                  >
                    Education
                  </button>
                </SheetClose>
              </div>
              <div>
                <SheetClose asChild>
                  <button
                    className="text-2xl font-sans font-bold hover:text-blue-500 cursor-pointer border rounded border-black py-1 w-full text-start pl-2"
                    onClick={() => scrollToSection(skillsRef)}
                  >
                    Skills
                  </button>
                </SheetClose>
              </div>
              <div className="flex justify-end">
                <SheetClose asChild>
                  <button
                    className="text-lg font-sans font-semibold bg-black text-white cursor-pointer hover:opacity-80 border rounded py-1 px-2"
                    onClick={() => scrollToSection(ContactRef)}
                  >
                    Contact Me
                  </button>
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default MobileNav;
