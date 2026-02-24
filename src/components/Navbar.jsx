import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { FiSun } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  return (
    <section className="fixed inset-x-0 top-0 z-50 bg-black border-b border-white/20">
  <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between min-h-[62px]">
    
    {/* Left Side */}
    <h1 className="text-white font-bold text-base md:text-xl lg:text-2xl">
      RAY
    </h1>

    {/* Right Side */}
    <div className="flex items-center gap-4 md:gap-6 min-w-0">

      <nav className="hidden md:block">
        <ul className="text-white/70 cursor-pointer text-sm md:text-base lg:text-lg flex gap-4 lg:gap-8 items-center">
          <li className="hover:text-white whitespace-nowrap">
            <Link to="/">
              Home
            </Link>
          </li>
          <li className="hover:text-white whitespace-nowrap">
            <Link to="/services">
              Services
            </Link>
          </li>
          <li className="hover:text-white whitespace-nowrap">
            <Link to="/work">
                Work
            </Link>
          </li>
          <li className="hover:text-white whitespace-nowrap">
            <Link to="/about">
              About
            </Link>
          </li>
          <li className="hover:text-white whitespace-nowrap">
            <Link to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <button className="bg-[#0f0f0f] p-3 rounded-xl text-white cursor-pointer">
        <FiSun size={20} />
      </button>

      <button
        onClick={() => setNav(!nav)}
        className="text-white transition-transform duration-300 md:hidden"
      >
        <div className={nav ? "rotate-90 transition-transform duration-300" : "transition-transform duration-300"}>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </button>

    </div>

    {/* Toggle Menu */}
    <div
      className={`
        fixed inset-x-0 top-[62px] z-40 bg-black/80 backdrop-blur-md
        transform transition-all duration-300 ease-in-out
        ${nav ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"}
      `}
    >
      <div className="px-4 py-6">
        <nav>
          <ul className="flex flex-col gap-6 text-white text-lg">
            <li className="hover:text-white/70 transition-colors">
              <Link to="/">
                Home
              </Link>
            </li>
            <li className="hover:text-white/70 transition-colors">
              <Link to="/services">
                Services
              </Link>
            </li>
            <li className="hover:text-white/70 transition-colors">
              <Link to="/work">
                Work
              </Link>
            </li>
            <li className="hover:text-white/70 transition-colors">
              <Link to='/about'>
                About
              </Link>
            </li>
            <li className="hover:text-white/70 transition-colors">
              <Link to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</section>



  )
}

export default Navbar