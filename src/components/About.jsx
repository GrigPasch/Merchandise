import React from 'react'
import { RiCustomerService2Line } from "react-icons/ri";
import { GiReturnArrow } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import about from '../assets/about.png'

const About = () => {
  return (
    <section className='max-pad-container py-12 xl:py-32'>
      <div className='flex flex-col gap-16 xl:flex-row'>
          {/* left side */}
          <div className='flex-1'>
            <h3 className='h3 capitalize'>Reasons our site is trusted by thousands of people everyday, all around the globe!</h3>
            <p className='py-5'>Some of our key features that make us your number one everyday choice for online shopping!</p>
            <div className='flex flex-col items-start gap-y-4'>
              <div className='flexCenter gap-x-4'>
                <div className='h-16 min-w-16 bg-secondary flexCenter rounded-md'>
                  <GiReturnArrow className='text-white text-2xl'/>
                </div>
                <div>
                  <h4 className='medium-18'>Easy Returns Process</h4>
                  <p>With our new returns policies, returning stuff has been made easier than never.</p>
                </div>
              </div>
              <div className='flexCenter gap-x-4'>
                <div className='h-16 min-w-16 bg-secondary flexCenter rounded-md'>
                  <RiSecurePaymentLine className='text-white text-2xl'/>
                </div>
                <div>
                  <h4 className='medium-18'>Secure Payment Options</h4>
                  <p>With our new returns policies, returning stuff has been made easier than never.</p>
                </div>
              </div>
              <div className='flexCenter gap-x-4'>
                <div className='h-16 min-w-16 bg-secondary flexCenter rounded-md'>
                  <RiCustomerService2Line className='text-white text-2xl'/>
                </div>
                <div>
                  <h4 className='medium-18'>24/7 Live Customer Support</h4>
                  <p>With our new returns policies, returning stuff has been made easier than never.</p>
                </div>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className='flex-1 flexCenter'>
            <div>
              <img src={about} alt='' height={488} width={488}/>
            </div>
          </div>
      </div>
    </section>
  )
}

export default About