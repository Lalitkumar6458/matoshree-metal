import React from 'react'
import alloys from "../../public/Images/AlloysImg.jpg"
import { TitaniumandTantalum  } from '../../public/Data/ProductData'
import Metarials from '../../Components/Metarials'
import PageHeading from '@/Components/Base/PageHeading'
const Titanium = () => {
    const data_bredcrum =[{
        id:1,
        name:"Home",
        link:"/"
    },{
        id:2,
        name:"Metarials",
        link:"/Metarials/Titanium"
    },{
        id:3,
        name:"Titanium",
        link:"/Metarials/Titanium"
    }]
  return (
    <>

    <PageHeading heading="Titanium" img={alloys} bredcurm ="Metals/Titanium"  />
    
    <div className='px-[5%] mt-[30px]'>
    <p className='text-[1.2rem] font-poppins font-medium'>
    Titanium and Tantalum alloys are highly desirable structural materials, sought after for their remarkable combination of high strength, low density, and excellent corrosion resistance. The exceptional resistance of titanium in highly corrosive environments has resulted in its widespread adoption in various non-aerospace industrial applications. Additionally, the decreasing cost and increasing availability of mill and fabricated titanium products have made titanium alloys standard engineering materials for numerous consumer products as well.
    </p>
    <p className='text-[1.2rem] font-poppins font-medium mt-2'>
    At our organization, we take pride in trading in a wide range of titanium alloys, each with its unique properties and applications. Some of the alloys we deal in include:
    Grade:<span className='text-mainRed'>90 Ti-6 Al-4 V
    CP grade 1 (Commercially Pure Grade 1),
    CP grade 2 (Commercially Pure Grade 2),
    662,
    314,
    315,
    317,
    230,
    260 </span>and many other grades
    </p>
    <p className='text-[1.2rem] font-poppins font-medium mt-2'>
    These titanium alloys cater to diverse industrial needs and applications, showcasing the versatility and adaptability of titanium in various sectors. The 90 Ti-6 Al-4 V alloy, for instance, is well-known for its exceptional strength-to-weight ratio, making it ideal for aerospace and structural applications. On the other hand, the CP grade 1 and grade 2 alloys are valued for their corrosion resistance and biocompatibility, making them suitable for medical implants and other specialized uses
    </p>
    <p className='text-[1.2rem] font-poppins font-medium mt-2'>
    As a leading supplier, we offer a wide range of titanium alloys, enabling our clients to choose the most appropriate material for their specific requirements. Our commitment to delivering high-quality products and our extensive inventory of titanium alloys make us a reliable partner for both industrial and consumer product manufacturers.
    </p>
    <p className='text-[1.2rem] font-poppins font-medium mt-2 mb-6'>In conclusion, titanium and tantalum alloys are prized for their outstanding properties, and their applications extend from industrial to consumer products. With our comprehensive selection of titanium alloys, we aim to meet the diverse needs of our customers and contribute to the advancement of technology and the improvement of everyday consumer goods.</p>

    </div>
    </>
  )
}

export default Titanium