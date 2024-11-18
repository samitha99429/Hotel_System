import React from 'react'
import MainComponent from '@/component/Experience/MainComponent'
import Content from '../component/Experience/ExperienceMain.json'
import Lastsection from '@/component/common/LastSection';
import Footer from '@/component/common/Footer';
import SubSectionOne from '@/component/common/SubSectionOne';
import SubHero from '@/component/common/SubHero';
import Header from '@/component/Header/Header';
import MetaDetails from '@/component/common/MetaDetails';

export default function experience() {
  return (
    <div  className='bg-page'>
      <MetaDetails
      metaTitle = "Experience | Blue Waters Screen"
      metaDescription = "Experience | Blue Waters Screen"
      image = ""
      />
        <Header/>
        <SubHero
        bgimage="../Images/Experience/expbk.webp"
        title="Experience"
        />
        <SubSectionOne
        titleone="Expect"
        titletwo="Elegance"
        titlepara="Make Family Memories to Last a Lifetime at BlueWaters! With Thrilling Speedboat Adventures and Kayaking Excursions, Plus Mesmerizing Must-See Attractions, Your Holiday is Sure to be a Blast. Whether You're Bonding Over Brave New Experiences or Soaking Up the Beauty, BlueWaters Offers an Destination for Quality Time with Your Loved Ones."
        />
        <MainComponent Data={Content}/>
        <Lastsection
        title="The intersection of luxury, nature and african  hospitality at its "
        />
        <Footer/>
      
    </div>
  )
}

