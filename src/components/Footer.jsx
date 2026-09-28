import QuadMatrixLogo from "./QuadMatrixLogo";
import Wordmark from "./Wordmark";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-inner">
        <div className="footer-brand-col">
          <div className="footer-brand">
            <QuadMatrixLogo size={30} reversed />
            <Wordmark reversed />
          </div>
          <p className="footer-tagline">Engineering data. Enabling intelligence.</p>
          <p className="footer-blurb">
            A mentor-led data engineering training program for students, freshers, career
            switchers and working professionals.
          </p>
        </div>

        <div className="footer-col">
          <h3>Quick links</h3>
          <ul>
            <li><a href="#curriculum">Curriculum</a></li>
            <li><a href="#schedule">Schedule</a></li>
            <li><a href="#who-its-for">Who it's for</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact</h3>
          <ul>
            <li>
              <a href="mailto:hello@example.com">hello@example.com</a>
              <span className="footer-placeholder-tag">placeholder</span>
            </li>
            <li>
              <a href="tel:+910000000000">+91 00000 00000</a>
              <span className="footer-placeholder-tag">placeholder</span>
            </li>
            <li>
              <a href="#">WhatsApp us</a>
              <span className="footer-placeholder-tag">placeholder</span>
            </li>
            <li>
              <a href="#register">Register now</a>
              <span className="footer-placeholder-tag">placeholder</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} DSR TechSattva. All rights reserved.</p>
      </div>
    </footer>
  );
}
