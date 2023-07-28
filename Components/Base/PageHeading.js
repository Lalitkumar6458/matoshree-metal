import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const PageHeading = ({heading,img,bredcurm}) => {
  return (
    <div className='w-full h-[300px] relative flex items-center justify-center'>
    <Image className='w-full h-full object-cover absolute top-0 left-0 right-0' src={img} width={800} height={400} alt='contactImage'/>
<div className='w-full h-full absolute top-0 left-0 right-0 bg-[#00000069]'></div>
<div className='flex items-center justify-center flex-col relative z-10 text-white'>
<h2 className='text-[2rem] md:text-[3rem] font-Oswald font-semibold border-b-2 border-solid border-mainRed ' >{heading}</h2>
<div className='text-[1.1rem] md:text-[1.4rem] font-poppins font-medium mt-3'>
<Link className='text-mainRed' href="/">Home</Link> | <span>{bredcurm}</span>
</div>
</div> 
    </div>
  )
}

export default PageHeading