'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type ChartType = 'bar' | 'line' | 'scatter'

interface Query {
  q: string
  a: string
  chart: ChartType
}

interface ExampleCategory {
  category: string
  icon: string
  queries: Query[]
}

const examples: ExampleCategory[] = [
  {
    category: 'Sales Analysis', icon: '💰',
    queries: [
      {
        q: 'Which product category had the highest growth in Q3?',
        a: 'Electronics grew 34.2% in Q3, outperforming all other categories. Laptop sales were the primary driver (+52%), particularly in the $800–$1,200 price range.',
        chart: 'bar',
      },
      {
        q: 'Show me monthly revenue trends and flag anomalies.',
        a: 'November shows an unusual 47% drop — flagged as anomaly. All other months trend +8% MoM. The November dip correlates with a 3-day system outage in the raw data.',
        chart: 'line',
      },
    ],
  },
  {
    category: 'HR Analytics', icon: '👥',
    queries: [
      {
        q: 'Which departments have the highest attrition rate?',
        a: 'Engineering leads attrition at 22.4%, followed by Sales at 18.1%. Employees with tenure under 18 months account for 73% of departures.',
        chart: 'bar',
      },
      {
        q: 'Is there a correlation between salary and performance rating?',
        a: 'Moderate positive correlation (r=0.61). Employees in the top salary quartile are 1.8x more likely to have "Exceeds Expectations" ratings.',
        chart: 'scatter',
      },
    ],
  },
  {
    category: 'Financial Data', icon: '📊',
    queries: [
      {
        q: 'What is our customer acquisition cost by channel?',
        a: 'Organic Search: $12/customer. Paid Social: $48/customer. Email campaigns: $8/customer. Email is 6x more efficient than paid social for CAC.',
        chart: 'bar',
      },
    ],
  },
]

function FakeChart({ type }: { type: ChartType }) {
  if (type === 'bar') {
    return (
      <div style={{ display: 'flex', gap: '6px', alignItems: 'flex-end', height: '60px', padding: '0 4px' }}>
        {[70, 100, 55, 80, 45, 90].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ delay: i * 0.06, duration: 0.4, ease: 'easeOut' }}
            style={{ flex: 1, background: i === 1 ? 'var(--accent-orange)' : 'rgba(255,107,53,0.3)', borderRadius: '3px 3px 0 0', minHeight: '4px' }}
          />
        ))}
      </div>
    )
  }
  if (type === 'line') {
    return (
      <svg viewBox="0 0 200 60" style={{ width: '100%', height: '60px' }}>
        <polyline points="0,50 30,42 60,38 90,35 120,20 150,48 180,22 200,18"
          fill="none" stroke="rgba(255,107,53,0.4)" strokeWidth="1.5" />
        <polyline points="0,50 30,42 60,38 90,35 120,20"
          fill="none" stroke="var(--accent-orange)" strokeWidth="2" />
        <circle cx="120" cy="20" r="4" fill="var(--accent-orange)" />
      </svg>
    )
  }
  return (
    <div style={{ display: 'flex', gap: '3px', flexWrap: 'wrap' }}>
      {Array.from({ length: 30 }, (_, i) => (
        <div key={i} style={{
          width: '8px', height: '8px', borderRadius: '50%',
          background: `rgba(255,107,53,${(Math.sin(i) * 0.3 + 0.5).toFixed(2)})`,
          transform: `translateY(${Math.sin(i) * 10}px)`,
        }} />
      ))}
    </div>
  )
}

export default function Examples() {
  const [activeCategory, setActiveCategory] = useState<number>(0)
  const [activeQuery, setActiveQuery] = useState<number>(0)

  const current = examples[activeCategory]
  const query = current.queries[activeQuery]

  return (
    <section id="examples" style={{ padding: '100px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <div style={{
            display: 'inline-block', background: 'rgba(255,107,53,0.1)',
            border: '1px solid rgba(255,107,53,0.25)',
            padding: '5px 14px', borderRadius: '100px', marginBottom: '20px',
          }}>
            <span style={{ fontSize: '11px', color: 'var(--accent-orange)', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', fontFamily: 'var(--font-body)' }}>
              See It In Action
            </span>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: '800', letterSpacing: '-1.5px', color: 'var(--text-primary)', lineHeight: 1.1,
          }}>
            Real questions,<br />real answers
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            display: 'grid', gridTemplateColumns: '280px 1fr',
            gap: '24px', background: 'var(--bg-card)',
            border: '1px solid var(--border)', borderRadius: '20px', overflow: 'hidden',
          }}
          className="examples-grid"
        >
          {/* Sidebar */}
          <div style={{ borderRight: '1px solid var(--border)', padding: '24px' }}>
            {examples.map((ex, i) => (
              <button
                key={i}
                onClick={() => { setActiveCategory(i); setActiveQuery(0) }}
                style={{
                  width: '100%', display: 'flex', alignItems: 'center', gap: '10px',
                  padding: '12px 14px', borderRadius: '10px',
                  background: activeCategory === i ? 'rgba(255,107,53,0.1)' : 'transparent',
                  border: activeCategory === i ? '1px solid rgba(255,107,53,0.25)' : '1px solid transparent',
                  cursor: 'pointer', textAlign: 'left', marginBottom: '6px',
                  transition: 'all 0.2s',
                }}
              >
                <span style={{ fontSize: '18px' }}>{ex.icon}</span>
                <span style={{
                  fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: '500',
                  color: activeCategory === i ? 'var(--accent-orange)' : 'var(--text-secondary)',
                }}>{ex.category}</span>
              </button>
            ))}

            <div style={{ marginTop: '24px', borderTop: '1px solid var(--border)', paddingTop: '20px' }}>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-body)', marginBottom: '10px', letterSpacing: '0.5px' }}>
                EXAMPLE QUERIES
              </div>
              {current.queries.map((q, i) => (
                <button
                  key={i}
                  onClick={() => setActiveQuery(i)}
                  style={{
                    width: '100%', textAlign: 'left', padding: '10px 12px',
                    borderRadius: '8px', border: 'none',
                    background: activeQuery === i ? 'rgba(255,255,255,0.05)' : 'transparent',
                    cursor: 'pointer', marginBottom: '4px',
                    fontSize: '12px', lineHeight: '1.5',
                    color: activeQuery === i ? 'var(--text-primary)' : 'var(--text-muted)',
                    fontFamily: 'var(--font-body)', transition: 'all 0.2s',
                  }}
                >
                  {q.q}
                </button>
              ))}
            </div>
          </div>

          {/* Demo area */}
          <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeCategory}-${activeQuery}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
              >
                {/* User message */}
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <div style={{
                    maxWidth: '75%', padding: '12px 16px',
                    background: 'linear-gradient(135deg, #FF6B35, #FF8C61)',
                    borderRadius: '14px 14px 4px 14px',
                    fontSize: '14px', lineHeight: '1.6',
                    color: 'white', fontFamily: 'var(--font-body)',
                  }}>{query.q}</div>
                </div>

                {/* AI response */}
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '32px', height: '32px', borderRadius: '8px', flexShrink: 0,
                    background: 'linear-gradient(135deg, #FF6B35, #FFB347)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '14px', fontWeight: '800', fontFamily: 'var(--font-display)', color: 'white',
                  }}>D</div>
                  <div style={{
                    flex: 1, padding: '16px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '4px 14px 14px 14px',
                  }}>
                    <div style={{ fontSize: '10px', color: 'var(--accent-orange)', fontWeight: '600', letterSpacing: '1px', marginBottom: '10px', fontFamily: 'var(--font-body)' }}>
                      ✦ DATALYZE AI
                    </div>
                    <p style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', marginBottom: '16px', fontWeight: '300' }}>
                      {query.a}
                    </p>
                    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '16px' }}>
                      <FakeChart type={query.chart} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 700px) { .examples-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}