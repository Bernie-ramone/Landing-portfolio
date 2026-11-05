import { SparkleIcon } from "../ui/icons";
import styles from "./Logo.module.css";

export function Logo() {
  return (
    <a
      href="#home"
      className={styles.logo}
      aria-label="Rhea Monroe, back to top"
    >
      <SparkleIcon className={styles.mark} />
      <span className={styles.name} aria-hidden="true">
        Rhea
        <br />
        Monroe
      </span>
    </a>
  );
}
