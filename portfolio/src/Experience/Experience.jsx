import "./Experience.css";
import { experiences } from "../data/experience";
import ExperienceCard from "./ExperienceCard";
import workBg from "../assets/workBg.svg";

function Experience() {
  return (
    <section className="experience-section">
      <div
        className="experience-bg"
        aria-hidden="true"
        style={{ backgroundImage: `url(${workBg})` }}
      />
      <h2>Work Experience</h2>

      <div className="experience-grid">
        {experiences.map((item, index) => (
          <ExperienceCard
            key={index}
            image={item.image}
            company={item.company}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Experience;
