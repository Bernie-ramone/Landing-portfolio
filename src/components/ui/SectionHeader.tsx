import type { ReactNode } from 'react'
import { Pill } from './Pill'
import styles from './SectionHeader.module.css'

type SectionHeaderProps = {
  title: string
  titleId: string
  action?: ReactNode
}

export function SectionHeader({ title, titleId, action }: SectionHeaderProps) {
  return (
    <div className={styles.header}>
      <Pill as="h2" id={titleId}>
        {title}
      </Pill>
      <span className={styles.rule} aria-hidden="true" />
      {action}
    </div>
  )
}