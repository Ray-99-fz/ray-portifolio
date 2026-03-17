import React from 'react'

const frameworkData = [
    {
        id: 2201,
        color: "#FFFFFF",
        tag: "White Hat",
        title: "Data & Research",
        text: "Objective information gathering. What do we know? What data is available? What facts matter?",
        textColor: "#0F0F0F"
    },
    {
        id: 2202,
        color: "#EF4444",
        tag: "Red Hat",
        title: "User Emotion & Perception",
        text: "Intuition and feelings. How will users perceive this? What emotions drive decisions?",
        textColor: "#FFFFFF"
    },
    {
        id: 2203,
        color: "#0F0F0F",
        tag: "Black Hat",
        title: "Risk Analysis",
        text: "Critical thinking. What could go wrong? What are the risks? What weaknesses exist?",
        textColor: "#FFFFFF"
    },
    {
        id: 2204,
        color: "#FACC15",
        tag: "Yellow Hat",
        title: "Opportunity Identification",
        text: "Optimistic perspective. What are the benefits? What opportunities exist? What's the upside?",
        textColor: "#0F0F0F"
    },
    {
        id: 2205,
        color: "#22C55E",
        tag: "Green Hat",
        title: "Creative Solutions",
        text: "Innovation and alternatives. What new ideas can we explore? What creative solutions exist?",
        textColor: "#FFFFFF"
    },
    {
        id: 2206,
        color: "#3B82F6",
        tag: "Blue Hat",
        title: "Strategic Control & Execution",
        text: "Process management. How do we organize this? What's the next step? How do we execute?",
        textColor: "#FFFFFF"
    }
]


const Framework = () => {
  return (
    <section className='border-b border-[color:var(--border)] bg-[color:var(--bg)]'>
        <div className="px-4 md:px-6 py-22 md:py-25 w-full max-w-7xl m-auto">
            <h2 className='text-[color:var(--text)] font-bold text-2xl md:text-3xl lg:text-4xl'>
                The 6-Hat Strategic Framework™
            </h2>
            <p className='text-[color:var(--muted)] md:text-xl mt-8'>
                This isn't just theory—it's a practical methodology I integrate into every project, bringing structure to complexity and clarity to decision-making.    
            </p>

                        {/* framework grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-15">
                {frameworkData.map((item, index) => ( 
                    <div key={index} className="border flex flex-col gap-5 border-[color:var(--border)] p-4 bg-[color:var(--surface)]">
                        <div style={{backgroundColor: item.color}} className="rounded-4xl border border-[color:var(--border)] flex items-center justify-center gap-2 py-2 px-4 w-fit">
                            <div style={{backgroundColor: item.color}} className="rounded-full w-5 h-5 outline outline-[color:var(--border)]"></div>
                            <h4 style={{color: item.textColor}} className='font-semibold text-lg'>
                                {item.tag}
                            </h4>
                        </div>

                        <h3 className="text-lg md:text-xl  lg:text-2xl font-bold text-[color:var(--text)]">
                            {item.title}
                        </h3>
                        <p className="text-[color:var(--muted)] text-lg">
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
