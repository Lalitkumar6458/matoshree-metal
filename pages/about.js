import PageHeading from '@/Components/Base/PageHeading'
import React from 'react'
import img from "../public/Images/aboutImg.jpg"
import Image from 'next/image'
import aboutImg from "../public/Images/HomeImage/aboutImg.png"
import Button from '@/Components/SmallComponents/Button'
import Heading from '@/Components/SmallComponents/Heading'
import Header from '@/Components/Base/Header'
const About = () => {
  const factSheet=[
    {
      heading:"Nature of Business ",
      value:"Wholesale Trader Company"
    },
    {
      heading:"Company CEO",
      value:"MR. RAJESH MODI"
    },
    {
      heading:"Total Number of Employees",
      value:"Upto 10 People"
    },
    {
      heading:"Year of Establishment",
      value:"2015"
    },
    {
      heading:"Legal Status of Firm",
      value:"Individual - Proprietor"
    },
    {
      heading:"Annual Turnover",
      value:"Rs. 15-20 Crore"
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
  return (
  <div className=''>
  <PageHeading heading="About Us" img={img} bredcurm="about us"/>
  <div className='px-[5%] mt-[20px]'>
  <Heading  heading="About the Company"/>
  <div className='mt-[20px]'>
  
  <p className='text-[1.2rem] font-poppins'>Established in 2015,<span className='text-mainRed font-bold'>"Rajesh Alloys"</span>  is a distinguished Stockist, Supplier, Manufacturer & Importer of a wide range of premium Stainless Steel, Hi-Nickel Alloy, Cobalt Alloy, Ferro Metal, Scrap, Round Bar, Pipe, Plate, Sheets, Fasteners, and more. Our team of highly skilled procuring agents diligently sources these products and scraps from certified vendors in the market. These offerings are highly acclaimed for their exceptional qualities, such as high tensile strength, corrosion resistance, acid resistance, and remarkable durability. To cater to the diverse needs of our esteemed clients, we provide these products in various specifications.</p>
  <p className='text-[1.2rem]  font-poppins'> 
  At our organization, we are fully committed to supplying the finest quality products to our valued clients. Our range finds extensive application across various industries for diverse purposes. With a focus on excellence, we ensure that only the best materials reach our customers, guaranteeing their utmost satisfaction.</p>
  <p className='text-[1.2rem]  font-poppins'>As a reputed entity in the industry, we take pride in our customer-centric approach and strive to deliver prompt and reliable services. Our mission is to be a reliable partner to our customers and uphold the highest standards of quality in all our endeavors. With an unwavering dedication to excellence, we continue to forge strong relationships with our clients and contribute to their success in every possible way.</p>
  </div>

  <div className='flex items-center justify-center flex-col gap-7 mt-[40px]'>
<Heading  heading="fectSheet"/>
  <table className='border-[1px] border-solid border-dark-cl border-collapse' >
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


  </div>
  </div>
  )
}

export default About