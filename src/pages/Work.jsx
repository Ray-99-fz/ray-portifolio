import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Workheader from '../components/work/Workheader'
import Projectstructure from '../components/work/Projectstructure'
import CTAwork from '../components/work/CTAwork'
import Disclaimer from '../components/work/Disclaimer'

const Work = () => {
  return (
    <section>
      <Navbar />
      <Workheader />
      <Projectstructure />
      <Disclaimer />
      <CTAwork />
      <Footer />
    </section>
  )
}

export default Work