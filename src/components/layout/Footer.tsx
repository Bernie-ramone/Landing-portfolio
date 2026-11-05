import { navLinks } from "../../data/navigation";
import { WireGlobe } from "../ui/decor";
import { Logo } from "./Logo";
import { NewsletterForm } from "./NewsletterForm";
import styles from "./Footer.module.css";

const infoLinks = [
  { label: "Privacy policy", href: "#" },
  { label: "Terms & conditions", href: "#" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.bar}`}>
        <Logo />

        <nav aria-label="Footer">
          <h2 className={styles.heading}>Navigation</h2>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={styles.heading}>Info</h2>
          <ul className={styles.list}>
            {infoLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
            <li>
              <small>© {year} Rhea Monroe</small>
            </li>
          </ul>
        </div>

        <div>
          <h2 className={styles.heading}>Let's connect</h2>
          <p className={styles.note}>
            Join my newsletter for insights and updates.
          </p>
          <NewsletterForm />
        </div>

        <WireGlobe className={styles.globe} />
      </div>
    </footer>
  );
}
