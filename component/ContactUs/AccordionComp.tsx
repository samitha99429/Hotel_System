import React, { useState } from "react";

const AccordionComp = ({ item, isActive, handleItemClick, index } : any) => {

  const handleCLick = () => {
    handleItemClick(index);
  };

  return (
    <div className="question-component">
      <div className="row">
          <div className="title">
            <h4>{item.title}</h4>
            <div className=" button-drop float-right">
              <button className="float-right" onClick={handleCLick}>
                {isActive ? "-" : "+"}
              </button>
            </div>
          </div>
          {isActive ? <p>{item.desc}</p> : <></>}
        </div>
    </div>
  );
};

export default AccordionComp;
