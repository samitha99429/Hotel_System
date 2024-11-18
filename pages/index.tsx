import Image from 'next/image'
import Hero from '@/component/MainHero'
import Header from '@/component/Header/Header';
import Hotelintro from '@/component/Home/Hotelintro'
import Features from '@/component/Home/Features';
import SecondSection from '@/component/Home/SecondSection';
import Footer from '@/component/common/Footer';
import Offers from '@/component/Home/Offer';
import Excitement from '@/component/Home/Excitement';
import Lastsection from '@/component/common/LastSection';
import Rooms from '@/component/Home/Room';
import Event from '@/component/Home/Event';
import Testimonial from '@/component/Home/Testimonial';
import MetaDetails from '@/component/common/MetaDetails';


export default function Home() {
  return (
   <div className='bg-page'>
       <MetaDetails
        metaTitle = "Home | Blue Waters Screen"
        metaDescription = "Home | Blue Waters Screen"
        image = ""
       />
       <Header/>
       <Hero/>
       <Hotelintro/>
       <SecondSection/>  
       {/* <Event/> */}
       <Rooms/>
       <Features/>
       <Excitement/>
       <Offers/>
       <Testimonial/>
       <Lastsection
       title="The Epitome of luxury nestled in nature - Serendib awaits..."/>
       <Footer/>
   </div>
  )
}
