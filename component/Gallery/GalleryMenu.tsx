import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function GalleryMenu({item, isActive ,handleItemClick, index} : any) {
  
    const handleCLick = () => {
        handleItemClick(index);
      };
  
    return (
    <div>
          
              <button style={{ color: isActive ? "#014951" : "rgba(51, 79, 114, 0.6)", borderBottom : isActive ? "2px solid #014951" : "none"}} type="button" className="btn"  onClick={handleCLick}>
                {item.title}
              </button>
           
    </div>
  )
}
