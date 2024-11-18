import React from "react";
import Link from "next/link";

export default function ContactUsForm() {
  return (
    <div className="container mx-auto">
      <div className="grid md:grid-cols-12 sm:grid-cols-6 gap-4 contactus md:pt-20 pt-6">
        <div className="md:col-span-7 sm:col-span-6">
          <h2>Leave a</h2>
          <h1>Message</h1>

          <div>
            <div className="form-box">
              <label>What’s your name?</label>
              <input type="text" placeholder="Type your name" />
            </div>
            <div className="form-box">
              <label>What’s your email address?</label>
              <input type="text" placeholder="Type your email address" />
            </div>
            <div className="form-box">
              <label>What can we help you with ?</label>
              <textarea placeholder="Type your Message" />
            </div>
          </div>

          <div className="btn flex justify-center">
            <button>SEND MESSAGE</button>
          </div>
        </div>
        <div className="md:col-span-5 sm:col-span-6 flex justify-center items-center">
          <div className="box">
            <p className="title">Want to reach out ?</p>
            <p className="para">
              Don't hesitate to contact us for any inquiries or assistance! Our
              dedicated team is always ready to answer any questions you might
              have!
            </p>

            <div className="content">
              <div className="">
                <p className="name">Phone</p>
                <p className="name">Whatsapp</p>
                <p className="name">Email</p>
                <p className="name">Skype</p>
              </div>
              <div className="contact-details">
              <Link href="tel:+265 996 999 922">
                <p className="py-2">+265 996 999 922/33/44</p>
                </Link>
                <Link href="whatsapp:+265996999922">
                <p className="py-2">+265996999922/33</p>
                </Link>
                <Link href="mailto:bluewaters@globemw.net">
                <p className="py-2">bluewaters@globemw.net</p>
                </Link>
                <Link href="skype:serendibhotel">
                <p className="py-2">serendibhotel</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
