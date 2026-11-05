import type { ComponentType, SVGProps } from "react";
import { services, type ServiceIcon } from "../../data/services";
import { ArrowCircle } from "../ui/ArrowCircle";
import { CircleBadge } from "../ui/CircleBadge";
import { CloverIcon, CodeIcon, EyeIcon, SparkleIcon } from "../ui/icons";
import { SectionHeader } from "../ui/SectionHeader";
import styles from "./Services.module.css";

const serviceIcons: Record<
  ServiceIcon,
  ComponentType<SVGProps<SVGSVGElement>>
> = {
  sparkle: SparkleIcon,
  clover: CloverIcon,
  code: CodeIcon,
  eye: EyeIcon,
};

export function Services() {
  return (
    <section
      id="services"
      className={styles.services}
      aria-labelledby="services-title"
    >
      <div className="container">
        <SectionHeader title="What I do" titleId="services-title" />

        <div className={styles.grid}>
          {services.map((service) => {
            const Icon = serviceIcons[service.icon];

            return (
              <article key={service.id} className={styles.card}>
                <span
                  className={`${styles.icon} ${styles[service.tone]}`}
                  aria-hidden="true"
                >
                  <Icon />
                </span>
                <h3 className={styles.title}>{service.title}</h3>
                <p className={styles.desc}>{service.description}</p>
                <a
                  href="#work"
                  className={styles.more}
                  aria-label={`See ${service.title.toLowerCase()} projects`}
                >
                  <ArrowCircle size="sm" />
                </a>
              </article>
            );
          })}
        </div>

        <CircleBadge
          text="Pixels • Purpose • Pixels • Purpose •"
          className={styles.badge}
        />
      </div>
    </section>
  );
}
