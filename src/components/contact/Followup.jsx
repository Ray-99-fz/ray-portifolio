import React from 'react'

const followUpData = [
    {
        id: 301,
        title: "Initial Review",
        text: "I review your inquiry within 24-48 hours to understand your needs"
    },
    {
        id: 302,
        title: "Discovery Call",
        text: "We schedule a conversation to discuss your business challenges in depth"
    },
    {
        id: 303,
        title: "Strategic Proposal",
        text: "If we're a good fit, I create a tailored proposal with clear outcomes"
    }
]

const Followup = () => {
  return (
    <section className='border-b border-[color:var(--border)] bg-[color:var(--surface)]'>
        <div className="px-4 md:px-6 py-22 md:py-25 w-full max-w-7xl m-auto">
            <h2 className='text-[color:var(--text)] text-center text-3xl font-bold md:text-4xl'>What Happens Next?</h2>

            <div className="grid md:grid-cols-3 gap-10 mt-10 p-3">
                {followUpData.map((item, index) => (
                    <div key={index} className="flex flex-col justify-center items-center gap-5">
                        <div className="w-12 h-12 rounded-full bg-[color:var(--bg)] outline outline-[color:var(--border)] text-[color:var(--text)] font-bold text-lg flex items-center justify-center">
                            {index + 1}
                        </div>
                        <h4 className='text-[color:var(--text)] font-bold text-2xl'> {item.title} </h4>
                        <p className='text-[color:var(--muted)] text-center'> {item.text} </p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Followup
