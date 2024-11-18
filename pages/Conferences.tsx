import React from 'react'
import SubHero from '@/component/common/SubHero';
import SubSectionOne from '@/component/common/SubSectionOne';
import Lastsection from '@/component/common/LastSection';
import Footer from '@/component/common/Footer';
import ConferenceHall from '@/component/Conference/ConferenceHall';
import Header from '@/component/Header/Header';
import MetaDetails from '@/component/common/MetaDetails';

export default function Conferences() {
  return (
    <div  className='bg-page'>
      <MetaDetails
      metaTitle = "Conference | Blue Waters Screen"
      metaDescription = "Conference | Blue Waters Screen"
      image = ""
      />
       <Header/>
       <SubHero
        bgimage="../Images/Conference/conbk.webp"
        title="Conferences"
        />

       <SubSectionOne
        titleone='Corporate'
        titletwo='Events'
        titlepara='BlueWaters offers versatile conference spaces for a range of events, featuring modern technology, comfortable seating, and customizable lighting. With capacities ranging from small meetings to large gatherings, we provide the perfect venue for business conferences, presentations, and team-building workshops.'/>
    
        <ConferenceHall/>
        <Lastsection
        title="The intersection of luxury, nature and african  hospitality at its "
        />
        <Footer/>
    </div>
  )
}
