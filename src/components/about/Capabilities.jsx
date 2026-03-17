import React from 'react'
import { IoCode } from "react-icons/io5";
import { MdOutlineColorLens } from "react-icons/md";
import { LuBrain, LuGitBranch, LuLightbulb } from 'react-icons/lu';
import { AiOutlineTeam } from "react-icons/ai";

const iconMap = {
    LuBrain: <LuBrain size={40} />,
    IoCode: <IoCode size={40} />,
    MdOutlineColorLens: <MdOutlineColorLens size={40} />,
    AiOutlineTeam: <AiOutlineTeam size={40} />,
    LuGitBranch: <LuGitBranch size={40} />,
    LuLightbulb: <LuLightbulb size={40} />
}

const capabilityData = [
    {
        id: 1,
        icon: "IoCode",
        title: "Front-End Development",
        desc: "React, modern JavaScript ecosystem, performance optimization, and responsive design."
    },
    {
        id: 2,
        icon: "MdOutlineColorLens",
        title: "UI/UX Design",
        desc: "Figma proficiency, wireframing, user journey mapping, and conversion-focused design."
    },
    {
        id: 3,
        icon: "LuBrain",
        title: "Strategic Thinking",
        desc: "De Bono 6 Thinking Hats Framework, business analysis, and problem-solving methodologies."
    },
    {
        id: 4,
        icon: "AiOutlineTeam",
        title: "Team Collaboration",
        desc: "Effective communication, stakeholder management, and cross-functional teamwork."
    },
    {
        id: 5,
        icon: "LuGitBranch",
        title: "Version Control",
        desc: "Git/GitHub workflows, collaboration best practices, and code management."
    },
    {
        id: 6,
        icon: "LuLightbulb",
        title: "Analytical Mindset",
        desc: "Data-driven decision making, UX audits, and performance analysis."
    }

]

const Capabilities = () => {
  return (
    <section className='border-b border-[color:var(--border)] bg-[color:var(--bg)]'>
        <div className="px-4 md:px-6 py-22 md:py-25 w-full max-w-7xl m-auto">
            <h2 className='text-[color:var(--text)] font-bold text-2xl md:text-3xl lg:text-4xl text-center'>Core Capabilities</h2>

            {/* capability grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-15">
                {capabilityData.map((item, index) => ( 
                    <div key={index} className="border flex flex-col gap-5 border-[color:var(--border)] p-4 bg-[color:var(--surface)]">
                        <div key={index} className="w-[90%] m-auto flex flex-col gap-4 text-[color:var(--muted)]">
                            {iconMap[item.icon]}
                            <h2 className='text-[color:var(--text)] font-bold text-2xl'>
                                {item.title}
                            </h2>
                            <p className='text-[color:var(--muted)] md:text-xl'>
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

export default Capabilities
