import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const ProductSlider = ({data}) => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 4,
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
  return (
    <div className='productSlider mt-[30px]'>
    <Slider {...settings}>
    {
        data.map((item)=>{
          return <div className='rounded shadow-mainShadow h-[390px] md:h-[380px] ' key={item.id}>
      <div className='h-[200px] w-full p-1 border-[1px] border-solid border-gray-400 rounded'>
      <Image className='h-full w-full rounded ' src={item.img} alt={item.heading} width={500} height={600}/>
      </div>
      <div className='p-3'>
      <h3 className='text-[1.1rem] font-Roboto font-semibold'>{item.heading}</h3>
      <p className='text-[0.7rem] font-poppins h-[100px] overflow-y-auto producttext'>{item.desc}</p>
      </div>
          </div>
        })
      }
    </Slider>
    </div>
  )
}

export default ProductSlider