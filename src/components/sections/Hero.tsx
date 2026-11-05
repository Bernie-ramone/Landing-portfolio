import { HeroArt } from "./HeroArt";
import avatar1 from "../../assets/images/avatar-1.jpg";
import avatar2 from "../../assets/images/avatar-2.jpg";
import avatar3 from "../../assets/images/avatar-3.jpg";
import { ButtonLink } from "../ui/Button";
import { Pill } from "../ui/Pill";
import { SealIcon, WireGlobe } from "../ui/decor";
import styles from "./Hero.module.css";

const avatars = [avatar1, avatar2, avatar3];

export function Hero() {
  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.grid}`}>
        <div>
          <Pill dot>Motion designer &amp; creative technologist</Pill>

          <h1 id="hero-title" className={styles.title}>
            <span className={styles.line}>I bring</span>
            <span className={`${styles.line} ${styles.accent}`}>ideas to</span>
            <span className={styles.line}>life in motion</span>
          </h1>

          <p className={styles.lead}>
            I craft cinematic motion, interactive experiences, and smart visuals
            that move people.
          </p>

          <div className={styles.actions}>
            <ButtonLink href="#work">View my work</ButtonLink>
            <ButtonLink href="#reel" variant="ghost" icon="play">
              Watch reel
            </ButtonLink>
          </div>

          <TrustedBy />
        </div>

        <HeroArt />
      </div>
    </section>
  );
}

function TrustedBy() {
  return (
    <div className={styles.trusted}>
      <div className={styles.avatars}>
        {avatars.map((src) => (
          <img key={src} src={src} alt="" width={36} height={36} />
        ))}
      </div>
      <p className={styles.trustedText}>
        Trusted by forward-thinking brands &amp; agencies
      </p>
      <span className={styles.divider} aria-hidden="true" />
      <div className={styles.logos} aria-hidden="true">
        <SealIcon />
        <WireGlobe />
      </div>
    </div>
  );
}
