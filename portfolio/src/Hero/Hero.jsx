import "./Hero.css";
import profile from "../assets/profile.svg";
import background from "../assets/bakground.svg";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-shell">
        <div className="hero-top">
          <div className="hero-left">
            <img src={background} alt="Background" className="background-img" />
            <img src={profile} alt="Profile" className="profile-img" />
          </div>

          <div className="hero-right">
            <p className="intro-text">
              Hello! I Am <span>Mamta Gurjar</span>
            </p>

            <h4 className="hero-kicker">A Designer who</h4>

            <h1 className="hero-title">
              Judges a book <br />
              by its <span>cover</span>...
            </h1>

            <p className="hero-description">
              Because if the cover does not impress you what else can?
            </p>
          </div>
        </div>

        <div className="hero-bottom">
          <h3 className="hero-subtitle">I'm a Software Engineer.|</h3>

          <p className="hero-company">
            Currently, I'm a Software Engineer at <span>scalarTechhub</span>
          </p>

          <p className="hero-about">
            A self-taught UI/UX designer, functioning in the industry for 3+ years now.
            I make meaningful and delightful digital products that create an equilibrium
            between user needs and business goals.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;

