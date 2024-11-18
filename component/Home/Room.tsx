import React, { useRef, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const room = [
  {
    img: "/Images/home/rm1.webp",
    title: "DELUXE ROOM",
  },
  {
    img: "/Images/home/rm2.webp",
    title: "AFRICAN CHALETS",
  },
  {
    img: "/Images/home/rm1.webp",
    title: "BEACH CHALETS",
  },
  {
    img: "/Images/home/rm1.webp",
    title: "DELUXE ROOM",
  },
  {
    img: "/Images/home/rm2.webp",
    title: "AFRICAN CHALETS",
  },
  {
    img: "/Images/home/rm1.webp",
    title: "BEACH CHALETS",
  },
];

export default function Rooms() {
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    const slider = sliderRef.current;

    if (slider) {
      const handleScroll = (event: WheelEvent) => {
        if (slider.innerSlider && slider.innerSlider.list && event.deltaY) {
          if (event.deltaY > 0) {
            slider.slickNext && slider.slickNext();
          } else {
            slider.slickPrev && slider.slickPrev();
          }
        }
      };

      slider.innerSlider && slider.innerSlider.list && slider.innerSlider.list.addEventListener("wheel", handleScroll, {
        passive: false,
      });

      const preventScroll = (event: WheelEvent) => {
        if (slider.innerSlider && slider.innerSlider.list && slider.innerSlider.list.contains(event.target as Node)) {
          event.preventDefault();
        }
      };

      window.addEventListener("wheel", preventScroll, { passive: false });

      return () => {
        slider.innerSlider && slider.innerSlider.list && slider.innerSlider.list.removeEventListener("wheel", handleScroll);
        window.removeEventListener("wheel", preventScroll);
      };
    }
  }, []);

  var settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className="room-section" id="842673">
      <h2>RECOMMENDED</h2>
      <h1>ROOMS</h1>
      <div className="room-slider-box slider-item">
        <Slider ref={sliderRef} {...settings}>
          {room.map((item, i) => (
            <div className="room" key={i}>
              <Image src={item.img} width={0} height={0} sizes="100vw" alt="roommapimages" />
              <div className="content">
                <h3>{item.title}</h3>
                <Link href="/Accommodation">
                  <button>View</button>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
