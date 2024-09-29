import React from 'react'

const ProductDescription = () => {
  return (
    <div className='max-pad-container mt-20'>
      <div className='flex gap-3 mb-4'>
        <button className='btn-dark-outline rounded-sm text-xs !py-[6px] w-36'>Description</button>
        <button className='btn-dark-outline rounded-sm text-xs !py-[6px] w-36'>Care guide</button>
        <button className='btn-dark-outline rounded-sm text-xs !py-[6px] w-36'>Size guide</button>
      </div>
      <div className='flex flex-col pb-16'>
        <p className='text-sm'>
          Generic product description, coming through. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Etiam euismod leo in convallis fermentum. Maecenas in rhoncus lectus. Mauris iaculis purus id nisi feugiat 
          molestie. Nullam egestas ante vel venenatis volutpat. Cras eget ex velit. Suspendisse ac dapibus nunc. Morbi 
          tempor at velit rhoncus mollis. Pellentesque vel lectus in neque sollicitudin placerat. Morbi ut quam felis. 
          Mauris sed nisl lectus. Phasellus vitae mollis lorem. Curabitur varius tortor lobortis ipsum lacinia, et 
          accumsan justo faucibus. Etiam sodales, augue vitae sollicitudin volutpat, est tellus ultricies est, rhoncus 
          eleifend est tortor eget lorem.
        </p> 
        <p className='text-sm'>
          Vivamus egestas, metus sed semper dapibus, nibh ante interdum erat, non 
          fermentum lorem ipsum vel libero. Nunc pellentesque mauris quis lorem euismod consequat. Cras at tempor 
          libero.
        </p> 
      </div>
    </div>
  )
}

export default ProductDescription