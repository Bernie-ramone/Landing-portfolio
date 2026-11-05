import { useId } from "react";
import { SparkleIcon } from "./icons";
import styles from "./CircleBadge.module.css";

type CircleBadgeProps = {
  text: string;
  className?: string;
};

const RADIUS = 38;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function CircleBadge({ text, className }: CircleBadgeProps) {
  const pathId = useId();

  return (
    <svg
      viewBox="0 0 100 100"
      className={[styles.badge, className].filter(Boolean).join(" ")}
      role="img"
      aria-label={text}
    >
      <defs>
        <path
          id={pathId}
          d={`M50 ${50 - RADIUS}a${RADIUS} ${RADIUS} 0 1 1 0 ${RADIUS * 2}a${RADIUS} ${RADIUS} 0 1 1 0 -${RADIUS * 2}`}
        />
      </defs>

      <circle
        cx="50"
        cy="50"
        r="48"
        fill="none"
        stroke="currentColor"
        strokeWidth={0.6}
      />
      <circle
        cx="50"
        cy="50"
        r="28"
        fill="none"
        stroke="currentColor"
        strokeWidth={0.6}
      />

      <g className={styles.ring}>
        <text className={styles.text}>
          <textPath
            href={`#${pathId}`}
            textLength={CIRCUMFERENCE}
            lengthAdjust="spacing"
          >
            {text}
          </textPath>
        </text>
      </g>

      <SparkleIcon
        x={38}
        y={38}
        width={24}
        height={24}
        className={styles.star}
      />
    </svg>
  );
}
