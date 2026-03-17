import React from 'react'

const strategyData = [
  {
    id: 1101,
    title: "Discovery & Research",
    text: "Deep dive into your business, market, and objectives using data-driven analysis."
  },
  {
    id: 1102,
    title: "Strategic Planning",
    text: "Define clear goals, identify opportunities, and map user journeys."
  },
  {
    id: 1103,
    title: "UX Architecture",
    text: "Create wireframes and information architecture optimized for conversion."
  },
  {
    id: 1104,
    title: "UI Design",
    text: "Develop visual systems that align with brand positioning and user emotion."
  },
  {
    id: 1105,
    title: "Development",
    text: "Build with modern technologies, focusing on performance and scalability."
  },
  {
    id: 1106,
    title: "Optimization",
    text: "Launch, measure, refine, and continuously improve based on data."
  }
]


const Strategy = () => {
  return (
        <section className='border-b border-[color:var(--border)] bg-[color:var(--surface)]'>
        <div className="px-4 md:px-6 py-22 md:py-25 w-full max-w-7xl m-auto">
            <h2 className='text-[color:var(--text)] font-bold text-2xl md:text-3xl lg:text-4xl mb-6 text-center'>
                Strategic Process
            </h2>
            <p className='text-[color:var(--muted)] md:text-xl mb-12 text-center'>
                Every engagement follows the 6-Hat Strategic Framework™ to ensure thorough analysis and effective execution.
            </p>

            {/* advantages grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-15">
                {/* advantage Item*/}
              {strategyData.map((item, index) => ( 
                <div key={index} className="flex items-start gap-6">
    
                  {/* Accent Line */}
                  <div className="w-[2px] bg-[color:var(--border)] self-stretch"></div>

                  {/* Text Content */}
                  <div>
                    <p className='text-[color:var(--muted)] font-bold'>
                        {`0${index + 1}`}
                    </p>

                    <h3 className="text-lg md:text-xl  lg:text-2xl font-bold text-[color:var(--text)] my-2">
                      {item.title}
                    </h3>
                    <p className="text-[color:var(--muted)] text-lg">
                      {item.text}
                    </p>
                  </div>

                </div>
              ))}

            </div>
        </div>
    </section>

  )
}

export default Strategy
