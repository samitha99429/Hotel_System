import React, { useState, useEffect } from 'react';
import Image from "next/image";
import OfferMobile from "./OfferMobile";
import OfferPopup from '../Conference/OfferPopup';

const Data = [
  {
    id: "1",
    img: "/Images/home/off1.webp",
    name: "Easter Escape - Salima",
    price: "From MK 90,000.00 Per Night",
  },
  {
    id: "2",
    img: "/Images/home/off2.webp",
    name: "Corporate Traveller Workcations",
    price: "From MK 60,000.00 Per Room",
  },
  {
    id: "3",
    img: "/Images/home/off3.webp",
    name: "Safari Cruise and Explore",
    price: "From MK 55,000.00 Per Persion",
  },
  {
    id: "4",
    img: "/Images/home/off4.webp",
    name: "Winter Warmer",
    price: "From MK 19,500.00 Per Delegate",
  },
];

export default function Offers() {

  const[popup, setpopup] = useState(false);

  const clickon =() =>{
    setpopup(!popup);
  }


  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event && event.key === "Escape") {
        setpopup(false);
      }
    };
    if (popup) {
      document.body.classList.add("no-scroll");
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.classList.remove("no-scroll");
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [popup]);

  return (
    <div>
    <div className="container mx-auto section-offer mb-12 ">
    {popup ?
        <div className='offer-bg-pop' onClick={clickon}>
          <OfferPopup
          click={clickon}/>
        </div>
         
          : " "
        }
        <h1 className="exls">Exotic</h1>
        <h1 className="offer">offers</h1>
     <div className="grid md:grid-cols-12 gap-4 ">
        {Data.map((item, i) => (
          <div id="Zoom-in" className="lg:col-span-3 md:col-span-6  section-col">
            <div className="section-img">
            <div className="gradient"></div>
              <Image src={item.img} width={0} height={0} sizes="100vw" alt="offer" />
              <div className="night absolute top-4 right-4" >
              <p>10 NIGHTS</p>
            </div>

            <div className="content-offer absolute">
              <p>{item.name}</p>
              <h3>{item.price}</h3>

              <button onClick={clickon}>Book Now</button>
            </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
      <OfferMobile/>
      
    </div>
  );
}
