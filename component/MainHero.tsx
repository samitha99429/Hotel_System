import React, { useEffect, useState } from "react";
import Form from "./common/Check-in-out";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {

  const [play, setplay] = useState(true);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="hero ">
      <div className="hero-video ">
      <div className="gradient"></div>
        <video
          src="../Video/Main.mp4"
          autoPlay={play}
          muted
          loop
          className="video"
          title="Hero video"
        />
      </div>

      <div className="hero-content  flex items-center justify-center">
        <div>
          <div className="title">
            <div className="content">
              <div data-aos="fade-right" data-aos-duration="2000">
                <h2>Lakefront</h2>
              </div>
              <div data-aos="fade-left" data-aos-duration="2000">
                <h1>Bliss</h1>
              </div>
            </div>
          </div>
          <div className="hero-book">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}
