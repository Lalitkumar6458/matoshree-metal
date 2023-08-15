import React, { useEffect, useRef, useState } from "react";
import Link from "next/link"
import whatsapp from "../../public/Images/whatsapp.png"

import Image from "next/image"
import { AutoComplete, Input,Drawer } from 'antd';
import { AiOutlineSearch,AiOutlineMenu,AiFillPhone } from "react-icons/ai";
import {
  FaCaretDown,
  FaSearch,
  FaWhatsappSquare,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaInfoCircle,
  FaTimes,
FaPhoneAlt,
FaEnvelope,
FaMapMarkerAlt,
FaLinkedinIn,
FaInstagram
} from "react-icons/fa";
const InfoBox=()=>{
    const [openInfo, setOpenInfo] = useState(false);
    const onInfoClose = () => {
        setOpenInfo(false);
      };
      const showDrawerInfo = () => {
        setOpenInfo(true);
      };
    return(
<div className="fixed top-[90px] right-0 bg-slate-100 p-2 shadow-lg infoBox" id="infoBox" style={{borderRadius:"10px 0px 0px 10px"}}>
<div className="flex flex-col gap-2">
<div className="text-[1.7rem] cursor-pointer text-dark-cl" onClick={showDrawerInfo}>
<FaInfoCircle/>
</div>
<div className="w-full h-[1px] bg-slate-600"></div>
<div className='Whatsapp'>
<Link href="https://wa.me/+919702395641" className="" target="_blank"><Image src={whatsapp} width={33} height={33}/></Link>
</div>
</div>

<Drawer title="Contact Information" className="infoBox" placement="right" onClose={onInfoClose} open={openInfo}>
<div className="contact-info_h active">

<div className="info">
  <Link href="tel:+91 9702395641" style={{ textDecoration: "none" }}>
    {" "}
    <i className="icons_box">
      <FaPhoneAlt className="icons" />
    </i>
  </Link>
  <h3>phone number</h3>
  <Link href="tel:++91 9702395641" style={{ textDecoration: "none" }}>
    <p>+91 9702395641</p>
  </Link>
  <Link href="tel:++91 8320668223" style={{ textDecoration: "none" }}>
  <p>+91 8320668223</p>
</Link>
  
</div>

<div className="info">
  <Link
    href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=matoshreemetal2022@gmail.com"
    style={{ textDecoration: "none" }}
  >
    {" "}
    <i className="icons_box">
      <FaEnvelope className="icons" />
    </i>
  </Link>
  <h3>email address</h3>
  <Link
    href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=matoshreemetal2022@gmail.com"
    style={{ textDecoration: "none" }}
  >
    <p>matoshreemetal2022@gmail.com</p>
  </Link>
  <Link
  href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=kkmodi5641@Gmail.Com"
  style={{ textDecoration: "none" }}
>
  <p>kkmodi5641@Gmail.Com</p>
</Link>
 
</div>

<div className="info">
  <i className="icons_box">
    <FaMapMarkerAlt className="icons" />
  </i>
  <h3>office address</h3>
  <p>
  Behind Gokul Estate, Shed No. B/49, Govardhan Bus Hub, Kathwada-Singarva Rd, Ahmedabad, Gujarat 382430
  </p>
</div>

<div className="share">
  {/* <i class="fa-brands fa-facebook-f"></i> */}

  <Link href="#" className="" >
    <i className="icons_box">
      <FaLinkedinIn className="icons" />
    </i>
  </Link>
  <Link href="#" className="" >
    {" "}
    <i className="icons_box">
      <FaTwitter className="icons" />
    </i>
  </Link>
  <Link href=" " className="">
    <i className="icons_box">
      <FaInstagram className="icons" />
    </i>
  </Link>
  <Link href="https://wa.me/+919702395641" className="" target="_blank">
    <i className="icons_box">
      <FaWhatsapp className="icons" />
    </i>
  </Link>
</div>
</div>
</Drawer>
</div>
    )
}
export default InfoBox