import { jobs } from "../../data/experience";
import { SKILL_MAX, skills } from "../../data/skills";
import { RetroTv, Starburst } from "../ui/decor";
import styles from "./SkillsExperience.module.css";

export function SkillsExperience() {
  return (
    <section
      id="experience"
      className={styles.section}
      aria-label="Skills and experience"
    >
      <div className={`container ${styles.panel}`}>
        <div>
          <h2 className={styles.heading}>Skills</h2>
          <ul className={styles.skills}>
            {skills.map((skill) => (
              <li key={skill.name} className={styles.skill}>
                {skill.name}
                <DotRating level={skill.level} max={SKILL_MAX} />
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.experience}>
          <h2 className={styles.heading}>Experience</h2>
          <ol className={styles.timeline}>
            {jobs.map((job) => (
              <li
                key={job.id}
                className={`${styles.job} ${job.current ? styles.current : ""}`}
              >
                <div>
                  <p className={styles.period}>{job.period}</p>
                  <h3 className={styles.role}>{job.role}</h3>
                  <p className={styles.company}>{job.company}</p>
                </div>
                <p className={styles.summary}>{job.summary}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className={styles.tvWrap}>
          <RetroTv className={styles.tv} />
          <Starburst className={styles.burst} />
        </div>
      </div>
    </section>
  );
}

type DotRatingProps = {
  level: number;
  max: number;
};

function DotRating({ level, max }: DotRatingProps) {
  return (
    <span className={styles.dots}>
      {Array.from({ length: max }, (_, i) => (
        <span key={i} className={i < level ? styles.dotOn : styles.dotOff} />
      ))}
      <span className="sr-only">
        {level} out of {max}
      </span>
    </span>
  );
}
