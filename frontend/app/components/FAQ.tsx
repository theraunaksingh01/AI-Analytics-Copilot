'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQItem {
  q: string
  a: string
}

const faqs: FAQItem[] = [
  {
    q: 'What file formats does DataLyze support?',
    a: "Currently CSV, Excel (.xlsx, .xls), and JSON files. We're working on Google Sheets integration, Parquet, and direct database connections (PostgreSQL, MySQL) for the Pro and Team plans.",
  },
  {
    q: 'How does the self-healing execution work?',
    a: 'When you ask a question, DataLyze generates Python code using an LLM, runs it in a sandboxed cloud environment, and captures the output. If the code fails, the error message is automatically sent back to the AI with a prompt to identify and fix the bug — this loops up to 3 times before giving up gracefully.',
  },
  {
    q: 'Is my data secure?',
    a: "Yes. All code executes in isolated E2B cloud sandboxes — your data never runs on our main servers. Files are temporarily stored in encrypted storage and deleted after your session. We never use your data to train models.",
  },
  {
    q: 'What happens when the AI gives a wrong answer?',
    a: 'DataLyze always shows the generated code alongside the result using the "Show Code" toggle. You can inspect exactly what analysis was run. If an answer seems off, you can ask a follow-up that clarifies the intent, or reset and rephrase.',
  },
  {
    q: 'How much does it cost to use?',
    a: 'The Starter plan is completely free with 5 uploads and 50 queries per month. The Pro plan starts at $19/month (billed yearly) and includes unlimited uploads and 1,000 queries. See the Pricing section for full details.',
  },
  {
    q: 'Does multi-turn memory work across sessions?',
    a: 'Within a session, all previous queries and context are maintained so follow-up questions work naturally. Across sessions (new browser tab or later visit), conversation history resets — though your uploaded files are retained for 24 hours on Pro plans.',
  },
  {
    q: 'Can I use DataLyze on large datasets?',
    a: 'The current file size limit is 50MB. For very large datasets, we recommend aggregating or sampling your data before uploading. DuckDB-powered SQL queries make even moderately large files fast to query. Large dataset support (500MB+) is on our roadmap for Team plans.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" style={{ padding: '100px 24px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <div style={{
            display: 'inline-block', background: 'rgba(255,107,53,0.1)',
            border: '1px solid rgba(255,107,53,0.25)',
            padding: '5px 14px', borderRadius: '100px', marginBottom: '20px',
          }}>
            <span style={{ fontSize: '11px', color: 'var(--accent-orange)', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', fontFamily: 'var(--font-body)' }}>
              FAQ
            </span>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: '800', letterSpacing: '-1.5px', color: 'var(--text-primary)', lineHeight: 1.1,
          }}>
            Frequently asked questions
          </h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.06 }}
              style={{
                background: open === i ? 'rgba(255,107,53,0.05)' : 'var(--bg-card)',
                border: open === i ? '1px solid rgba(255,107,53,0.25)' : '1px solid var(--border)',
                borderRadius: '12px', overflow: 'hidden',
                transition: 'border-color 0.2s, background 0.2s',
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%', display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '20px 24px', background: 'none', border: 'none',
                  cursor: 'pointer', textAlign: 'left', gap: '16px',
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-body)', fontSize: '15px',
                  fontWeight: '500', color: 'var(--text-primary)', lineHeight: 1.4,
                }}>{faq.q}</span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    fontSize: '20px', color: open === i ? 'var(--accent-orange)' : 'var(--text-muted)',
                    flexShrink: 0, fontWeight: '300',
                  }}
                >+</motion.span>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div style={{ padding: '0 24px 20px', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                      <p style={{
                        fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: '1.8',
                        color: 'var(--text-secondary)', fontWeight: '300', paddingTop: '16px',
                      }}>{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: '48px', fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-muted)' }}
        >
          Still have questions?{' '}
          <a href="mailto:hello@datalyze.ai" style={{ color: 'var(--accent-orange)', textDecoration: 'none' }}>
            Reach out to us →
          </a>
        </motion.p>
      </div>
    </section>
  )
}