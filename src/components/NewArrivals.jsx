/* eslint-disable react/no-unescaped-entities */

import React from 'react'
import LATEST from '../assets/latest'
import Item from './Item'

const NewArrivals = () => {
  return (
    <section className='max-pad-container bg-primary p-12 xl:py-28'>
    <div className='text-center max-w-xl mx-auto'>
      <h3 className='h3'>Our newest arrivals!</h3>
      <p>Take a look at some of our newest additions, <span className='text-secondary'>which</span> we are sure <span className='text-secondary'>you'll love</span></p>
    </div>
    <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-28 mt-32'>
      {LATEST.map((item) => (
        <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
      ))}
    </div>
  </section>
  )
}

export default NewArrivals