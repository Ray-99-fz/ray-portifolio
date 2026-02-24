import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const targetData = [
  {
    id: 101,
    target: "Startups",
    text: "Authority, trust, clear messaging, and investor-ready presentation"
  },
  {
    id: 102,
    target: "Real Estate",
    text: "Lead capture systems, property showcasing, and inquiry management"
  },
  {
    id: 103,
    target: "SMEs",
    text: "Digital repositioning, modernization, and competitive edge"
  }
]

const Target = () => {
  return (
    <section className='border-b border-white/20 bg-black'>
        <div className="px-4 md:px-6 py-22 md:py-25 w-full max-w-7xl m-auto">
            <h2 className='text-white font-bold text-3xl md:text-4xl lg:text-5xl mb-8'>Built for growth-focused businesses</h2>
            <p className='text-white/70 md:text-xl mb-12'>I partner with Startups, Real Estate firms, and SMEs in Malawi that are ready to level up their digital presence.</p>
            <button className='outline-0 text-white  mb-15'>
                <Link to="/contact" className='flex gap-3 items-center'>
                  Let's talk strategy
                  <BsArrowRight size={20} />
                </Link>
            </button>

            {/* Targets List */}
            <div className="flex flex-col gap-8">

              {/* Target Item*/}
              {targetData.map((item, index) => ( 
                <div key={index} className="flex items-start gap-6">
    
                  {/* Accent Line */}
                  <div className="w-[2px] bg-gray-400 self-stretch"></div>

                  {/* Text Content */}
                  <div>
                    <h3 className="text-xl md:text-2xl  lg:text-4xl font-bold text-white mb-4">
                      {item.target}
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

export default Target