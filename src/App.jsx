import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import "./App.css";
import Certificate from "./components/Certificate";
import Skills from "./components/Skills";

import SocialSidebar from "./components/SocialSidebar";
import ResumeButton from "./components/ResumeButton";
import Reveal from "./components/Reveal";

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white relative overflow-hidden">
      {/* background layers */}
      <div className="aurora-bg"></div>
      <div className="animated-particles"></div>
      <div className="mouse-light"></div>

      {/* content */}
      <div className="relative z-10">
        <Navbar />
          <SocialSidebar />
          <ResumeButton />
          
        <Reveal>
          <Home />
        </Reveal>
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Project />
        </Reveal>
        <Reveal>
          <Skills />
        </Reveal>
        <Reveal>
          <Certificate />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </div>
    </div>
  );
}

export default App;
