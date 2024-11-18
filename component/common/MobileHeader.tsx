import React from "react";
import { Link } from "react-router-dom";

interface MobileHeaderProps {
  // add any props specific to mobile header
}

const MobileHeader: React.FC<MobileHeaderProps> = (props) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/index">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MobileHeader;