'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

interface CountUpProps {
  end: number
  suffix?: string
  duration?: number
}

function CountUp({ end, suffix = '', duration = 2 }: CountUpProps) {
  const [count, setCount] = useState<number>(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = end / (duration * 60)
    const timer = setInterval(() => {
      start += step
      if (start >= end) { setCount(end); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 1000 / 60)
    return () => clearInterval(timer)
  }, [inView, end, duration])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

interface Stat {
  value: number
  suffix: string
  label: string
  sub: string
}

const stats: Stat[] = [
  { value: 2400, suffix: '+', label: 'Active Analysts', sub: 'using DataLyze today' },
  { value: 98, suffix: '%', label: 'Query Success Rate', sub: 'thanks to self-healing AI' },
  { value: 3, suffix: 's', label: 'Avg Response Time', sub: 'from question to insight' },
  { value: 50000, suffix: '+', label: 'Analyses Run', sub: 'across all datasets' },
]

export default function Stats() {
  return (
    <section style={{ padding: '80px 24px', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, transparent, rgba(255,107,53,0.04) 50%, transparent)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2px', background: 'var(--border)',
          border: '1px solid var(--border)', borderRadius: '20px', overflow: 'hidden',
        }} className="stats-grid">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ padding: '48px 32px', background: 'var(--bg-primary)', textAlign: 'center' }}
            >
              <div style={{
                fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 4vw, 52px)',
                fontWeight: '800', letterSpacing: '-2px',
                background: 'linear-gradient(135deg, #FF6B35, #FFB347)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                backgroundClip: 'text', marginBottom: '8px',
              }}>
                <CountUp end={s.value} suffix={s.suffix} />
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '15px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '4px' }}>{s.label}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-muted)' }}>{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .stats-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 440px) { .stats-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}