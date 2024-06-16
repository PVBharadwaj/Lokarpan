import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import React, { useState, useRef } from "react";
import "./index.css";
import "../.././Navbar/Navbar.css";

const SubNavbar = () => {
  const [isNavmenuOpen, setNavmenuOpen] = useState(null);
  const timeoutRef = useRef(null);

  const toggleNavmenu = () => {
    if(isNavmenuOpen) {
      setNavmenuOpen(false)
    } else {
      clearTimeout(timeoutRef.current);
      setNavmenuOpen(true)
    }
  };

  const OpenNavmenu = () => {
    clearTimeout(timeoutRef.current);
    setNavmenuOpen(true);
  };

  const closeBrowseMenu = () => {
    timeoutRef.current = setTimeout(() => {
      setNavmenuOpen(false);
    }, 500); 
  };

  return (
    <nav className="SecNavbar">
      <div className="navbar-logo">
        <Link to="/design" className="link">
          Design
        </Link>
      </div>
      <div className="navbar-rest">
        <ul className="navbar-links">
          <li className="navbar-item desktop">
            <Link to="/designlist">Projects</Link>
          </li>
          <li className="navbar-item desktop">
            <Link to="/guideline">Design Guidelines</Link>
          </li>
          <li className="navbar-item dropdown" onClick={toggleNavmenu} onMouseLeave={closeBrowseMenu}>
            <p>
              <span className="desktop">Browse All</span>
              <BsChevronDown 
                className={`react-icon arrow-down ${isNavmenuOpen ? "arrow-rotate" : ""}`} 
              />
            </p>
            <div
              className={` navbar-links click-dropdown ${
                isNavmenuOpen ? "active" : ""
              }`}
              onMouseEnter={OpenNavmenu}
            >
              <div className="click-dropdown-inner">
                <div className="dropdown-container">
                  <h1 className="sub-heading">Explore Design</h1>
                  <ul className="subnav-ul">
                    <li>
                      <Link to="/design">Overview</Link>
                    </li>
                    <li>
                      <Link to="/designlist">Projects</Link>
                    </li>
                    <li>
                      <Link to="/guideline">Design Guidelines</Link>
                    </li>
                    <li>
                      <Link to="/resources">Resources</Link>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SubNavbar;
