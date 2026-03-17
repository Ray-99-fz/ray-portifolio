import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='border-b border-[color:var(--border)] bg-[color:var(--surface)]'>
        <div className="px-4 md:px-6 py-22 md:py-25 w-full max-w-7xl m-auto">
            <h2 className='text-[color:var(--text)] font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-center'>Ready to transform your digital presence?</h2>
            <p className='text-[color:var(--muted)] md:text-xl mb-12 text-center'>Let's have a strategic conversation about your business goals.</p>
            <div className="flex justify-center">
                <button className='font-semibold outline-0 cursor-pointer bg-[color:var(--text)] py-4 px-8 text-[color:var(--surface)]'>
                    <Link to="/contact" className="flex items-center gap-3">
                        Start a Conversation 
                        <BsArrowRight size={20} />
                    </Link>
                </button>
            </div>
        </div>
    </section>
  )
}

export default CTA