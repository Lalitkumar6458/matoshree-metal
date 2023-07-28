import React from 'react'
import Heading from '../SmallComponents/Heading'
import Image from 'next/image'

const Manufectruing = () => {
    const data=[{
        id:1,
        heading:"STAINLESS STEEL ROUND BARS",
        img:require("../../public/Images/manufectruing/roudbar.jpg"),
        text:""
    },
    {
        id:2,
        heading:"STAINLESS STEEL BILLETS",
        img:require("../../public/Images/manufectruing/IMG-20230721-WA0005.jpg"),
        text:""
    },
    {
        id:3,
        heading:"STAINLESS STEEL FLAT BARS",
        img:require("../../public/Images/manufectruing/Fimg1.jpg"),
        text:""
    },
    {
        id:4,
        heading:"STAINLESS STEEL IGNOTS",
        img:require("../../public/Images/manufectruing/ingots.jpeg"),
        text:""
    },
    {
        id:5,
        heading:"STAINLESS STEEL SQUARE BARS",
        img:require("../../public/Images/manufectruing/img10.png"),
        text:""
    },
    {
        id:6,
        heading:"STAINLESS STEEL FORGING BARS",
        img:require("../../public/Images/manufectruing/IMG-20230721-WA0006.jpg"),
        text:""
    }

]
  return (
    <div className='mt-[50px] px-[5%]'>
    <Heading heading="Manufacturing"/>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
    {
        data.map((item)=>{
            return <div className='h-[400]' key={item.id}>
            <div className='w-full h-[85%] border-[1px] border-solid border-mainRed p-1 rounded-t overflow-hidden'>
            <Image className='w-full h-full rounded hover:scale-110 transition-all duration-700'  src={item.img} alt={item.heading} width={500} height={400}/>
            </div>
            <div className='h-[15%] bg-dark-cl flex items-center justify-center rounded-b'>
            <h2 className=' text-white font-Oswald'>{item.heading}</h2>
            </div>
            </div>
        })
    }
    
    </div>
    </div>
  )
}

export default Manufectruing