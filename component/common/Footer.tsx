import React from "react";
import MobileFooter from "./Mobile-Footer";
import TabFooter from "./TabFooter";
import Image from "next/image";
import Link from "next/link";

const Data = [
 
  {
    img: "hotel2.png",
    text: "Heritage Hotel",
  },
  {
    img: "hotel3.png",
    text: "Kambiri Beach",
  },
  {
    img: "hotel4.png",
    text: "Lotus Hotel",
  },
  {
    img: "hotel5.png",
    text: "Serendib Suites",
  },
  {
    img: "hotel6.png",
    text: "Zaburi Hotel",
  },
  {
    img: "hotel7.png",
    text: "Kara O Mula",
  },
  {
    img: "hotel8.png",
    text: "Waters Edge Hotel",
  },
  {
    img: "hotel9.png",
    text: "Bamboo Boutique",
  },
];

export default function Footer() {
  return (
    <div className="footer-bg">
      <div className="container mx-auto Main-footer">
        <div className="grid md:grid-cols-12 gap-4 footer">
          <div className="md:col-span-4 content">
            <Link href="/">
            <Image
              className="logo"
              src="/Images/Common/Logob.png"
              width={0}
              height={0}
              sizes="100vw"
              alt="logo"
            />
           </Link>
            <p>
              Where the lavishness of luxury meets the warmth of authentic
              African hospitality. Discover the true serenity and comfort of
              Malawi.
            </p>

            <div className="social-icon">
            <Link target="_black" href="https://www.facebook.com/ZaburiBeachResort">
                         <Image src="/Images/Common/facebook.svg" width={35} height={35} sizes="100vw" alt="facebook" />
                         </Link>
                         <Link target="_black" href="https://www.instagram.com/zaburi_lake_resort/">
                         <Image src="/Images/Common/instagram.svg" width={35} height={35} sizes="100vw" alt="instergram" />
                         </Link>
                         <Image src="/Images/Common/linkedin.svg" width={35} height={35} sizes="100vw" alt="linkedin" />
                       
                         <Image src="/Images/Common/twitter.svg" width={35} height={35} sizes="100vw" alt="twitter" /> 
            </div>

                        <Link href="https://serendibhotels.mw/">
                         <p className='serenhome'>Serendib hoME</p>
                         </Link>
          </div>
          <div className="md:col-span-4 ">
            <div className="grid md:grid-cols-12">
              <div className="md:col-span-6 link">
                <p className="title">Quick Link</p>
                   <Link href="/">
                    <p>Home</p>
                    </Link>
                    <Link href="/Accommodation">
                    <p>Accommodation</p>
                    </Link>
                    <Link href="/experience">
                    <p>Experience</p>
                    </Link>
                    <Link href="/AboutUs">
                    <p>About</p>
                    </Link>
                    <Link href="/Conferences">
                    <p>Conference</p>
                    </Link>
                    <Link href="/Gallery">
                    <p>Gallery</p>
                    </Link>
                    <Link href="/ContactUs">
                    <p>Contact</p>
                    </Link>
              </div>
              <div className="md:col-span-6  link">
                <p className="title">Experience</p>
                <Link href="/#1001">
                    <p>Namalenje Dinner</p>
                    </Link>
                    <Link href="/#1001">
                    <p>Dining</p>
                    </Link>
                    <Link href="/#1001">
                    <p>Meeting</p>
                    </Link>
                    <Link href="/#1001">
                    <p>Activity</p>
                    </Link>
                    <Link href="/#1001">
                    <p>Events</p>
                    </Link>
              </div>
            </div>
          </div>
          <div className="md:col-span-4  sign-up">
            <h2>Sign up to our</h2>
            <h1>Newsletter</h1>

            <div className="form">
              <input type="text" placeholder="yourname@gmail.com" />
              <button>SEND</button>
            </div>

            <div className="contact-info">
            <Link href="mailto:bluewaters@globemw.net">
              <div className="icon">
                <Image
                  src="/Images/Common/email.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="email"
                />
                <p>bluewaters@globemw.net</p>
              </div>
              </Link>
              <Link href="tel:+265 996999917">
              <div className="icon">
                <Image
                  src="/Images/Common/call.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="call"
                />
                <p>+265 996999917/19</p>
              </div>
              </Link>
            </div>
          </div>
        </div>

        <div className=" hotel">
          {Data.map((item, i) => {
            return (
              <Link href="https://serendibhotels.mw/">
              <div className="map pb-4">
                <img src={`../Images/Footer/${item.img}`} alt="hotel" />

                <div className="arrow">
                  <p>{item.text}</p>
                  <Image
                    src="/Images/home/arrow.svg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="arrow"
                  />
                </div>
              </div>
              </Link>
            );
          })}
        </div>

        <hr />

        <div className="flex justify-center">
          <p className="reserved pt-4 pb-4">
            © 2023 Serendib Hotels. All Rights Reserved. <Link target="_black" href="https://creativehub.global/">A Creative
            <span>Hub</span></Link> Website
          </p>
        </div>
      </div>
      <MobileFooter />
      <TabFooter />
    </div>
  );
}
