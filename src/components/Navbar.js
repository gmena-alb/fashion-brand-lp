import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  // This for make the height responsive
  //const linksContainerRef = useRef(null);
  //const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className="navbar">
      <button className="navbar-toggle" onClick={toggleLinks}>
        <FaBars />
      </button>
      <h2>RINA TURNNER</h2>
      <div className="navbar-container">
        <ul>
          <li>
            <a href="#fashion-section">fashion</a>
          </li>
          <li>
            <a href="#process-section">what we do</a>
          </li>
          <li>
            <a href="#">dressmakers</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
