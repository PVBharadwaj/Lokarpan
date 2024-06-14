import { BsChevronDown } from "react-icons/bs";
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./GiftSubNav.css";

const GiftSubNav = () => {
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
    <nav className="SecNavbar support-nav">
      <div className="navbar-logo">Ways to Give</div>
        <ul className="navbar-links">
          <li 
            className="navbar-item sup-nav-browse dropdown"
            onClick={toggleNavmenu}
            onMouseLeave={closeBrowseMenu}  
          >
            <p>
              <span className="desktop-only">Browse All</span>
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
                  <ul>
                    <h4 className="gift-nav-head">Explore Make a Gift</h4>
                    <li>
                      <Link className="gift-nav-item" to="/why-donate">Annual Fund</Link>
                    </li>
                    <li>
                      <Link className="gift-nav-item" to="/being-a-volunteer">Work of Art</Link>
                    </li>
                    <li>
                      <Link className="gift-nav-item" to="/our-role">Endowment Gifts</Link>
                    </li>
                    <li>
                      <Link className="gift-nav-item" to="/ways-to-give">Planned giving</Link>
                    </li>
                    <li>
                      <Link className="gift-nav-item" to="/donate">Other ways to give</Link>
                    </li>
                    <li>
                      <Link className="gift-nav-item" to="/donate">Expanding Vision</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="navbar-item apply-btn orange">
              <Link to="/donate" className="apply-btn-text-white navbar-btn">Donate</Link>
          </li>
        </ul>
    </nav>
  );
};

export default GiftSubNav;

