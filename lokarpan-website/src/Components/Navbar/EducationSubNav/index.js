import { BsChevronDown } from "react-icons/bs";
import React, { useState, useRef } from "react";
import "./index.css";
import { Link } from "react-router-dom";

const EducationSubNav = () => {
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
    // setNavmenuOpen(false);
    timeoutRef.current = setTimeout(() => {
      setNavmenuOpen(false);
    }, 500);
  };

  return (
    <nav className="SecNavbar">
      <div className="navbar-logo">
        <Link to="/education" className="link-edu">
          Education
        </Link>
      </div>
      <div className="navbar-rest">
        <ul className="navbar-links">
          <li className="navbar-item desktop-only">
            <Link to="/approach">Approach</Link>
          </li>
          <li className="navbar-item desktop-only">
            <Link to="/digital-tool">Digital Tools</Link>
          </li>
          <li
            className="navbar-item dropdown education"
            onClick={toggleNavmenu}
            onMouseLeave={closeBrowseMenu}
          >
            <p>
              {/* <p onClick={toggleNavmenu}> */}
              <span className="desktop-only">Browse All</span>
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
                  <h1 className="sub-heading-edu">Explore Education</h1>
                  <ul className="edu-subnav-list">
                    <li>
                      <Link to="/approach">Approach</Link>
                    </li>
                    <li>
                      <Link to="/digital-tool">Digital Tools</Link>
                    </li>
                    <li>
                      <Link to="/application">Application</Link>
                    </li>
                    <li>
                      <Link to="/podcasts">Podcast</Link>
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

export default EducationSubNav;
