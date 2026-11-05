import type { ComponentPropsWithoutRef } from "react";
import { ArrowCircle } from "./ArrowCircle";
import styles from "./TextLink.module.css";

type TextLinkProps = ComponentPropsWithoutRef<"a">;

export function TextLink({ className, children, ...rest }: TextLinkProps) {
  return (
    <a className={[styles.link, className].filter(Boolean).join(" ")} {...rest}>
      <span>{children}</span>
      <ArrowCircle size="sm" />
    </a>
  );
}
