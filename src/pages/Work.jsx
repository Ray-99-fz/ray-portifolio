import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Workheader from '../components/work/Workheader'
import Projectstructure from '../components/work/Projectstructure'
import CTAwork from '../components/work/CTAwork'
import Disclaimer from '../components/work/Disclaimer'
import AchievedWorks from '../components/work/AchievedWorks'
import Reveal from '../components/Reveal'
import PageTransition from '../components/PageTransition'

const Work = () => {
  return (
    <PageTransition>
      <section>
        <Navbar />
        <Reveal>
          <Workheader />
        </Reveal>
        <Reveal>
          <Projectstructure />
        </Reveal>
        <AchievedWorks />
        <Reveal>
          <Disclaimer />
        </Reveal>
        <Reveal>
          <CTAwork />
        </Reveal>
        <Footer />
      </section>
    </PageTransition>
  )
}

export default Work