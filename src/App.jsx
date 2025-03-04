import About from "./components/About";
import AnimatedBackground from "./components/AnimatedBackground";
import Intro from "./components/Intro";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <AnimatedBackground />
      <div className="py-10 px-[150px]">
        <Nav />
      </div>
      <div className="px-[150px]">
        <Intro />
      </div>
      <div>
        <About />
      </div>
    </div>
  );
}

export default App;
