import React from "react";
import Image from "next/image";

export default function Features() {
  return (
    <div className="container mx-auto" id="082456">
      <div className="grid md:grid-cols-12 section-three flex items-center">
        <div className="lg:col-span-6 md:col-span-12 ">
          <h1 className="exci">A Lakefront</h1>
          <h1 className="await">Twist</h1>

          <p className="mainp">
          A place to savor the simple pleasures of life - but with a little tropical and serene lakefront twist. Embrace the beauty and peacefulness as you enjoy a truly rejuvenating escape in the backdrop of a tropical paradise, slowly morphing into the perfect place you can imagine yourself relaxing in.
          </p>
        </div>
        <div className="lg:col-span-6 md:col-span-12 max-sm:pt-10">
          <div className="grid md:grid-cols-12 sm:grid-cols-12 gap-4">
            <div className="md:col-span-6 sm:col-span-3 sub-section sm:pt-8 md:pt-0">
              <Image
                src="/Images/home/TW1.png"
                width={0}
                height={0}
                sizes="100vw"
                alt="feature"
              />
              <h3>LakeFront Bar</h3>
              <p>
                Sip and relax, where stunning views and refreshing drinks await.
                Cheers to good times by the lake!
              </p>
            </div>
            <div className="md:col-span-6 sm:col-span-3 sub-section">
              <Image
                src="/Images/home/TW2.png"
                width={0}
                height={0}
                sizes="100vw"
                alt="feature"
              />
              <h3>Aquatic Adventures</h3>
              <p>
                Enjoy a multitude of water sports from kayaking, water cycling
                to boat trips to Namalenje island!
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-4">
            <div className="md:col-span-6 sub-section">
              <Image
                src="/Images/home/TW3.png"
                width={0}
                height={0}
                sizes="100vw"
                alt="feature"
              />
              <h3>Gorgeous Getaways</h3>
              <p>
                Visit the beautiful fishing village and the crocodile farm to
                get a taste of authentic Malawi life.
              </p>
            </div>
            <div className="md:col-span-6 sub-section">
              <Image
                src="/Images/home/TW4.png"
                width={0}
                height={0}
                sizes="100vw"
                alt="feature"
              />
              <h3>Corporate Events</h3>
              <p>
                Professional meetings spaces to accommodate up to 200 delegates
                with modern amenities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
