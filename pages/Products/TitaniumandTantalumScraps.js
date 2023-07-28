import React from 'react'
import Products from '../../Components/Products'
import alloys from "../../public/Images/AlloysImg.jpg"
import { TitaniumandTantalum_data,TitaniumandTantalum} from '../../public/Data/ProductData'
import PageHeading from '@/Components/Base/PageHeading'
import Heading from '@/Components/SmallComponents/Heading'
import ProductSlider from '@/Components/SmallComponents/ProductSlider'
import GradeTable from '@/Components/SmallComponents/GradeTable'
const CobaltAlloysScraps = () => {
  const applicationsOfTitaniumAndTantalum = [
    {
      id: 1,
      heading: "Chemical Processing",
      desc: "Due to their excellent corrosion resistance, titanium and its alloys are used in chemical processing equipment, such as reactors, heat exchangers, and piping systems, where they can handle corrosive chemicals safely and effectively.",
      img:require("../../public/Images/productapplication/Nickel/img4.jpeg"),
    },
    {
      id: 2,
      heading: "Marine and Offshore",
      desc: "In marine environments, titanium alloys are used for ship hulls, propellers, and other components that require resistance to seawater corrosion. In offshore industries, they are employed in subsea equipment and pipelines.",
      img: require("../../public/Images/productapplication/tungesten/img10.jpeg"),
    },
    {
      id: 3,
      heading: "Power Generation",
      desc: "Titanium alloys find applications in power plants, particularly in condenser tubing, heat exchangers, and turbine components, where corrosion resistance and heat transfer efficiency are essential.",
      img:require("../../public/Images/productapplication/tungesten/img9.jpg"),
    },
    {
      id: 4,
      heading: "Desalination Plants",
      desc: "Titanium's corrosion resistance makes it an ideal material for use in desalination plants, where it is employed in heat exchangers and other critical components.",
      img: require("../../public/Images/productapplication/tungesten/img8.jpg"),
    },
    {
      id: 6,
      heading: "Electronics",
      desc: "Tantalum capacitors are widely used in the electronics industry due to their small size, high capacitance, and reliability. They find use in smartphones, computers, and various electronic devices.",
      img: require("../../public/Images/productapplication/Nickel/img6.jpg"),
    },
    {
      id: 7,
      heading: "Aerospace and Aviation",
      desc: "Tantalum is used in aerospace and aviation applications for parts subjected to high temperatures and corrosive environments. These include jet engine components and rocket nozzles.",
      img:require("../../public/Images/productapplication/Cobalt/img1.jpg"),
    },
    {
      id: 8,
      heading: "Medical Implants",
      desc: "Tantalum's biocompatibility makes it suitable for medical implants, such as bone plates, screws, and joint replacements.",
      img: require("../../public/Images/productapplication/tungesten/img7.jpeg"),
    },
    {
      id: 9,
      heading: "Nuclear Industry",
      desc: "Tantalum is used in nuclear reactors for its ability to withstand radiation and high temperatures. It is used in cladding materials and other critical components.",
      img: require("../../public/Images/productapplication/Cobalt/img5.jpeg"),
    },
  ];
  
  
    const titaniumCharacteristics = [
      {
        id: 1,
        heading: "High Strength-to-Weight Ratio",
        desc: "Titanium alloys exhibit a remarkable strength-to-weight ratio, making them incredibly lightweight while maintaining considerable strength. This characteristic is particularly beneficial in aerospace applications but has also found favor in various non-aerospace industries.",
      },
      {
        id: 2,
        heading: "Excellent Corrosion Resistance",
        desc: "Titanium is renowned for its exceptional corrosion resistance, especially in highly aggressive and corrosive environments, such as seawater, acidic solutions, and chlorine-rich environments. This property makes it an ideal material for applications where resistance to corrosion is crucial.",
      },
      {
        id: 3,
        heading: "Non-Magnetic and Biocompatible",
        desc: "Titanium is non-magnetic, which is advantageous in certain electronic and medical applications. Moreover, it is biocompatible, making it suitable for medical implants and surgical instruments.",
      },
      {
        id: 4,
        heading: "Heat Resistance",
        desc: "Titanium alloys retain their strength and mechanical properties at elevated temperatures, allowing them to withstand high-temperature environments without significant degradation.",
      },
      {
        id: 5,
        heading: "Fabricability and Formability",
        desc: "Advances in manufacturing processes have made titanium alloys easier to fabricate into various shapes and forms, broadening their applications across industries.",
      },
    ];
    const tantalumCharacteristics = [
      {
        id: 1,
        heading: "Corrosion Resistance",
        desc: "Tantalum possesses remarkable corrosion resistance, particularly in aggressive and acidic environments. This property makes it highly desirable for applications involving contact with corrosive chemicals.",
      },
      {
        id: 2,
        heading: "High Melting Point",
        desc: "Tantalum has a very high melting point, which exceeds 3,000°C (5,432°F). This characteristic allows it to maintain its strength and integrity at elevated temperatures.",
      },
      {
        id: 3,
        heading: "Ductility",
        desc: "Tantalum is ductile, meaning it can be drawn into wires or formed into various shapes without fracturing.",
      },
      {
        id: 4,
        heading: "Biocompatibility",
        desc: "Like titanium, tantalum is biocompatible, making it suitable for medical implants and surgical instruments.",
      },
    ];
  return (
   <div className=''>
   <PageHeading heading="Tungsten Alloys Scrap" img={alloys} bredcurm ="Products/TitaniumandTantalumScraps"/>

   <div className='px-[5%] mt-[40px]'>
   <p className='text-[1.3rem] font-poppins'>Titanium are indeed highly attractive structural materials, known for their exceptional properties that make them valuable in a wide range of industrial applications. Let's delve deeper into the reasons for their popularity and expanding use in both non-aerospace and consumer product applications.
   </p>
   <div className='mt-[20px]'>
   <h3 className='text-[1.5rem] font-Roboto'>Properties of Titanium:</h3>
   <div className=''>
   <table className='border border-collapse w-full'>
  <tbody>
  {titaniumCharacteristics.map((item)=>{
 
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
   <p className='text-[1.3rem] font-poppins mt-3'>Tantalum is a rare, lustrous metal known for its excellent corrosion resistance and high melting point. It is one of the refractory metals, meaning it has outstanding resistance to heat and wear</p>
 
   <div className='mt-[20px]'>
   <h3 className='text-[1.5rem] font-Roboto'>Properties of Tantalum:</h3>
   <div className=''>
   <table className='border border-collapse w-full'>
  <tbody>
  {tantalumCharacteristics.map((item)=>{
 
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
   <div className='mb-8 mt-[40px]'>
   <Heading heading="Applications"/>
   
   <ProductSlider data={applicationsOfTitaniumAndTantalum}/>
   </div>
   
   <div className='mt-9'>
   <Heading heading="We trade Grades"/>
   <GradeTable data={TitaniumandTantalum_data}/>
   </div>
   
   </div>
   </div>
  )
}

export default CobaltAlloysScraps