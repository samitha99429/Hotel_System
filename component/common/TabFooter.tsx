import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function TabFooter() {
  return (
    <div className="tabfooter">
      <div className="container mx-auto pt-12 ">
        <div className="grid md:grid-cols-12 ">
          <div className="col-span-6">
            <Link href="/">
            <Image
              src="/Images/Common/Logob.png"
              width={0}
              height={0}
              sizes="100vw"
              alt="logo"
              className="logo"
            />
            </Link>
            <p className="text pt-5">
              Where the lavishness of luxury meets the warmth of authentic
              African hospitality. Discover the true serenity and comfort of
              Malawi.
            </p>

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
          <div className="col-span-6">
            <h2>Sign up to our</h2>
            <h1>Newsletter</h1>

            <div className="form">
              <input type="text" placeholder="yourname@gmail.com" />
              <button>SEND</button>
            </div>

            <div className="contact-info">
            <Link href="mailto:reservation@serendibhotel.com">
              <div className="icon">
                <Image
                  src="/Images/Common/email.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="email"
                />
                <p>reservation@serendibhotel.com</p>
              </div>
              </Link>
              <Link href="tel:+265 885 976 419">
              <div className="icon">
                <Image
                  src="/Images/Common/call.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="call"
                />
                <p>+265 885 976 419</p>
              </div>
              </Link>
            </div>
          </div>
        </div>

        <hr />

        <div className="flex justify-center pt-8 pb-12">
          <p className="reserve">
            © 2023 Serendib Hotels. All Rights Reserved. <Link href="https://creativehub.global/">A Creative
            <span>Hub</span></Link> Website
          </p>
        </div>
      </div>
    </div>
  );
}
