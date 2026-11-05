import { ArrowRightIcon, PlayIcon } from "./icons";
import styles from "./ArrowCircle.module.css";

type ArrowCircleProps = {
  icon?: "arrow" | "play";
  tone?: "sand" | "outline" | "light";
  size?: "sm" | "md";
};

export function ArrowCircle({
  icon = "arrow",
  tone = "outline",
  size = "md",
}: ArrowCircleProps) {
  const Icon = icon === "play" ? PlayIcon : ArrowRightIcon;

  return (
    <span
      className={`${styles.circle} ${styles[tone]} ${styles[size]}`}
      aria-hidden="true"
    >
      <Icon />
    </span>
  );
}
