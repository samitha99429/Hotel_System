import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../public/SCSS/mobileMenu.module.scss";

const testimonial = [
  {
    id: "1",
    name: "Heritage Hotel",
    img: "/Images/Common/heritagehotel.png",
  },
  {
    id: "2",
    img: "/Images/Common/kambri.png",
    name: "Kambri Beach",
  },
  {
    id: "3",
    img: "/Images/Common/lotus.png",
    name: "Lotus Hotel",
  },
  {
    id: "4",
    name: "Serendip Suites",
    img: "/Images/Common/serendipsuites.png",
  },
  {
    id: "5",
    name: "Heritage Hotel",
    img: "/Images/Common/heritagehotel.png",
  },
];

export default function SimpleSlider() {
  var settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className={styles.testimonialSection}>
      <div className="testimonial-border">
        <Slider {...settings}>
          {testimonial.map((item, i) => (
            <div className="testimonial1">
              <div className={styles.imgSec}>
                <Image
                  className={styles.testimonialimg}
                  src={item.img}
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="testimonial"
                />
              </div>
              <div className="testy-content">
                <div>
                  <div className={styles.content}>
                    <p className="name text-black">{item.name}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
