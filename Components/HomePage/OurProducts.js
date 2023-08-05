import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../SmallComponents/Heading";

import Image from "next/image";

const OurProducts = () => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerPadding: "60px",
        responsive: [
            {
                breakpoint: 1190,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true,
                },
              },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
              dots: false,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
            },
          },
        ],
      };
   
      const Our_products_data=[
    
        {
            id:10,
            img:require("../../public/Images/Our_products/imgnew/nickelimg.jpeg"),
            heading:"NICKEL SCRAP",
            text:"",
           
        },
        {
            id:11,
            img:require("../../public/Images/Our_products/imgnew/inconel-800.webp"),
            heading:"INCONEL 800 SCRAP",
            text:"",
           
        },
        {
            id:12,
            img:require("../../public/Images/Our_products/imgnew/inconel-625.webp"),
            heading:"INCONEL 625 SCRAP",
            text:"",
           
        },
        {
            id:13,
            img:require("../../public/Images/Our_products/imgnew/wire-scrap.jpeg"),
            heading:"Wire scrap",
            text:"",
           
        },
        {
            id:14,
            img:require("../../public/Images/Our_products/imgnew/inconel-601.webp"),
            heading:"INCONEL 601 SCRAP",
            text:"",
           
        },
        {
            id:15,
            img:require("../../public/Images/Our_products/imgnew/inconel-600.webp"),
            heading:"INCONEL 600 SCRAP",
            text:"",
           
        },{
            id:16,
            img:require("../../public/Images/Our_products/imgnew/plate-cut-scrap.jpg"),
            heading:"SS Cut Plate scrap",
            text:"",
           
        },
        
        {
        id:1,
        img:require("../../public/Images/Our_products/imgnew/grinding-dust.webp"),
        heading:"GRINDING DUST",
        text:"",
       
    },
    {
        id:2,
        img:require("../../public/Images/Our_products/imgnew/nichrome-scrap.webp"),
        heading:"NICHROME SCRAP",
        text:"",
       
    },
    {
        id:5,
        img:require("../../public/Images/Our_products/imgnew/nimonic80-scrap.webp"),
        heading:"NIMONIC 80",
        text:"",
       
    },
    {
        id:3,
        img:require("../../public/Images/Our_products/imgnew/monel-scrap.webp"),
        heading:"MOLLY METAL SCRAP",
        text:"",
       
    },
    {
        id:7,
        img:require("../../public/Images/Our_products/imgnew/round-cut-scrap.webp"),
        heading:"ROUND CUT PIECE SCRAP",
        text:"",
       
    },
    {
        id:4,
        img:require("../../public/Images/Our_products/imgnew/forging-flush-scrap.webp"),
        heading:"FORGING FLUSH SCRAP",
        text:"",
       
    },
    
    {
        id:6,
        img:require("../../public/Images/Our_products/imgnew/monel-scrap.webp"),
        heading:"MONEL SCRAP",
        text:"",
       
    },
    
    {
        id:8,
        img:require("../../public/Images/Our_products/imgnew/304-scrap.jpg"),
        heading:"304L SCRAP",
        text:"",
       
    },
    {
        id:9,
        img:require("../../public/Images/Our_products/imgnew/pipe-cut-scrap.jpeg"),
        heading:"PIPE CUTTING SCRAP",
        text:"",
       
    },
   {
        id:18,
        img:require("../../public/Images/Our_products/imgnew/310 scrap.webp"),
        heading:"310  CASTINGS SCRAP",
        text:"",
       
    },{
        id:19,
        img:require("../../public/Images/Our_products/imgnew/titanium-scrap.webp"),
        heading:"TURNING SCRAP",
        text:"",
    },
    // {
    //     id:20,
    //     img:require("../../public/Images/Our_products/IMG-20230707-WA0171.jpg"),
    //     heading:"RUNNER RAZER SCRAP",
    //     text:"",
    // },

    // {
    //     id:21,
    //     img:require("../../public/Images/Our_products/IMG-20230707-WA0172.jpg"),
    //     heading:"TITANIUM SCRAP",
    //     text:"",
    // },
    
    {
        id:22,
        img:require("../../public/Images/Our_products/imgnew/cobalt-sc rap.webp"),
        heading:"COBALT SCRAP",
        text:"",
    },
    {
        id:23,
        img:require("../../public/Images/Our_products/imgnew/904l-scrap.webp"),
        heading:"904L SCRAP",
        text:"",
    },
    
    {
        id:24,
        img:require("../../public/Images/Our_products/imgnew/alloy20 scrap.webp"),
        heading:"ALLOYS 20 SCRAP",
        text:"",
       
    },
    {
        id:25,
        img:require("../../public/Images/Our_products/imgnew/hastloalloy-scrap.webp"),
        heading:"Hastelloy Alloys SCRAP",
        text:"",
       
    },
    
    
    ]
  return (
    <div className="mb-8 mt-[40px]">
        <Heading heading="Our Products"/>
        <div className="px-[5%] mt-7 ourProducts">
          <Slider {...settings}>
            {Our_products_data.map((item) => {
              return (
                <div className="h-[300px] w-[30%] bg-dark-cl mr-[10px] rounded" key={item.id}>

                <div className="w-full h-full">
                <div className="w-full h-[85%] bg-white overflow-hidden border-[1px] border-b-0 border-solid border-mainRed p-[2px]">
                <Image src={item.img} width={500} height={400} className="w-full  h-full object-cover  hover:scale-110 transition-all duration-500"/>
                </div>
                <div className="h-[15%] w-full flex items-center justify-center text-white">
                <h2 className="text-[1.1rem] font-Oswald">{item.heading}</h2>
                </div>
                </div>
                  
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
  )
}

export default OurProducts



