import React from 'react'

const advantagesData = [
  {
    id: 1101,
    title: "Structured Thinking",
    text: "The 6 Thinking Hats framework brings clarity to complex business challenges."
  },
  {
    id: 1102,
    title: "Strategic Positioning",
    text: "Beyond technical skills—understanding how digital presence drives business growth."
  },
  {
    id: 1103,
    title: "Local Business Awareness",
    text: "Deep knowledge of Malawi's market maturity, SME gaps, and real estate inefficiencies."
  },
  {
    id: 1104,
    title: "Front-End Fluency",
    text: "Modern development practices that prioritize performance and user experience."
  },
  {
    id: 1105,
    title: "Design Capability",
    text: "Full-stack approach from strategy to design to development—no handoff gaps."
  },
  {
    id: 1106,
    title: "Consultant-Level Presentation",
    text: "Professional, business-focused communication that builds authority."
  }
]


const Advantages = () => {
  return (
    <section className='border-b border-white/20 bg-[#0f0f0f]'>
        <div className="px-4 md:px-6 py-22 md:py-25 w-full max-w-7xl m-auto">
            <h2 className='text-white font-bold text-2xl md:text-3xl lg:text-4xl text-center'>
                Competitive Advantage in Malawi
            </h2>

            {/* advantages grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-15">
                {/* advantage Item*/}
              {advantagesData.map((item, index) => ( 
                <div key={index} className="flex items-start gap-6">
    
                  {/* Accent Line */}
                  <div className="w-[2px] bg-gray-400 self-stretch"></div>

                  {/* Text Content */}
                  <div>
                    <h3 className="text-lg md:text-xl  lg:text-2xl font-bold text-white mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-lg">
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

export default Advantages
