import React, { useState, useEffect } from 'react';
import OfferPopup from './OfferPopup';


const Data = [
    {
      id: "1",
      img: "../Images/Offers/offer1.png",
      price : "From MK 45,000 Per Person",
      title: "Safari Cruise and Explore with Mangunda",
      resort : "BLUE WATER LAKE RESORT"
    },
    {
      id: "2",
      img: "../Images/Offers/offer2.png",
      price : "From 500$ Per Room",
      title: "Arcu leo morbi blandit sed. Praesent a adipiscing mauris est.",
      resort : "BLUE WATER LAKE RESORT"
    },
    {
      id: "3",
      img: "../Images/Offers/offer3.png",
      price : "From 500$ Per Room",
      title: "Hac ut turpis urna rhoncus in turpis. Cras hendrerit malesuada.",
      resort : "BLUE WATER LAKE RESORT"
    },
    {
      id: "4",
      img: "../Images/Offers/offer4.png",
      price : "From 500$ Per Room",
      title: "Feugiat in posuere quam fringilla feugiat at mauris est. Mattis orci.",
      resort : "BLUE WATER LAKE RESORT"
    },
    {
      id: "5",
      img: "../Images/Offers/offer6.png",
      price : "From 500$ Per Room",
      title: "Enim amet eget eu ac amet. Sagittis pretium urna ornare.",
      resort : "BLUE WATER LAKE RESORT"
    },
    {
      id: "6",
      img: "../Images/Offers/offer5.png",
      price : "From 500$ Per Room",
      title: "Pulvinar auctor venenatis ac arcu congue. Faucibus donec.",
      resort : "BLUE WATER LAKE RESORT"
    },
  
  ];

export default function Offer() {

  const[popup, setpopup] = useState(false);

  const clickon =() =>{
    setpopup(!popup);
  }


  useEffect(() => {
    if (popup) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [popup]);

  return (
    <div className='relative'>
    <div className='container mx-auto pb-12 '>
    {popup ?
        <div className='offer-bg-pop' onClick={clickon}>
          <OfferPopup
          click={clickon}/>
        </div>
         
          : " "
        }
         <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 xl:gap-x-12 md:gap-x-4">
        {Data.map((Data, i) => {
          return (
            <div>
            <div className="conference">
              <div className="conference-img">
                   <img src={Data.img} alt="conference" />
              </div>

              <div className="conference-content">
                <p>{Data.price}</p>
                <h4>{Data.title}</h4>
                <div className="con-last">
                  <p>{Data.resort}</p>
                  <button onClick={clickon}>View</button>
                </div>
              </div>
            </div>
       
         
            </div>
          );
        })}
      </div>
    
    </div>
    </div>
  )
}
