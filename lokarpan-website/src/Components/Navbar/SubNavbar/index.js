import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import React, { useState, useRef } from "react";
import "./index.css";
import "./../Navbar.css";

const SubNavbar = () => {
  const [isNavmenuOpen, setNavmenuOpen] = useState(null);
  const timeoutRef = useRef(null);

  const toggleNavmenu = () => {
    if (isNavmenuOpen) {
      setNavmenuOpen(false);
    } else {
      clearTimeout(timeoutRef.current);
      setNavmenuOpen(true);
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
        <Link to="/about" className="link">
          About
        </Link>
      </div>
      <div className="navbar-rest">
        <ul className="navbar-links">
          <li className="navbar-item desktop">
            <Link to="/about">Our Role</Link>
          </li>
          <li className="navbar-item desktop">
            <Link to="/history">History</Link>
          </li>
          <li
            className="navbar-item dropdown"
            onClick={toggleNavmenu}
            onMouseLeave={closeBrowseMenu}
          >
            <p>
              <span className="desktop">Browse All</span>
              <BsChevronDown
                className={`react-icon arrow-down ${
                  isNavmenuOpen ? "arrow-rotate" : ""
                }`}
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
                  <h1 className="sub-heading">Explore About</h1>
                  <ul className="subnav-ul">
                    <li>
                      <Link to="/our-role">Our Role</Link>
                    </li>
                    <li>
                      <Link to="/history">History</Link>
                    </li>
                    <li>
                      <Link to="/mission">Mission</Link>
                    </li>
                    <li>
                      <Link to="/leadership">Leadership</Link>
                    </li>
                    <li>
                      <Link to="/career">Careers</Link>
                    </li>
                    <li>
                      <Link to="/financials">Financials</Link>
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
