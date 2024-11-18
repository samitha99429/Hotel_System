import React from 'react'
import SubHero from '@/component/common/SubHero'
import SubSectionOne from '@/component/common/SubSectionOne';
import Aboutthem from '@/component/AboutUs/Aboutthem';
import Lastsection from '@/component/common/LastSection';
import Footer from '@/component/common/Footer';
import Header from '@/component/Header/Header';
import MetaDetails from '@/component/common/MetaDetails';

export default function AboutUs() {
  return (
    <div  className='bg-page'>
      <MetaDetails
      metaTitle = "About us | Blue Waters Screen"
      metaDescription = "About Us | Blue Waters Screen"
      image = ""
      />
      <Header/>
        <SubHero
        bgimage="../Images/About/aboutbk.webp"
        title="About"
        />

       <SubSectionOne
        titleone='Our'
        titletwo='Mission'
        titlepara='Our mission is to provide a serene escape for guests seeking rest and rejuvenation. Our team, made up of experienced hospitality professionals, is dedicated to delivering exceptional service and creating memories that will last a lifetime.'/>

        <Aboutthem/>
        <Lastsection
        title="The intersection of luxury, nature and african  hospitality at its "
        />
        <Footer/>
    </div>
  )
}
