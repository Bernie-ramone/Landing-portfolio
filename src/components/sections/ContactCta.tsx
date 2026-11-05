import type { ComponentType } from "react";
import type { IconBaseProps } from "react-icons";
import { FaDribbble, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { contact, type SocialNetwork } from "../../data/contact";
import { ButtonLink } from "../ui/Button";
import { Starburst, WireSphere } from "../ui/decor";
import styles from "./ContactCta.module.css";

const socialIcons: Record<SocialNetwork, ComponentType<IconBaseProps>> = {
  instagram: FaInstagram,
  dribbble: FaDribbble,
  linkedin: FaLinkedinIn,
};

const projectMailto = `mailto:${contact.email}?subject=${encodeURIComponent("New project inquiry")}`;

export function ContactCta() {
  return (
    <section
      id="contact"
      className={styles.section}
      aria-labelledby="contact-title"
    >
      <div className={`container ${styles.panel}`}>
        <hgroup>
          <p className={styles.kicker}>Ready to create something amazing?</p>
          <h2 id="contact-title" className={styles.title}>
            Let's work together
          </h2>
        </hgroup>

        <div className={styles.message}>
          <p>
            Have a project in mind or just want to say hi? I'd love to hear from
            you.
          </p>
          <ButtonLink href={projectMailto} variant="secondary">
            Start a project
          </ButtonLink>
        </div>

        <address className={styles.contact}>
          <dl>
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </dd>

            <dt>Phone</dt>
            <dd>
              <a href={contact.phoneHref}>{contact.phone}</a>
            </dd>

            <dt>Social</dt>
            <dd>
              <ul className={styles.socials}>
                {contact.socials.map(({ network, label, href }) => {
                  const Icon = socialIcons[network];
                  return (
                    <li key={network}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={label}
                      >
                        <Icon aria-hidden="true" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </dd>
          </dl>
        </address>

        <div className={styles.art} aria-hidden="true">
          <WireSphere className={styles.sphere} />
          <Starburst className={styles.burst} />
        </div>
      </div>
    </section>
  );
}
