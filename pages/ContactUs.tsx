import React from 'react'
import "../public/JS/anyquestion"
import SubHero from '@/component/common/SubHero'
import ContactUsForm from '@/component/ContactUs/ContactUsForm';
import Question from '@/component/ContactUs/Question';
import Lastsection from '@/component/common/LastSection'
import Footer from '@/component/common/Footer'
import Header from '@/component/Header/Header';
import MetaDetails from '@/component/common/MetaDetails';

export default function ContactUs() {
  return (
    <div  className='bg-page'>
      <MetaDetails
      metaTitle = "Contact Us | Blue Waters Screen"
      metaDescription = "Contact Us | Blue Waters Screen"
      image = ""
      />
       <Header/>
       <SubHero
        bgimage="../Images/Contactus/contactbk.webp"
        title="Contact us"
        />
        <ContactUsForm/>
        <Question/>
        <Lastsection
        title="The intersection of luxury, nature and african  hospitality at its "
        />
        <Footer/>
    </div>
  )
}
