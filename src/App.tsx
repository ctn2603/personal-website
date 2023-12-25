import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/navbar/navbar";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Home from "./pages/home/home";
import Projects from "./pages/projects/projects";
import Resume from "./pages/resume/resume";
import Skills from "./pages/skills/skills";
import Timeline from "./pages/timeline/timeline";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Timeline />
      <Contact />
    </BrowserRouter>
  );
}
