import React from "react";
import Link from "next/link";

export default function Hotelintro() {
  return (
    <div className="container mx-auto">
      <div className="grid md:grid-cols-12 gap-4 section-one flex items-center">
        <div className="md:col-span-7  title">
               <h1 className="trop">A Tropical</h1>
               <h1 className="get">Getaway</h1>
        </div>
        <div className="md:col-span-5 ">
               <h5>Located at the heart of Senga Bay, Bluewaters hotel is truly a tropical paradise.</h5>

               <p>This hotel is situated on the shores of Lake Malawi, offering breathtaking views of the lake
                 and the surrounding mountains. The hotel's location is perfect for guests who wish to explore the local area,
                  with Senga Bay being one of the most popular spots on the lake for swimming, fishing and boat trips.</p>
              <Link href="/AboutUs">
              <button>View More</button>
              </Link>
        </div>
      </div>
    </div>
  );
}
