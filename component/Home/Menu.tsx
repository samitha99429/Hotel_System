import React from 'react'

export default function Menu({item, isActive ,handleItemClick, index} : any) {

    const handleCLick = () => {
        handleItemClick(index);
      };
  return (
    <div>
      <button style={{ color: isActive ? "#01776F" : "#2E2E2E",}} type="button" className="btn"  onClick={handleCLick}>
                {item.title}
              </button>
    </div>
  )
}
