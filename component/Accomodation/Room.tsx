import React from "react";
import Image from "next/image";

const Data = [
  {
    id: "1",
    img: "/Images/Accomodation/rm1.webp",
    title: "DELUXE ROOM ",
    para: "Comfortable Deluxe Rooms - Feel at Home. Book your stay in our well-equipped deluxe rooms for a warm, relaxing atmosphere perfect for a luxurious holiday or business trip. Experience the best of both worlds - comfort and luxury combined. Relax and unwind in style.",
  },
  {
    id: "2",
    img: "/Images/Accomodation/rm2.webp",
    title: "BEACH CHALETS",
    para: "Beach Chalets with Exclusive Views. Experience the beauty of Lake Malawi from our luxurious Beach Chalets with premium lake views and direct beach access. Relax in comfort and serenity, surrounded by functional living space, luxurious furnishings and a spacious bathroom.",
  },
  {
    id: "3",
    img: "/Images/Accomodation/rm3.webp",
    title: "AFRICAN WING",
    para: "African Oasis - Sun, Lake, Tranquility. Escape to Senga Bay, Salima, where sun and lake meet. Step from the lake to our African-inspired haven for a peaceful getaway.",
  },
  {
    id: "4",
    img: "/Images/Accomodation/rm4.webp",
    title: "GRAND FAMILY",
    para: "Create Lasting Family Memories - Grand Family Suites by the Lakeshore. Travel in comfort and style with your loved ones in our spacious and airy Grand Family Suites.Our suites offer a memorable home base for your next family adventure by the lakeshore.",
  },
];

// const DataBottom = [
//   {
//     id: "1",
//     img: "/Images/Accomodation/rm5.webp",
//     title: "AFRICAN CHALETS – ( SINGLE )",
//     para: "African Oasis - Sun, Lake, Tranquility. Escape to Senga Bay, Salima, where sun and lake meet. ",
//   },
//   {
//     id: "2",
//     img: "/Images/Accomodation/rm6.webp",
//     title: "AFRICAN CHALETS – ( DOUBLE )",
//     para: "African Oasis - Sun, Lake, Tranquility. Escape to Senga Bay, Salima, where sun and lake meet. ",
//   },
//   {
//     id: "3",
//     img: "/Images/Accomodation/rm7.webp",
//     title: "GRAND FAMILY",
//     para: "Create Lasting Family Memories - Grand Family Suites by the Lakeshore. Travel in comfort and style with your loved ones.",
//   },
// ];

export default function Room() {
  return (
    <div className="container mx-auto pb-20">
      <div className="grid md:grid-cols-2 sm:grid-cols-1 md:gap-x-12 lg:gap-x-28 gap-y-10">
        {Data.map((Data, i) => {
          return (
            <div className="room ">
              <div className="room-box-img">
                <Image
                  className="img-room"
                  src={Data.img}
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="room"
                />
              </div>

              <div>
                <h4 className="title">{Data.title}</h4>
                <p className="para">{Data.para}</p>
              </div>

              <div className="bottom-section">
                <div className="features">
                  <Image
                    src="/Images/Accomodation/f1.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="feature"
                  />
                  <p>325 sqft</p>
                </div>
                <div className="features">
                  <Image
                    src="/Images/Accomodation/f2.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="feature"
                  />
                  <p>Wifi </p>
                </div>
                <div className="features">
                  <Image
                    src="/Images/Accomodation/f3.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="feature"
                  />
                  <p>Controlled AC</p>
                </div>
                <div className="features">
                  <Image
                    src="/Images/Accomodation/f4.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="feature"
                  />
                  <p>Hotwater</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* <div className="grid md:grid-cols-12 gap-4 room-bottom pt-20">
        {DataBottom.map((Data, i) => {
          return (
            <div className="lg:col-span-4 md:col-span-6">
              <div className="room-second">
                <div className="room-bottom-img">
                  <Image
                    className="img-room"
                    src={Data.img}
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="room"
                  />
                </div>
                <div>
                  <h4 className="title">{Data.title}</h4>
                  <p className="para">{Data.para}</p>
                </div>

                <div className="bottom-section">
                  <div className="features">
                    <Image
                      src="/Images/Accomodation/f1.png"
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt="feature"
                    />
                    <p>325 sqft</p>
                  </div>
                  <div className="features">
                    <Image
                      src="/Images/Accomodation/f2.png"
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt="feature"
                    />
                    <p>Wifi </p>
                  </div>
                  <div className="features">
                    <Image
                      src="/Images/Accomodation/f3.png"
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt="feature"
                    />
                    <p>Controlled AC</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div> */}
    </div>
  );
}
