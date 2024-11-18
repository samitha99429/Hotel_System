import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function MobileFooter() {
  return (
    <div className="Mobile-footer">
      <div className=" bg-color">
        <div className="">
          <div className="logo-content">
            <div className="flex justify-center">
              <Link href="/">
              <Image
                className="mobile-logo text-center"
                src="/Images/Common/Logob.png"
                width={100}
                height={100}
                sizes="100vw"
                alt="logo"
              />
              </Link>
            </div>
            <div className="flex justify-center">
              <p className="text-center">
                Where the lavishness of luxury meets the warmth of authentic
                African hospitality. Discover the true serenity and comfort of
                Malawi.
              </p>
            </div>

            <div className="social-icon">
            <Link href="https://www.facebook.com/ZaburiBeachResort">
                         <Image src="/Images/Common/facebook.svg" width={35} height={35} sizes="100vw" alt="facebook" />
                         </Link>
                         <Link href="https://www.instagram.com/zaburi_lake_resort/">
                         <Image src="/Images/Common/instagram.svg" width={35} height={35} sizes="100vw" alt="instergram" />
                         </Link>
                         <Image src="/Images/Common/linkedin.svg" width={35} height={35} sizes="100vw" alt="linkedin" />
                       
                         <Image src="/Images/Common/twitter.svg" width={35} height={35} sizes="100vw" alt="twitter" /> 
            </div>
          </div>

          <div className="form-section">
            <h2>Sign up to our</h2>
            <h1>Newsletter</h1>

            <div className="form">
              <input type="text" placeholder="yourname@gmail.com" />
              <button>SEND</button>
            </div>
          </div>

          <div className="mobile-bottom-section">
            <p className="title text-center">Quick Link</p>
            <div className="link pb-10">
              <Link href="/">
                <p>Home</p>
              </Link>
              <Link href="/Accommodation">
                <p>Accommodation</p>
              </Link>
              <Link href="/experience">
                <p>Experience</p>
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
            <hr />
            <div className="flex justify-center">
              <p className="text-center reserve pt-2 pb-2">
                © 2023 Serendib Hotels. All Rights Reserved. <Link href="https://creativehub.global/">A Creative
                <span>Hub</span></Link> Website
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
