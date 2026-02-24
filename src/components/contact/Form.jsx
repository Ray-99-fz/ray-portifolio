import React from 'react'
import { useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'

const Form = () => {

    const [clientCredentials, setClientCredentials] = useState({
        name: "",
        email: "",
        message: "",
        businessType: "",
        service: "",
        timeline: ""
    })

    function handleChange(e) {
        const {name, value} = e.target

        setClientCredentials(prevState => ({
            ...prevState,
            [name] : value
        }))
    }


    const sendEmail = (e) => {
            e.preventDefault();
            console.log(userCredentials)

            emailjs
            .send('service_774qpp6', 'template_q694zb9',{
                name: clientCredentials.name,
                email: clientCredentials.email,
                message: clientCredentials.message,
                businessType: clientCredentials.businessType,
                service: clientCredentials.service,
                timeline: clientCredentials.timeline
            } , 'SccjDeQuu94HhbmFo')
            .then(
                () => {
                console.log('SUCCESS!');
                alert("Your request has been submitted successfully.")
                SetUserCredentials({
                    name:"",
                    email:"",
                    service:"",
                    message:"",
                    businessType: "",
                    timeline: ""
                })
                },
                (error) => {
                console.log('FAILED...', error.text);
                alert("Error submitting your request.")
                },
            );
        };



  return (
    <form className='flex flex-col gap-4 my-5' onSubmit={sendEmail}>

        
        <div className="flex flex-col lg:flex-row gap-6">
        
            <div className="flex-1">
                <label 
                htmlFor="name" 
                className="block text-white font-semibold mb-2"
                >
                Your Name *
                </label>

                <input 
                type="text" 
                name="name"
                id="name"
                value={clientCredentials.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="
                    w-full
                    bg-[#141414]
                    text-lg
                    p-3
                    text-white
                    placeholder:text-white/50
                    outline outline-1 outline-white/20
                    focus:outline-white/70
                    transition
                "
                />
            </div>

            <div className="flex-1">
                <label 
                htmlFor="email" 
                className="block text-white font-semibold mb-2"
                >
                Email Address *
                </label>

                <input 
                type="email"
                name="email"
                id="email"
                value={clientCredentials.email}
                onChange={handleChange}
                required
                placeholder="john@company.com"
                className="
                    w-full
                    bg-[#141414]
                    text-lg
                    p-3
                    text-white
                    placeholder:text-white/50
                    outline outline-1 outline-white/20
                    focus:outline-white/70
                    transition
                "
                />
            </div>
        </div>

        <label 
            htmlFor="businessType" 
            className="block text-white font-semibold "
        >
            Business Type *
        </label>
        <select 
            name="businessType" 
            id="businessType"
            value={clientCredentials.businessType}
            onChange={handleChange}
            required
            class="w-full max-w-full bg-[#141414] text-lg outline outline-white/20 p-3 focus:outline-white/70 focus:outline text-white/70"
        >
            <option value="" className='text-lg text-white/70'>Select your business type</option>
            <option className='text-lg text-white/70'>Startup</option>
            <option className='text-lg text-white/70'>Real Estate</option>
            <option className='text-lg text-white/70'>SME / Established Business</option>
            <option className='text-lg text-white/70'>Other</option>
        </select>


        <label 
            htmlFor="service" 
            className="block text-white font-semibold "
        >
            What are you looking for *
        </label>
        <select 
            name="service" 
            id="service"
            value={clientCredentials.service}
            onChange={handleChange}
            required
            class="w-full max-w-full bg-[#141414] text-lg outline outline-white/20 p-3 focus:outline-white/70 focus:outline text-white/70"
        >
            <option value="" className='text-lg text-white/70'>Select a service</option>
            <option className='text-lg text-white/70'>New Strategic Website System</option>
            <option className='text-lg text-white/70'>Conversion & Growth Optimization</option>
            <option className='text-lg text-white/70'>Digital Strategy Consulting</option>
            <option className='text-lg text-white/70'>Ongoing Optimization & Maintenance</option>
            <option className='text-lg text-white/70'>Not sure yet</option>
        </select>


        <label 
            htmlFor="timeline" 
            className="block text-white font-semibold "
        >
            Timeline
        </label>
        <select 
            name="timeline" 
            id="timeline"
            value={clientCredentials.timeline}
            onChange={handleChange}
            required
            class="w-full max-w-full bg-[#141414] text-lg outline outline-white/20 p-3 focus:outline-white/70 focus:outline text-white/70"
        >
            <option value="" className='text-lg text-white/70'>Select a timeline</option>
            <option className='text-lg text-white/70'>Urgent (1-2 Weeks)</option>
            <option className='text-lg text-white/70'>Soon (1 month) </option>
            <option className='text-lg text-white/70'> Planning (2-3 months) </option>
            <option className='text-lg text-white/70'>Just exploring options</option>
        </select>


        <label 
            htmlFor="message" 
            className="block text-white font-semibold "
        >
            Tell me about your project *
        </label>
        <textarea 
            name="message" 
            id="message"
            value={clientCredentials.message}
            onChange={handleChange} 
            rows="5"
            placeholder='What business problem are you trying to solve? What are your goals?'
            className='w-full bg-[#141414] borger text-lg outline outline-white/20 p-2 focus:outline-white/70 placeholder:text-white/70'
        >

        </textarea>

        
        <button 
            className='cursor-pointer flex items-center bg-white text-lg font-semibold text-[#0f0f0f] md:w-[200px] mt-4 justify-center gap-3 p-2 text-center '
        >
            Send Message
            <BsArrowRight  size={20}/>
        </button>

    </form>

  )
}

export default Form
