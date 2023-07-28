import React from 'react'

const Heading = ({heading}) => {
  return (
   <div className='w-full flex items-center justify-center flex-col'>
   <h1 className='text-[2rem] font-heading text-dark-cl'>{heading}</h1>
   <div className='w-[100px] bg-mainRed h-[5px] rounded-md'></div>
   </div>
  )
}

export default Heading