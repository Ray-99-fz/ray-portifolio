import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Header from '../components/contact/Header'
import Contactdetails from '../components/contact/Contactdetails'
import Followup from '../components/contact/Followup'
import Reveal from '../components/Reveal'
import PageTransition from '../components/PageTransition'


const Contact = () => {
  return (
    <PageTransition>
      <section>
        <Navbar />
        <Reveal>
          <Header />
        </Reveal>
        <Reveal>
          <Contactdetails />
        </Reveal>
        <Reveal>
          <Followup />
        </Reveal>
        <Footer />
      </section>
    </PageTransition>
  )
}

export default Contact