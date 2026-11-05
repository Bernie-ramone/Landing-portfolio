import { testimonials } from "../../data/testimonials";
import { CircleBadge } from "../ui/CircleBadge";
import { SectionHeader } from "../ui/SectionHeader";
import styles from "./Testimonials.module.css";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className={styles.section}
      aria-labelledby="testimonials-title"
    >
      <div className="container">
        <SectionHeader title="Kind words" titleId="testimonials-title" />

        <div className={styles.layout}>
          <ul className={styles.grid}>
            {testimonials.map((item) => (
              <li key={item.id}>
                <figure className={styles.card}>
                  <blockquote className={styles.quote}>
                    <p>{item.quote}</p>
                  </blockquote>
                  <figcaption className={styles.author}>
                    <img src={item.avatar} alt="" width={40} height={40} />
                    <span>
                      <span className={styles.name}>{item.name}</span>
                      <span className={styles.role}>
                        {item.role}, {item.company}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>

          <CircleBadge
            text="Clients • Collaborators •"
            className={styles.badge}
          />
        </div>
      </div>
    </section>
  );
}
