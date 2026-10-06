import Footer from "./Components/Clients/Footer"
import Navbar from "./Components/Clients/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Components/Clients/Hero"
import About from "./Components/Clients/About"
import Expertise from "./Components/Clients/Expertise"
import Morocco from "./Components/Clients/Morocco"
import Projects from "./Components/Clients/Projects"
import Media from "./Components/Clients/Media"
import Contact from "./Components/Clients/Contact"

function App() {


  return (
    <>
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
     <Route path="/expertise" element={<Expertise />} />
              <Route path="/morocco" element={<Morocco />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/media" element={<Media />} />
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
