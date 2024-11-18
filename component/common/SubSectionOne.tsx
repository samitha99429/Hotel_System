import React from "react";

export default function SubSectionOne({
  titleone,
  titletwo,
  titlepara,
}: {
  titleone: String;
  titletwo: String;
  titlepara: String;
}) {
  return (
    <div className="container mx-auto">
      <div className="grid md:grid-cols-12 gap-4 subsectionone flex items-center">
        <div className="md:col-span-7 ">
          <h2>{titleone}</h2>
          <h1>{titletwo}</h1>
        </div>
        <div className="md:col-span-5 ">
          <p>{titlepara}</p>
        </div>
      </div>
    </div>
  );
}
