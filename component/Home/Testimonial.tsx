import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonial = [
  {
    id: "1",
    desc: "Risus arcu justo potenti tempus. Velit at iaculis amet id id. Faucibus porttitor ac volutpat convallis egestas facilisis purus. Morbi enim vulputate nisi faucibus. Tincidunt lorem vel elit pretium varius.",
    img: "/Images/home/ts1.webp",
    name: "Nunc vitae vitae",
    position: "Cursus enim id",
  },
  {
    id: "2",
    desc: "Risus arcu justo potenti tempus. Velit at iaculis amet id id. Faucibus porttitor ac volutpat convallis egestas facilisis purus. Morbi enim vulputate nisi faucibus. Tincidunt lorem vel elit pretium varius.",
    img: "/Images/home/ts2.webp",
    name: "Nunc vitae vitae",
    position: "Cursus enim id",
  },
  {
    id: "3",
    desc: "Risus arcu justo potenti tempus. Velit at iaculis amet id id. Faucibus porttitor ac volutpat convallis egestas facilisis purus. Morbi enim vulputate nisi faucibus. Tincidunt lorem vel elit pretium varius.",
    img: "/Images/home/ts3.webp",
    name: "Nunc vitae vitae",
    position: "Cursus enim id",
  },
 
];

export default function SimpleSlider() {
  var settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,

  };

  return (
    <div className="container mx-auto">
      <div className="testimonial-section">
        <div className="testimonial-border">
        <Slider {...settings}>
          {testimonial.map((item, i) => (
            <div className="testimonial ">
              <div className="img-sec">
              <Image
                    src={item.img}
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="testimonial"
                  />
              </div>
              <div className="testy-content">
                <div>
                <p className="desc">{item.desc}</p>
                <div className="profile flex items-center">
                 
                  <div className="content">
                    <p className="name">{item.name}</p>
                    <p className="position">{item.position}</p>
                  </div>
                </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      
        </div>
        <Image className="comma"
                    src='/Images/home/comma.png'
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="comma"
                  />
      </div>
    </div>
  );
}
