import React from 'react'
import Products from '../../Components/Products'
import alloys from "../../public/Images/AlloysImg.jpg"
import { nickelContent,Nickel_Alloy_data,Nickel_Alloy_2nd_data} from '../../public/Data/ProductData'
import PageHeading from '@/Components/Base/PageHeading'
import Heading from '@/Components/SmallComponents/Heading'
import ProductSlider from '@/Components/SmallComponents/ProductSlider'
import GradeTable from '@/Components/SmallComponents/GradeTable'
const NickelAlloysScraps = () => {
  const applications = [
    {
      id: 1,
      heading: "Aircraft Gas Turbines",
      desc: "Nickel alloys are commonly used in aircraft gas turbine engines, particularly in components like turbine blades, discs, and combustors. These alloys can withstand high temperatures and corrosive environments, making them ideal for these critical engine parts.",
    img: require("../../public/Images/productapplication/Nickel/img1.jpg"),
    },
    {
      id: 2,
      heading: "Steam Turbine Power Plants",
      desc: "In power generation facilities, steam turbines operate under high-temperature and high-pressure conditions. Nickel alloys are employed in the construction of steam turbine blades and other components to ensure longevity and resistance to corrosion.",
     img: require("../../public/Images/productapplication/Nickel/img2.jpg"),
    },
    {
      id: 3,
      heading: "Medical Applications",
      desc: "Nickel-based alloys, such as Nitinol, are utilized in medical devices and implants due to their biocompatibility and shape memory properties. They are found in applications like stents, orthodontic wires, and guidewires.",
      img: require("../../public/Images/productapplication/Nickel/img3.webp"),
    },
    {
      id: 4,
      heading: "Nuclear Power Systems",
      desc: "Nickel alloys are used in nuclear power plants for reactor components, such as reactor pressure vessels and control rod mechanisms. Their ability to withstand radiation and high temperatures is crucial in nuclear environments.",
      img: require("../../public/Images/productapplication/Cobalt/img5.jpeg"),
    },
    {
      id: 5,
      heading: "Chemical and Petrochemical Industries",
      desc: "Nickel alloys are widely employed in chemical processing equipment, especially in aggressive and corrosive environments. They find use in reactors, heat exchangers, and piping systems handling corrosive substances.",
      img: require("../../public/Images/productapplication/Nickel/img4.jpeg"),
    },
    {
      id: 6,
      heading: "Marine and Offshore Applications",
      desc: "Nickel alloys are utilized in marine and offshore industries due to their resistance to seawater corrosion. They are commonly used in seawater piping, heat exchangers, and various offshore structures.",
      img: require("../../public/Images/productapplication/Nickel/img5.jpg"),
    },
    {
      id: 7,
      heading: "Electronics and Electrical Engineering",
      desc: "Certain nickel alloys are used in electrical resistance wires and heating elements, as they offer high electrical resistance and excellent heat resistance.",
      img: require("../../public/Images/productapplication/Nickel/img6.jpg"),
    },
    {
      id: 8,
      heading: "Automotive Industry",
      desc: "Nickel alloys are utilized in exhaust systems and catalytic converters to withstand high temperatures and corrosive exhaust gases.",
      img: require("../../public/Images/productapplication/Nickel/img7.jpg"),
    },
    {
      id: 9,
      heading: "Aerospace Industry",
      desc: "Besides aircraft gas turbines, nickel alloys are also used in various aerospace components, such as landing gear, exhaust systems, and hydraulic systems, where corrosion and heat resistance are essential.",
     img: require("../../public/Images/productapplication/Cobalt/img1.jpg"),
    },
    {
      id: 10,
      heading: "Oil and Gas Exploration",
      desc: "Nickel alloys are employed in drilling equipment, wellhead components, and pipelines in the oil and gas industry to resist the corrosive effects of the fluids and gases encountered during exploration and production.",
      img: require("../../public/Images/productapplication/Cobalt/img3.jpg"),
    },
  ];
  return (
    <>
    <PageHeading heading="Nickel Alloys Scrap" img={alloys} bredcurm ="Products/NickelAlloysScraps"/>

    <div className='px-[5%] mt-[40px]'>
    <p className='text-[1.3rem] font-poppins'>Nickel alloys scrap is highly sought after for a multitude of applications, owing to their exceptional corrosion resistance, heat resistance, and other advantageous properties. These versatile materials find extensive use in various industries, contributing significantly to technological advancements and product innovations.  stationary vanes for gas turbines.</p>
    <p className='text-[1.3rem] font-poppins'>As a result of their diverse and indispensable applications, the demand for nickel alloys scrap continues to grow, driving innovation and sustainable resource utilization across industries worldwide.</p>
    
    <div className='mb-8 mt-[40px]'>
    <Heading heading="Applications"/>
    
    <ProductSlider data={applications}/>
    </div>
    
    <div className='mt-9'>
    <Heading heading="We trade Grades"/>
    <GradeTable data={Nickel_Alloy_data}/>
    <GradeTable data={Nickel_Alloy_2nd_data}/>
    </div>
    
    </div>
    
    </>
  )
}

export default NickelAlloysScraps