import type { ReactNode } from "react";
import styles from "./Pill.module.css";

type PillProps = {
  children: ReactNode;
  as?: "span" | "h2";
  dot?: boolean;
  id?: string;
};

export function Pill({
  children,
  as: Tag = "span",
  dot = false,
  id,
}: PillProps) {
  return (
    <Tag id={id} className={`${styles.pill} ${dot ? styles.dot : ""}`}>
      {children}
    </Tag>
  );
}
