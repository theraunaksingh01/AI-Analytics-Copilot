'use client'

import { motion } from 'framer-motion'

/* ══════════════════════════════════════════════════════════
   Features — pixel-faithful to reference image 2.

   Exact layout (inside white outer card on gray bg):
   ┌──────────────────┬──────────────────────────────────┐
   │                  │  PINK — wide (title left,        │
   │  LAVENDER        │  wallet illus right)             │
   │  (tall 2 rows)   ├─────────────────┬────────────────┤
   │  title top-left  │  YELLOW         │ LT GREEN       │
   │  illus center    │  title+desc+    │ title+desc     │
   │  desc bottom     │  target illus   │ only (rows)    │
   ├──────────────────┴─────────────────┼────────────────┤
   │  PEACH (wide ~60%)                 │ BLUE-GRAY      │
   │  title btm-left + people illus rt  │ title+desc+    │
   │                                    │ search illus   │
   └────────────────────────────────────┴────────────────┘

   Illustrations are built from CSS shapes + emoji — no images needed.
══════════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────────────────────
   Illustration: Person standing in front of large data card
   (lavender card) — using CSS shapes
───────────────────────────────────────────────────────── */
const IlluDataPerson = () => (
  <div style={{ position: 'relative', width: '100%', height: 170, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    {/* Big purple card behind */}
    <div style={{ position: 'absolute', width: 140, height: 90, background: 'linear-gradient(135deg, #7C3AED, #6D28D9)', borderRadius: 14, bottom: 10, left: '50%', transform: 'translateX(-50%)' }}>
      <div style={{ position: 'absolute', bottom: 10, left: 14, right: 14, height: 8, background: 'rgba(255,255,255,0.25)', borderRadius: 4 }} />
      <div style={{ position: 'absolute', top: 14, left: 14, width: 28, height: 18, background: 'rgba(255,255,255,0.2)', borderRadius: 4 }} />
    </div>
    {/* Coin circle */}
    <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-82px)', top: 18, width: 48, height: 48, borderRadius: '50%', background: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <span style={{ fontSize: 22, color: '#fff' }}>$</span>
    </div>
    {/* Standing person */}
    <div style={{ position: 'absolute', bottom: 8, left: '50%', transform: 'translateX(10px)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
      {/* Head */}
      <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#FBBF24', marginBottom: 2 }} />
      {/* Body */}
      <div style={{ width: 22, height: 34, background: '#4C1D95', borderRadius: '6px 6px 0 0' }} />
      {/* Legs */}
      <div style={{ display: 'flex', gap: 4 }}>
        <div style={{ width: 8, height: 18, background: '#1E1B4B', borderRadius: '0 0 3px 3px' }} />
        <div style={{ width: 8, height: 18, background: '#1E1B4B', borderRadius: '0 0 3px 3px' }} />
      </div>
    </div>
  </div>
)

/* ─────────────────────────────────────────────────────────
   Illustration: Hands holding a wallet/card (pink card)
───────────────────────────────────────────────────────── */
const IlluWallet = () => (
  <div style={{ position: 'relative', width: 110, height: 90, flexShrink: 0 }}>
    {/* Cards stacked */}
    <div style={{ position: 'absolute', top: 18, right: 0, width: 72, height: 46, background: '#FDA4AF', borderRadius: 9, transform: 'rotate(-10deg)' }} />
    <div style={{ position: 'absolute', top: 8, right: 6, width: 72, height: 46, background: '#F43F5E', borderRadius: 9, boxShadow: '0 4px 16px rgba(244,63,94,0.3)' }}>
      <div style={{ position: 'absolute', top: 10, right: 10, width: 14, height: 14, borderRadius: '50%', background: 'rgba(255,255,255,0.35)' }} />
      <div style={{ position: 'absolute', bottom: 8, left: 8, right: 8, height: 5, background: 'rgba(255,255,255,0.25)', borderRadius: 3 }} />
    </div>
    {/* Hand shapes */}
    <div style={{ position: 'absolute', bottom: 0, left: 4, width: 50, height: 22, background: '#FEE2E2', borderRadius: '12px 12px 0 0', opacity: 0.8 }} />
    <div style={{ position: 'absolute', bottom: 0, left: 0, width: 40, height: 16, background: '#FECACA', borderRadius: '10px 10px 0 0', opacity: 0.6 }} />
  </div>
)

/* ─────────────────────────────────────────────────────────
   Illustration: Target / Bullseye (yellow card)
───────────────────────────────────────────────────────── */
const IlluTarget = () => (
  <div style={{ display: 'flex', justifyContent: 'center', marginTop: 8 }}>
    <div style={{ position: 'relative', width: 80, height: 80 }}>
      {/* Rings */}
      {[80, 60, 40, 20].map((s, i) => (
        <div key={i} style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%,-50%)',
          width: s, height: s, borderRadius: '50%',
          border: `2.5px solid ${['#FCD34D','#FBBF24','#F59E0B','#D97706'][i]}`,
          background: i === 3 ? '#D97706' : 'transparent',
        }} />
      ))}
      {/* Arrow diagonal */}
      <div style={{
        position: 'absolute', top: '50%', left: '30%',
        width: 36, height: 2.5, background: '#78350F',
        transformOrigin: 'left center',
        transform: 'rotate(-40deg) translateY(-50%)',
      }}>
        <div style={{
          position: 'absolute', right: -1, top: -3,
          borderLeft: '7px solid #78350F',
          borderTop: '4px solid transparent',
          borderBottom: '4px solid transparent',
        }} />
      </div>
    </div>
  </div>
)

/* ─────────────────────────────────────────────────────────
   Illustration: Boarding-pass style rows (light green card)
───────────────────────────────────────────────────────── */
const IlluRows = () => (
  <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
    {[
      { leftIcon: '→', w1: 70, w2: 80 },
      { leftIcon: '←', w1: 55, w2: 65 },
    ].map((r, i) => (
      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#4ADE80', borderRadius: 7, padding: '8px 10px' }}>
        <div style={{ width: 20, height: 20, background: '#166534', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <span style={{ color: '#4ADE80', fontSize: 11, fontWeight: 700 }}>{r.leftIcon}</span>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 3 }}>
          <div style={{ height: 5, background: 'rgba(255,255,255,0.6)', borderRadius: 3, width: `${r.w1}%` }} />
          <div style={{ height: 4, background: 'rgba(255,255,255,0.35)', borderRadius: 3, width: `${r.w2}%` }} />
        </div>
      </div>
    ))}
  </div>
)

/* ─────────────────────────────────────────────────────────
   Illustration: Two people + dashboard (peach card)
───────────────────────────────────────────────────────── */
const IlluTeam = () => (
  <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, marginTop: 8, flexShrink: 0 }}>
    {/* Person 1 - orange shirt */}
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
      <div style={{ width: 20, height: 20, borderRadius: '50%', background: '#F97316' }} />
      <div style={{ width: 26, height: 36, background: '#EA580C', borderRadius: '8px 8px 0 0' }}>
        {/* Arm raised */}
        <div style={{ width: 8, height: 20, background: '#EA580C', borderRadius: 4, position: 'relative', top: -14, left: 18, transform: 'rotate(-30deg)' }} />
      </div>
    </div>
    {/* Dashboard board in middle */}
    <div style={{ background: '#FB923C', borderRadius: 10, padding: 8, width: 100 }}>
      <div style={{ background: 'rgba(255,255,255,0.3)', borderRadius: 4, height: 12, marginBottom: 5 }} />
      {/* Mini bar chart */}
      <div style={{ display: 'flex', gap: 3, alignItems: 'flex-end', height: 30 }}>
        {[60, 100, 70, 85, 50].map((h, i) => (
          <div key={i} style={{ flex: 1, background: i === 1 ? '#fff' : 'rgba(255,255,255,0.4)', borderRadius: '2px 2px 0 0', height: `${h}%` }} />
        ))}
      </div>
      {/* Gear icons */}
      {[0,1].map(i => (
        <div key={i} style={{ position: 'absolute', top: i * 22, right: -8 - i*12, width: 14+i*4, height: 14+i*4, borderRadius: '50%', border: '2px solid #FB923C', background: 'transparent' }} />
      ))}
    </div>
    {/* Person 2 - yellow */}
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
      <div style={{ width: 20, height: 20, borderRadius: '50%', background: '#FBBF24' }} />
      <div style={{ width: 26, height: 36, background: '#F59E0B', borderRadius: '8px 8px 0 0' }} />
    </div>
  </div>
)

/* ─────────────────────────────────────────────────────────
   Illustration: Globe + chart + search bar + chat (blue card)
───────────────────────────────────────────────────────── */
const IlluSearch = () => (
  <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8 }}>
    {/* Top row: globe + bar chart + chat bubble icons */}
    <div style={{ display: 'flex', gap: 8, alignItems: 'center', justifyContent: 'flex-end' }}>
      <span style={{ fontSize: 22 }}>🌐</span>
      <span style={{ fontSize: 22 }}>📊</span>
      {/* Chat bubble */}
      <div style={{ background: '#3B82F6', borderRadius: '10px 10px 10px 2px', padding: '6px 10px', display: 'flex', alignItems: 'center' }}>
        <div style={{ width: 28, height: 5, background: 'rgba(255,255,255,0.8)', borderRadius: 3 }} />
      </div>
    </div>
    {/* Search bar — like image */}
    <div style={{
      background: '#fff',
      border: '2px solid #3B82F6',
      borderRadius: 10,
      padding: '8px 12px',
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      boxShadow: '0 2px 12px rgba(59,130,246,0.2)',
    }}>
      <div style={{ flex: 1, height: 5, background: '#BFDBFE', borderRadius: 3 }} />
      <div style={{
        width: 28, height: 28, borderRadius: 7,
        background: '#3B82F6',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#fff', fontSize: 14,
      }}>🔍</div>
    </div>
    {/* Blue cursor arrow */}
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <div style={{ width: 0, height: 0, borderLeft: '8px solid transparent', borderRight: '8px solid transparent', borderTop: '14px solid #3B82F6', transform: 'rotate(20deg)' }} />
    </div>
  </div>
)

/* ════════════════════════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════════════════════════ */
export default function Features() {
  return (
    <section id="capabilities" style={{ padding: '80px 24px', background: '#ffffff' }}>
        <div style={{
            display: 'inline-block', background: 'rgba(255,107,53,0.1)',
            border: '1px solid rgba(255,107,53,0.25)',
            padding: '5px 14px', borderRadius: '100px', marginBottom: '40px',
            textAlign: 'center', marginLeft: '50%', transform: 'translateX(-50%)',
          }}>
            <span style={{ fontSize: '11px', color: 'var(--accent-orange)', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', fontFamily: 'var(--font-body)' }}>
              Features 
            </span>
        </div>
      <div style={{ maxWidth: '1220px', margin: '0 auto' }}>

        {/* ── Outer white rounded container  ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          style={{
            background: '#fff',
            borderRadius: 28,
            padding: 20,
            boxShadow: '0 4px 40px rgba(0,0,0,0.08)',
          }}
        >
          {/* ── Inner bento grid ── */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gridTemplateRows: 'auto auto auto',
            gap: 14,
            gridTemplateAreas: `
              "c1 c2 c2"
              "c1 c3 c4"
              "c5 c5 c6"
            `,
          }} className="bento-grid">

            {/* ── C1: LAVENDER — tall, title top, person+card illus center, desc bottom ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.05 }}
              style={{ gridArea: 'c1', background: '#EDE9FE', borderRadius: 20, padding: '24px 20px', display: 'flex', flexDirection: 'column', minHeight: 360 }}
            >
              <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 24, fontWeight: 800, color: '#111827', lineHeight: 1.2, marginBottom: 0, letterSpacing: '-0.5px' }}>
                Instant Data<br />Profiling
              </h3>
              {/* Illustration center */}
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <IlluDataPerson />
              </div>
              {/* Desc bottom */}
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: '#374151', lineHeight: 1.65, margin: 0 }}>
                Upload and instantly see row counts, column types, missing values, and AI-suggested questions to get started.
              </p>
            </motion.div>

            {/* ── C2: PINK — wide, title+desc left, wallet illus right ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.1 }}
              style={{ gridArea: 'c2', background: '#FFE4E6', borderRadius: 20, padding: '24px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}
            >
              <div style={{ flex: 1 }}>
                <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 22, fontWeight: 800, color: '#111827', lineHeight: 1.2, marginBottom: 10, letterSpacing: '-0.5px' }}>
                  Self-Healing AI
                </h3>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: '#4B1225', lineHeight: 1.65, maxWidth: 200 }}>
                  Code fails? The AI auto-debugs & retries up to 3 times — so you always get an answer.
                </p>
              </div>
              <IlluWallet />
            </motion.div>

            {/* ── C3: YELLOW — title+desc top, target illus ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.15 }}
              style={{ gridArea: 'c3', background: '#FEF9C3', borderRadius: 20, padding: '22px 20px', display: 'flex', flexDirection: 'column' }}
            >
              <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 20, fontWeight: 800, color: '#111827', lineHeight: 1.2, marginBottom: 8, letterSpacing: '-0.5px' }}>
                Set Analysis<br />Goals
              </h3>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: '#78350F', lineHeight: 1.6, marginBottom: 0 }}>
                Track targets like revenue or churn reduction as you explore.
              </p>
              <IlluTarget />
            </motion.div>

            {/* ── C4: LIGHT GREEN — title top, desc, boarding-pass rows ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.2 }}
              style={{ gridArea: 'c4', background: '#DCFCE7', borderRadius: 20, padding: '22px 20px', display: 'flex', flexDirection: 'column' }}
            >
              <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 20, fontWeight: 800, color: '#111827', lineHeight: 1.2, marginBottom: 8, letterSpacing: '-0.5px' }}>
                Export<br />Everything
              </h3>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: '#14532D', lineHeight: 1.6 }}>
                Download charts & CSV files and full PDF reports.
              </p>
              <IlluRows />
            </motion.div>

            {/* ── C5: PEACH — wide, title+desc btm-left, team illus right ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.25 }}
              style={{ gridArea: 'c5', background: '#FFE4CC', borderRadius: 20, padding: '28px 24px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 12, minHeight: 200, position: 'relative' }}
            >
              <div>
                <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 24, fontWeight: 800, color: '#111827', lineHeight: 1.2, marginBottom: 10, letterSpacing: '-0.5px' }}>
                  Multi-Turn<br />Memory
                </h3>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: '#431407', lineHeight: 1.65, maxWidth: 200 }}>
                  Follow-up questions that build on context — like talking to a real analyst.
                </p>
              </div>
              <div style={{ position: 'relative' }}>
                <IlluTeam />
              </div>
            </motion.div>

            {/* ── C6: BLUE-GRAY — title+desc top, search illus bottom ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.3 }}
              style={{ gridArea: 'c6', background: '#E0F2FE', borderRadius: 20, padding: '24px 20px', display: 'flex', flexDirection: 'column' }}
            >
              <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 22, fontWeight: 800, color: '#111827', lineHeight: 1.2, marginBottom: 8, letterSpacing: '-0.5px' }}>
                Find, Compare<br />&amp; Apply
              </h3>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: '#0C4A6E', lineHeight: 1.65 }}>
                Instantly filter segments and compare time periods side by side.
              </p>
              <IlluSearch />
            </motion.div>

          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .bento-grid {
            grid-template-columns: 1fr 1fr !important;
            grid-template-areas:
              "c1 c2"
              "c1 c3"
              "c4 c4"
              "c5 c5"
              "c6 c6" !important;
          }
        }
        @media (max-width: 500px) {
          .bento-grid {
            grid-template-columns: 1fr !important;
            grid-template-areas: "c1" "c2" "c3" "c4" "c5" "c6" !important;
          }
        }
      `}</style>
    </section>
  )
}