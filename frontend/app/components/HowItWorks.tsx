'use client'

import { motion } from 'framer-motion'

/* ══════════════════════════════════════════════════════════
   HowItWorks — pixel-faithful to reference image:

   • White bg
   • Small blue horizontal bar → bold "How it works" → gray subtitle
   • 4 FLOATING mockups (no card border around them) connected by
     dashed curved arrows that arc UP / DOWN alternately
   • Labels sit BELOW each mockup
   
   Mockup details from image:
   1. Largest: dark-navy top bar, white body with green bar + blue/gray rows + green bottom bar
   2. Medium: no header — scattered green squares + blue pill shapes floating
   3. Medium: dark-navy top bar, green square icon + blue bars inside  
   4. Smallest: white mini card with bar chart + blue checkmark circle,
      slightly overlapping a background card (shadow card behind)
══════════════════════════════════════════════════════════ */

/* ── Exact colour palette from image ── */
const NAVY   = '#2D3748'
const GREEN  = '#48BB78'
const BLUE   = '#63B3ED'
const GRAY   = '#CBD5E0'
const LGRAY  = '#E2E8F0'
const DBLUE  = '#4299E1'
const CBLUE  = '#63B3ED'  // dashed arrow colour

/* ─── Mockup 1: Largest, dark header + rows + green bottom ─── */
const M1 = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0 }}
    style={{
      width: 200,
      background: '#fff',
      borderRadius: 10,
      overflow: 'hidden',
      boxShadow: '0 8px 32px rgba(45,55,72,0.14)',
    }}
  >
    {/* Dark navy header */}
    <div style={{ background: NAVY, height: 28, display: 'flex', alignItems: 'center', padding: '0 10px', gap: 6 }}>
      <div style={{ width: 36, height: 7, background: GREEN, borderRadius: 4 }} />
      <div style={{ flex: 1, height: 4, background: 'rgba(255,255,255,0.15)', borderRadius: 2 }} />
    </div>
    {/* Body */}
    <div style={{ padding: '12px 12px 10px' }}>
      {/* Green bar row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
        <div style={{ width: 44, height: 7, background: GREEN, borderRadius: 3 }} />
        <div style={{ flex: 1, height: 4, background: LGRAY, borderRadius: 2 }} />
      </div>
      {/* Content rows with small blue square icon */}
      {[1,2,3,4].map(i => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
          <div style={{ width: 8, height: 8, background: BLUE, borderRadius: 1, flexShrink: 0 }} />
          <div style={{ height: 4, background: LGRAY, borderRadius: 2, flex: 1 }} />
          <div style={{ width: i%2===0 ? 28 : 20, height: 4, background: GRAY, borderRadius: 2 }} />
        </div>
      ))}
      {/* Green bottom bar */}
      <div style={{ height: 7, background: GREEN, borderRadius: 3, marginTop: 8, width: '75%' }} />
    </div>
  </motion.div>
)

/* ─── Mockup 2: Medium, scattered floating blocks (no header) ─── */
const M2 = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.13 }}
    style={{
      width: 160,
      height: 160,
      position: 'relative',
    }}
  >
    {/* Scattered green squares + blue rectangles, like image */}
    <div style={{ position:'absolute', top:12,  left:10,  width:18, height:18, background:GREEN, borderRadius:3 }} />
    <div style={{ position:'absolute', top:8,   left:42,  width:56, height:9,  background:BLUE,  borderRadius:5 }} />
    <div style={{ position:'absolute', top:38,  left:4,   width:14, height:14, background:GREEN, borderRadius:3 }} />
    <div style={{ position:'absolute', top:36,  left:28,  width:36, height:9,  background:BLUE,  borderRadius:5 }} />
    <div style={{ position:'absolute', top:36,  left:74,  width:46, height:9,  background:DBLUE, borderRadius:5 }} />
    <div style={{ position:'absolute', top:64,  left:15,  width:12, height:12, background:GREEN, borderRadius:3 }} />
    <div style={{ position:'absolute', top:62,  left:36,  width:52, height:9,  background:BLUE,  borderRadius:5 }} />
    <div style={{ position:'absolute', top:62,  left:98,  width:32, height:9,  background:LGRAY, borderRadius:5 }} />
    <div style={{ position:'absolute', top:90,  left:8,   width:16, height:16, background:GREEN, borderRadius:3 }} />
    <div style={{ position:'absolute', top:90,  left:34,  width:44, height:9,  background:BLUE,  borderRadius:5 }} />
    <div style={{ position:'absolute', top:118, left:18,  width:12, height:12, background:GREEN, borderRadius:3 }} />
    <div style={{ position:'absolute', top:117, left:40,  width:60, height:9,  background:DBLUE, borderRadius:5 }} />
    <div style={{ position:'absolute', top:117, left:110, width:28, height:9,  background:LGRAY, borderRadius:5 }} />
  </motion.div>
)

/* ─── Mockup 3: Medium, dark header + green icon + blue bars ─── */
const M3 = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.26 }}
    style={{
      width: 178,
      background: '#fff',
      borderRadius: 10,
      overflow: 'hidden',
      boxShadow: '0 8px 32px rgba(45,55,72,0.12)',
    }}
  >
    {/* Dark header */}
    <div style={{ background: NAVY, height: 24, display: 'flex', alignItems: 'center', padding: '0 8px', gap: 6 }}>
      <div style={{ flex: 1, height: 4, background: 'rgba(255,255,255,0.15)', borderRadius: 2 }} />
      <div style={{ width: 24, height: 7, background: DBLUE, borderRadius: 3 }} />
    </div>
    {/* Body */}
    <div style={{ padding: '10px 10px 10px' }}>
      {/* Green square + blue bar row */}
      <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginBottom: 8 }}>
        <div style={{ width: 16, height: 16, background: GREEN, borderRadius: 3, flexShrink: 0 }} />
        <div style={{ flex: 1, height: 5, background: DBLUE, borderRadius: 3 }} />
      </div>
      {/* Content rows */}
      {[90, 60, 80, 45, 70].map((w, i) => (
        <div key={i} style={{ display: 'flex', gap: 6, alignItems: 'center', marginBottom: 5 }}>
          <div style={{ height: 4, width: `${w}%`, background: i % 2 === 0 ? GREEN : BLUE, borderRadius: 2 }} />
          <div style={{ flex: 1, height: 4, background: LGRAY, borderRadius: 2 }} />
        </div>
      ))}
    </div>
  </motion.div>
)

/* ─── Mockup 4: Smallest — layered cards, bar chart, blue checkmark ─── */
const M4 = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.39 }}
    style={{ position: 'relative', width: 130, height: 120 }}
  >
    {/* Background shadow card */}
    <div style={{
      position: 'absolute', bottom: 0, right: 0,
      width: 104, height: 88,
      background: '#F7FAFC',
      borderRadius: 10,
      boxShadow: '0 4px 12px rgba(0,0,0,0.07)',
    }} />
    {/* Foreground white card */}
    <div style={{
      position: 'absolute', top: 0, left: 0,
      width: 108, height: 96,
      background: '#fff',
      borderRadius: 10,
      boxShadow: '0 8px 24px rgba(45,55,72,0.13)',
      padding: '12px 10px 10px',
    }}>
      {/* Bar chart */}
      <div style={{ display: 'flex', gap: 4, alignItems: 'flex-end', height: 48, marginBottom: 8 }}>
        {[50, 80, 60, 100, 40].map((h, i) => (
          <motion.div key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 + 0.5, duration: 0.5, ease: 'easeOut' }}
            style={{
              flex: 1,
              background: i === 3 ? DBLUE : i === 1 ? CBLUE : LGRAY,
              borderRadius: '3px 3px 0 0',
              minHeight: 3,
            }}
          />
        ))}
      </div>
      <div style={{ height: 4, background: LGRAY, borderRadius: 2, marginBottom: 4 }} />
      <div style={{ height: 4, background: LGRAY, borderRadius: 2, width: '55%' }} />
    </div>
    {/* Blue checkmark badge */}
    <div style={{
      position: 'absolute', top: -4, right: -4,
      width: 26, height: 26,
      background: DBLUE,
      borderRadius: '50%',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: '#fff', fontSize: 13, fontWeight: 700,
      boxShadow: '0 2px 8px rgba(66,153,225,0.45)',
    }}>✓</div>
  </motion.div>
)

/* ─── Dashed curved arrows — light blue, exactly like image ─── */

/* Arrow 1→2: arcs upward (n-shape) */
const Arrow1 = () => (
  <motion.svg
    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
    transition={{ delay: 0.2 }}
    width="100" height="56" viewBox="0 0 100 56" fill="none"
    style={{ flexShrink: 0, marginBottom: 32 }}
  >
    <path
      d="M4 48 C 18 48, 22 10, 50 10 C 78 10, 82 48, 96 48"
      stroke={CBLUE} strokeWidth="1.5" strokeDasharray="5 4"
      fill="none" strokeLinecap="round"
    />
    {/* Arrowhead at right end pointing right-down */}
    <path d="M91 44 L96 48 L91 52" stroke={CBLUE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </motion.svg>
)

/* Arrow 2→3: arcs downward (u-shape) */
const Arrow2 = () => (
  <motion.svg
    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
    transition={{ delay: 0.35 }}
    width="100" height="56" viewBox="0 0 100 56" fill="none"
    style={{ flexShrink: 0, marginTop: 32 }}
  >
    <path
      d="M4 8 C 18 8, 22 46, 50 46 C 78 46, 82 8, 96 8"
      stroke={CBLUE} strokeWidth="1.5" strokeDasharray="5 4"
      fill="none" strokeLinecap="round"
    />
    <path d="M91 4 L96 8 L91 12" stroke={CBLUE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </motion.svg>
)

/* Arrow 3→4: arcs upward again */
const Arrow3 = () => (
  <motion.svg
    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
    transition={{ delay: 0.5 }}
    width="100" height="56" viewBox="0 0 100 56" fill="none"
    style={{ flexShrink: 0, marginBottom: 32 }}
  >
    <path
      d="M4 48 C 18 48, 22 10, 50 10 C 78 10, 82 48, 96 48"
      stroke={CBLUE} strokeWidth="1.5" strokeDasharray="5 4"
      fill="none" strokeLinecap="round"
    />
    <path d="M91 44 L96 48 L91 52" stroke={CBLUE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </motion.svg>
)

const STEPS = [
  { mockup: <M1 />, label: 'Upload your dataset',       arrow: <Arrow1 /> },
  { mockup: <M2 />, label: 'Ask in plain\nEnglish',     arrow: <Arrow2 /> },
  { mockup: <M3 />, label: 'Get interactive\ncharts',   arrow: <Arrow3 /> },
  { mockup: <M4 />, label: 'Export & share\ninsights',  arrow: null },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ padding: '80px 24px 100px', background: '#fff' }}>
      <div style={{
            display: 'inline-block', background: 'rgba(255,107,53,0.1)',
            border: '1px solid rgba(255,107,53,0.25)',
            padding: '5px 14px', borderRadius: '100px', marginBottom: '20px',
            textAlign: 'center', marginLeft: '50%', transform: 'translateX(-50%)',
          }}>
            <span style={{ fontSize: '11px', color: 'var(--accent-orange)', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', fontFamily: 'var(--font-body)' }}>
              Working 
            </span>
        </div>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
         <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 'clamp(30px,4vw,44px)',
            fontWeight: '800',
            color: '#1A202C',
            letterSpacing: '-1px',
            marginBottom: '16px',
            lineHeight: 1.1,
          }}>How it works</h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '15px',
            color: '#718096',
            lineHeight: 1.7,
            maxWidth: '480px',
            margin: '0 auto',
          }}>
            Upload any CSV file, ask questions in plain English, and get instant charts and insights — no code required.
          </p>
        </div>

        {/* Steps row */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }} className="hiw-row">
          {STEPS.map((step, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
              {/* Step: mockup + label below */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
                {step.mockup}
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '13px',
                  color: '#4A5568',
                  textAlign: 'center',
                  margin: 0,
                  lineHeight: 1.5,
                  whiteSpace: 'pre-line',
                }}>{step.label}</p>
              </div>
              {/* Arrow after step (except last) */}
              {step.arrow && <div style={{ flexShrink: 0 }}>{step.arrow}</div>}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 680px) {
          .hiw-row { flex-direction: column !important; gap: 40px !important; }
          .hiw-row svg { display: none !important; }
        }
      `}</style>
    </section>
  )
}