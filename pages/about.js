import PageHeading from '@/Components/Base/PageHeading'
import React from 'react'
import img from "../public/Images/aboutImg.jpg"
import Image from 'next/image'
import aboutImg from "../public/Images/HomeImage/aboutImg.png"
import Button from '@/Components/SmallComponents/Button'
import Heading from '@/Components/SmallComponents/Heading'
import Header from '@/Components/Base/Header'
import tableImg from "../public/Images/tableImg.png"
import { AiOutlineBars } from 'react-icons/ai';
import { FaTruckLoading, FaGem, FaToolbox, FaCog, FaCheck, FaIndustry, FaClock, FaMedal } from 'react-icons/fa';
import { BiCustomize } from 'react-icons/bi';
import { IoMdHappy } from 'react-icons/io';
const About = () => {
  const factSheet=[
    {
      heading:"Nature of Business ",
      value:"Wholesale Trader Company"
    },
    {
      heading:"Company CEO",
      value:"MR. Kamlesh Modi"
    },
    {
      heading:"Total Number of Employees",
      value:"Upto 12 People"
    },
    {
      heading:"Year of Establishment",
      value:"2013"
    },
    {
      heading:"Legal Status of Firm",
      value:"Individual - Proprietor"
    },
    {
      heading:"Annual Turnover",
      value:"Rs. 5-10 Crore"
    },
    {
      heading:"GST No.",
      value:"24CCPPK0810H1ZU"
    },
    {
      heading:"Payment Mode",
      value:"Cash,Credit Card,DD,Cheque"},
    {
      heading:"Shipment Mode",
      value:"By Road"
    },
  ]
  const offerData=[
    {
      heading:"Hi- Nickel scrap",
      desc:"Such as Inconal 600, 625, 800, 825, 904L, Monal K 400 / 500, Hast- C 22 / 276, SMO 254, Nickel &amp; Chromium Such As Ni:35% Cr:25%, Ni:45% Cr:35%, Ni Chrome scrap 80/20, Nimonic 80 Scrap (ni:75% and cr:18%) 309, 310 etc."
    },
    {
      heading:"Cobalt Base Alloys Scrap",
      desc:"Such as SH-4, SH-6, SH-12, SH-21, SH-25, SH-31, SH-605, F-75, FSX-414, etc"
    },
    {
      heading:"Pure Metal",
      desc:"Such as Pure Nickel, Pure Molly, Pure Chromium, Pure Tungsten, Pure Mergence, Pure Cobalt, Pure Niobium, Pure Tantalum etc."
    },
    {
      heading:"Stainless Steel Scrap",
      desc:"Stainless Steel Scrap in 200, 300 and 400 series such as: 201, 202, 304, 304L, 310, 316, 316L, 321, 410, 430, Duplex 2205, Super Duplex 2507 etc."
    },
    {
      heading:"Ferro Alloys",
      desc:"such as Ferro Molly, Ferro Niobium, Ferro Tungsten, Ferro vanadium, Ferro mergence, Ferro chromium, L.C. chromium, L.C. mergence etc."
    },
  ]
  const companyInfo = [
   
    {
      icon: <AiOutlineBars />,
      heading: "Diverse Product Range",
      description: "The company offers a comprehensive range of products, including Stainless Steel, Hi-Nickel Alloy, Cobalt Alloy, Ferro Metal, Scrap, Round Bar, Pipe, Plate, Sheets, Fasteners, and more, catering to various industrial needs.",
    },
    {
      icon: <FaTruckLoading />,
      heading: "Trusted Sourcing",
      description: "The highly skilled procuring agents carefully select materials from certified and established vendors, ensuring the highest quality standards and reliability of the products.",
    },
    {
      icon: <FaGem />,
      heading: "Superior Product Features",
      description: "The offered products and scraps are well-known for their exceptional qualities, such as high tensile strength, corrosion resistance, acid resistance, and remarkable durability.",
    },
    {
      icon: <BiCustomize />,
      heading: "Customizable Solutions",
      description: "Recognizing the diverse requirements of clients, Matoshree metal & alloys offers its products in different specifications, providing tailored solutions to meet specific industry demands.",
    },
    {
      icon: <IoMdHappy />,
      heading: "Commitment to Customer Satisfaction",
      description: "The organization is fully dedicated to serving its esteemed clients with the best quality products, forging strong relationships, and ensuring their contentment.",
    },
    {
      icon: <FaIndustry />,
      heading: "Wide Industry Applications",
      description: "The products provided by Matoshree metal & alloys find extensive usage in various industries, showcasing their versatility and reliability for different purposes.",
    },
    {
      icon: <FaClock />,
      heading: "Reliability and Timely Delivery",
      description: "The company's customer-centric approach includes prompt and reliable services, assuring that products reach clients within the specified time frame.",
    },
    {
      icon: <FaCheck />,
      heading: "Focus on Quality Assurance",
      description: "Matoshree metal and alloys maintains stringent quality control measures to guarantee the consistency and superior performance of its products.",
    },
   
  ];
  return (
  <div className=''>
  <PageHeading heading="About Us" img={img} bredcurm="about us"/>
  <div className='px-[5%] mt-[20px]'>

  <div className='text-center'>
  <h4 className='text-[1.4rem] font-heading text-dark-cl'>OUR INTRODUCTION</h4>
<div className='w-[70px] h-1 bg-mainRed rounded mt-2 mx-auto'></div>
  <p className='text-[1rem] font-poppins text-gray-500 mt-4 font-medium px-[10%]'>Your Trusted Source for Premium Steel and Alloys - Extensive Materials Availability</p>
  </div>
  <div className='mt-[20px]'>
  
  <p className='text-[1.2rem] font-poppins'>  Welcome to <span className='text-mainRed font-bold'>"Matoshree Metal and Alloys"</span>, a trusted name in the steel and alloys industry with a legacy of excellence spanning several years. Headquartered in Mumbai, our unwavering commitment to quality and dedicated team has allowed us to establish VJ Steels and Alloys as a recognized and reputable company with an extensive network.</p>
  <p className='text-[1.2rem]  font-poppins'> 
  Our core expertise lies in import, export, and stocking of premium steel and alloys, offering an impressive array of products to meet diverse industrial needs. With an unwavering focus on quality, we subject all our materials to rigorous and comprehensive quality checks and assurance processes. This ensures that we consistently deliver nothing but the best output to our valued clients.
 </p>
  <p className='text-[1.2rem]  font-poppins'>As a result of our unwavering dedication to quality and service, we take immense pride in being recognized as one of India's top stockists of high-quality steel and alloy materials. Our well-established network allows us to cater to clients from various industries, both domestically and internationally.</p>
  <p className='text-[1.2rem]  font-poppins'>At Matoshree Metal and Alloys, we believe in the power of innovation and continuous improvement. Our team of skilled professionals works tirelessly to stay updated with the latest advancements in the industry, enabling us to offer cutting-edge solutions to our customers.</p>

  <Image className='w-full md:w-[90%] h-auto mx-auto scale-[1.2] mt-6 md:scale-[1]' src={tableImg} width={1080} height={608} alt='matoshree metal alloys metal trading table'/>
  </div>

  <div className='flex items-center justify-center flex-col gap-7 mt-[40px]'>
<Heading  heading="fectSheet"/>
  <table className='border-[1px] border-solid border-dark-cl border-collapse w-full' >
    <tbody >
    {factSheet.map((item)=>{
      return <tr>
     <td className='border-[1px] border-solid border-dark-cl text-[1.2rem] p-2 font-Roboto font-semibold'>{item.heading}</td>
     <td className='border-[1px] border-solid border-dark-cl text-[1.2rem] p-2 font-poppins font-medium'>{item.value}</td>
      </tr>
    })}
    </tbody>
  </table>
  </div>

  <div className='flex items-center justify-center flex-col gap-7 mt-[40px] mb-4'>
  <Heading heading="Products We Offer"/>
  <table>
  <tbody>
  {
    offerData.map((item)=>{
      return <tr>
      <td className='border-[1px] border-solid border-dark-cl text-[1.2rem] p-2 font-Roboto font-semibold'>{item.heading}</td>
      <td className='border-[1px] border-solid border-dark-cl text-[1.2rem] p-2 font-poppins font-medium'>{item.desc}</td>
      </tr>
    })
  }
  </tbody>
  </table>
  </div>
  <div className='mt-[40px]'>
  <Heading heading="Why Choose Us"/>
  </div>
  <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10'>
  {
    companyInfo.map((item)=>{
      return <div className='shadow-mainShadow p-4 relative group overflow-hidden border-[1px] border-solid border-l-4 border-dark-cl transition-all duration-700 rounded hover:border-0' key={item.id}>
      <div className="bg-mainRed w-[50px] h-[50px] flex items-center justify-center rounded relative z-10 text-[1.5rem] text-white">
      {item.icon}
      </div>

      <h2 className='text-[1.3rem] font-Oswald mt-2 relative z-10 group-hover:text-white transition-all duration-700'>{item.heading}</h2>
      <p className='text-[0.9rem] font-medium font-poppins mt-3 relative z-10 group-hover:text-white transition-all duration-700'>{item.description}</p>
      <div className='absolute bottom-0 top-0 left-0 w-0 h-full rounded bg-dark-cl group-hover:w-full  group-hover:h-full  transition-all duration-700'></div>
      
      </div>
    })
  }
  </div>

  </div>
  </div>
  )
}

export default About