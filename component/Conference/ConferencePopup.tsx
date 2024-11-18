import React from "react";

export default function ConferencePopup({ click }: { click: () => void }) {
  return (
    <div>
      <div className="flex justify-center">
        <div className="Conference-details">
          <div className="detail-box">
            <img
              className="main-img"
              src="../Images/Conference/conf.png"
              alt=""
            />
            <div className="close-section absolute md:top-8 md:right-10">
              <button onClick={click}>
                <img
                  className="close "
                  src="../Images/Conference/closef.png"
                  alt=""
                />
              </button>
            </div>
            <div>
              <p className="main-topic">Theatre Style Conference Hall</p>
              <div className="flex justify-center">
                <p className="desc">
                  Interconnecting rooms, En-suite bathroom & shower, Mini-bar
                  fridge, Controlled AC, LCD flat screen & Satellite TV,
                  Toiletries, Tea/coffee making facility, Bath towels,
                </p>
              </div>
              <h3>Max Capacity: 100 Guests</h3>

              <div className="flex justify-center">
                <button className="book">BOOK NOW</button>
              </div>
              <p className="apply">T&C Apply</p>
            </div>
          </div>
        </div>
        <div className="gradient"></div>
      </div>
    </div>
  );
}
