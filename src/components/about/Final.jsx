import React from 'react'

const Final = () => {
  return (
    <section className='border-b border-[color:var(--border)] bg-[color:var(--bg)]'>
        <div className="px-4 md:px-6 py-22 w-full max-w-7xl m-auto">
            <div  className="flex items-start gap-6">
    
                  {/* Accent Line */}
                  <div className="w-[6px] bg-[color:var(--border)] self-stretch"></div>

                  <p className='text-[color:var(--muted)] italic text-2xl md:text-3xl '>
                    "A Malawi-focused Digital Strategy Partner who designs and builds structured, performance-driven digital systems for startups, real estate firms, and SMEs—using analytical thinking frameworks and modern front-end execution to solve real business problems."
                  </p>
            </div>
        </div>
    </section>
  )
}

export default Final
