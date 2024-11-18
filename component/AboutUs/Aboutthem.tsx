import React from "react";
import Image from 'next/image'
import Link from "next/link";

export default function Aboutthem() {
  return (
    <div className="container mx-auto">
      <div className="grid md:grid-cols-12 gap-4 aboutus pb-16">
        <div className="md:col-span-6 sm:col-span-6 flex items-center">
          <Image src="/Images/About/ab.webp" width={0} height={0} sizes="100vw" alt="about image" />
        </div>
        <div className="md:col-span-6 sm:col-span-6 flex items-center">
          <div>
            <h2>Hint of</h2>
            <h1>Tropic</h1>

            <p className="title">
              We know how stressful business trips can be, so we just wanted to
              incorporate a little bit of tranquility into your stay
            </p>

            <p className="para">
              Located at the heart of Senga Bay, Bluewaters hotel is truly a
              tropical paradise. This hotel is situated on the shores of Lake
              Malawi, offering breathtaking views of the lake and the
              surrounding mountains. The hotel's location is perfect for guests
              who wish to explore the local area.
            </p>
            <Link href="https://serendibhotels.mw/">
            <button>About Serendib</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
