import React from 'react'

const Workheader = () => {
  return (
    <section className='border-t border-b border-[color:var(--border)] mt-[64px] bg-[color:var(--surface)]'>
        <div className="px-4 md:px-6 py-22 md:py-25 w-full max-w-7xl m-auto">
            <h1 className='text-[color:var(--text)] font-bold text-4xl md:text-4xl lg:text-6xl leading-[120%] mb-4 lg:mb-8'>
                Strategic thinking in action
            </h1>
            <p className='text-[color:var(--muted)] md:text-2xl lg:text-3xl'>
                These aren't just portfolio pieces. They're case studies in problem-solving, strategic thinking, and measurable business impact.
            </p>
        </div>
    </section>
  )
}

export default Workheader
