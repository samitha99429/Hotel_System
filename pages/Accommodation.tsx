import React from 'react'
import SubHero from '@/component/common/SubHero'
import SubSectionOne from '@/component/common/SubSectionOne';
import Footer from '@/component/common/Footer';
import Lastsection from '@/component/common/LastSection';
import Room from '@/component/Accomodation/Room';
import Header from '@/component/Header/Header';
import MetaDetails from '@/component/common/MetaDetails';

export default function Accomodation() {
  return (
    <div  className='bg-page'>
      <MetaDetails
      metaTitle = "Accommodation | Blue Waters Screen"
      metaDescription = "Accommodation | Blue Waters Screen"
      image = ""
      />
        <Header/>
        <SubHero
        bgimage="../Images/Accomodation/accom.webp"
        title="Accommodation"
        />

        <SubSectionOne
        titleone='WaterFront'
        titletwo='Retreat'
        titlepara='63 spacious rooms with stunning views of lake Malawi, elegantly furnished to contrast the serenity of the tranquil surroundings. Escape to a world of refreshing comfort and a place where comfort meets style - your beachfront getaway awaits.'/>

       <Room/>
       <Lastsection
        title="The intersection of luxury, nature and african  hospitality at its "
        />
       <Footer/>
    </div>
  )
}
