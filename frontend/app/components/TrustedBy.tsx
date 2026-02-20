'use client'

import { motion } from 'framer-motion'

const logos: string[] = ['Stripe', 'Notion', 'Linear', 'Vercel', 'Figma', 'Shopify', 'Airtable', 'Webflow']

export default function TrustedBy() {
  return (
    <section style={{
      padding: '48px 24px',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      overflow: 'hidden',
    }}>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{
          textAlign: 'center', fontSize: '12px', letterSpacing: '2px',
          textTransform: 'uppercase', color: 'var(--text-muted)',
          fontFamily: 'var(--font-body)', fontWeight: '500', marginBottom: '32px',
        }}
      >
        Trusted by analysts at
      </motion.p>

      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
        }}>
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
            style={{ display: 'flex', gap: '64px', width: 'max-content', alignItems: 'center' }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <span key={i} style={{
                fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700',
                color: 'var(--text-muted)', letterSpacing: '-0.5px',
                whiteSpace: 'nowrap', cursor: 'default',
              }}>
                {logo}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}