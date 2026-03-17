import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <section className='border-b border-[color:var(--border)] bg-[color:var(--surface)]'>
        <div className="px-4 md:px-6 py-15 w-full max-w-7xl m-auto">
            <div className="grid md:grid-cols-3 gap-6">

                {/* Left */}
                <div className="flex flex-col gap-3">
                    <h2 className='text-[color:var(--text)] font-bold text-xl md:text-2xl lg:text-3xl'>RAY</h2>
                    <p className='text-[color:var(--muted)]'>Strategic Digital Partner</p>
                    <p className='text-[color:var(--faint)]'>Malawi</p>
                </div>

                {/* Center */}
                <div className="flex flex-col">
                    <h3 className='text-xl text-[color:var(--text)] font-bold mb-4'>Quick Links</h3>

                    <ul className='flex flex-col gap-3 text-[color:var(--muted)]'>
                        <li className='cursor-pointer'>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li className='cursor-pointer'>
                            <Link to="/services">
                                Services
                            </Link>
                        </li>
                        <li className='cursor-pointer'>
                            <Link to="/work">
                                Work
                            </Link>
                        </li>
                        <li className='cursor-pointer'>
                            <Link to="/about">
                                About
                            </Link>
                        </li>
                        <li className='cursor-pointer'>
                            <Link to="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Right */}
                <div className="flex flex-col gap-3">
                    <h3 className='text-xl text-[color:var(--text)] font-bold mb-4'>Connect</h3>

                    <p className='text-[color:var(--muted)] cursor-pointer'>ray625@gmail.com</p>
                    <p className='text-[color:var(--muted)] cursor-pointer'>+265984368805</p>

                </div>

            </div>
            <br />

                <hr 
                    className='border w-[90%] m-auto mt-5 border-[color:var(--border)]'
                />

            <br />

            <small className='text-[color:var(--muted)] text-center block m-auto md:text-lg'>© 2026 Ray. All rights reserved.</small>
        </div>
    </section>
  )
}

export default Footer
