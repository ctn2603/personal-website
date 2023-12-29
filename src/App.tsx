import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/navbar/navbar";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Home from "./pages/home/home";
import Projects from "./pages/projects/projects";
import Skills from "./pages/skills/skills";
import Timeline from "./pages/timeline/timeline";
import Footer from "./components/footer/footer";

export default function App() {
    return (
        <BrowserRouter>
            <div className="relative z-0 bg-white">
                <NavBar />
                <Home />
                <About />
                <Skills />
                <Projects />
                <Timeline />
                <Contact />
                <Footer />
            </div>
        </BrowserRouter>
    );
}
