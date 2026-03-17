import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='border-t border-b border-[color:var(--border)] mt-[64px] bg-[color:var(--surface)]'>
        <div className="px-4 md:px-6 py-22 md:py-25 w-full max-w-7xl m-auto">
            <h1 className='text-[color:var(--text)] font-bold text-4xl md:text-5xl lg:text-6xl mb-8 md:mb-10'>Strategic Digital Partner</h1>
            <p className='text-[color:var(--muted)] text-[20px] md:text-2xl leading-[150%]'>I don't build websites.</p>
            <p className='text-[color:var(--muted)] text-[20px] md:text-2xl leading-[150%]'>I build digital systems that solve business problems.</p>

            {/* Pills */}
            <ul className="flex flex-wrap text-[color:var(--muted)] items-center gap-3.5 mt-8">
                {["Local-First", "Analytical", "Bold", "Problem-Solving"].map((item, index) => (
                    <li
                    key={index}
                    className="border border-[color:var(--border)] py-2 px-4 rounded-3xl w-fit text-[12px] md:text-base"
                    >
                    {item}
                    </li>
                ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-15">
                <Link
                  to="/services"
                  className="py-4 px-6 bg-[color:var(--text)] text-[color:var(--surface)] font-semibold flex items-center gap-2"
                >
                  View Services
                  <BsArrowRight size={20} />
                </Link>

                <Link
                  to="/work"
                  className="py-4 px-6 bg-transparent text-[color:var(--text)] font-semibold flex items-center gap-2 border border-[color:var(--border)]"
                >
                  See My Work
                </Link>
            </div>

        </div>
    </section>
  )
}

export default Hero