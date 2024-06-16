import { BsChevronDown } from "react-icons/bs";
import React, { useState, useRef } from "react";
import "./index.css";
import { Link } from "react-router-dom";

const KithLifeAtSchoolSubNavbar = () => {
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
      <div className="navbar-logo">
        <Link to="/kith/life-at-school" className="link">
          Life At School
        </Link>
      </div>
      <ul className="navbar-links">
        <li
          className="navbar-item sup-nav-browse dropdown"
          onMouseLeave={closeBrowseMenu}
          onClick={toggleNavmenu}
        >
          <p className="desktop-only">
            <span>Browse All</span>
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
                <ul className="support-subnav-list">
                  <h1 className="sub-heading">Explore Life At School</h1>
                  <li>
                      <Link to="/kith/life-at-school">Explore</Link>
                    </li>
                  <li>
                    <Link to="/kith/campus-and-culture">Campus & Culture</Link>
                  </li>
                  <li>
                    <Link to="/kith/club-and-commitee">Committee & Club</Link>
                  </li>
                  <li>
                    <Link to="/kith/safety-and-wellbeing">
                      Safety & WellBeing
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      <div className="mobile-view-dropdown" onClick={toggleNavmenu}>
        <p>
        <BsChevronDown 
              className={`react-icon arrow-down ${isNavmenuOpen ? "arrow-rotate" : ""}`} 
            />
        </p>
      </div>
        <li className="navbar-item apply-btn orange">
          <Link to="/donate" className="apply-btn-text-white navbar-btn">
            Donate
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default KithLifeAtSchoolSubNavbar;
