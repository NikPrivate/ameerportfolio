import { useRef } from "react";
import About from "./components/About";
import AnimatedBackground from "./components/AnimatedBackground";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Journey from "./components/Journey";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Copyright from "./components/Copyright";
import MobileNav from "./components/MobileNav";

function App() {
  //create refs for each section

  const aboutRef = useRef(null);
  const homeRef = useRef(null);
  const journeyRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>
      <AnimatedBackground />
      <div className="xl:block hidden">
        <Nav refs={{ aboutRef, homeRef, journeyRef, skillsRef, contactRef }} />
      </div>
      <div className="xl:hidden block">
        <MobileNav
          refs={{ aboutRef, homeRef, journeyRef, skillsRef, contactRef }}
        />
      </div>
      <div ref={homeRef}>
        <Intro />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={journeyRef}>
        <Journey />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <div>
        <Copyright refs={homeRef} />
      </div>
    </div>
  );
}

export default App;
