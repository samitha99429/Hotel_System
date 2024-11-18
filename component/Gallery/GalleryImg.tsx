import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import GalleryMenu from "./GalleryMenu";
import Image from 'next/image'

const All = [
  { id: "1", img: "/Images/Gallery/g1.webp" },
  { id: "2", img: "/Images/Gallery/g2.webp" },
  { id: "3", img: "/Images/Gallery/gc1.png" },
  { id: "4", img: "/Images/Gallery/gc3.png" },
  { id: "5", img: "/Images/Gallery/g5.webp" },
  { id: "6", img: "/Images/Gallery/g6.webp" },
  { id: "7", img: "/Images/Gallery/g7.webp" },
  { id: "8", img: "/Images/Gallery/g8.webp" },
  { id: "9", img: "/Images/Gallery/g9.webp" },
  { id: "10", img: "/Images/Gallery/g10.webp" },
  { id: "11", img: "/Images/Gallery/g11.webp" },
  { id: "12", img: "/Images/Gallery/g12.webp" },
  { id: "13", img: "/Images/Gallery/g13.webp" },
  { id: "14", img: "/Images/Gallery/g14.webp" },
  { id: "15", img: "/Images/Gallery/g15.webp" },
];

const Dining = [
  { id: "1", img: "/Images/Gallery/g6.webp" },
  { id: "2", img: "/Images/Gallery/g5.webp" },
  { id: "3", img: "/Images/Gallery/g4.webp" },
  { id: "4", img: "/Images/Gallery/g1.webp" },
  { id: "5", img: "/Images/Gallery/g2.webp" },
  { id: "6", img: "/Images/Gallery/g3.webp" },
];

const Floating = [
  { id: "1", img: "/Images/Gallery/g5.webp" },
  { id: "2", img: "/Images/Gallery/g3.webp" },
  { id: "3", img: "/Images/Gallery/g1.webp" },
  { id: "4", img: "/Images/Gallery/g4.webp" },
  { id: "5", img: "/Images/Gallery/g5.webp" },
  { id: "6", img: "/Images/Gallery/g6.webp" },
];

const menu = [{id:'1',title:'All'},{id:'2',title:'DINNING'},{id:'3',title:'FLOATING DINNER'},{id:'4',title:'MEETINGS'},{id:'5',title:'ACTIVITIES'},]

export default function GalleryImg() {

  const [toggle, setToggle] = useState(true);
 
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index : any) => {
    setToggle(!toggle);
    setActiveIndex(index === activeIndex ? null : index);
  };

 

  return (
    <div className="container mx-auto pb-20">
      <Tabs className="">
        <TabList className="gallery-menu">
          <div className="menu ">
            {/* <div> */}

            {menu.map((item, i) => (
              <Tab>
                 <GalleryMenu
                 key={item.id}
                 isActive={i === activeIndex}
                 index={i}
                 handleItemClick={handleItemClick}
                 item={item}
                 />
                 </Tab>
              ))}
            
          </div>
        </TabList>
        {/* <div className=""> */}
        <TabPanel>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 700: 2, 750: 2, 900: 3 }}
          >
            <Masonry>
              {All.map((Data, i) => {
                return (
                  <div className="gallery">
                    <Image src={Data.img} width={0} height={0} sizes="100vw" alt="gallery image" />
                  </div>
                );
              })}
            </Masonry>
          </ResponsiveMasonry>
        </TabPanel>
        <TabPanel>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry>
              {Dining.map((Data, i) => {
                return (
                  <div className="gallery">
                      <Image src={Data.img} width={0} height={0} sizes="100vw" alt="gallery image" />
                  </div>
                );
              })}
            </Masonry>
          </ResponsiveMasonry>
        </TabPanel>

        <TabPanel>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry>
              {Floating.map((Data, i) => {
                return (
                  <div className="gallery">
                         <Image src={Data.img} width={0} height={0} sizes="100vw" alt="gallery image" />
                  </div>
                );
              })}
            </Masonry>
          </ResponsiveMasonry>
        </TabPanel>

        <TabPanel>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry>
              {Dining.map((Data, i) => {
                return (
                  <div className="gallery">
                    <Image src={Data.img} width={0} height={0} sizes="100vw" alt="gallery image" />
                  </div>
                );
              })}
            </Masonry>
          </ResponsiveMasonry>
        </TabPanel>

        <TabPanel>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry>
              {Dining.map((Data, i) => {
                return (
                  <div className="gallery">
                      <Image src={Data.img} width={0} height={0} sizes="100vw" alt="gallery image" />
                  </div>
                );
              })}
            </Masonry>
          </ResponsiveMasonry>
        </TabPanel>

        {/* </div> */}
      </Tabs>
    </div>
  );
}
