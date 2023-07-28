import React from 'react'
import Products from '../../Components/Products'
import alloys from "../../public/Images/AlloysImg.jpg"
import {Stainless_Steel_Content,stainless_steel_data} from '../../public/Data/ProductData'
import Heading from '@/Components/SmallComponents/Heading'
import ProductSlider from '@/Components/SmallComponents/ProductSlider'
import GradeTable from '@/Components/SmallComponents/GradeTable'
import PageHeading from '@/Components/Base/PageHeading'
const StainlessSteel = () => {
  const applications = [
    {
      id: 1,
      heading: "Construction and Architecture",
      desc: "Stainless steel is extensively used in construction and architectural applications due to its durability, corrosion resistance, and aesthetic appeal. It is used for building facades, handrails, roofing, bridges, and other structural components.",
      img: require("../../public/Images/productapplication/ssImg/img1.jpg"),
    },
    {
      id: 2,
      heading: "Food Processing and Storage",
      desc: "Stainless steel's hygienic properties make it ideal for food processing equipment, storage tanks, and kitchen appliances. It prevents contamination and ensures the preservation of food quality.",
      img: require("../../public/Images/productapplication/ssImg/img2.jpg"),
    },
    {
      id: 3,
      heading: "Chemical and Petrochemical Industries",
      desc: "Stainless steel's resistance to corrosive chemicals and high temperatures makes it a go-to material for chemical processing equipment, reactors, pipelines, and storage vessels.",
      img:require("../../public/Images/productapplication/Nickel/img4.jpeg"),
    },
    {
      id: 4,
      heading: "Medical and Healthcare",
      desc: "In the medical field, stainless steel is used in surgical instruments, implants, and medical devices due to its biocompatibility and ease of sterilization.",
      img: require("../../public/Images/productapplication/ssImg/img3.webp"),
    },
    {
      id: 5,
      heading: "Automotive Industry",
      desc: "Stainless steel is used in exhaust systems, decorative trims, and structural components in automobiles due to its corrosion resistance and strength.",
      img: require("../../public/Images/productapplication/Nickel/img7.jpg"),
    },
    {
      id: 6,
      heading: "Aerospace and Aviation",
      desc: "In the aerospace industry, stainless steel is utilized for aircraft components, such as exhaust systems, fasteners, and structural parts, where corrosion resistance and high strength are critical.",
      img:require("../../public/Images/productapplication/Cobalt/img1.jpg"),
    },
    {
      id: 7,
      heading: "Marine and Offshore Applications",
      desc: "Stainless steel is widely used in marine environments, such as shipbuilding, offshore oil platforms, and marine equipment, thanks to its corrosion resistance in saltwater.",
      img:require("../../public/Images/productapplication/tungesten/img10.jpeg"),
    },
    {
      id: 8,
      heading: "Energy Sector",
      desc: "Stainless steel is employed in power generation plants, including nuclear, solar, and geothermal facilities, due to its ability to withstand high temperatures and corrosive environments.",
      img:require("../../public/Images/productapplication/ssImg/img4.jpg"),
    },
    {
      id: 9,
      heading: "Consumer Goods",
      desc: "Stainless steel is used in a variety of household items, including cutlery, cookware, appliances, and jewelry, due to its attractive appearance and durability.",
      img: require("../../public/Images/productapplication/ssImg/img5.jpeg"),
    },
    {
      id: 10,
      heading: "Environmental and Water Treatment",
      desc: "Stainless steel is used in water treatment plants, wastewater handling, and pollution control systems due to its corrosion resistance and ability to withstand harsh environmental conditions.",
      img: require("../../public/Images/productapplication/ssImg/img6.jpeg"),
    },
    {
      id: 11,
      heading: "Transportation and Infrastructure",
      desc: "Stainless steel finds applications in trains, buses, and subway cars, as well as in infrastructure components like tunnels and railings, due to its strength and resistance to weathering.",
      img:require("../../public/Images/productapplication/ssImg/img7.jpeg"),
    },
    {
      id: 12,
      heading: "Oil and Gas Industry",
      desc: "Stainless steel is used in oil and gas extraction and processing equipment, such as pipelines, valves, and storage tanks, due to its ability to handle corrosive and high-pressure environments.",
      img:require("../../public/Images/productapplication/Cobalt/img3.jpg"),
    },
    {
      id: 13,
      heading: "Electronics and Technology",
      desc: "Stainless steel is used in electronic and communication devices, smartphones, and computer hardware for its durability and aesthetic qualities.",
      img:require("../../public/Images/productapplication/Nickel/img6.jpg"),
    },
    {
      id: 14,
      heading: "Renewable Energy",
      desc: "Stainless steel components are employed in renewable energy systems, including wind turbines and solar panel supports, due to their corrosion resistance and strength.",
      img:require("../../public/Images/productapplication/ssImg/img8.jpeg"),
    }

  ];
  const stainlessSteelCharacteristics = [
    {
      id: 1,
      heading: "High Tensile Strength",
      desc: "Stainless steel offers excellent mechanical properties, including high tensile strength, which ensures its structural integrity and reliability in demanding applications.",
    },
    {
      id: 2,
      heading: "Durability",
      desc: "Stainless steel is highly durable and capable of withstanding harsh conditions, making it a preferred choice for long-lasting structures and components.",
    },
    {
      id: 3,
      heading: "Temperature Resistance",
      desc: "Stainless steel maintains its strength and integrity at both low and high temperatures, allowing it to perform reliably in extreme heat or cold.",
    },
    {
      id: 4,
      heading: "Formability and Fabrication",
      desc: "Stainless steel is easily formable and can be fabricated into various shapes, making it versatile for use in different industries and applications.",
    },
    {
      id: 5,
      heading: "Low-Maintenance and Long-Lasting",
      desc: "Thanks to its resistance to corrosion and wear, stainless steel requires minimal maintenance, resulting in extended service life and reduced lifecycle costs.",
    },
    {
      id: 6,
      heading: "Attractive Appearance",
      desc: "Stainless steel's clean, modern, and polished appearance makes it a popular choice for architectural and decorative applications.",
    },
    {
      id: 7,
      heading: "Environmentally Friendly and Recyclable",
      desc: "Stainless steel is an environmentally friendly material as it is fully recyclable, reducing its environmental impact and promoting sustainability.",
    },
  ];
  const stainlessSteelTypes = [
    {
      type: "Austenitic Stainless Steel",
      grades: "304, 316",
      applications: "Widely used in food processing, chemical processing, and architectural applications Grade 304, 316",
    },
    {
      type: "Ferritic Stainless Steel",
      grades: "430",
      applications: "Suitable for automotive trim, kitchen appliances, and decorative applications Grade 430",
    },
    {
      type: "Martensitic Stainless Steel",
      grades: "410, 420",
      applications: "Used in cutlery, surgical instruments, and turbine blades. Grade 410, 420",
    },
    {
      type: "Duplex Stainless Steel",
      grades: "2205",
      applications: "Used in marine environments, oil and gas industry, and heat exchangers. Grade 2205",
    },
  ];
  return (
    <>
    <PageHeading heading="Stainless Steel Scrap" img={alloys} bredcurm ="Products/StainlessSteel"/>

    <div className='px-[5%] mt-[40px]'>
    <p className='text-[1.3rem] font-poppins'>Stainless steel is indeed a family of iron-based alloys known for their exceptional corrosion and heat resistance. These alloys contain a minimum of 10.5% chromium, which imparts superior corrosion resistance compared to other types of steels. Along with iron and carbon, stainless steel incorporates various other alloying elements, with chromium being the most prominent. Other common alloying elements include nickel, molybdenum, magnesium, and nitrogen.</p>
  <div className=''>
  <h4 className='text-[1.5rem] font-Roboto'> Characteristic of Stainless Steel</h4>
  <div className=''>
  <table className='border border-collapse'>
 <tbody>
 {stainlessSteelCharacteristics.map((item)=>{

  return <tr>
  <td className='border border-dark-cl font-Roboto text-[1.1rem] px-2 font-semibold'>{item.heading}</td>
  <td className='border border-dark-cl font-poppins text-[1rem] px-2'>{item.desc}</td>
  </tr>
 })

 }
 
 </tbody>
  </table>
  </div>

  </div>
    <div className='mt-[20px]'>
    <h3 className='text-[1.5rem] font-Roboto'>Type Of Stainless Steel</h3>
    <div className=''>
    <table className='border border-collapse w-full'>
   <tbody>
   {stainlessSteelTypes.map((item)=>{
  
    return <tr>
    <td className='border border-dark-cl font-Roboto text-[1.1rem] px-2 font-semibold'>{item.type}</td>
    <td className='border border-dark-cl font-poppins text-[1rem] px-2'>{item.applications}</td>
    </tr>
   })
  
   }
   
   </tbody>
    </table>
    </div>

    </div>
    <div className='mb-8 mt-[40px]'>
    <Heading heading="Applications"/>
    
    <ProductSlider data={applications}/>
    </div>
    
    <div className='mt-9'>
    <Heading heading="We trade Grades"/>
    <GradeTable data={stainless_steel_data}/>
    </div>
    
    </div>
    </>
  )
}

export default StainlessSteel