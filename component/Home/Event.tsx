import Image from "next/image";
import React from "react";

const event = [
  {
    id: "1",
    img: "/Images/Home/event1.png",
    title: "Beach Wedding",
  },
  {
    id: "2",
    img: "/Images/Home/event2.png",
    title: "Beach Wedding",
  },
  {
    id: "3",
    img: "/Images/Home/event3.png",
    title: "Beach Wedding",
  },
  {
    id: "4",
    img: "/Images/Home/event4.png",
    title: "Beach Wedding",
  },
  {
    id: "5",
    img: "/Images/Home/event5.png",
    title: "Beach Wedding",
  },
];

export default function Event() {
  return (
    <div className="event mt-5">
      <h4>
        ACTIVITIES id ac quis. Vel semper nunc magna faucibus. Blandit etiam
        lacus nec imperdiet phasellus velit placerat ornare sed. Lectus nulla
        sodales{" "}
      </h4>

      <div className="event-section mt-5">
        {event.map((item, i) => (
          <div id="Zoom-in" className="section-img">
            <Image src={item.img} width={0} height={0} sizes="100vw" alt="" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
