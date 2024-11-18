import React from "react";
import Form from "../common/Check-in-out";

export default function Lastsection({title}: any) {
  return (
    <div className="nature flex items-center justify-center">
      <div>
        <div className="nature-title">
          <h1>{title}</h1>
        </div>

        <Form />
      </div>
    </div>
  );
}
