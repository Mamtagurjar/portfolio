function ExperienceCard({ image, company, description }) {
  return (
    <div className="experience-card">
      <img src={image} alt={company} className="experience-icon" />

      <div className="experience-content">
        <h3>{company}</h3>
        <p>{description}</p>
        <button type="button">LEARN MORE</button>
      </div>
    </div>
  );
}

export default ExperienceCard;
