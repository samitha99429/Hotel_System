import React from "react";

export default function SubHero({ bgimage, title }) {
  return (
    <div className="subHero" style={{ backgroundImage: `url(${bgimage})` }}>
      <div className="container mx-auto">
        <div dangerouslySetInnerHTML={{ __html: title }} className="title" />
      </div>
    </div>
  );
}
