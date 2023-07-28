import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeroSlider from '@/Components/HomePage/HeroSlider'
import AboutHome from '@/Components/HomePage/AboutHome'
import Productrange from '@/Components/HomePage/ProductRange'
import OurProducts from '@/Components/HomePage/OurProducts'
import OfferCon from '@/Components/HomePage/OfferCon'
import ContactUs from '@/Components/HomePage/ContactUs'
import Manufectruing from '@/Components/HomePage/Manufectruing'
import Treding from '@/Components/HomePage/Treding'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
    >
        <HeroSlider/>
        <AboutHome/>
        <Productrange/>
<OurProducts/>
<Treding/>
<Manufectruing/>

<OfferCon/>
<ContactUs/>
    </main>
  )
}
