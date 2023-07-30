import PageHeading from '@/Components/Base/PageHeading'
import React from 'react'
import img from "../public/Images/qualityImg.jpg"
import { RiAwardLine } from 'react-icons/ri';
import { AiOutlineBars } from 'react-icons/ai';
import { FaTruckLoading, FaGem, FaToolbox, FaCog, FaCheck, FaIndustry, FaClock, FaMedal } from 'react-icons/fa';
import { BiCustomize } from 'react-icons/bi';
import { IoMdHappy } from 'react-icons/io';
const quality = () => {

  const companyInfo = [
    {
      icon: <FaMedal />,
      heading: "Established Reputation",
      description: "Matoshree metal & alloys has been a reputable player in the industry since 2015, gaining recognition for its commitment to excellence and delivering top-notch products and services.",
    },
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
      description: "Matoshree metal & alloys maintains stringent quality control measures to guarantee the consistency and superior performance of its products.",
    },
    {
      icon: <FaCog />,
      heading: "Continuous Improvement",
      description: "Committed to excellence, the company continuously seeks improvement in its operations, product range, and customer service to exceed expectations.",
    },
  ];
  return (
   <div className=''>
  <PageHeading heading="Quality" img={img} bredcurm="quality"/>
   
  <div className='px-[5%] mt-6 '>
  
  <p className='text-[1rem] font-exo font-medium'>The <span className='font-semibold text-mainRed'>"Matoshree metal & alloys"</span> is a distinguished Stockist, Supplier, Manufacturer & Importer of a wide range of premium Stainless Steel, Hi-Nickel Alloy, Cobalt Alloy, Ferro Metal, Scrap, Round Bar, Pipe, Plate, Sheets, Fasteners, and more. Our team of highly skilled procuring agents diligently sources these products and scraps from certified vendors in the market. These offerings are highly acclaimed for their exceptional qualities, such as high tensile strength, corrosion resistance, acid resistance, and remarkable durability. To cater to the diverse needs of our esteemed clients, we provide these products in various specifications.</p>
  <p className='text-[1rem] font-exo font-medium mt-3' >
  At our company, we are fully committed to supplying the finest quality products to our valued clients. Our range finds extensive application across various industries for diverse purposes. With a focus on excellence, we ensure that only the best materials reach our customers, guaranteeing their utmost satisfaction.
  </p>
  <p className='text-[1rem] font-exo font-medium mt-3'>As a reputed entity in the industry, we take pride in our customer-centric approach and strive to deliver prompt and reliable services. Our mission is to be a reliable partner to our customers and uphold the highest standards of quality in all our endeavors. With an unwavering dedication to excellence, we continue to forge strong relationships with our clients and contribute to their success in every possible way.
  </p>


  <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10'>
  {
    companyInfo.map((item)=>{
      return <div className='shadow-mainShadow p-4 relative group overflow-hidden border-[1px] border-solid border-b-4 border-dark-cl transition-all duration-700 rounded hover:border-0' key={item.id}>
      <div className="bg-mainRed w-[50px] h-[50px] flex items-center justify-center rounded relative z-10 text-[1.5rem] text-white">
      {item.icon}
      </div>

      <h2 className='text-[1.3rem] font-Oswald mt-2 relative z-10 group-hover:text-white transition-all duration-700'>{item.heading}</h2>
      <p className='text-[0.9rem] font-medium font-poppins mt-3 relative z-10 group-hover:text-white transition-all duration-700'>{item.description}</p>
      <div className='absolute bottom-0 left-0 w-full h-0 rounded bg-dark-cl group-hover:w-full  group-hover:h-full  transition-all duration-700'></div>
      
      </div>
    })
  }
  </div>
  </div>
   </div>
  )
}

export default quality