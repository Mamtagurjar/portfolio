import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import "./App.css";
import Experience from "./Experience/Experience";
import SkillsSection from "./skillsSection/skillsSection";
import ProjectsSection from "./ProjectsSection/ProjectsSection";
import ContactSection from "./ContactSection/ContactSection";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Experience />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    

  

    </div>
  );
}

export default App;
