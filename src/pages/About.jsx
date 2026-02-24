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

const About = () => {
  return (
    <section>
      <Navbar />
      <Aboutheader />
      <Philosophy />
      <Capabilities />
      <Advantages />
      <Framework />
      <Vision />
      <Trajectory />
      <Final />
      <Footer />
    </section>
  )
}

export default About