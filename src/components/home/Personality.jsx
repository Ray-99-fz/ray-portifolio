import React from 'react'
import { LuBrain, LuTarget } from "react-icons/lu";
import { IoMdTrendingUp } from "react-icons/io";

const iconMap = {
    LuBrain: <LuBrain size={40} />,
    LuTarget: <LuTarget size={40} />,
    IoMdTrendingUp: <IoMdTrendingUp size={40} />
}

const personalityData = [
    {
        id: 1,
        icon: "LuBrain",
        title: "Local-First",
        desc: "Deep understanding of Malawi's market maturity and digital landscape"
    },
    {
        id: 2,
        icon: "LuTarget",
        title: "Analytical",
        desc: "Data-driven decisions using structured thinking frameworks"
    },
    {
        id: 3,
        icon: "IoMdTrendingUp",
        title: "Problem-Solving",
        desc: "Building digital systems that solve real business challenges"
    }
]

const Personality = () => {
  return (
    <section className='border-b border-white/20 bg-black'>
        <div className="px-4 md:px-6 py-22 md:py-25 w-full max-w-7xl m-auto">
            <div className="grid md:grid-cols-3 gap-5">
                {personalityData.map((item, index) => (
                    <div className="border text-white/70 border-white/20 bd-[#0f0f0f] p-10 ">
                     
                        <div key={index} className="w-[90%] m-auto flex flex-col gap-4">
                            {iconMap[item.icon]}
                            <h2 className='text-white font-bold text-2xl'>
                                {item.title}
                            </h2>
                            <p className='text-white/70 md:text-xl'>
                                {item.desc}
                            </p>
                        </div> 
                    
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Personality