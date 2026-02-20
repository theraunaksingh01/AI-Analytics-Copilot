'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface NavLink {
  label: string
  href: string
}

const navLinks: NavLink[] = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Examples', href: '#examples' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

/* ── Colour tokens (no CSS vars to avoid resolution issues) ── */
const C = {
  // transparent state — sit on dark hero
  topLogo:    '#F0F4FF',
  topLink:    '#C8D0E0',
  topLinkHov: '#FFFFFF',
  topSignIn:  '#C8D0E0',
  topSignInHov:'#FFFFFF',
  // pill state — sit on white pill
  pillLogo:   '#111111',
  pillLink:   '#555555',
  pillLinkHov:'#111111',
  // always
  accent:     '#FF6B35',
  accentEnd:  '#FF8C61',
  // hamburger bars
  topBar:     '#F0F4FF',   // on dark bg
  pillBar:    '#1a1a1a',   // on white pill
  // mobile menu bg
  mobileBg:   '#080B10',
  mobileLink: '#F0F4FF',
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false)
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const barColor = scrolled ? C.pillBar : C.topBar

  return (
    <>


      {/* ─── Main Navbar wrapper ─────────────────────────────── */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          padding: scrolled ? '12px 24px' : '0',
          transition: 'padding 0.45s cubic-bezier(0.22,1,0.36,1)',
          pointerEvents: 'none',
        }}
      >
        {/* ── Inner pill / full-width container ── */}
        <motion.div
          animate={scrolled ? {
            maxWidth: '820px',
            borderRadius: 100,
            background: 'rgba(255,255,255,0.97)',
            boxShadow: '0 4px 32px rgba(0,0,0,0.13)',
            paddingTop: '8px', paddingBottom: '8px',
            paddingLeft: '16px', paddingRight: '16px',
            marginTop: '12px',
          } : {
            maxWidth: '1200px',
            borderRadius: 0,
            background: 'transparent',
            boxShadow: 'none',
            paddingTop: '22px', paddingBottom: '22px',
            paddingLeft: '24px', paddingRight: '24px',
            marginTop: '0px',
          }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          style={{
            margin: '0 auto', width: '100%',
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-between',
            pointerEvents: 'all',
          }}
        >
          {/* Logo */}
          <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '9px', flexShrink: 0 }}>
            <div style={{
              width: '34px', height: '34px',
              background: 'linear-gradient(135deg, #FF6B35, #FFB347)',
              borderRadius: '10px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '15px', fontWeight: '800', color: '#fff',
              fontFamily: "'Syne', sans-serif",
            }}>D</div>
            <span style={{
              fontFamily: "'Syne', sans-serif", fontWeight: '700',
              fontSize: '17px', letterSpacing: '-0.3px',
              color: scrolled ? C.pillLogo : '#111111',
              transition: 'color 0.3s',
            }}>DataLyze</span>
          </a>

          {/* Desktop links — CSS class handles color via data attribute */}
          <div className="dl-desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '26px' }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                data-scrolled={scrolled ? '1' : '0'}
                className="dl-nav-link"
                style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: '14px', fontWeight: '500',
                  textDecoration: 'none', whiteSpace: 'nowrap',
                  color: scrolled ? C.pillLink : '#111111',
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side actions */}
          <div className="dl-desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>

            {/* Sign in — fades out when scrolled */}
            <AnimatePresence>
              {!scrolled && (
                <motion.a
                  key="signin"
                  href="#"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.22 }}
                  style={{
                    fontFamily: "'DM Sans', sans-serif", fontSize: '14px', fontWeight: '500',
                    color: '#111111', textDecoration: 'none',
                    whiteSpace: 'nowrap', overflow: 'hidden',
                    display: 'inline-block',
                  }}
                >Sign in</motion.a>
              )}
            </AnimatePresence>

            {/* CTA button */}
            <a
              href="#"
              style={{
                background: `linear-gradient(135deg, ${C.accent}, ${C.accentEnd})`,
                color: '#fff',
                textDecoration: 'none',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: '600',
                fontSize: scrolled ? '13px' : '14px',
                whiteSpace: 'nowrap',
                display: 'inline-block',
                padding: scrolled ? '8px 20px' : '9px 20px',
                borderRadius: scrolled ? '100px' : '8px',
                boxShadow: '0 4px 14px rgba(255,107,53,0.35)',
                transition: 'all 0.35s ease, opacity 0.2s, transform 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
            >Get Started Free</a>
          </div>

          {/* Hamburger (mobile only) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="dl-hamburger"
            aria-label="Toggle menu"
            style={{
              display: 'none', background: 'none', border: 'none',
              cursor: 'pointer', padding: '4px',
              flexDirection: 'column', gap: '5px', flexShrink: 0,
            }}
          >
            <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }}
              style={{ display: 'block', width: '22px', height: '2px', background: barColor, borderRadius: '2px', transformOrigin: 'center', transition: 'background 0.3s' }} />
            <motion.span animate={{ opacity: menuOpen ? 0 : 1 }}
              style={{ display: 'block', width: '22px', height: '2px', background: barColor, borderRadius: '2px', transition: 'background 0.3s' }} />
            <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }}
              style={{ display: 'block', width: '22px', height: '2px', background: barColor, borderRadius: '2px', transformOrigin: 'center', transition: 'background 0.3s' }} />
          </button>
        </motion.div>
      </motion.nav>

      {/* ─── Mobile full-screen menu ─────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            animate={{ opacity: 1, clipPath: 'circle(160% at calc(100% - 40px) 40px)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed', inset: 0, zIndex: 999,
              background: C.mobileBg,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
            }}
          >
            {/* Top bar */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0,
              padding: '18px 20px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '30px', height: '30px', background: 'linear-gradient(135deg,#FF6B35,#FFB347)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '800', color: '#fff', fontFamily: "'Syne',sans-serif" }}>D</div>
                <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: '700', fontSize: '16px', color: '#F0F4FF' }}>DataLyze</span>
              </div>
              <button onClick={() => setMenuOpen(false)}
                style={{ background: 'rgba(255,255,255,0.08)', border: 'none', width: '38px', height: '38px', borderRadius: '50%', cursor: 'pointer', color: '#fff', fontSize: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
            </div>

            {/* Nav links */}
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 + 0.15, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontFamily: "'Syne',sans-serif",
                  fontSize: 'clamp(28px,9vw,42px)',
                  fontWeight: '700', color: C.mobileLink,
                  textDecoration: 'none', padding: '10px 0', letterSpacing: '-1px',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = C.accent)}
                onMouseLeave={(e) => (e.currentTarget.style.color = C.mobileLink)}
              >{link.label}</motion.a>
            ))}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              style={{ marginTop: '40px', width: '100%', padding: '0 36px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}
            >
              <a href="#" onClick={() => setMenuOpen(false)} style={{
                display: 'block', width: '100%', textAlign: 'center',
                background: `linear-gradient(135deg,${C.accent},${C.accentEnd})`,
                color: '#fff', padding: '15px', borderRadius: '14px',
                textDecoration: 'none', fontFamily: "'DM Sans',sans-serif",
                fontSize: '16px', fontWeight: '600',
                boxShadow: '0 8px 24px rgba(255,107,53,0.35)',
              }}>Get Started Free</a>
              <a href="#" onClick={() => setMenuOpen(false)} style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '14px', color: 'rgba(240,244,255,0.45)', textDecoration: 'none' }}>Sign in →</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 860px) {
          .dl-desktop-nav { display: none !important; }
          .dl-hamburger   { display: flex !important; }
        }
        .dl-nav-link[data-scrolled="0"]:hover { color: #FF6B35 !important; }
        .dl-nav-link[data-scrolled="1"]:hover { color: #111111 !important; }
      `}</style>
    </>
  )
}