import React from 'react'
import Products from '../../Components/Products'
import alloys from "../../public/Images/AlloysImg.jpg"
import { tungstenContent,Tungsten_alloys_data} from '../../public/Data/ProductData'
import PageHeading from '@/Components/Base/PageHeading'
import Heading from '@/Components/SmallComponents/Heading'
import ProductSlider from '@/Components/SmallComponents/ProductSlider'
import GradeTable from '@/Components/SmallComponents/GradeTable'
const TungstenAlloysScraps = () => {
  const applications = [
    {
      id: 1,
      heading: "Cutting Tools",
      desc: "Tungsten carbide is extensively used in the manufacturing of cutting tools, such as drill bits, milling cutters, and turning tools. Its exceptional hardness and wear resistance enable these tools to cut through tough materials like metals, alloys, and composites with high precision and efficiency. Tungsten carbide inserts are common in machining operations, helping increase productivity and tool life.",
      img: require("../../public/Images/productapplication/Cobalt/img7.jpg"),
    },
    {
      id: 2,
      heading: "Mining and Drilling",
      desc: "In mining machinery, tungsten carbide is widely employed as cutting and drilling tools for exploration and excavation purposes. Its hardness and ability to withstand high temperatures and abrasion make it suitable for use in drilling bits, coal augers, and tunnel boring machines, enhancing productivity in mining operations.",
      img: require("../../public/Images/productapplication/tungesten/img1.jpg"),
    },
    {
      id: 3,
      heading: "Wear Parts and Wear Protection",
      desc: "Tungsten carbide is utilized in wear-resistant components and coatings, which are used in applications where materials experience high levels of abrasion and wear. These include parts like nozzles, valve seats, bearings, and other components in pumps and machinery that handle abrasive materials.",
      img: require("../../public/Images/productapplication/tungesten/img2.jpeg"),
    },
    {
      id: 4,
      heading: "Metal Forming and Stamping",
      desc: "Tungsten carbide dies and punches are employed in metal forming and stamping processes. Their hardness and resistance to deformation make them ideal for shaping and forming metal sheets, wires, and other materials with high precision.",
      img: require("../../public/Images/productapplication/tungesten/img3.jpeg"),
    },
    {
      id: 5,
      heading: "Woodworking Tools",
      desc: "Tungsten carbide-tipped saw blades and cutting tools are extensively used in woodworking applications. These tools maintain sharp edges for extended periods, providing clean cuts and improved efficiency.",
      img: require("../../public/Images/productapplication/tungesten/img4.jpeg"),
    },
    {
      id: 6,
      heading: "Ballistic Armor",
      desc: "Tungsten carbide is also utilized in the production of ballistic armor and protective plates. Its hardness and toughness make it an effective material for resisting projectiles and providing enhanced protection to personnel and equipment.",
      img: require("../../public/Images/productapplication/tungesten/img5.jpeg"),
    },
    {
      id: 7,
      heading: "Wear-Resistant Coatings",
      desc: "Tungsten carbide coatings are applied to various surfaces to increase their resistance to wear and erosion. These coatings are commonly used in industries such as aerospace, oil and gas, and automotive, where components are exposed to harsh environments.",
      img: require("../../public/Images/productapplication/tungesten/img6.jpg"),
    },
    {
      id: 8,
      heading: "Aerospace and Aviation",
      desc: "Tungsten carbide is used in aerospace and aviation applications for cutting, drilling, and shaping materials used in aircraft and spacecraft manufacturing. Its ability to withstand high temperatures and maintain sharp edges is crucial for precision machining.",
      img: require("../../public/Images/productapplication/Cobalt/img1.jpg"),
    },
  ];
  return (
    <>
    <PageHeading heading="Tungsten Alloys Scrap" img={alloys} bredcurm ="Products/TungstenAlloysScraps"/>

    <div className='px-[5%] mt-[40px]'>
    <p className='text-[1.3rem] font-poppins'>Tungsten carbide (WC) is a remarkable compound known for its extreme hardness and strength. It is composed of tungsten and carbon atoms, and its unique properties make it valuable for various industrial applications. Here are some of its primary uses and more information about this material:</p>
  
    
    <div className='mb-8 mt-[40px]'>
    <Heading heading="Applications"/>
    
    <ProductSlider data={applications}/>
    </div>
    
    <div className='mt-9'>
    <Heading heading="We trade Grades"/>
    <GradeTable data={Tungsten_alloys_data}/>
    </div>
    
    </div>
    </>
  )
}

export default TungstenAlloysScraps