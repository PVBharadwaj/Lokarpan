import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SecondaryNav.css";
import { BsChevronDown } from "react-icons/bs";

const SecondaryNav = () => {
  const [isNavmenuOpen, setNavmenuOpen] = useState(null);
  const toggleNavmenu = () => {
    setNavmenuOpen(!isNavmenuOpen);
  };
  return (
    <nav className="SecNavbar leadership-nav">
      <div className="navbar-logo">
        <Link className="navbar-mainlink" to="/leadership">Leadership</Link>
      </div>
      <ul className="navbar-links lead-mobile-navbar-links">
        <div className="mobile-view-dropdown" onClick={toggleNavmenu}>
          <p>
          <BsChevronDown 
              className={`react-icon arrow-down ${isNavmenuOpen ? "arrow-rotate" : ""}`} 
          />
          </p>
        </div>
        <li>
          <ul className={`mobile-navbar-links lead-sec-nav ${isNavmenuOpen ? "active" : ""}`}>
            <li className="navbar-item">
              <Link to="/board">Board</Link>
            </li>
            <li className="navbar-item">
              <Link to="/staff">Staff</Link>
            </li>
            <li className="navbar-item">
              <Link to="/educators">Educators</Link>
            </li>
            <li className="navbar-item">
              <Link to="/fellows">Fellows</Link>
            </li>
          </ul>
        
        </li>
        
        <li className="navbar-item apply-btn blue">
              <Link to="/donate" className="apply-btn-text-white navbar-btn">Apply</Link>
          </li>
      </ul>
    </nav>
  );
};

export default SecondaryNav;
