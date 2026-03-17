import React from 'react'
import Servicesheader from '../components/services/Servicesheader'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Details from '../components/services/Details'
import Structure from '../components/services/Structure'
import Strategy from '../components/services/Strategy'
import Reveal from '../components/Reveal'
import PageTransition from '../components/PageTransition'

const Services = () => {
  return (
    <PageTransition>
      <section>
        <Navbar />
        <Reveal>
          <Servicesheader />
        </Reveal>
        <Reveal>
          <Details />
        </Reveal>
        <Reveal>
          <Structure />
        </Reveal>
        <Reveal>
          <Strategy />
        </Reveal>
        <Footer />
      </section>
    </PageTransition>
  )
}

export default Services