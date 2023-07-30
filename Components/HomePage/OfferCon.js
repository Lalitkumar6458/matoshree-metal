import React from 'react'
import Heading from '../SmallComponents/Heading'
import Image from 'next/image'

const OfferCon = () => {
    const OfferData=[{

        id:1,
        heading:"​TIMELY DELIVERY",
        text:"Our commitment: Timely delivery, efficient processes, transparent communication. Your satisfaction is our priority. We go the extra mile to ensure your orders are delivered on time, every time.",
        icon:require("../../public/Images/Icons/Img1.png")
        
        },{
            id:2,
            heading:"COMPETITIVE PRICES",
            text:"We offer the best prices for High Nickel Alloy and stainless steel, ensuring reliable deliveries for all your requirements. Our aim is to provide cost-effective solutions without compromising on quality.",
            icon:require("../../public/Images/Icons/Img2.png")
        
        
        },
        {
            id:3,
            heading:"​QUALITY ACTIVITIES",
            text:"From procurement to final delivery, all our products undergo rigorous quality checks, ensuring exceptional standards throughout the entire process. Your satisfaction is our assurance of delivering top-notch products.",
            icon:require("../../public/Images/Icons/Img3.png")
        
        
        },
        {
            id:4,
            heading:"​LARGEST INVENTORY",
            text:"With vast stocks of all our products in standard sizes, we guarantee timely delivery, meeting your demands efficiently. Your satisfaction is our priority. Count on us to fulfill your requirements promptly and reliably.",
            icon:require("../../public/Images/Icons/Img4.png")
        
        
        },
        
        ]
  return (
    <div className='p-[5%]'>
    <Heading heading="​WHAT WE OFFER"/>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-[40px] gap-5'>
    {OfferData.map((item)=>{
        return (
            <div className='shadow-mainShadow p-4 relative group overflow-hidden border-[1px] border-solid border-l-4 border-dark-cl transition-all duration-700 rounded hover:border-0' key={item.id}>
            <div className="bg-mainRed w-[50px] h-[50px] flex items-center justify-center rounded relative z-10 ">
            <Image src={item.icon} alt='' className='w-[30px] h-[30px]'  width={40} height={40}/>
            </div>

            <h2 className='text-[1.3rem] font-Oswald mt-2 relative z-10 group-hover:text-white transition-all duration-700'>{item.heading}</h2>
            <p className='text-[0.9rem] font-medium font-poppins mt-3 relative z-10 group-hover:text-white transition-all duration-700'>{item.text}</p>
            <div className='absolute bottom-0 left-0 top-0 w-0 h-full rounded bg-dark-cl group-hover:w-full  group-hover:h-full  transition-all duration-700'></div>
            
            </div>
        )
    })}
    </div>
    </div>
  )
}

export default OfferCon