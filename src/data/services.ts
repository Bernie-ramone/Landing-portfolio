export type ServiceIcon = 'sparkle' | 'clover' | 'code' | 'eye'
export type ServiceTone = 'rust' | 'olive' | 'ink'

export type Service = {
  id: string
  title: string
  description: string
  icon: ServiceIcon
  tone: ServiceTone
}

export const services: Service[] = [
  {
    id: 'motion-design',
    title: 'Motion design',
    description: 'Explainer videos, brand stories, title sequences, and more.',
    icon: 'sparkle',
    tone: 'rust',
  },
  {
    id: 'interactive-design',
    title: 'Interactive design',
    description: 'Engaging web experiences and UI/UX animations.',
    icon: 'clover',
    tone: 'olive',
  },
  {
    id: 'creative-coding',
    title: 'Creative coding',
    description: 'Generative visuals, WebGL, and interactive installations.',
    icon: 'code',
    tone: 'ink',
  },
  {
    id: 'visual-storytelling',
    title: 'Visual storytelling',
    description: 'Concept, direction, and design that communicates impact.',
    icon: 'eye',
    tone: 'rust',
  },
]