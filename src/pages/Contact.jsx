import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Header from '../components/contact/Header'
import Contactdetails from '../components/contact/Contactdetails'
import Followup from '../components/contact/Followup'


const Contact = () => {
  return (
    <section>
      <Navbar />
      <Header />
      <Contactdetails />
      <Followup />
      <Footer />
    </section>
  )
}

export default Contact