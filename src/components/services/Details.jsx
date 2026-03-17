import React from 'react'
import Serviceone from './Serviceone'

const Details = () => {
  return (
    <section className='border-b border-[color:var(--border)] bg-[color:var(--bg)]'>
        <div className="px-4 md:px-6 pt-22 md:pt-25 pb-8 w-full max-w-7xl m-auto">
            <div className="flex flex-col gap-10">
              <Serviceone />
            </div>
        </div>
    </section>
  )
}

export default Details
