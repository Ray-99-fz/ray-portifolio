import React from 'react'

const projectStructureData = [
    {
        id: 301,
        title: "Problem",
    },
    {
        id: 302,
        title: "Analysis",
    },
    {
        id: 303,
        title: "Strategy",
    },
    {
        id: 304,
        title: "Execution",
    },
    {
        id: 305,
        title: "Results",
    }
]


const Projectstructure = () => {
  return (
        <section className='border-b border-[color:var(--border)] bg-[color:var(--surface)]'>
            <div className="px-4 md:px-6 py-15 w-full max-w-7xl m-auto">
                <h4 className="uppercase md:text-lg text-center text-[color:var(--muted)]">Every Project Follows This Structure</h4>

            <div className="grid md:grid-cols-5 gap-10 mt-10 p-3">
                {projectStructureData.map((item, index) => (
                    <div key={index} className="flex flex-col justify-center items-center gap-5">
                        <div className="w-12 h-12 rounded-full bg-[color:var(--bg)] outline outline-[color:var(--border)] text-[color:var(--text)] font-bold text-lg flex items-center justify-center">
                            {index + 1}
                        </div>
                        <h4 className='text-[color:var(--text)] font-bold text-lg'> {item.title} </h4>
                    </div>
                ))}
            </div>
        </div>
    </section>

  )
}

export default Projectstructure
