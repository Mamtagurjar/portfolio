import "./ContactSection.css";
import { FaInstagram, FaDribbble, FaGoogle } from "react-icons/fa";

function ContactSection() {
  return (
    <section className="contact-section">
      <h2>Contact</h2>

      <p className="contact-text">
        I'm currently looking to join a cross-functional team that values
        improving people’s lives through accessible design, or have a project
        in mind? Let’s connect.
      </p>

      <p className="contact-email">
        ibrahimmemon930@gmail.com
      </p>

      <div className="contact-icons">
        <FaInstagram />
        <FaDribbble />
        <FaGoogle />
      </div>
    </section>
  );
}

export default ContactSection;