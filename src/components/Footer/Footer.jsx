import "./Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">

        {/* About */}
        <div className="footer-about">
          <h2>Lawctopus</h2>

          <p>
            Learn practical contract drafting from experienced legal
            professionals and build a successful legal career with
            industry-focused training.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#why">Why Join</a></li>
            <li><a href="#curriculum">Curriculum</a></li>
            <li><a href="#faculty">Faculty</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h3>Connect With Us</h3>

          <div className="social">

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>

            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>

          </div>

          <p className="contact-text">
            Email: info@lawctopus.com
          </p>

        </div>

      </div>

      <div className="copyright">
        © 2026 Lawctopus. All Rights Reserved. Developed using React.js
      </div>
    </footer>
  );
}

export default Footer;