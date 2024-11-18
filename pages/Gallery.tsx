import React from 'react'
import SubHero from '@/component/common/SubHero'
import SubSectionOne from '@/component/common/SubSectionOne'
import Lastsection from '@/component/common/LastSection'
import GalleryImg from '@/component/Gallery/GalleryImg';
import Footer from '@/component/common/Footer'
import Header from '@/component/Header/Header';
import MetaDetails from '@/component/common/MetaDetails';

export default function Gallery() {
  return (
    <div  className='bg-page'>
      <MetaDetails
      metaTitle = "Gallery | Blue Waters Screen"
      metaDescription = "Gallery | Blue Waters Screen"
      image = ""
      />
       <Header/>
        <SubHero
        bgimage="../Images/Gallery/gallerybk.webp"
        title="Gallery"
        />

        <SubSectionOne
        titleone='Beauty in'
        titletwo='Motion'
        titlepara='Explore the beauty and luxury of BlueWaters through our gallery page, featuring breathtaking images of our guest rooms, facilities, and surroundings. With a curated collection of breathtaking photos and videos, experience our elegant ambiance.'/>
    
        <GalleryImg/>
        <Lastsection
        title="The intersection of luxury, nature and african  hospitality at its "
        />
        <Footer/>
    </div>
  )
}
