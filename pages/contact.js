import React from 'react'
import PageHeading from '@/Components/Base/PageHeading'
import ContactUs from '@/Components/HomePage/ContactUs'
import Heading from '@/Components/SmallComponents/Heading'
import img from "../public/Images/contactimg.webp"
const Contact = () => {
  return (
    <div className=''>
    <PageHeading heading="Contact Us" img={img} bredcurm="Contact Us"/>
    <div className='mt-6'>
    <Heading heading="Get Directions"/>
    </div>
    <div className="w-full mt-8 h-[400px] px-[5%] rounded">
    <iframe className='rounded border-[1px] border-solid border-mainRed p-1' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.557981268802!2d72.6917034744481!3d23.03999641567934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87b69ffa5f19%3A0xf2d7b893f0916f6c!2sMATOSHREE%20METAL%20AND%20ALLOYS!5e0!3m2!1sen!2sin!4v1690706680784!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    
    <div className='mb-10'>
    <ContactUs/>
    </div>
    </div>
  )
}

export default Contact