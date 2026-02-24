import React from 'react'

const Header = () => {
  return (
    <section className='border-t border-b border-white/20 mt-[64px] bg-[#0f0f0f]'>
        <div className="px-4 md:px-6 py-22 md:py-25 w-full max-w-7xl m-auto">
            <h1 className='text-white font-bold text-4xl md:text-4xl lg:text-6xl leading-[120%] mb-4 lg:mb-8'>Let's have a strategic conversation</h1>
            <p className='text-white/70 md:text-2xl lg:text-3xl'>Every great project starts with understanding your business challenges. Tell me about what you're trying to achieve.</p>
        </div>
    </section>
  )
}

export default Header
