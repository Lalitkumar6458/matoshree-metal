import React from 'react'
import alloys from "../../public/Images/AlloysImg.jpg"
import { cobalt} from '../../public/Data/ProductData'
import Metarials from '../../Components/Metarials'
import PageHeading from '@/Components/Base/PageHeading'

const Cobalt = () => {
 
  return (
    <div>
    <PageHeading heading="Cobalt" img={alloys} bredcurm ="Metals/Cobalt"  />

    <div className='px-[5%] mt-[30px]'>
    <p className='text-[1.2rem] font-poppins font-medium'>
    As a quality-oriented organization, we are dedicated to providing our clients with excellent quality Cobalt Scrap. Our offered cobalt scraps are available in various sizes, dimensions, and other specifications, catering to the diverse requirements of our customers. These cobalt scraps are meticulously manufactured by our vendor's experts, using the finest quality cobalt sourced from trusted and reliable vendors in the industry. We take pride in offering these cobalt scraps in numerous specifications, ensuring satisfaction to our valued customers.
    </p>
    <p className='text-[1.2rem] font-poppins font-medium'>Cobalt scrap (Co Scrap) and cobalt alloy scrap (Co Alloy Scrap) play a crucial role in the recycling efforts in the U.S. It is estimated that the cobalt consumed comprises a 50/50 ratio between new cobalt scrap and cobalt alloy scrap, as well as old cobalt scrap and cobalt alloy scrap. At Monico Alloys, we recycle cobalt scrap and cobalt alloy scrap for various applications. These recycled materials find use in numerous fields, including but not limited to, superalloys, chemical compounds, cutting tools, magnetic properties, and specialty steels.</p>
    <p className='text-[1.2rem] font-poppins font-medium'>Our cobalt scraps possess excellent mechanical properties and are of exceptional quality, ensuring their reliability and performance. Additionally, they exhibit superior corrosion resistance, making them suitable for a wide range of applications.</p>

    <h3 className='text-[1.4rem] font-Roboto mt-4 font-semibold'>Applications of Cobalt Scrap </h3>
    <ul className='text-[1.3rem] font-poppins list-disc ml-7'>
    <li>Super Alloys</li>
    <li>Chemical Compounds</li>

    <li>Cutting Tools</li>

    <li>Magnetic Properties</li>
    <li>Specialty Steels</li>

    </ul>
    <p className='text-[1.2rem] font-poppins font-medium mt-3 mb-5'>At <span className='text-mainRed font-medium'>Matoshree metal & alloys</span>, we are committed to promoting sustainable practices by recycling and reusing cobalt scrap and cobalt alloy scrap, contributing to a greener and more environmentally friendly approach. We continuously strive to meet the diverse needs of our clients, providing them with reliable and high-quality materials for their specific requirements.</p>
    </div>
    </div>
  )
}

export default Cobalt