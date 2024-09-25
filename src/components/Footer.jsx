import React from 'react'
import Navbar from './Navbar'
import SocialIcons from './SocialIcons'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='max-pad-container bg-tertiary py-9'>
      <div className='flexCenter flex-col gap-y-4'>
        <Link to={'/'} className='flex items-center gap-x-2'> 
          <span className='bold-24 hidden xs:flex text-white'>Style Outlet</span>
        </Link>
        <div className='py-4'>
          <Navbar containerStyles={"flex gap-x-5 xl:gap-x-10 text-white medium-15 rounded-full px-2 py-1"}/>
        </div>
        <SocialIcons/>
        <hr className='h-[1px] w-[37%] my-3'/>
        <div className='text-white'>
          Copyright &copy; Style Outlet | All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer