'use client'

import { motion } from 'framer-motion'
import type { CSSProperties } from 'react'

interface FloatingCard {
  icon: string
  title: string
  value: string
  change: string
  positive: boolean
  style: CSSProperties
}

interface ChatMessage {
  role: 'user' | 'ai'
  text: string
}

const floatingCards: FloatingCard[] = [
  {
    icon: '📊', title: 'Revenue by Region', value: '$2.4M', change: '+18.2%',
    positive: true, style: { top: '8%', right: '-4%' },
  },
  {
    icon: '🔍', title: 'Anomalies Found', value: '7 rows', change: 'Auto-detected',
    positive: true, style: { bottom: '20%', left: '-8%' },
  },
  {
    icon: '⚡', title: 'Analysis Time', value: '3.2s', change: 'vs 4hrs manual',
    positive: true, style: { bottom: '2%', right: '6%' },
  },
]

const chatMessages: ChatMessage[] = [
  { role: 'user', text: 'Which product category had the highest growth in Q3?' },
  { role: 'ai', text: "Electronics grew 34.2% in Q3, driven by laptop sales (+52%). Here's the breakdown by sub-category →" },
  { role: 'user', text: 'Now filter that to only show items above $500 average price.' },
  { role: 'ai', text: 'Filtered. 8 sub-categories qualify. Premium Laptops lead at $1,240 avg with 41% growth.' },
]

const avatarColors: string[] = ['#FF6B35', '#4ECDC4', '#45B7D1', '#96CEB4']

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden', padding: '120px 24px 80px',
    }}>
      {/* Background orbs */}
      <div style={{
        position: 'absolute', top: '-20%', left: '-10%',
        width: '700px', height: '700px',
        background: 'radial-gradient(circle, rgba(255,107,53,0.12) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-20%', right: '-10%',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(255,179,71,0.08) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />

      {/* Grid pattern */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px', pointerEvents: 'none',
        maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '80px', alignItems: 'center',
        }} className="hero-grid">

          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'rgba(255, 107, 53, 0.1)',
                border: '1px solid rgba(255, 107, 53, 0.25)',
                padding: '6px 14px', borderRadius: '100px', marginBottom: '28px',
              }}
            >
              <span style={{ fontSize: '11px', color: 'var(--accent-orange)', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', fontFamily: 'var(--font-body)' }}>
                ✦ AI-Powered Data Analysis
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 66px)',
                fontWeight: '800', lineHeight: '1.05', letterSpacing: '-2px',
                color: 'var(--text-primary)', marginBottom: '24px',
              }}
            >
              Talk to your{' '}
              <span style={{
                background: 'linear-gradient(135deg, #FF6B35, #FFB347)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>data.</span>
              <br />Get instant insights.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontFamily: 'var(--font-body)', fontSize: '17px', lineHeight: '1.7',
                color: 'var(--text-secondary)', marginBottom: '40px',
                maxWidth: '480px', fontWeight: '300',
              }}
            >
              Upload any CSV or Excel file. Ask questions in plain English.
              Get charts, insights, and analysis — powered by AI that writes
              and executes code for you automatically.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}
            >
              <a
                href="#"
                style={{
                  background: 'linear-gradient(135deg, #FF6B35, #FF8C61)', color: 'white',
                  padding: '14px 28px', borderRadius: '10px', textDecoration: 'none',
                  fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: '600',
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  boxShadow: '0 8px 32px rgba(255, 107, 53, 0.3)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(255, 107, 53, 0.4)' }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(255, 107, 53, 0.3)' }}
              >
                Start Analyzing Free <span style={{ fontSize: '18px' }}>→</span>
              </a>
              <a
                href="#how-it-works"
                style={{
                  color: 'var(--text-secondary)', padding: '14px 24px', borderRadius: '10px',
                  textDecoration: 'none', fontFamily: 'var(--font-body)',
                  fontSize: '15px', fontWeight: '500', border: '1px solid var(--border)',
                  transition: 'border-color 0.2s, color 0.2s',
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent-orange)'; e.currentTarget.style.color = 'var(--text-primary)' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)' }}
              >
                ▶ Watch Demo
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              style={{ marginTop: '48px', display: 'flex', alignItems: 'center', gap: '16px' }}
            >
              <div style={{ display: 'flex' }}>
                {avatarColors.map((c, i) => (
                  <div key={i} style={{
                    width: '32px', height: '32px', borderRadius: '50%',
                    background: c, border: '2px solid var(--bg-primary)',
                    marginLeft: i > 0 ? '-8px' : '0',
                  }} />
                ))}
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-muted)' }}>
                <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>2,400+</span> analysts already using DataLyze
              </p>
            </motion.div>
          </div>

          {/* Right — Chat mockup */}
          <motion.div
            initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'relative' }}
          >
            <div style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '20px', overflow: 'hidden', backdropFilter: 'blur(10px)',
              boxShadow: '0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,107,53,0.05)',
            }}>
              {/* Window header */}
              <div style={{
                padding: '14px 18px', borderBottom: '1px solid rgba(255,255,255,0.06)',
                display: 'flex', alignItems: 'center', gap: '8px',
                background: 'rgba(255,255,255,0.02)',
              }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FF5F57' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FEBC2E' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#28C840' }} />
                <div style={{ flex: 1, textAlign: 'center' }}>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
                    DataLyze — sales_q3_2024.csv
                  </span>
                </div>
              </div>

              {/* Chat */}
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '14px', minHeight: '340px' }}>
                {chatMessages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.2 }}
                    style={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start' }}
                  >
                    <div style={{
                      maxWidth: '80%', padding: '10px 14px',
                      borderRadius: msg.role === 'user' ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
                      background: msg.role === 'user' ? 'linear-gradient(135deg, #FF6B35, #FF8C61)' : 'rgba(255,255,255,0.06)',
                      border: msg.role === 'ai' ? '1px solid rgba(255,255,255,0.08)' : 'none',
                      fontSize: '13px', lineHeight: '1.5',
                      color: 'var(--text-primary)', fontFamily: 'var(--font-body)',
                    }}>
                      {msg.role === 'ai' && (
                        <div style={{ fontSize: '10px', color: 'var(--accent-orange)', fontWeight: '600', marginBottom: '4px', letterSpacing: '0.5px' }}>
                          ✦ DataLyze AI
                        </div>
                      )}
                      {msg.text}
                    </div>
                  </motion.div>
                ))}

                {/* Typing indicator */}
                <motion.div
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  transition={{ delay: 2.2 }}
                  style={{ display: 'flex', gap: '4px', alignItems: 'center', paddingLeft: '4px' }}
                >
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ y: [0, -4, 0] }}
                      transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.15 }}
                      style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-orange)' }}
                    />
                  ))}
                </motion.div>
              </div>

              {/* Input bar */}
              <div style={{
                padding: '14px 18px', borderTop: '1px solid rgba(255,255,255,0.06)',
                display: 'flex', gap: '10px', alignItems: 'center',
              }}>
                <div style={{
                  flex: 1, background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '8px', padding: '9px 14px',
                  fontSize: '13px', color: 'var(--text-muted)', fontFamily: 'var(--font-body)',
                }}>
                  Ask anything about your data...
                </div>
                <div style={{
                  width: '34px', height: '34px',
                  background: 'linear-gradient(135deg, #FF6B35, #FF8C61)',
                  borderRadius: '8px', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', fontSize: '14px',
                }}>→</div>
              </div>
            </div>

            {/* Floating cards */}
            {floatingCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + i * 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  position: 'absolute', ...card.style,
                  background: 'rgba(13, 17, 23, 0.9)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '12px', padding: '12px 16px',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                  minWidth: '160px', zIndex: 10,
                }}
              >
                <div style={{ fontSize: '18px', marginBottom: '4px' }}>{card.icon}</div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-body)', marginBottom: '2px' }}>{card.title}</div>
                <div style={{ fontSize: '18px', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--text-primary)' }}>{card.value}</div>
                <div style={{ fontSize: '11px', color: card.positive ? '#4ADE80' : '#F87171', fontFamily: 'var(--font-body)', marginTop: '2px' }}>{card.change}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}