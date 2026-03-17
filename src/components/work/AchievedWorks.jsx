import React from 'react'
import Reveal from '../Reveal'
import ProjectCard from './ProjectCard'
import digitalArtsImg from '../../assets/digitalarts.png'
import flexImg from '../../assets/flex.png'
import codebase from '../../assets/codebase.png'

const achievedProjects = [
  {
  id: 'digital-arts-academy',
  screenshotSrc: digitalArtsImg, // import this from your assets
  screenshotAlt: 'Digital Arts Academy e-learning platform preview',
  title: 'Digital Arts Academy',
  description:
    'Digital Arts Academy is an e-learning platform focused on empowering Malawian youth with practical digital skills, including 3D design (Blender), film fundamentals, dynamic sketching, and game development. The platform is designed to help users build career paths in freelancing, entrepreneurship, and the creative industry.',
  techStack: [
    'PostgreSQL',
    'Express',
    'React',
    'Node.js',
    'Vite',
    'Tailwind CSS'
  ],
  liveUrl: 'https://digital-arts-mwi.vercel.app/#/',
  githubUrl: 'https://github.com/Ray-99-fz/digitalartsmw',
  status: 'In Development'
},
  {
  id: 'flex-consultancy',
  screenshotSrc: flexImg, // import from your assets
  screenshotAlt: 'Flex Consultancy services website preview',
  title: 'Flex Consultancy',
  description:
    'A modern service-based website built for a consultancy firm specializing in property valuation, management, and data processing. The platform is designed to clearly showcase services, improve client engagement, and drive conversions through a streamlined user experience.',
  techStack: [
    'React',
    'Vite',
    'Tailwind CSS',
    'EmailJS'
  ],
  liveUrl: 'https://flex-designs-mwi.vercel.app/',
  githubUrl: 'https://github.com/Ray-99-fz/flexconsultancy',
  status: 'Completed',
},
  {
  id: 'rays-codebase',
  screenshotSrc: codebase, // import from your assets
  screenshotAlt: "Ray's Codebase web development learning platform preview",
  title: "Ray's Codebase",
  description:
    "Ray's Codebase is a tech-focused learning platform aimed at empowering Malawian youth with practical web development skills. It provides structured learning paths starting from HTML, CSS, and JavaScript fundamentals, progressing into advanced concepts using modern frameworks like React and backend technologies. The platform is designed to help learners transition into freelancing, employment, or career changes through in-demand digital skills.",
  techStack: [
    'React',
    'Vite',
    'Tailwind CSS',
    'EmailJS',
    'Supabase (planned)'
  ],
  liveUrl: 'https://rayscodebase.vercel.app/',
  githubUrl: 'https://github.com/Ray-99-fz/rayscodebase',
  status: 'Ongoing',
}
]

const AchievedWorks = () => {
  return (
    <section className="border-b border-[color:var(--border)] bg-[color:var(--bg)]">
      <div className="px-4 md:px-6 py-22 md:py-25 w-full max-w-7xl m-auto">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-[color:var(--text)] font-bold text-3xl md:text-4xl lg:text-5xl">
              Achieved Projects
            </h2>
            <p className="text-[color:var(--muted)] md:text-xl mt-6">
              A selection of shipped work and ongoing builds, focused on measurable outcomes.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {achievedProjects.map((project) => (
            <Reveal key={project.id}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AchievedWorks

