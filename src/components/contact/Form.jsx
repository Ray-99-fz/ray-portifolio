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
                className="block text-[color:var(--text)] font-semibold mb-2"
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
                    bg-[color:var(--surface-2)]
                    text-lg
                    p-3
                    text-[color:var(--text)]
                    placeholder:text-[color:var(--muted)]
                    outline outline-1 outline-[color:var(--border)]
                    focus:outline-[color:var(--text)]
                    transition
                "
                />
            </div>

            <div className="flex-1">
                <label 
                htmlFor="email" 
                className="block text-[color:var(--text)] font-semibold mb-2"
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
                    bg-[color:var(--surface-2)]
                    text-lg
                    p-3
                    text-[color:var(--text)]
                    placeholder:text-[color:var(--muted)]
                    outline outline-1 outline-[color:var(--border)]
                    focus:outline-[color:var(--text)]
                    transition
                "
                />
            </div>
        </div>

        <label 
            htmlFor="businessType" 
            className="block text-[color:var(--text)] font-semibold "
        >
            Business Type *
        </label>
        <select 
            name="businessType" 
            id="businessType"
            value={clientCredentials.businessType}
            onChange={handleChange}
            required
            class="w-full max-w-full bg-[color:var(--surface-2)] text-lg outline outline-[color:var(--border)] p-3 focus:outline-[color:var(--text)] focus:outline text-[color:var(--muted)]"
        >
            <option value="" className='text-lg text-[color:var(--muted)]'>Select your business type</option>
            <option className='text-lg text-[color:var(--muted)]'>Startup</option>
            <option className='text-lg text-[color:var(--muted)]'>Real Estate</option>
            <option className='text-lg text-[color:var(--muted)]'>SME / Established Business</option>
            <option className='text-lg text-[color:var(--muted)]'>Other</option>
        </select>


        <label 
            htmlFor="service" 
            className="block text-[color:var(--text)] font-semibold "
        >
            What are you looking for *
        </label>
        <select 
            name="service" 
            id="service"
            value={clientCredentials.service}
            onChange={handleChange}
            required
            class="w-full max-w-full bg-[color:var(--surface-2)] text-lg outline outline-[color:var(--border)] p-3 focus:outline-[color:var(--text)] focus:outline text-[color:var(--muted)]"
        >
            <option value="" className='text-lg text-[color:var(--muted)]'>Select a service</option>
            <option className='text-lg text-[color:var(--muted)]'>New Strategic Website System</option>
            <option className='text-lg text-[color:var(--muted)]'>Conversion & Growth Optimization</option>
            <option className='text-lg text-[color:var(--muted)]'>Digital Strategy Consulting</option>
            <option className='text-lg text-[color:var(--muted)]'>Ongoing Optimization & Maintenance</option>
            <option className='text-lg text-[color:var(--muted)]'>Not sure yet</option>
        </select>


        <label 
            htmlFor="timeline" 
            className="block text-[color:var(--text)] font-semibold "
        >
            Timeline
        </label>
        <select 
            name="timeline" 
            id="timeline"
            value={clientCredentials.timeline}
            onChange={handleChange}
            required
            class="w-full max-w-full bg-[color:var(--surface-2)] text-lg outline outline-[color:var(--border)] p-3 focus:outline-[color:var(--text)] focus:outline text-[color:var(--muted)]"
        >
            <option value="" className='text-lg text-[color:var(--muted)]'>Select a timeline</option>
            <option className='text-lg text-[color:var(--muted)]'>Urgent (1-2 Weeks)</option>
            <option className='text-lg text-[color:var(--muted)]'>Soon (1 month) </option>
            <option className='text-lg text-[color:var(--muted)]'> Planning (2-3 months) </option>
            <option className='text-lg text-[color:var(--muted)]'>Just exploring options</option>
        </select>


        <label 
            htmlFor="message" 
            className="block text-[color:var(--text)] font-semibold "
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
            className='w-full bg-[color:var(--surface-2)] borger text-lg outline outline-[color:var(--border)] p-2 focus:outline-[color:var(--text)] placeholder:text-[color:var(--muted)] text-[color:var(--text)]'
        >

        </textarea>

        
        <button 
            className='cursor-pointer flex items-center bg-[color:var(--text)] text-lg font-semibold text-[color:var(--surface)] md:w-[200px] mt-4 justify-center gap-3 p-2 text-center '
        >
            Send Message
            <BsArrowRight  size={20}/>
        </button>

    </form>

  )
}

export default Form
