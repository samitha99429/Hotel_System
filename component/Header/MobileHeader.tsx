
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../../public/SCSS/mobileMenu.module.scss";
import SimpleSlider from "./MobileMenuSlider";

export default function MobileHeader() {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  const router = useRouter();

  const sectionone = [
    { path: "/Accommodation", name: "Accommodation" },
    { path: "/experience", name: "Experience" },
    { path: "/AboutUs", name: "About" },
    { path: "/Conferences", name: "Conference" },
    { path: "/Gallery", name: "Gallery" },
    { path: "/ContactUs", name: "Contact Us" },
  ];

  const sectiontwo = [{ path: "/serendip", name: "Serendip Home" }];

  const sectionthree = [];


  const [scrollBackground, setScrollBackground] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 0) {
  //       setScrollBackground(true);
  //     } else {
  //       setScrollBackground(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const [isHeaderFixed, setHeaderFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHeaderFixed(true);
      } else {
        setHeaderFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="234661">
      <div className={`${styles.mobileheader} ${isHeaderFixed ? styles.fixedHeader:""}`}>
        <div className={`${styles.mobileMenu} ${scrollBackground ? "mobilehead" :" "} `}>
          <div className={styles.menubar} >
            <button onClick={handleClick}>
              {toggle ? (
                <Image className={styles.closeIcon}
                  src="/Images/Common/closeicon.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="close"
                />
              ) : (
                <Image className={styles.menuIcon}
                  src="/Images/Common/menuicon.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="menu"
                />
              )}
            </button>
            <div className={styles.mobileImg}>
              <Link href="/">
                <Image className={styles.logoImage}
                  src="/Images/Common/Logob.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="logo"
                />
              </Link>
            </div>
          </div>

          <div className={styles.buttonContainer}>
            <button className={styles.buttonLeft}>BOOK NOW</button>
          </div>
        </div>

        <div
          className={`${styles.menuSection} mobile-link text-center pt-10 pb-4`}
          style={{ display: toggle ? "block" : "none" }}
        >
          {sectionone.map((page) => (
            <Link key={page.path} href={page.path}>
              <p className={router.pathname === page.path ? "active" :""}>
                {page.name}
              </p>
            </Link>
          ))}
        </div>

        <div
          className={`${styles.menuSection2} mobile-link text-center pt-10 pb-16`}
          style={{ display: toggle ? "block" : "none" }}
        >
          {sectiontwo.map((page) => (
            <Link key={page.path} href={page.path}>
              <p className={router.pathname === page.path ? "active" : ""}>
                {page.name}
              </p>
            </Link>
          ))}
          <div className={styles.lastsection}>
            <SimpleSlider />
          </div>
        </div>
      </div>
    </div>
    
  );
}
