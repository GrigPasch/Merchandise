import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Offer = () => {
  return (
    <section className='max-pad-container bg-banneroffer bg-center bg-cover w-full'>
      <div className='px-4 py-16 md:py-24 lg:py-44'>
        <h2 className='h2'>Spring Sale 50% OFF!</h2>
        <h3 className='medium-32 capitalize font-normal'>Grab <span className='text-secondary'>your favorites</span> now, on even lower prices!</h3>
        <Link to={'/'} className='text-white bg-tertiary pl-6 rounded-full flexBetween gap-x-2 medium-16 w-44 mt-10 group'>
          Shop now
          <FaArrowRightLong className='text-xl bg-secondary text-primary rounded-full h-12 w-12 p-4 group-hover:-rotate-45- transition-all duration-500 border-2 border-white'/>
        </Link>
      </div>
    </section>
  )
}

export default Offer