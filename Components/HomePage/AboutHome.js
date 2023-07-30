import React from 'react'
import {BiSolidBarChartSquare} from 'react-icons/bi'
import {FaPagelines,FaLeaf,FaEnvelope} from "react-icons/fa"
import Heading from '../SmallComponents/Heading'
import Button from '../SmallComponents/Button'
import aboutImg from "../../public/Images/HomeImage/aboutImg.png"
import Image from 'next/image'
import Router from 'next/router'
const AboutHome = () => {
    const data=[
        {
            id:1,
            icon:<BiSolidBarChartSquare/>,
            heading:"EXPERIENCE",
            text:"15 Years of Manufacturing Experience Reliable Sea-Worthy Packing Accurate Dimensions, Quality Raw Materials Advanced Tools for Efficient Scrap Processing"
        },
        {
            id:2,
            icon:<FaPagelines/>,
            heading:"SERVICE",
            text:"Unparalleled Customer Care  Efficient Recycling Solutions Committed to Sustainable Practices Your Trusted Partner for Reliable Scrap Management"
        },
        {
            id:3,
            icon:<FaLeaf/>,
            heading:"QUALITY",
            text:"Premium Scrap Solutions Superior Quality Materials Thorough Testing and Inspection Compliant with International Standards Reliable Source for Sustainable Recycling"
        },
    ]
    const Redirctpage=()=>{

        Router.push('/about')
      }
  return (
   <div className='w-full pt-[20px] px-[5%] '>
<div className='text-center' >
<h4 className='text-[1.2rem] text-dark-cl font-Roboto font-medium'>WELCOME TO</h4>
<h5 className='text-[2rem] font-Oswald font-semibold'>MatoShree Metal & Alloys</h5>
<div className='w-[70px] h-1 bg-mainRed rounded mt-2 mx-auto'></div>
<p className='text-[1rem] font-poppins text-gray-500 mt-4 font-medium '>Ferrous & Non Ferrous Metal</p>
</div>
<div className='grid grid-cols-1 md:grid-cols-2 gap-[40px] mt-[20px]'>


<div className='flex flex-col items-center justify-end'>
<div className=' mt-[20px]'>
<h4 className='text-[1.1rem] md:text-[1.15rem] font-poppins text-justify '>At <span className='text-mainRed'>MatoShree Metal & Alloys</span>, we specialize in providing a comprehensive range of commercial and industrial stainless steel products. Our inventory includes a wide selection of stainless steel grades, such as<span className='text-mainRed'>304L, 316L, 321, 347, 309, 310,</span>  as well as alloys with titanium, molybdenum, nickel, tungsten, niobium, hastelloy, nichrome, monel, nimonic, cobalt, inconel,<span className='text-mainRed'>800, 825, 601, 600, 625, 718,</span>  X750, SMO, 904L, Alloy 20, duplex, and ferro alloys.,We offer a variety of products to meet your specific needs, including forging flush, turning, solid materials, runner razors, plate cuttings, round cut pieces, pipe cuttings, and more. Our extensive range ensures that you can find the right materials for your project.</h4>
</div>
<Button text='Read More...' Redirctpage={Redirctpage} />
</div>
<div className=''>

<div className='w-[100%] md:w-full h-full overflow-hidden p-1 rounded-md border-[1px] border-solid border-gray-600 mt-3'>

<Image className='w-full h-full object-cover   hover:scale-110 transition-all duration-700' src={aboutImg} alt='' width={1000} height={600} />
</div>
</div>
</div>

{/*<div className='w-full shadow-mainShadow mt-5 rounded'>

<div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-y-4'>

{
    data.map((item)=>{
        return <div className='flex items-center justify-center flex-col px-5'>
<h2 className='text-[1.3rem] font-semibold font-Roboto'>{item.heading}</h2>
<p className='text-center mt-2 text-[1rem] font-Oswald'>{item.text}</p>
        </div>
    })
}
</div>
</div>*/}

   </div>
  )
}

export default AboutHome