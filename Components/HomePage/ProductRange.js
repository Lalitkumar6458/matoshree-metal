import Image from 'next/image'
import React from 'react'
import img from "../../public/Images/Landing-2.png"
import{FaEnvelope} from "react-icons/fa"
import Link from 'next/link'
const Productrange = () => {
  const ProductsRangeData = [
    {
      id: 1,
      heading: "Hi-Nickel Scrap",
      text: "We offer high-quality nickel scrap, including Inconel alloys (600, 625, 800, 825, 904L), Monel alloys (K400/K500), Hastelloy alloys (C22/C276), SMO 254, and nickel-chromium compositions (Ni:35% Cr:25% and Ni:45% Cr:35%). We also have Ni-Chrome scrap 80/20, Nimonic 80 scrap (Ni:75% and Cr:18%), and scrap of grades 309 and 310.",
      icon: "",
    },
    {
      id: 2,
      heading: "Cobalt Base Alloys Scrap",
      text: "Our inventory includes cobalt base alloys scrap, such as SH-4, SH-6, SH-12, SH-21, SH-25, SH-31, SH-605, F-75, and FSX-414. These alloys are known for their excellent properties and are used in various industries.",
      icon: "",
    },
    {
      id: 3,
      heading: "Ferro Alloys",
      text: "We provide ferro alloys like Ferro Molybdenum, Ferro Niobium, Ferro Tungsten, Ferro Vanadium, Ferro Manganese, Ferro Chromium, L.C. Chromium, and L.C. Manganese. These alloys are widely used for their strength and performance in different applications.",
      icon: "",
    },
    {
      id: 4,
      heading: "Pure Metals",
      text: "We offer a range of pure metals, including Pure Nickel, Pure Molybdenum, Pure Chromium, Pure Tungsten, Pure Manganese, Pure Cobalt, Pure Niobium, and Pure Tantalum. These metals find applications in specialized industries that require high-purity materials.",
      icon: "",
    },
    {
      id: 5,
      heading: "Stainless Steel Scrap",
      text: "Our stainless steel scrap collection encompasses the 200, 300, and 400 series, including grades such as 201, 202, 304, 304L, 310, 316, 316L, 321, 410, 430, Duplex 2205, and Super Duplex 2507. These scrap materials are suitable for various purposes and can be used in different stainless steel applications.",
      icon: "",
    }
    // },
    //   {
    //     id: 6,
    //     heading: "TUNGSTEN ALLOYS SCRAP",
    //     text: "​We are Supplier of pure Tungsten",
    //     icon: require("../../../public/Icons/WIcon.png"),
    //   },
    ];
  return (
    <div className='w-full h-auto xl:h-screen relative mt-[20px] px-[5%]  pb-[30px]'>


    <div className='flex items-center justify-center relative pt-[20px] flex-col '>
    <h1 className='text-[2rem] text-dark-cl font-heading'>Product Range</h1>
    <div className='w-[100px] bg-mainRed h-[4px] rounded-md'></div>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  gap-3 relative mt-[20px]'>
    {
      ProductsRangeData.map((item)=>{
        return <div className='border-2 border-solid border-mainRed p-4 group hover:bg-footerBg rounded-md'>
        <h3 className='text-dark-cl text-[1.6rem] group-hover:text-white font-Roboto font-bold'>{item.heading}</h3>
        <p className='text-gray-800 font-poppins group-hover:text-white'>{item.text}</p>
        </div>
      })
    }
    <div className='bg-footerBg border-2 border-solid border-mainRed p-4  rounded-md'>
    <div className="w-full h-full flex flex-col items-center justify-center text-white">
<span className='text-[2rem]'><FaEnvelope/></span>
<h2 className='text-[1.3rem] text-center mt-3'>WE ARE ALWAYS HAPPY TO HELP GET IN TOUCH WITH US TODAY!</h2>
<p><button className="border-2 border-solid border-white p-2 mt-2 rounded"> <Link href="/contact">Get a quote</Link> 
</button></p>

</div>

    </div>
    </div>
    </div>
  )
}

export default Productrange