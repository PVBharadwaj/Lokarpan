import { BsChevronDown } from "react-icons/bs";
import "./FinancialNav.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const FinancialNav = (props) => {
  const [isNavmenuOpen, setNavmenuOpen] = useState(null);
  const toggleNavmenu = () => {
    setNavmenuOpen(!isNavmenuOpen);
  };
  return (
    <nav className="SecNavbar">
      <div className="navbar-logo">{props.navbarTitle}</div>
      <div className="mobile-view-dropdown" onClick={toggleNavmenu}>
        <p>
        <BsChevronDown 
              className={`react-icon arrow-down ${isNavmenuOpen ? "arrow-rotate" : ""}`} 
            />
        </p>
      </div>
      <ul className={` navbar-links mobile-navbar-links ${isNavmenuOpen ? "active" : ""}`}>
        <li className="navbar-item">
          <Link to={`${props.link1}`}>{props.navitem1}</Link>
        </li>
        <li className="navbar-item">
          <Link to={`${props.link2}`}>{props.navitem2}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default FinancialNav;
