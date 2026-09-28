import { useState } from "react";
import QuadMatrixLogo from "./QuadMatrixLogo";
import Wordmark from "./Wordmark";

const NAV = [
  { label: "Curriculum", href: "#curriculum" },
  { label: "Schedule", href: "#schedule" },
  { label: "Who it's for", href: "#who-its-for" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#top" className="header-brand" aria-label="DSR TechSattva home">
          <QuadMatrixLogo size={34} />
          <Wordmark />
        </a>

        <nav className="header-nav" aria-label="Main navigation">
          <ul>
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <a href="#contact" className="btn btn-outline header-contact-btn">
            Contact
          </a>
          <a href="#register" className="btn btn-primary">
            Register now
          </a>
        </div>

        <button
          className="header-burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="mobile-nav" id="mobile-nav">
          <ul>
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-nav-actions">
            <a href="#contact" className="btn btn-outline" onClick={() => setOpen(false)}>
              Contact
            </a>
            <a href="#register" className="btn btn-primary" onClick={() => setOpen(false)}>
              Register now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
