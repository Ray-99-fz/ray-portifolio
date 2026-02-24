import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const structureData = [
    {
        id: 10,
        title: "Launch Package",
        desc: "For startups entering the market"
    },
    {
        id: 12,
        title: "Growth Package",
        desc: "For SMEs scaling their presence"
    },
    {
        id: 13,
        title: "Authority Package",
        desc: "For established brands seeking dominance"
    }
]


const Structure = () => {
  return (
    <section className='border-b border-white/20 bg-[#0f0f0f]'>
        <div className="px-4 md:px-6 py-22 md:py-25 w-full max-w-7xl m-auto">
            <h2 className='text-white font-bold text-2xl md:text-3xl lg:text-4xl'>
                Investment Structure
            </h2>
            <p className='text-white/70 md:text-xl mt-8'>
                Every business has unique challenges. That's why pricing is project-based, determined after a strategy session where we define your specific needs and goals.
            </p>

            <div className="grid md:grid-cols-3 gap-5 my-10">
                {structureData.map((item, index) => (
                    <div className="border text-white/70 border-white/20 bd-[#0f0f0f] p-10 ">
                     
                        <div key={index} className="w-[90%] m-auto flex flex-col gap-4">
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

            <div className="w-full bg-[#0f0f0f] border border-white/20 my-10 rounded-lg p-8">
                <h4 className='text-white font-bold md:text-xl mb-4'>Note on Hosting</h4>
                <p className='text-white/70 md:text-lg'>I don't provide hosting directly, keeping services focused and asset-light. However, I offer full assistance with third-party hosting setup, domain procurement, and deployment to ensure a smooth launch.</p>
            </div>

            <button className='font-semibold outline-0 cursor-pointer bg-white py-4 px-8 text-black  '>
                <Link to="/contact" className="flex items-center gap-3">
                    Discuss Your Project
                    <BsArrowRight size={20} />
                </Link>
            </button>

        </div>
    </section>
  )
}

export default Structure
