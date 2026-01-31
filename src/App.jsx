import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Project from "./components/Project"
import Services from "./components/Services"
import "./App.css";
import Certificate from "./components/Certificate"
import Footer from "./components/Footer"

function App() {
  
  return (
    <>
    {/* <div className="bg-[#0F172A]"> */}
    <div className="min-h-screen bg-gradient-to-r from-[#192c57] via-[#280a3c] to-[#163362] 
                bg-[length:400%_400%] animate-gradient">
      <Navbar/>
      <Home/>
      <About/>
      <Project/>
      <Services/>
      <Certificate/>
      <Contact/>
      <Footer/>
    </div>
    </>
  )
}

export default App
