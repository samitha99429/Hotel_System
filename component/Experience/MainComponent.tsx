import React from "react";
import Image from 'next/image'

export default function MainComponent(props: any) {
  const { Data } = props;

  return (
    <div>
      <div className="container mx-auto main-component ">
        {Data.Content.map((content: any, i: any) => {
          return (
            <div className="main-row items-center con-direct " key={i}>
              <div className="col-one">
                <Image src={content.img} width={0} height={0} sizes="100vw" alt="experience image" />
              </div>
              <div className="col-two  main-content">
                <h2 className="pt-4">{content.titleone}</h2>
                <h1>{content.titletwo}</h1>

                <p className="title">{content.paraone} </p>

                <p className="para">{content.paratwo}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
