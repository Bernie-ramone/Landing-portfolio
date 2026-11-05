import type { ComponentType, SVGProps } from 'react'
import aboutPhoto from '../../assets/images/about-desk.jpg'
import { Planet } from '../ui/decor'
import { CheckIcon, PinIcon, PlusIcon } from '../ui/icons'
import { TextLink } from '../ui/TextLink'
import styles from './About.module.css'

type Fact = {
  label: string
  Icon: ComponentType<SVGProps<SVGSVGElement>>
}

const facts: Fact[] = [
  { label: 'Based in Portland, OR', Icon: PinIcon },
  { label: 'Available for freelance', Icon: CheckIcon },
  { label: 'Open to collaboration', Icon: PlusIcon },
]

export function About() {
  return (
    <section id="about" className={styles.about} aria-labelledby="about-title">
      <div className={`container ${styles.band}`}>
        <figure className={styles.media}>
          <Planet className={styles.planet} />
          <img
            src={aboutPhoto}
            alt="Rhea working on an animation at her desk"
            width={640}
            height={480}
            className={styles.photo}
          />
        </figure>

        <div>
          <h2 id="about-title" className={styles.title}>
            Hi, I'm Rhea Monroe
          </h2>
          <p className={styles.text}>
            I'm a motion designer and creative technologist with 8+ years of experience turning
            ideas into engaging visual stories and interactive digital experiences.
          </p>
          <div className={styles.footer}>
            <TextLink href="#experience">More about me</TextLink>
            <span className={styles.signature} aria-hidden="true">
              Rhea
            </span>
          </div>
        </div>

        <ul className={styles.facts}>
          {facts.map(({ label, Icon }) => (
            <li key={label} className={styles.fact}>
              <span className={styles.factIcon}>
                <Icon />
              </span>
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}