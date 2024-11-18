import React, { useState, useEffect } from 'react';
import Image from "next/image";
import OfferPopup from '../Conference/OfferPopup';

const Data = [
  {
    id: "1",
    img: "/Images/home/moffer1.png",
    season: "Easter Escape - Salima",
    price: "From MK 90,000.00 Per Night",
  },
  {
    id: "2",
    img: "/Images/home/moffer2.png",
    season: "Corporate Traveller Workcations",
    price: "From MK 60,000.00 Per Room",
  },
  {
    id: "3",
    img: "/Images/home/moffer3.png",
    season: "Safari Cruise and Explore",
    price: "From MK 55,000.00 Per Persion",
  },
  {
    id: "4",
    img: "/Images/home/moffer4.png",
    season: "Winter Warmer",
    price: "From MK 19,500.00 Per Delegate",
  },
];

export default function OfferMobile() {

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
    <div className="container mx-auto ">
       {popup ?
        <div className='offer-bg-pop' onClick={clickon}>
          <OfferPopup
          click={clickon}/>
        </div>
         
          : " "
        }
      <div className="mobile-offer">
        <h2>EXCLUSIVE</h2>
        <h1>OFFERS</h1>

        {Data.map((item, i) => (
          <div className="main-div">
            <div className='off-sec'>
            <div className="gradient"></div>
            <Image src={item.img} width={0} height={0} sizes="100vw" alt="" />

            <div className="m-night">
              <p>10 NIGHTS</p>
            </div>

            <div className="m-content">
              <div className="info">
                <p className="season pb-2">{item.season}</p>
                <p className="price">{item.price}</p>
              </div>

              <div className="btn">
                <button onClick={clickon}>View More</button>
              </div>
            </div>
          </div>
          </div>
        ))}

        <div className="btn-bottom">
          <button>View More</button>
        </div>
      </div>
    </div>
  );
}
