import React from 'react'
import { RiInstagramLine, RiTwitterXLine, RiYoutubeFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
const SocialIcons = () => {
  return (
    <div className='flex gap-12 pr-4'>
        <Link>
            <RiYoutubeFill className='text-secondaryRed text-2xl hover:-translate-y-1 transition-all duration-500'/>
        </Link>
        <Link>
            <RiInstagramLine className='text-white instagramColor text-2xl hover:-translate-y-1 transition-all duration-500 rounded-[25%]'/>
        </Link>
        <Link>
            <RiTwitterXLine className='text-white text-2xl hover:-translate-y-1 transition-all duration-500'/>
        </Link>
    </div>
  )
}

export default SocialIcons