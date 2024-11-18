import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import ConferencePopup from "./ConferencePopup";

const Data = [
  {
    id: "1",
    img: "/Images/Conference/con1.webp",
    title: "Theatre Style Conference Hall",
    guests : "100 Guests"
  },
  {
    id: "2",
    img: "/Images/Conference/con2.webp",
    title: "Class Room Conference Hall",
    guests : "80 Guests"
  },
  {
    id: "3",
    img: "/Images/Conference/con3.webp",
    title: "Banquet/Cocktail layout",
    guests : "80 Guests"
  },
  {
    id: "4",
    img: "/Images/Conference/con4.webp",
    title: "Theatre Style White Hall",
    guests : "40 Guests"
  },
  {
    id: "5",
    img: "/Images/Conference/con5.webp",
    title: "U Style White Hall",
    guests : "40 Guests"
  },
  {
    id: "6",
    img: "/Images/Conference/con1.webp",
    title: "Board room",
    guests : "15 Guests"
  },
];

export default function ConferenceHall() {

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
    <div className="relative">
    <div className="container mx-auto">
    {popup ?
        <div className='offer-bg-pop' onClick={clickon}>
          <ConferencePopup
          click={clickon}/>
        </div>
         
          : " "
        }
      <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 xl:gap-x-12 md:gap-x-4">
        {Data.map((Data, i) => {
          return (
            <div className="conference">
               <div className="conference-img">
                 <Image src={Data.img} width={0} height={0} sizes="100vw" alt="conference image" />
               </div>
            <div className="flex justify-end">
              <div className="conference-content">
                <h4>{Data.title}</h4>
                <div className="con-last">
                  <p>{Data.guests}</p>
                  <button onClick={clickon}>View More</button>
                </div>
              </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
}
