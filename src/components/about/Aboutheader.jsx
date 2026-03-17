import React from 'react'

const Header = () => {
  return (
    <section className='border-t border-b border-[color:var(--border)] mt-[64px] bg-[color:var(--surface)]'>
        <div className="px-4 md:px-6 py-22 md:py-25 w-full max-w-7xl m-auto">
            <h1 className='text-[color:var(--text)] font-bold text-4xl md:text-4xl lg:text-6xl leading-[120%] mb-4 lg:mb-8'>
                Strategic thinking meets technical execution
            </h1>
            <p className='text-[color:var(--muted)] md:text-2xl lg:text-3xl'>
                I'm Ray—a strategic digital partner operating at the intersection of business strategy, design thinking, and modern development.
            </p>
        </div>
    </section>
  )
}

export default Header
