import React from 'react'
import Servicesheader from '../components/services/Servicesheader'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Details from '../components/services/Details'
import Structure from '../components/services/Structure'
import Strategy from '../components/services/Strategy'

const Services = () => {
  return (
    <section>
      <Navbar />
      <Servicesheader />
      <Details />
      <Structure />
      <Strategy />
      <Footer />
    </section>
  )
}

export default Services