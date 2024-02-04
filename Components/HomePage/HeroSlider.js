import React, { useState } from 'react';
import { Carousel } from 'antd';
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import Button from '../SmallComponents/Button';
import Router from 'next/router';
import Link from 'next/link';
const contentStyle = {
  margin: 0,
  height: 'calc(100vh-70px)',
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
const slideVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3, // Adjust the stagger duration
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
  const itemTransition = {
    heading: { delay: 0, duration: 0.8, ease: "easeOut" },
    text: { delay: 0.5, duration: 0.8, ease: "easeOut" },
    button: { delay: 1, duration: 0.8, ease: "easeOut" },
  };
  const handleBeforeChange = (currentSlide) => {
    setActiveSlide(currentSlide);
  };
  return (
    <div className="h-[calc(100vh-110px)] w-full">
      <Carousel
        afterChange={onChange}
        beforeChange={handleBeforeChange}
        effect="scrollx"
        autoplay={true}
        autoplaySpeed={5000}
      >
        {slideData.map((item, index) => {
          return (
            <div className="h-[calc(100vh-60px)] w-full bg-dark-cl relative flex items-center justify-center px-[5%]">
              <div className=" w-full left-0 right-0 top-0 absolute h-full">
                <Image
                  className="h-full w-full object-cover"
                  src={item.img}
                  alt={item.text}
                  width={1000}
                  height={700}
                />
                <div className=" w-full h-full  left-0 right-0 top-0 absolute bg-[#0000008a] z-50 "></div>
              </div>
              <AnimatePresence mode="wait">
                {index === activeSlide && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={slideVariants}
                    transition={{ duration: 1.5 }}
                    className="z-50 h-[calc(100vh-110px)] relative w-full flex items-start justify-center flex-col"
                  >
                    <motion.h1
                      transition={itemTransition.heading}
                      variants={itemVariants}
                      className="text-[2rem] mb-3 md:mb-0 md:text-[3rem] lg:text-[3.6rem] text-white font-Oswald font-medium"
                      style={{ textShadow: "3px 3px 6px black" }}
                    >
                      {item.text}
                    </motion.h1>
                    <motion.p
                      transition={itemTransition.text}
                      variants={itemVariants}
                      className="w-[95%] mt-3 md:mt-0 md:w-[80%]  lg:w-[50%] text-left text-white text-[1rem] md:text-[1.2rem] border-l-2 border-dark-cl pl-5 font-Roboto font-medium "
                      style={{ textShadow: "3px 3px 6px black" }}
                    >
                      {item.desc}
                    </motion.p>
                    <motion.div
                      transition={itemTransition.button}
                      variants={itemVariants}
                      className="mt-7 md:mt-5 flex gap-3"
                    >
                      <Link href="/about">
                        <button className="bg-dark-cl text-white h-[50px] px-4 rounded font-poppins font-medium">
                          Know More
                        </button>
                      </Link>
                      <Link href="/contact">
                        <button className="text-dark-cl bg-white h-[50px] px-4 border border-dark-cl  rounded font-poppins font-medium">
                          Inquiry Now
                        </button>
                      </Link>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default HeroSlider;