import React from 'react'
import { useState } from "react";

export default function OfferPopup({click} :any) {

  
  return (
    <div>
  
    <div className='flex justify-center'>
      <div className='offer-details'>
        
        <div className='detail-box'>
         <img className='main-img' src="../Images/Conference/offer.webp" alt="" />
         <div className='close-section absolute md:top-6 md:right-10'>
         <button onClick={click}>
            <img className="close"  src="../Images/Conference/closef.png" alt="" />
         </button>
         </div>
         <div>
            <p className='main-topic'>From MK 90,000 Per Night</p>
            <div className='flex justify-center'>
              <p className='desc'>Discover real island life, cultural immersion, city nightlife and more when you stay at any (or many) of our 11 hotels & resorts across Malawi for 30 days.</p>
            </div>
            <h3>From 50$ Per Person</h3>
            <p>Book between 9th December – 31st January 2023</p>
            <p>Valid for stays until <span>31st October 2023</span> </p>
            <p className='orange-text'>Valid at Blue waters & Lotus Hotel</p>

            <div className='flex justify-center'>
                  <button className='book'>BOOK NOW</button>
            </div>

            <p className="apply">T&C Apply</p>
            
         </div>
         </div>
      </div>
      <div className="gradient"></div>
    </div>
  
    </div>
  )
}
