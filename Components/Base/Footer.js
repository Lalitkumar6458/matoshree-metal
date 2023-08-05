import Link from 'next/link'
import React from 'react'
import {AiOutlineGoogle} from "react-icons/ai"
import {FaRss,FaFacebookF,FaTwitter,FaLinkedinIn,FaEnvelope,FaPhone,FaAngleDoubleRight, FaWhatsapp} from "react-icons/fa"
const Footer = () => {
  const list1=[
    {
        name:"SS,SMO 254 SCRAP",
        link:'/'
    },
    {
        name:"SS,ALLOYS 20 SCRAP",
        link:'/'
    },
    {
        name:"SS,904L SCRAP",
        link:'/'
    },
    {
        name:"SS,310 SCRAP",
        link:'/'
    },
    {
        name:"SS,316L SCRAP",
        link:'/'
    },
    {
        name:"SS,304L SCRAP",
        link:'/'
    },
    {
        name:"SS,321 SCRAP",
        link:'/'
    },
    {
        name:"SS,347 SCRAP",
        link:'/'
    },
    {
        name:"SS,DUPLEX 2205 SCRAP",
        link:'/'
    },
    {
        name:"SS,SUPER DUPLEX 2507 SCRAP",
        link:'/'
    },
]
const list2=[
    {
        name:" FORGING FLUSH SCRAP",
        link:"/"
    },
    {
        name:"TURNING SCRAP",
        link:"/"
    },
    {
        name:"SOLIDS MOSTLY SCRAP",
        link:"/"
    },
    {
        name:"RUNNER RAZER SCRAP",
        link:"/"
    },
    {
        name:"PLATE CUTTING  SCRAP",
        link:"/"
    },
    {
        name:"ROUND CUT PIECE  SCRAP",
        link:"/"
    },
    {
        name:"PIPE CUTTING SCRAP",
        link:"/"
    },
    {
        name:"WIRE SCRAP",
        link:"/"
    },
    {
        name:"GRINDING DUST SCRAP",
        link:"/"
    },
]
const list3=[
    {
        name:"TITANIUM SCRAP",
        link:'/'
    },
    {
        name:"MOLY METAL SCRAP",
        link:'/'
    },
    {
        name:"NICKEL SCRAP",
        link:'/'
    },
    {
        name:"TUNGSTEN SCRAP",
        link:'/'
    },
    {
        name:"HASTEALLOY SCRAP",
        link:'/'
    },
    {
        name:"NICHROME SCRAP",
        link:'/'
    },
    {
        name:"MONAL SCRAP ",
        link:'/'
    },
    {
        name:" NIMONIC SCRAP ",
        link:'/'
    },
    {
        name:"COBALT SCRAP",
        link:'/'
    },
    {
        name:"INCONEL SCRAP",
        link:'/'
    },
    {
        name:" INCOLOY SCRAP",
        link:'/'
    },
]
 const handleEmailClick = () => {

    let email="matoshreemetal2022@gmail.com"
    const url = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(email)}`;
    window.open(url);
  };
  const handlePhoneClick = () => {
  let  phoneNumber="+919702395641"
    const formattedPhoneNumber = phoneNumber.replace(/\D/g, ''); // Remove non-numeric characters
    const url = `tel:${formattedPhoneNumber}`;
    window.location.href = url;
  };
  const handleWhatsAppClick = () => {
    let  phoneNumber="+919702395641"
    const formattedPhoneNumber = phoneNumber.replace(/\D/g, ''); // Remove non-numeric characters
    const url = `https://wa.me/${formattedPhoneNumber}`;
    window.open(url, '_blank');
  };
  const handleInsta=()=>{
   
  }
  return (
   <div className='w-full bg-footerBg px-[5%] pt-[5%] pb-4 '>
   <div className='grid grid-cols-1 max-[767px]:gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 md:gap-y-4 text-white gap-3 '>
   <div className='pr-5'>
   <div className='mb-3'>
   <h1 className='text-[1.4rem] font-exo uppercase'>About Us</h1>
   <div className='h-1 rounded bg-mainRed w-20'></div>
   </div>
   <p className="font-Oswald text-[0.8rem]">
   MatoShree Metal and Alloys is a young and dynamic company founded in 2015, specializing in the stainless steel and alloys scrap business. We have rapidly emerged as a leader in the international markets, driven by our commitment to total quality and unmatched flexibility.
   </p>
   <div className='mt-3'>
   <span className='flex items-center gap-2 cursor-pointer' onClick={handleEmailClick}><FaEnvelope className='text-mainRed' /> <strong>matoshreemetal2022@gmail.com</strong> </span>
   <span className='flex items-center gap-2 mt-1 cursor-pointer'  onClick={handlePhoneClick} ><FaPhone className='text-mainRed'/> <strong>+91 9702395641 / 8320668223</strong></span>

   </div>
   <div className="mt-5">
   <ul className='flex items-center gap-2'>
   <li className='p-2 bg-white text-mainRed rounded-sm mr-2 hover:bg-mainRed hover:text-white cursor-pointer transition-all duration-700 hover:scale-125' onClick={handleEmailClick}><Link href="/" className="fa-brands fa-google"><AiOutlineGoogle/></Link></li>
   <li  className='p-2 bg-white text-mainRed rounded-sm mr-2 hover:bg-mainRed hover:text-white cursor-pointer transition-all duration-700 hover:scale-125'  onClick={handleInsta}><Link href="/" className="fa-solid fa-rss"><FaRss/></Link></li>
   <li  className='p-2 bg-white text-mainRed rounded-sm mr-2 hover:bg-mainRed hover:text-white cursor-pointer transition-all duration-700 hover:scale-125'  onClick={handleInsta}><Link href="/" className="fa fa-facebook"><FaFacebookF/></Link></li>
   <li  className='p-2 bg-white text-mainRed rounded-sm mr-2 hover:bg-mainRed hover:text-white cursor-pointer transition-all duration-700 hover:scale-125' onClick={handleWhatsAppClick}><Link href="/" className="fa fa-twitter"><FaWhatsapp/></Link></li>
   <li  className='p-2 bg-white text-mainRed rounded-sm mr-2 hover:bg-mainRed hover:text-white cursor-pointer transition-all duration-700 hover:scale-125'  onClick={handleInsta}><Link href="/" className="fa fa-linkedin"><FaLinkedinIn/></Link></li>
</ul>  
   </div>
 
   </div>

   <div className=''>
   <div className='mb-3'>
   <h1 className='text-[1.4rem] font-exo uppercase'>Product Type</h1>
   <div className='h-1 rounded bg-mainRed w-20'></div>
   </div>
   <ul>
   {
    list2.map((item)=>{
      return(
        <li className=' hover:translate-x-5 transition-all duration-700 hover:text-mainRed'><Link href={item.link} className='flex items-center gap-2 font-Oswald mb-1'><FaAngleDoubleRight/> {item.name}</Link></li>
      )
    })
   }
 
   </ul>
   </div>
   <div className=''>
   <div className='mb-3'>
   <h1 className='text-[1.4rem] font-exo uppercase'>HI NiCKEL Produts</h1>
   <div className='h-1 rounded bg-mainRed w-20'></div>
   </div>
   <ul>
   {
    list3.map((item)=>{
      return(
        <li className=' hover:translate-x-5 transition-all duration-700 hover:text-mainRed'><Link href={item.link} className='flex items-center gap-2 font-Oswald mb-1'><FaAngleDoubleRight/> {item.name}</Link></li>
      )
    })
   }
 
   </ul>
   </div>
   <div className=''>
   <div className='mb-3'>
   <h1 className='text-[1.4rem] font-exo uppercase'>Stainless Steel Grades</h1>
   <div className='h-1 rounded bg-mainRed w-20'></div>
   </div>
   <ul>
   {
    list1.map((item)=>{
      return(
        <li className=' hover:translate-x-5 transition-all duration-700 hover:text-mainRed'><Link href={item.link} className='flex items-center gap-2 font-Oswald mb-1'><FaAngleDoubleRight/> {item.name}</Link></li>
      )
    })
   }
 
   </ul>

   </div>
   </div>
   <div className='h-[1px] w-full bg-mainRed mt-5'>

   </div>
   <div  className='font-Oswald flex items-start justify-center text-white gap-2 mt-3'>
   <Link href="/" className='hover:text-mainRed'>Home</Link>
 |
   <Link href="/about" className='hover:text-mainRed'>About Us</Link>
  |

   <Link href="/" className='hover:text-mainRed'>Products</Link>
|

   <Link href="/contact" className='hover:text-mainRed'>Contact Us</Link>

   </div>

   <div className=''>
   <p className='text-center text-white font-poppins mt-5'>Manufacturer, Fabricator, Stockholder, Suppliers, Traders, Wholesaler, Dealer, Distributor, Importer, Exporter, Stockist of Alloy Steel Scrap& Carbon Steel Scrap Nickel - Monel® - Inconel® - Incoloy® - Hastelloy® - Alloy 20 - Duplex - Olets® are the registered trademarks of their respective owners.</p>
   </div>
   <div className='text-white font-Oswald text-center mt-5'>
   © {new Date().getFullYear()} Matoshree metal & alloys. All Right Reserved,  Design And Developed By <Link className='text-blue-400 text-[1.4rem]' href="https://www.linkedin.com/in/lalit-kumar-845a2123a"
                    target="_blank">Lalit Kumar</Link>
   </div>
   </div>
  )
}

export default Footer