import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Stats from './components/Stats'
import Examples from './components/Examples'
// import Testimonials from './components/Testimonials'
// import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
// import CTA from './components/CTA'
// import Footer from './components/Footer'
import Upload from './components/Upload'
  

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <HowItWorks />
        <Stats />
        {/* <Testimonials />
        <Pricing />
        <FAQ />
        <CTA /> */} 
        <Upload />
        <Examples />
        <FAQ />

      </main>
      {/* <Footer /> */}
    </>
  )
}