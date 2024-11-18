import React from 'react'
import { useState } from "react";

export default function OfferPopup({ click }: { click: () => void }) {

  
  return (
    <div>
  
    <div className='flex justify-center'>
      <div className='offer-details'>
        
        <div className='detail-box'>
         <img className='main-img' src="../Images/Offers/popup.png" alt="offer" />
         <div className=' absolute md:top-4 md:right-4'>
         <button onClick={click}>
            <img className="close"  src="../Images/Offers/closef.png" alt="close offer" />
         </button>
         </div>
         <div>
            <h2>Scelerisque mattis praesent mollis </h2>
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
            
         </div>
         </div>
      </div>
      <div className="gradient"></div>
    </div>
  
    </div>
  )
}
