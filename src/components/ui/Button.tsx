import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { ArrowCircle } from './ArrowCircle'
import styles from './Button.module.css'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

type ButtonLinkProps = ComponentPropsWithoutRef<'a'> & {
  variant?: ButtonVariant
  icon?: 'arrow' | 'play'
  children: ReactNode
}

const circleTone = {
  primary: 'sand',
  secondary: 'outline',
  ghost: 'outline',
} as const

export function ButtonLink({
  variant = 'primary',
  icon = 'arrow',
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  const classes = [styles.button, styles[variant], className].filter(Boolean).join(' ')

  return (
    <a className={classes} {...rest}>
      <span>{children}</span>
      <ArrowCircle icon={icon} tone={circleTone[variant]} />
    </a>
  )
}