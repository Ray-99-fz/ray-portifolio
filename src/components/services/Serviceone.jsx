import React from 'react'
import { LuSparkles, LuBrain, LuCircleCheck } from "react-icons/lu";
import { FaArrowTrendUp } from "react-icons/fa6";
import { GrPowerCycle } from "react-icons/gr";
import { IoArrowForward } from "react-icons/io5";

const iconMap = {
    LuBrain: <LuBrain size={40} />,
    LuSparkles: <LuSparkles size={40} />,
    FaArrowTrendUp: <FaArrowTrendUp size={40} />,
    GrPowerCycle: <GrPowerCycle size={40} />,
}

const servicesData = [
    {
        id: 1001,
        icon: "LuSparkles",
        heading: "Strategic Website Systems",
        subheading: "A digital foundation engineered to convert, not just look good",
        text: "This isn't web development—it's strategic digital engineering. Every project begins with deep business analysis, not design templates.",
        target: [
            "Market entry",
            "Brand repositioning",
            "Scaling businesses"
        ],
        inclusions: [
            "Pre-design strategy session",
            "Business objective clarity workshop",
            "Wireframes & UX architecture in Figma",
            "Custom UI design aligned to brand positioning",
            "Modern front-end development (React ecosystem)",
            "Responsive across all devices",
            "Performance optimization",
            "Foundational SEO structure",
            "Conversion-focused layout design"
        ]        
    },
    {
        id: 1002,
        icon: "FaArrowTrendUp",
        heading: "Conversion & Growth Optimization",
        subheading: "Turning traffic into measurable business results",
        text: "Your website exists. But is it working? This service analyzes performance, identifies friction, and restructures your digital presence for growth.",
        target: [
            "Businesses with traffic but low conversions",
            "Underperforming websites",
            "Growth-stage companies"
        ],
        inclusions: [
            "Comprehensive UX audit",
            "Call-to-action (CTA) optimization",
            "Funnel clarity analysis",
            "Content hierarchy restructuring",
            "Analytics-based improvement recommendations",
            "User journey mapping",
            "A/B testing strategy development",
            "Conversion rate enhancement"
        ]        
    },
    {
        id: 1003,
        icon: "LuBrain",
        heading: "Digital Strategy Consulting",
        subheading: "Strategic clarity before execution",
        text: "Not every business needs a new website. Some need strategic direction. This is where the 6-Hat Strategic Framework™ drives thinking clarity.",
        target: [
            "Startups defining their digital approach",
            "Businesses in transition",
            "Leadership teams needing clarity"
        ],
        inclusions: [
            "Digital roadmapping session",
            "Website architecture planning",
            "Brand positioning clarity workshop",
            "Digital growth strategy development",
            "User journey analysis",
            "Competitive landscape assessment",
            "Technology stack recommendations",
            "Phased execution planning"
        ]        
    },
        {
        id: 1004,
        icon: "GrPowerCycle",
        heading: "Ongoing Optimization & Maintenance",
        subheading: "Continuous improvement, not one-and-done",
        text: "Digital systems require ongoing refinement. This service keeps your website performing at peak efficiency.",
        target: [
            "Post-launch optimization",
            "Businesses focused on growth",
            "Long-term digital partners"
        ],
        inclusions: [
            "Performance monitoring",
            "Minor content updates",
            "Conversion refinement",
            "Quarterly analytics reviews",
            "Strategic adjustment sessions",
            "Security updates",
            "Technical support",
            "Priority response time"
        ]        
    }
]


const Serviceone = () => {
  return (
        <div>
            {servicesData.map((service,index) => (
                <div key={index} className='text-[color:var(--muted)] mb-20 md:mb-25'>
                    {iconMap[service.icon]}
                    <h2 className='text-[color:var(--text)] text-3xl md:text-4xl font-bold my-5'>
                        {service.heading}
                    </h2>
                    <p className='italic md:text-2xl mb-8'>
                        {service.subheading}
                    </p>
                    <p className='md:text-xl'>
                        {service.text}
                    </p>

                    <div className="text-[color:var(--muted)] my-10">
                        <h4 className='uppercase md:text-lg'>Ideal For</h4>

                        <ul className='space-y-2 mt-4'>
                            {service.target.map((targetItem, index) => (
                                <li key={index} className="flex items-center gap-2 text-[color:var(--muted)] md:text-lg">
                                    <IoArrowForward size={15} />
                                    {targetItem}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="w-full bg-[color:var(--surface)] border border-[color:var(--border)] mt-10 rounded-lg p-8">
                        <h4 className="uppercase md:text-lg">What's Included</h4>

                        <ul className="space-y-3 mt-4">
                            {service.inclusions.map((inclusionItem, index) => (
                            <li
                                key={index}
                                className="flex items-start gap-3 text-[color:var(--muted)] md:text-lg"
                            >
                                <LuCircleCheck
                                className="flex-shrink-0 mt-1"
                                size={20}
                                />
                                <span>{inclusionItem}</span>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Serviceone
