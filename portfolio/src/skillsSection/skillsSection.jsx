import "./skillsSection.css";
import skillsSection from "../assets/SkillsSection.svg";

function SkillsSection() {
  return (
    <section className="skills-preview">
      <img src={skillsSection} alt="Skills Section" />
    </section>
  );
}

export default SkillsSection;
