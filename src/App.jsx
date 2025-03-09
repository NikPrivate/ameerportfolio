import { useRef } from "react";
import About from "./components/About";
import AnimatedBackground from "./components/AnimatedBackground";
import Intro from "./components/Intro";
import Nav from "./components/Nav";

function App() {
  //create refs for each section

  const aboutRef = useRef(null);
  const homeRef = useRef(null);

  return (
    <div>
      <AnimatedBackground />
      <div>
        <Nav refs={{ aboutRef, homeRef }} />
      </div>
      <div ref={homeRef}>
        <Intro />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
    </div>
  );
}

export default App;
