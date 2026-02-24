import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/home/Hero'
import Personality from '../components/home/Personality'
import Target from '../components/home/Target'
import Framework from '../components/home/Framework'
import CTA from '../components/home/CTA'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <section>
        <Navbar />
        <Hero />
        <Personality />
        <Target />
        <Framework />
        <CTA />
        <Footer />
    </section>
  )
}

export default Home