import React from 'react'

const Philosophy = () => {
  return (
    <section className='border-b border-[color:var(--border)] bg-[color:var(--bg)]'>
        <div className="px-4 md:px-6 py-22 md:py-25 w-full max-w-7xl m-auto">
            <h2 className='text-[color:var(--text)] font-bold text-2xl md:text-3xl lg:text-4xl'>Philosophy & Approach</h2>
            <p className='text-[color:var(--muted)] md:text-xl mt-8'>Most developers sell websites. I sell clarity, structure, and digital growth systems.</p>


            {/* what im not */}
            <div className="py-6 mt-10">
                <h3 className='text-[color:var(--text)] font-bold md:text-2xl'>What I'm Not</h3>

                    {/* List */}
                    <ul className="space-y-2 mt-4">
                        {[
                            "Just a front-end developer",
                            "Just a UI designer",
                            "Just a freelancer",
                            "A generalist trying to do everything"
                        ].map((item, index) => (
                            <li key={index} className="flex items-start gap-2 text-[color:var(--muted)] md:text-xl">
                            
                            {/* Custom bullet */}
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--muted)]"></span>
                            
                            <span>{item}</span>
                            </li>
                        ))}
                    </ul>

            </div>

            <div className="mt-5">
                <h3 className='text-[color:var(--text)] font-bold md:text-2xl my-4'>What I'm Not</h3>
                <p className='text-[color:var(--muted)] md:text-xl'>A Strategic Digital Partner for Startups, Real Estate firms, and SMEs in Malawi—focused on building digital systems that solve real business problems through analytical thinking and modern execution.</p>
            </div>
        </div>

        
    </section>
  )
}

export default Philosophy
