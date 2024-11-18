import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import MobileHeader from "./MobileHeader";
export default function Header() {
  const router = useRouter();
  const sectionone = [
    { path: "/Accommodation", name: "Accommodation" },
    { path: "/experience", name: "Experience" },
    { path: "/AboutUs", name: "About" },
  ];
  const sectiontwo = [
    { path: "/Conferences", name: "Conference" },
    { path: "/Gallery", name: "Gallery" },
    { path: "/ContactUs", name: "Contact" },
  ];
  const [scrollBackground, setScrollBackground] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollBackground(true);
      } else {
        setScrollBackground(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div >
      <div >
      <div className={`webmenu flex items-center justify-center ${scrollBackground ? "webcolor" : " "}`} id="67588489">
        <div className="container mx-auto webwidth flex items-center">
        <div className="nav-left gap-16">
           {sectionone.map((page) => (
              <Link key={page.path} href={page.path}>
                <p className={router.pathname === page.path ? "active" : ""}>
                  {page.name}
                </p>
              </Link>
            ))}
        </div>
        <div className="nav-logo">
          <Link href="/">
            <Image
              src="/Images/Common/Logob.png"
              width={0}
              height={0}
              sizes="100vw"
              alt=""
            />
          </Link>
        </div>
        <div className="nav-right gap-16 flex justify-end">
          {sectiontwo.map((page) => (
              <Link key={page.path} href={page.path}>
                <p className={router.pathname === page.path ? "active" : ""}>
                  {page.name}
                </p>
              </Link>
            ))}
        </div>
        <Link href="https://serendibhotels.mw/">
          <Image
                src="/Images/home/home.png"
                width={0}
                height={0}
                sizes="100vw"
                className="home"
                alt="home"
              />
               </Link>
               </div>
      </div>
      </div>
      <MobileHeader/>
    </div>
  );
}