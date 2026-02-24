import React from 'react'

const frameworkData = [
    {
        id: 201,
        color: "#FFFFFF",
        tag: "White Hat",
        title: "Data & Research",
        text: "Facts, figures, and information gathering",
        textColor: "#0F0F0F"
    },
    {
        id: 202,
        color: "#EF4444",
        tag: "Red Hat",
        title: "User Emotion",
        text: "Intuition, feelings, and perception",
        textColor: "#FFFFFF"
    },
    {
        id: 203,
        color: "#0F0F0F",
        tag: "Black Hat",
        title: "Risk Analysis",
        text: "Critical judgment and caution",
        textColor: "#FFFFFF"
    },
    {
        id: 204,
        color: "#FACC15",
        tag: "Yellow Hat",
        title: "Opportunity",
        text: "Optimism and benefits identification",
        textColor: "#0F0F0F"
    },
    {
        id: 205,
        color: "#22C55E",
        tag: "Green Hat",
        title: "Creative Solutions",
        text: "Creativity and new ideas",
        textColor: "#FFFFFF"
    },
    {
        id: 206,
        color: "#3B82F6",
        tag: "Blue Hat",
        title: "Strategic Control",
        text: "Process management and execution",
        textColor: "#FFFFFF"
    }
]

const Framework = () => {
  return (
    <section className='border-b border-white/20 bg-black'>
        <div className="px-4 md:px-6 py-22 md:py-25 w-full max-w-7xl m-auto">
            <h2 className='text-white font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-center'>The 6-Hat Strategic Framework™</h2>
            <p className='text-white/70 md:text-xl mb-12 text-center'>Structured thinking that drives results</p>

            {/* framework grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {frameworkData.map((item, index) => ( 
                    <div key={index} className="border flex flex-col gap-5 border-white/20 p-4 bg-[#0f0f0f]">
                        <div style={{backgroundColor: item.color}} className="  rounded-4xl border border-white/20 flex items-center justify-center gap-2 py-2 px-4 w-fit">
                            <div style={{backgroundColor: item.color}} className=" rounded-full w-5 h-5 outline outline-black"></div>
                            <h4 style={{color: item.textColor}} className='font-semibold text-[#0f0f0f] text-lg'>
                                {item.tag}
                            </h4>
                        </div>

                        <h3 className="text-lg md:text-xl  lg:text-2xl font-bold text-white">
                            {item.title}
                        </h3>
                        <p className="text-gray-400 text-lg">
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Framework