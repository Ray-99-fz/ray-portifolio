import React from 'react'
import { MdMailOutline } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { IoMdTime } from "react-icons/io";
import Form from './Form';

const iconMap = {
    MdMail: <MdMailOutline size={30} />,
    SlLoation: <SlLocationPin size={30} />,
    IoMdTime: <IoMdTime size={30} />
}

const contactDetailsData = [
    {
        id: 221,
        icon: "MdMail",
        title: "Email",
        detail: "ray625@gmail.com"
    },
    {
        id: 222,
        icon: "SlLoation",
        title: "Location",
        detail: "Blantyre, Malawi"
    },
    {
        id: 221,
        icon: "IoMdTime",
        title: "Response Time",
        detail: "24-48 hours"
    }
]

const Contactdetails = () => {
  return (
    <section className='border-b border-white/20 bg-black'>
        <div className="px-4 md:px-6 py-22 md:py-25 w-full max-w-7xl m-auto">
            <h3 className='text-white text-xl mb-4 font-bold'>Get in Touch</h3>
            <p className='text-white/70'>Reach out directly or fill out the form. I respond to all serious inquiries within 24-48 hours.</p>

            <div className="mt-8 flex flex-col gap-8">
                {contactDetailsData.map((item, index) => ( 
                    <div key={index} className="flex gap-4 text-white/70">
                        {iconMap[item.icon]}

                        <div className="">
                            <h4 className='text-white font-bold text-lg md:text-xl'> {item.title} </h4>
                            <p className='text-white/70 cursor-pointer md:text-lg'> {item.detail} </p>
                        </div>
                    </div>
                ))}
            </div>


            {/* Ideal List */}
            <div className="w-full bg-[#0f0f0f] border border-white/20 mt-10 rounded-lg p-8">
                <h3 className='text-white font-bold md:text-2xl'>Ideal for:</h3>

                {/* List */}
                <ul className="space-y-2 mt-4">
                    {[
                        "Startups seeking investor-ready digital presence",
                        "Real estate firms needing lead generation systems",
                        "SMEs ready for digital repositioning",
                        "Businesses wanting strategic digital partners",
                        "Projects requiring analytical thinking"
                    ].map((item, index) => (
                        <li key={index} className="flex items-start  gap-2 text-white/70 md:text-lg">
                        
                        {/* Custom bullet */}
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70"></span>
                        
                        <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Not Ideal List */}
            <div className="w-full bg-[#0f0f0f] border border-white/20 mt-10 rounded-lg p-8">
                <h3 className='text-white font-bold md:text-2xl'>Not Ideal for:</h3>

                {/* List */}
                <ul className="space-y-2 mt-4">
                    {[
                        "Template-based websites",
                        "Quick turnaround projects without strategy",
                        "Price-focused buyers",
                        "Projects requiring immediate backend complexity"
                    ].map((item, index) => (
                        <li key={index} className="flex items-start  gap-2 text-white/70 md:text-lg">
                        
                        {/* Custom bullet */}
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70"></span>
                        
                        <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>


            {/* Form */}
            <div className="w-full bg-[#0f0f0f] border border-white/20 my-10 rounded-lg p-8">
                <Form />
                <small className='text-white/70 lg:text-lg mt-12'>* Required fields. Your information is confidential and will only be used to discuss your project.</small>
            </div>
            
            
        </div>
    </section>
  )
}

export default Contactdetails
