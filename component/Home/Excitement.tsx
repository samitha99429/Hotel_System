
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Menu from "./Menu";
import Link from "next/link";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Namalenje = [
  { img: "/Images/home/ex1.webp" },
  { img: "/Images/home/ex2.webp" },
  { img: "/Images/home/ex3.webp" },
  { img: "/Images/home/ex2.webp" },
  { img: "/Images/home/ex1.webp" },
  { img: "/Images/home/ex2.webp" },
];
const Dining = [
  { img: "/Images/home/ex3.webp" },
  { img: "/Images/home/ex2.webp" },
  { img: "/Images/home/ex1.webp" },
  { img: "/Images/home/ex3.webp" },
  { img: "/Images/home/ex1.webp" },
  { img: "/Images/home/ex2.webp" },
];
const Meeting = [
  { img: "/Images/home/ex2.webp" },
  { img: "/Images/home/ex1.webp" },
  { img: "/Images/home/ex3.webp" },
  { img: "/Images/home/ex2.webp" },
  { img: "/Images/home/ex1.webp" },
  { img: "/Images/home/ex2.webp" },
];
const Activities = [
  { img: "/Images/home/ex1.webp" },
  { img: "/Images/home/ex2.webp" },
  { img: "/Images/home/ex3.webp" },
  { img: "/Images/home/ex4.webp" },
  { img: "/Images/home/ex1.webp" },
  { img: "/Images/home/ex2.webp" },
];

const name = [
  { id: "1", name: "Namalenje" },
  { id: "2", name: "Dining" },
  { id: "3", name: "Meeting" },
  { id: "4", name: "Activities" },
];


const menu = [{id:'1',title:'   Namalenje Dinner'},{id:'2',title:'Dining'},{id:'3',title:'   Meeting'},{id:'4',title:'Activities'}]

const Moment = () => {
  const sliderRef = useRef<Slider>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

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
  }, [activeIndex]);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  const renderTabPanels = () => {
    return name.map((tab, index) => (
      <TabPanel key={tab.id}>
        {activeIndex === index && (
          <div className="mixitUp-container">
            <Slider {...settings} ref={sliderRef}>
              {tab.name === "Namalenje" &&
               Namalenje.map((item, i) => (
                  <div className="moment-img" key={i} data-aos="fade-left" data-aos-duration="1000" >
                    <Image
                      src={item.img}
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt=""
                    />
                  </div>
                ))}

              {tab.name === "Dining" &&
                Dining.map((item, i) => (
                  <div className="moment-img" key={i} data-aos="fade-left" data-aos-duration="1000">
                    <Image
                      src={item.img}
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt=""
                    />
                  </div>
                ))}

              {tab.name === "Meeting" &&
                Meeting.map((item, i) => (
                  <div className="moment-img" key={i} data-aos="fade-left" data-aos-duration="1000">
                    <Image
                      src={item.img}
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt=""
                    />
                  </div>
                ))}

              {tab.name === "Activities" &&
                Activities.map((item, i) => (
                  <div className="moment-img" key={i} data-aos="fade-left" data-aos-duration="1000">
                    <Image
                      src={item.img}
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt=""
                    />
                  </div>
                ))}
            </Slider>
          </div>
        )}
      </TabPanel>
    ));
  };

  const settings = {
    dots: false,
    autoplay: false,
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
    <>
      <Tabs className="moment items-center" id="1001">
        <h2>Exquisite</h2>
        <h1>Moments</h1>
        <div className="grid md:grid-cols-12 gap-4">
          <div className="md:col-span-3 flex items-center">
            <TabList className="moment-con">
              <div className="menu-content ">
                <div className="menu">
                  {menu.map((item, i) => (
                    <Tab key={item.id}>
                      <Menu
                        isActive={i === activeIndex}
                        index={i}
                        handleItemClick={handleItemClick}
                        item={item}
                      />
                    </Tab>
                  ))}
                </div>
                <Link href="/Gallery">
                  <button className="view">VIEW MORE</button>
                </Link>
              </div>
            </TabList>
          </div>
          <div className="md:col-span-9">
            {renderTabPanels()}
          </div>
        </div>
      </Tabs>
    </>
  );
};
export default Moment;
