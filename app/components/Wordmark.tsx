// Reusable product wordmark component — Revision 02
// Each product name uses a two-color treatment:
//   leading word: inherits surrounding text color
//   accent word: brand color at font-weight 700
//
// Usage: <Wordmark product="ThreatRespond" /> → Threat<Respond>™
//        <Wordmark product="ThreatDefend" />  → Threat<Defend>™
//        <Wordmark product="NextDefend" />    → Next<Defend>™
//        <Wordmark product="ThreatAssess" />  → Threat<Assess>™
//        <Wordmark product="VililanGuard" />  → Vijilan <Guard>™

type Product = 'ThreatRespond' | 'ThreatDefend' | 'NextDefend' | 'ThreatAssess' | 'VililanGuard'

interface WordmarkProps {
  product: Product
  className?: string
}

const WORDMARK_CONFIG: Record<Product, { prefix: string; accent: string; color: string }> = {
  ThreatRespond: { prefix: 'Threat', accent: 'Respond', color: '#56C9E8' }, // logo light blue (waveform gradient)
  ThreatDefend:  { prefix: 'Threat', accent: 'Defend',  color: '#ED1C24' },
  NextDefend:    { prefix: 'Next',   accent: 'Defend',  color: '#A78BFA' },
  ThreatAssess:  { prefix: 'Threat', accent: 'Assess',  color: '#2E6E7E' },
  VililanGuard:  { prefix: 'Vijilan ', accent: 'Guard', color: '#D4A857' },
}

export function Wordmark({ product, className = '' }: WordmarkProps) {
  const { prefix, accent, color } = WORDMARK_CONFIG[product]
  return (
    <span className={className}>
      {prefix}
      <span style={{ color, fontWeight: 700 }}>{accent}</span>
      ™
    </span>
  )
}

// Convenience named exports for each product
export const ThreatRespondWordmark = (props: Omit<WordmarkProps, 'product'>) => (
  <Wordmark product="ThreatRespond" {...props} />
)
export const ThreatDefendWordmark = (props: Omit<WordmarkProps, 'product'>) => (
  <Wordmark product="ThreatDefend" {...props} />
)
export const NextDefendWordmark = (props: Omit<WordmarkProps, 'product'>) => (
  <Wordmark product="NextDefend" {...props} />
)
export const ThreatAssessWordmark = (props: Omit<WordmarkProps, 'product'>) => (
  <Wordmark product="ThreatAssess" {...props} />
)
export const VililanGuardWordmark = (props: Omit<WordmarkProps, 'product'>) => (
  <Wordmark product="VililanGuard" {...props} />
)
