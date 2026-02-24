import React from 'react'

const visionData = [
    {
        id: 3301,
        title: "Phase 1: Foundation",
        text: "Freelance Strategic Digital Partner serving Malawian businesses"
    },
    {
        id: 3302,
        title: "Phase 2: Authority Building",
        text: "Recognized digital strategy voice through thought leadership"
    },
    {
        id: 3303,
        title: "Phase 3: Premium Positioning",
        text: "Premium consulting and high-value client partnerships"
    },
    {
        id: 3304,
        title: "Phase 4: Expansion",
        text: "Potential agency or strategic studio development"
    }
]


const Vision = () => {
  return (
    <section className='border-b border-white/20 bg-black'>
        <div className="px-4 md:px-6 py-22 md:py-25 w-full max-w-7xl m-auto">
            <h2 className='text-white font-bold text-2xl md:text-3xl lg:text-4xl'>
                Long-Term Vision
            </h2>
            <p className='text-white/70 md:text-xl mt-8'>
                Building authority through strategic thinking and measurable results.    
            </p>


            <div className="flex flex-col gap-10 mt-10 p-3">
                {visionData.map((item, index) => (
                    <div key={index} className="flex items-start gap-5">
                    
                    <div className="
                        w-12 h-12
                        flex-shrink-0
                        rounded-full
                        bg-[#0f0f0f]
                        outline outline-white/20
                        text-white
                        font-bold
                        text-lg
                        flex items-center justify-center
                    ">
                        {index + 1}
                    </div>
                    
                    <div className="flex flex-col gap-2">
                        <h4 className="text-white font-bold text-lg md:text-2xl">
                        {item.title}
                        </h4>
                        <p className="text-white/70">
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

export default Vision
