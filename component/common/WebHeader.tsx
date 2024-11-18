import React from "react";
import { Link } from "react-router-dom";

interface WebHeaderProps {
  // add any props specific to web header
}

const WebHeader: React.FC<WebHeaderProps> = (props) => {
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

export default WebHeader;