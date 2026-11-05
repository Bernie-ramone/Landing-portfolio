import { useState } from "react";
import { navLinks } from "../../data/navigation";
import { ButtonLink } from "../ui/Button";
import { Logo } from "./Logo";
import styles from "./Navbar.module.css";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");

  const handleNavigate = (href: string) => {
    setActiveHref(href);
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <Logo />

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={isOpen}
          aria-controls="main-menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
          <span className={styles.burger} aria-hidden="true" />
        </button>

        <nav
          id="main-menu"
          className={`${styles.nav} ${isOpen ? styles.open : ""}`}
          aria-label="Main"
        >
          <ul className={styles.links}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={styles.link}
                  aria-current={activeHref === link.href ? "true" : undefined}
                  onClick={() => handleNavigate(link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <ButtonLink
            href="#contact"
            className={styles.cta}
            onClick={() => handleNavigate("#contact")}
          >
            Let's talk
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
