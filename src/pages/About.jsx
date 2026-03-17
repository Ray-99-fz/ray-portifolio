import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Aboutheader from '../components/about/Aboutheader'
import Philosophy from '../components/about/Philosophy'
import Capabilities from '../components/about/Capabilities'
import Advantages from '../components/about/Advantages'
import Framework from '../components/about/Framework'
import Vision from '../components/about/Vision'
import Trajectory from '../components/about/Trajectory'
import Final from '../components/about/Final'
import Reveal from '../components/Reveal'
import PageTransition from '../components/PageTransition'

const About = () => {
  return (
    <PageTransition>
      <section>
        <Navbar />
        <Reveal>
          <Aboutheader />
        </Reveal>
        <Reveal>
          <Philosophy />
        </Reveal>
        <Reveal>
          <Capabilities />
        </Reveal>
        <Reveal>
          <Advantages />
        </Reveal>
        <Reveal>
          <Framework />
        </Reveal>
        <Reveal>
          <Vision />
        </Reveal>
        <Reveal>
          <Trajectory />
        </Reveal>
        <Reveal>
          <Final />
        </Reveal>
        <Footer />
      </section>
    </PageTransition>
  )
}

export default About