import React from 'react'
import {FaPhone,FaEnvelope,FaWhatsapp, FaFacebook, FaInstagram} from "react-icons/fa"
const TopInfo = () => {
  const handleEmailClick = () => {

    let email="alloysrajesh@gmail.com"
    const url = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(email)}`;
    window.open(url);
  };
  const handlePhoneClick = () => {
  let  phoneNumber="+916351709542"
    const formattedPhoneNumber = phoneNumber.replace(/\D/g, ''); // Remove non-numeric characters
    const url = `tel:${formattedPhoneNumber}`;
    window.location.href = url;
  };
  const handleWhatsAppClick = () => {
    let  phoneNumber="+916351709542"
    const formattedPhoneNumber = phoneNumber.replace(/\D/g, ''); // Remove non-numeric characters
    const url = `https://wa.me/${formattedPhoneNumber}`;
    window.open(url, '_blank');
  };
  const handleInsta=()=>{
    const url='https://www.instagram.com/rajesh_alloys/?igshid=MzRlODBiNWFlZA=='
    window.open(url, '_blank');
  }
  return (
    <div className='h-[50px] max-[767px]:h-[60px] w-full bg-dark-cl text-white flex items-center justify-between px-[5%] text-[1.3rem]'>
   <div className='flex md:items-center justify-between md:w-[60%] max-[767px]:flex-col'>
   <span className='flex items-center gap-3 font-Oswald min-[320px]:text-[1rem] xl:text-[1.4rem]  lg:text-[1.2rem] cursor-pointer ' onClick={handlePhoneClick}><FaPhone  className='text-mainRed' /> +91:6351709542
   </span>
   <span className='flex items-center gap-3 font-Oswald min-[320px]:text-[1rem] xl:text-[1.4rem]  lg:text-[1.2rem] cursor-pointer ' onClick={handleEmailClick}><FaEnvelope className='text-mainRed' /> alloysrajesh@gmail.com </span>
   </div>
    <div className='flex items-center gap-3 max-[767px]:text-[1.4rem] lg:text-[1.2rem]  xl:text-[1.4rem]'>
    <span className='p-2 rounded text-mainRed bg-white hover:bg-mainRed hover:text-white cursor-pointer' onClick={()=>handleWhatsAppClick()} ><FaWhatsapp /></span>
    <span className='p-2 rounded text-mainRed bg-white hover:bg-mainRed hover:text-white cursor-pointer' onClick={handleInsta} ><FaFacebook/></span>
    <span className='p-2 rounded text-mainRed bg-white hover:bg-mainRed hover:text-white cursor-pointer' onClick={handleInsta}><FaInstagram/></span>

    </div>
    </div>
  )
}

export default TopInfo