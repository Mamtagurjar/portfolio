import "./ProjectsSection.css";
import project1 from "../assets/project1.svg";
import project2 from "../assets/project2.svg";

function ProjectsSection() {
  return (
    <section className="projects-section">
      {/* First Project */}
      <div className="project-card left-project">
        <div className="project-content">
          <p>Featured Project</p>
          <h2>Example Project</h2>

          <div className="project-box">
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.
          </div>
        </div>

        <img src={project1} alt="Project 1" />
      </div>

      {/* Second Project */}
      <div className="project-card right-project">
        <img src={project2} alt="Project 2" />

        <div className="project-content">
          <p>Featured Project</p>
          <h2>Example Project</h2>

          <div className="project-box">
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;