import React from 'react'
import Products from '../../Components/Products'
import alloys from "../../public/Images/AlloysImg.jpg"
import { nickel } from '../../public/Data/ProductData'
import Metarials from '../../Components/Metarials'
import PageHeading from '@/Components/Base/PageHeading'
const Cobalt = () => {

  return (
    <div className=''>
    <PageHeading heading="Nickel" img={alloys} bredcurm ="Metals/Nickel"  />
    <div className='px-[5%] mt-[30px]'>
    <p className='text-[1.2rem] font-poppins font-medium'>
    Nickel is a versatile metal widely used in various industrial and consumer products due to its unique properties. It finds applications in magnets, stainless steel, coinage, batteries, rechargeable electric guitar strings, and special alloys. Additionally, it is utilized for plating purposes and to impart a green tint in glass.
    </p>
    <p className='text-[1.2rem] font-poppins font-medium'>
    One of the primary uses of nickel is in the production of nickel steels and nickel cast irons, where it offers enhanced strength and durability. Nickel is also extensively used in a wide range of alloys, including nickel brasses and bronzes, in combination with other elements such as chromium, aluminum, lead, copper, cobalt, silver, and gold.
    </p>
    <h3 className='text-[1.4rem] font-Roboto mt-4 font-semibold'>The usage of nickel for various applications can be categorized as follows:</h3>
    <ul className='text-[1.3rem] font-poppins list-disc ml-7' >
    <li>60% for making nickel steels</li>
    <li>14% in nickel-copper alloys and nickel silver</li>

    <li>9% to produce malleable nickel, nickel clad, Inconel, and other super alloys</li>

    <li>6% for plating purposes</li>

    <li>3% in nickel cast irons</li>

    <li>3% in heat and electric resistance alloys like Nichrome</li>

    <li>2% for nickel brasses and bronzes</li>
    <li>The remaining 3% is used in all other combined applications.</li>


    </ul>
    <p className='text-[1.2rem] font-poppins font-medium mt-4'>Nickel is a common material used in coins and is occasionally used as a substitute for decorative silver. Nickel foam or nickel mesh is employed in gas diffusion electrodes for alkaline fuel cells, showcasing its utility in sustainable energy technologies</p>
    <p className='text-[1.2rem] font-poppins font-medium mt-1'>
    At <span className='text-mainRed font-medium'>Rajesh Alloys</span>, we deal in various grades of Nickel Alloy Scrap, ensuring a reliable and diverse supply for our customers' needs. Nickel scrap and nickel alloy scrap, when combined with iron and cobalt or other metals and scrap metals, exhibit strong magnetic properties. Additionally, they can be alloyed with other metals to enhance their heat and electrical conductivity.
    </p>
    <p className='text-[1.2rem] font-poppins font-medium mb-5'>With its remarkable versatility and unique attributes, nickel continues to play a crucial role in a wide range of industries, contributing to advancements in technology and everyday consumer products.</p>
    </div>
    </div>
  )
}

export default Cobalt