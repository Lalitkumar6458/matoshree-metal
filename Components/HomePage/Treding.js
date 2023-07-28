import React from 'react'
import Heading from '../SmallComponents/Heading'
import Image from 'next/image'

const Treding = () => {
    const data=[
        {
            id:1,
            heading:"Stainless Steel Coils",
            desc:"Our stainless steel coils are manufactured using the highest-grade stainless steel, ensuring excellent durability, corrosion resistance, and performance. They are available in various sizes and thicknesses, making them suitable for diverse applications in industries such as automotive, construction, and manufacturing.",
            img:require('../../public/Images/trading/sscoil.webp')
        },
        {
            id:2,
            heading:"Stainless Steel Pipes",
            desc:"We provide a comprehensive selection of stainless steel pipes that meet international standards. Whether you require seamless or welded pipes, we have the perfect solution for your needs. Our stainless steel pipes are known for their sturdiness, longevity, and resistance to extreme temperatures and corrosive environments.",
            img:require('../../public/Images/trading/sspipe.webp')
        },
    ]
  return (
   <div className='mt-[60px] md:mt-[80px] mb-[20px] px-[5%] '>
   <Heading heading="We Trading"/>
   <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-6'>
   {
    data.map((item)=>{
        return <div className='shadow-mainShadow rounded' key={item.id}>
        <div className='h-[200px] w-full p-1 border border-gray-400 rounded'>
        <Image className='w-full h-full object-cover rounded' src={item.img} alt={item.heading} width={500} height={400}/>
        </div>
        <div className='p-5'>
        <h3 className='text-[1.4rem] font-Oswald'>{item.heading}</h3>
        <p className='text-[1rem] font-poppins'>{item.desc}</p>
        </div>
        </div>
    })
   }
   </div>
   </div>
  )
}

export default Treding