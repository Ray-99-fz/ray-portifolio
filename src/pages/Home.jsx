import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/home/Hero'
import Personality from '../components/home/Personality'
import Target from '../components/home/Target'
import Framework from '../components/home/Framework'
import CTA from '../components/home/CTA'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'
import PageTransition from '../components/PageTransition'


const Home = () => {
  return (
    <PageTransition>
      <section>
        <Navbar />
        <Reveal>
          <Hero />
        </Reveal>
        <Reveal>
          <Personality />
        </Reveal>
        <Reveal>
          <Target />
        </Reveal>
        <Reveal>
          <Framework />
        </Reveal>
        <Reveal>
          <CTA />
        </Reveal>
        <Footer />
      </section>
    </PageTransition>
  )
}

export default Home