import { useState } from "react";
import "../../public/JS/anyquestion";
import Image from 'next/image'
import { FALSE } from "sass";
import AccordionComp from "./AccordionComp";
import ImageComp from "./ImageComp";

const Data = [
  {
    id: "1",
    title: "Faucibus sit egestas egestas leo in adipiscing.",
    desc: "Magna viverra ac amet dignissim condimentum risus blandit. Vestibulum massa faucibus suspendisse et nunc lacus. Fermentum vulputate cursus cursus ac commodo blandit. Vitae ipsum tellus tellus ac faucibus porta. ",
    img: "/Images/Contactus/q1.webp",
  },
  {
    id: "2",
    title: "Fermentum morbi felis at tellus eleifend.",
    desc: "Magna viverra ac amet dignissim condimentum risus blandit. Vestibulum massa faucibus suspendisse et nunc lacus. Fermentum vulputate cursus cursus ac commodo blandit. Vitae ipsum tellus tellus ac faucibus porta.  ",
    img: "/Images/Contactus/q2.webp",
  },
  {
    id: "3",
    title: "Adipiscing pellentesque aenean mattis.",
    desc: "Magna viverra ac amet dignissim condimentum risus blandit. Vestibulum massa faucibus suspendisse et nunc lacus. Fermentum vulputate cursus cursus ac commodo blandit. Vitae ipsum tellus tellus ac faucibus porta. ",
    img: "/Images/Contactus/q1.webp",
  },
  {
    id: "4",
    title: "Tellus sed commodo morbi pharetra lacus id.",
    desc: "Magna viverra ac amet dignissim condimentum risus blandit. Vestibulum massa faucibus suspendisse et nunc lacus. Fermentum vulputate cursus cursus ac commodo blandit. Vitae ipsum tellus tellus ac faucibus porta. ",
    img: "/Images/Contactus/q2.webp",
  },
];



export default function Question() {
  const [activeIndex, setActiveIndex] = useState(0);
  console.log("dsdsd");
  const handleItemClick = (index : any) => {
    console.log("Index", index);
    console.log("Active", activeIndex);

    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="container mx-auto">
      <div className=" question  pt-20">
        <div className="flex justify-center ">
        <div className="topic pb-16 max-sm:ml-8">
          <h2>Any</h2>
          <h1>Questions?</h1>
        </div>
        </div>
       <div className="grid md:grid-cols-12">
        <div className="xl:col-span-6 sm:col-span-12">
        <div className="q-img">
          {Data.map((item, i) => (
            <ImageComp img={item.img} isActive={i == activeIndex} />
          ))}
        </div>
        </div>
        <div className="xl:col-span-6 sm:col-span-12 flex justify-center">
        <div className="content">
          {Data.map((item, i) => (
            <AccordionComp
              key={item.id}
              isActive={i === activeIndex}
              index={i}
              handleItemClick={handleItemClick}
              item={item}
            />
          ))}
          </div>
        </div>
        </div>
      </div>

      <div className="pt-20 pb-20">
      

      <div className="mapouter"><div className="gmap_canvas"><iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Blue%20Waters%20By%20Serendib%20Mafco%20Street%20Senga%20Bay,%20Salima%20Malawi&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe><br/></div></div>
      </div>
    </div>
  );
}
