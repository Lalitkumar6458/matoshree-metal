import React from 'react'
import Products from '../../Components/Products'
import alloys from "../../public/Images/AlloysImg.jpg"
import PageHeading from '@/Components/Base/PageHeading'
import { Cobaltalloys_data ,cobaltContent,cobalt_data1} from '../../public/Data/ProductData'
import Heading from '@/Components/SmallComponents/Heading'
import Image from 'next/image'
import ProductSlider from '@/Components/SmallComponents/ProductSlider'
import GradeTable from '@/Components/SmallComponents/GradeTable'

const CobaltAlloysScraps = () => {
  const productApplications = [
    {
      id: 1,
      heading: "Aerospace and Aviation",
      desc: "Cobalt alloys play a crucial role in the aerospace and aviation industries, where they are used in components subjected to high temperatures and stress. They are employed in turbine blades, combustion chambers, afterburner components, and stationary vanes in both military and commercial aircraft engines.",
      img: require("../../public/Images/productapplication/Cobalt/img1.jpg"),
    },
    {
      id: 2,
      heading: "Biomedical Applications",
      desc: "Cobalt-based alloys, such as cobalt-chromium (Co-Cr) alloys, are widely used in the medical field. They offer excellent biocompatibility, corrosion resistance, and strength, making them suitable for orthopedic implants and dental prosthetics like joint replacements, bone plates, and dental crowns.",
      img: require("../../public/Images/productapplication/Cobalt/img2.jpeg"),
    },
    {
      id: 3,
      heading: "Oil and Gas Exploration",
      desc: "Cobalt alloys are used in the oil and gas industry for various applications. They are employed in downhole tools, drill collars, and subsurface safety valves to withstand harsh environments, high pressures, and corrosive conditions during drilling and production activities.",
      img: require("../../public/Images/productapplication/Cobalt/img3.jpg"),
    },
    {
      id: 4,
      heading: "Chemical Processing",
      desc: "Cobalt alloys find applications in chemical processing equipment. They are used in reactors, distillation columns, and valves handling aggressive chemicals, especially in environments where high-temperature corrosion resistance is essential.",
      img: require("../../public/Images/productapplication/Cobalt/img4.png"),
    },
    {
      id: 5,
      heading: "Nuclear Industry",
      desc: "Cobalt alloys are used in the nuclear industry for critical applications. They withstand radiation and high temperatures and are used in control rod mechanisms, reactor core components, and other critical systems in nuclear reactors.",
      img: require("../../public/Images/productapplication/Cobalt/img5.jpeg"),
    },
    {
      id: 6,
      heading: "Electrical Contacts",
      desc: "Cobalt-based alloys are employed in electrical switches and contacts. They offer excellent electrical conductivity and resistance to wear and arcing, making them ideal for electrical applications.",
      img: require("../../public/Images/productapplication/Cobalt/img6.jpeg"),
    },
    {
      id: 7,
      heading: "Cutting and Machining Tools",
      desc: "Cobalt alloys are used in the production of cutting tools. When combined with other metals, they create high-speed steel (HSS) and cemented carbide cutting tools, which are crucial in machining processes across various industries.",
      img: require("../../public/Images/productapplication/Cobalt/img7.jpg"),
    },
    {
      id: 8,
      heading: "Automotive and Racing",
      desc: "Cobalt alloys are used in automotive applications. They are employed in engine valves, valve seats, and turbocharger components where high-temperature strength and wear resistance are required. Additionally, in racing engines, they are used to improve performance under extreme conditions.",
      img: require("../../public/Images/productapplication/Cobalt/img8.webp"),
    },
    {
      id: 9,
      heading: "Marine and Corrosive Environments",
      desc: "Cobalt alloys are used in marine and corrosive environments. They provide resistance to seawater, brine, and other corrosive media, and are used in marine propellers, pump impellers, and underwater fasteners.",
      img: require("../../public/Images/productapplication/Cobalt/img9.webp"),
    },
    {
      id: 10,
      heading: "Wear Components in Industrial Machinery",
      desc: "Cobalt alloys are used for wear-resistant components in industrial machinery. They are employed in mixer blades, extrusion screws, and conveyor parts, where abrasive materials and wear pose significant challenges.",
      img: require("../../public/Images/productapplication/Cobalt/img10.jpeg"),
    },
  ];
  return (
    <>
    <PageHeading heading="Cobalt Alloys Scrap" img={alloys} bredcurm ="Products/CobaltAlloysScraps"/>

<div className='px-[5%] mt-[40px]'>
<p className='text-[1.3rem] font-poppins'>Cobalt alloys have higher melting points than Nickel (or iron) alloys. This gives them the ability to absorb stress to a higher absolute temperature. Cobalt alloys give superior hot corrosion resistance to gas turbine atmospheres; this is due to their high chromium content.This factor is the primary reason cobalt alloys are used in the lower stress, higher temperature stationary vanes for gas turbines.</p>
<p className='text-[1.3rem] font-poppins'>Cobalt alloys' combination of high melting points, excellent mechanical properties, corrosion resistance, and other unique characteristics make them versatile and indispensable materials across diverse industries. Their use continues to expand as technology and engineering advancements demand materials capable of withstanding increasingly demanding conditions.</p>

<div className='mb-8 mt-[40px]'>
<Heading heading="Applications"/>

<ProductSlider data={productApplications}/>
</div>

<div className='mt-9'>
<Heading heading="We trade Grades"/>
<GradeTable data={Cobaltalloys_data}/>
<GradeTable data={cobalt_data1}/>
</div>

</div>
    </>
  )
}

export default CobaltAlloysScraps