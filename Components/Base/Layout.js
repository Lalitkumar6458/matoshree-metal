import React from 'react'
import Header from './Header'
import Footer from './Footer'
import TopInfo from './TopInfo'
import ScrollTop from './ScrollTop'

import Head from 'next/head'

const Layout = ( {children}) => {


  return (
    <>
    <Head>
    {/* Title Tag */}
    <title>MatoShree Metal & alloys - Comprehensive Range of Stainless Steel Products</title>
    
    {/* Description Tag */}
    <meta name="description" content="At Matoshree metal & alloys, we specialize in providing a wide selection of stainless steel grades, alloys, and commercial/industrial products. Find 304L, 316L, 321, and more. Discover forging flush, turning, pipe cuttings, and other materials for your project." />

    {/* Keywords Tag */}
    <meta name="keywords" content="Matoshree metal & alloys, Stainless Steel Products, Stainless Steel Grades, Stainless Steel Alloys, 304L, 316L, 321, 347, 309, 310, Titanium, Molybdenum, Nickel, Tungsten, Niobium, Hastelloy, Nichrome, Monel, Nimonic, Cobalt, Inconel, 800, 825, 601, 600, 625, 718, X750, SMO, 904L, Alloy 20, Duplex, Ferro Alloys, Forging Flush, Turning, Solid Materials, Runner Razors, Plate Cuttings, Round Cut Pieces, Pipe Cuttings , stainless steel products, commercial stainless steel, industrial stainless steel, stainless steel grades, stainless steel alloys, titanium alloys, molybdenum alloys, nickel alloys, tungsten alloys, hastelloy alloys, nichrome alloys, monel alloys, nimonic alloys, cobalt alloys, inconel alloys, 800 alloys, 825 alloys, 601 alloys, 600 alloys, 625 alloys, 718 alloys, X750 alloys, SMO alloys, 904L alloys, Alloy 20, duplex alloys, ferro alloys, forging flush, turning materials, solid materials, runner razors, plate cuttings, round cut pieces, pipe cuttings." />
    <meta name="author" content='www.rajeshalloys.com'/>
    <meta name="google-site-verification" content="dSAvk_6wAT2Wy9MPLLB9b3AogF0wOvXncHS1r0Y_DSc" />
  </Head>
  <div>
  {/*<TopInfo/>*/} 
  <Header/>
 <div className='mt-[60px]'>
 {children}
 </div>
  <Footer/>
  <ScrollTop/>
  </div>
    </>
   
  )
}

export default Layout