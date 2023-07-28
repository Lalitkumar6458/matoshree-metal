import React, { useState } from 'react';
import { Carousel } from 'antd';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../SmallComponents/Button';
import Router from 'next/router';
const contentStyle = {
  margin: 0,
  height: 'calc(100vh-110px)',
  color: '#fff',
//   lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const HeroSlider = () => {

  const slideData=[
    {
        id:1,
        text:"STAINLESS STEEL SCRAP",
        desc:"As a leading supplier of high-quality Stainless Steel Scrap, we take pride in being your reliable source for sustainable metal solutions. With a commitment to environmental consciousness, we provide eco-friendly recycling options for a greener future.",
        img:require("../../public/Images/HomeImage/ssImg.png"),
        
    },
    
    {
        id:2,
        text:"Duplex & SuperDuplex",
        desc:"As your reliable provider of Duplex and SuperDuplex solutions, we offer high-quality materials for diverse applications. Trust us for excellence in metal solutions, ensuring superior performance and customer satisfaction.",
        img:require("../../public/Images/HomeImage/duplexImg.png"),
        

    },
    {
        id:3,
        text:"Nickal Alloys Scrap",
        desc:"We are your trusted source for high-quality nickel alloys scrap, providing sustainable metal solutions with expertise and an unwavering commitment to excellence. Count on us for environmentally-conscious recycling options and top-notch service.",
        img:require("../../public/Images/HomeImage/nickelImg.png"),
        

    },
    
    {
        id:4,
        text:"Cobalt Alloys Scrap",
        desc:"We excel in high-quality Cobalt Alloys recycling, offering sustainable metal solutions through premium scrap. Trust us for reliable supply and responsible waste management, contributing to a greener and more sustainable future.",
        img:require("../../public/Images/HomeImage/cobaltImg.png"),
        

    },
    {
        id:5,
        text:"Titanium Scrap",
        desc:"We specialize in maximizing value from Titanium waste, offering sustainable metal solutions with premium scrap. Rely on us as your trusted partner for efficient recycling and a dependable supply, ensuring a greener and more resourceful approach to metal utilization.",
        img:require("../../public/Images/HomeImage/titaniumimg.png"),
        

    },
    {
        id:6,
        text:"Tungsten Scrap",
        desc:"We are experts in unlocking the value of Tungsten waste, providing sustainable metal solutions with high-quality scrap. Count on us as your trusted source for efficient recycling and a reliable supply, contributing to a greener and more responsible metal industry.",
        img:require("../../public/Images/HomeImage/tungstenImg.png"),
      

    },

]
const [activeSlide, setActiveSlide] = useState(0);

  const onChange = (currentSlide) => {
    setActiveSlide(currentSlide);
  };
const Redirctpage=(link)=>{

  Router.push(link)
}
  return (
    <Carousel afterChange={onChange}  effect="scrollx" autoplay={true} autoplaySpeed={5000}>
    {
        slideData.map((item,index)=>{
            return(
                <div className='h-[calc(100vh-110px)] bg-dark-cl relative flex items-center justify-center px-[5%]' key={item.id}>
              <Image className='absolute left-0 top-0 right-0 w-full h-full ' src={item.img} width={1000} height={1000} alt={item.text}/>
              <div className='absolute left-0 top-0 right-0 w-full h-full bg-[#25253185]'></div>
              <div className='z-[10] relative flex items-center justify-center h-full text-white'>
              <div className='flex items-center justify-center flex-col ' >
              <motion.h1 
              initial={{ y:-100 ,opacity:0}}
              animate={{
                y: activeSlide === index ? 0 : -100,
                opacity: activeSlide === index ? 1 : 0
              }}
              transition={{
               duration:1
              }}
               className='text-center text-[2rem] font-bold md:text-[3rem] font-heading'
               >{item.text}</motion.h1>
             <motion.p 
             initial={{ y:100 ,opacity:0}}
             animate={{
              y: activeSlide === index ? 0 : 100,
              opacity: activeSlide === index ? 1 : 0
            }}
              transition={{
               duration:1
              }}
             className='text-center text-[1rem] lg:w-1/2 font-medium font-Oswald md:text-[1.2rem] mt-3'>{item.desc}</motion.p>
             <div className='flex gap-4'>
            
    <motion.button
    initial={{ y:100 ,opacity:0}}
    animate={{
      y: activeSlide === index ? 0 : 100,
      opacity: activeSlide === index ? 1 : 0
    }}
    transition={{
     duration:1
    }}
    onClick={()=>Redirctpage('/contact')}
    className='relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group mt-4'>
             <span class="w-48 h-48 rounded rotate-[-40deg] bg-mainRed absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
             <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Inquiry Now</span>
             </motion.button>

             </div>
              </div>
              </div>
              </div>
            )
        })
    }
     
    </Carousel>
  );
};
export default HeroSlider;