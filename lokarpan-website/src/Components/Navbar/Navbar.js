import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import items from "./Navsearch.json";
import { FiSearch } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import Fuse from "fuse.js";

const fuseOptions = {
  keys: [
    "name",
    "position",
    "description",
    "navitem",
    "subnavitems",
    "subnavlistitem",
  ],
  includeScore: true,
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeMainDropdown, setActiveMainDropdown] = useState(null);
  // const [activeIconDropdown, setActiveIconDropdown] = useState(null);
  const [isSearchmenuOpen, setSearchmenuOpen] = useState(false);
  const [isProfilemenuOpen, setProfilemenuOpen] = useState(false);
  const [queryText, setqueryText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchState, setSearchLength] = useState(false);
  const timeoutRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);

  const [popupVisible, setPopup] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event) => {
      const activeElement = document.activeElement;
      const InputText = document.getElementsByClassName("text-input");
      const TextInput = Array.from(InputText);
      const activeElementNotInArray = !TextInput.some(
        (element) => element === activeElement
      );

      if (activeElementNotInArray) {
        if (event.key === "s" || event.key === "S") {
          setPopup(true);
        } else if (event.which == 27) {
          setPopup(false);
        }
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      setSearchmenuOpen(false);
      setProfilemenuOpen(false);
    }
  });

  useEffect(() => {
    console.log("1");
    if (isMenuOpen) {
      document.body.classList.add("body-no-scroll");
    } else {
      document.body.classList.remove("body-no-scroll");
    }
  }, [isMenuOpen]);

  useEffect(() => {
    console.log("2");
    const menunavbar = document.getElementById("navbar-mainmenu");
    if (activeDropdown) {
      console.log("dropdown-active");
      menunavbar.classList.add("body-no-scroll");
    } else {
      menunavbar.classList.remove("body-no-scroll");
    }
  }, [activeDropdown]);

  const handleSubscribeClick = () => {
    setPopupVisible(true); // Set popup visibility to true when the "Subscribe" link is clicked
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (isMenuOpen) {
  //       document.body.classList.add("body-no-scroll");
  //     } else {
  //       document.body.classList.remove("body-no-scroll");
  //     }
  //   };

  //   // Add event listener for scrolling
  //   window.addEventListener("scroll", handleScroll);

  //   // Clean up the event listener
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [isMenuOpen]);

  // useEffect(() => {
  //   const menunavbar = document.getElementById("navbar-mainmenu");

  //   const handleScroll = () => {
  //     if (activeDropdown) {
  //       menunavbar.classList.add("body-no-scroll");
  //     } else {
  //       menunavbar.classList.remove("body-no-scroll");
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);

  //   // Clean up the event listener
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // });

  useEffect(() => {
    console.log("3");
    if (window.innerWidth <= 922) {
      if (isSearchmenuOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }
  }, [isSearchmenuOpen]);

  useEffect(() => {
    console.log("4");
    const scrolldiv = document.getElementsByClassName("navbar-menu");

    const handleScroll = () => {
      if (scrolldiv.length > 0) {
        setScrollPosition(scrolldiv[0].scrollTop);
        console.log(scrolldiv[0].scrollTop);
      }
    };

    if (scrolldiv.length > 0) {
      scrolldiv[0].addEventListener("scroll", handleScroll);

      return () => {
        scrolldiv[0].removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const ToggleSearchmenu = () => {
    if (isSearchmenuOpen) {
      setSearchmenuOpen(false);
    } else {
      clearTimeout(timeoutRef.current);
      setSearchmenuOpen(true);
      setqueryText("");
    }
  };

  const OpenSearchmenu = () => {
    clearTimeout(timeoutRef.current);
    setSearchmenuOpen(true);
    // setqueryText("");
  };

  const closeSearchMenu = () => {
    timeoutRef.current = setTimeout(() => {
      setSearchmenuOpen(false);
    }, 500);
  };

  const ToggleProfilemenu = () => {
    if (isProfilemenuOpen) {
      setProfilemenuOpen(false);
    } else {
      clearTimeout(timeoutRef.current);
      setProfilemenuOpen(true);
    }
  };

  const OpenProfilemenu = () => {
    clearTimeout(timeoutRef.current);
    setProfilemenuOpen(true);
  };

  const closeProfileMenu = () => {
    timeoutRef.current = setTimeout(() => {
      setProfilemenuOpen(false);
    }, 500);
  };

  const toggleMenu = () => {
    setActiveDropdown(null);
    setIsMenuOpen(!isMenuOpen);
    setIsActive(!isActive);
  };

  // const toggleMenu = (e) => {
  //   // Check if the clicked link is the "Home" or "Health" link
  //   console.log(e.target.getAttribute("to"));
  //   const isExcludedLink = [
  //     "",
  //     "/health",
  //     "/environment",
  //     "/livelihood",
  //     "/fellowship",
  //   ].includes(e.target.getAttribute("to"));
  //   if (isExcludedLink) {
  //     return; // Don't toggle the menu if it's the "Home" or "Health" link
  //   }

  //   setActiveDropdown(null);
  //   setIsMenuOpen(!isMenuOpen);
  //   setIsActive(!isActive);
  // };

  // const toggleMenu = (e) => {
  //   // Get the path of the clicked link
  //   const path = e.target.closest(Link)?.pathname || "/";

  //   // If the clicked link's path is either "/" or "/health", return early
  //   if (["/", "/health"].includes(path)) {
  //     return;
  //   }

  //   setActiveDropdown(null);
  //   setIsMenuOpen(!isMenuOpen);
  //   setIsActive(!isActive);
  // };

  const handleNavlinkClick = (e) => {
    if (window.innerWidth <= 922) {
      e.preventDefault();
      // toggleDropdown();
    }
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleBackClick = () => {
    setActiveDropdown(null);
  };

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setqueryText(value);

    const fuse = new Fuse(items, fuseOptions);
    const results = fuse.search(value);
    if (results.length > 0) {
      setSearchLength(true);
    }
    setSearchResults(results);
  };

  const openmaindropdown = (dropdownId) => {
    setActiveMainDropdown(dropdownId);
    var dropdownHeight = document.getElementById("navbar-bg-layer");
    if (dropdownHeight) {
      if (dropdownId === "aboutDropdown") {
        dropdownHeight.style.height = "340px";
      } else if (dropdownId === "eduDropdown") {
        dropdownHeight.style.height = "280px";
      } else if (dropdownId === "designDropdown") {
        dropdownHeight.style.height = "235px";
      } else {
        dropdownHeight.style.height = "320px";
      }
    }
  };
  const closemaindropdown = () => {
    setActiveMainDropdown(null);
    var dropdownHeight = document.getElementById("navbar-bg-layer");
    dropdownHeight.style.height = "0px";
  };

  return (
    <nav className="global-nav">
      <div className="navbar">
        <div className="navbar-logo">
          <img
            src="https://res.cloudinary.com/digbzwlfx/image/upload/v1707625023/Frame_48098098_rag4wi.svg"
            className="lokarpan-logo"
          />
        </div>
        <div class="back" onClick={handleBackClick}>
          <IoIosArrowBack
            style={{ fontSize: "20px" }}
            className={activeDropdown !== null ? "down active" : "down"}
          />
        </div>
        <div id="navbar-bg-layer"></div>
        <ul
          id="navbar-mainmenu"
          className={`navbar-links navbar-menu ${isMenuOpen ? "active" : ""}`}
        >
          <li className="navbar-item mobile-padding-left mobile-padding-top">
            <Link to="/">Home</Link>
          </li>
          <li
            className="navbar-item mobile-padding-left dropdown"
            onClick={toggleDropdown}
            onMouseOver={() => openmaindropdown("aboutDropdown")}
            onMouseOut={closemaindropdown}
          >
            <Link to="/about" onClick={handleNavlinkClick}>
              About
            </Link>
            <div
              className={`dropdown-content ${
                activeDropdown !== null ? "active" : ""
              } ${
                activeMainDropdown === "aboutDropdown" ? "desktopactive" : ""
              }`}
            >
              <div className="dropdown-content-inner">
                <div className="dropdown-container">
                  <h1 className="nav-heading">Explore About</h1>

                  <ul className="list-item-container">
                    <li className="mobile-explore">
                      <Link
                        to="/about"
                        onClick={(e) => {
                          toggleMenu(e);
                        }}
                      >
                        Explore About
                      </Link>
                    </li>
                    <li>
                      <Link to="/about">Our Role</Link>
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
                <div className="dropdown-container">
                  <h1 className="quicklinks-heading">Quick Links</h1>
                  <ul className="quick-links">
                    {/* <li>
                      <Link to="/alumni">Alumni</Link>
                    </li> */}
                    <li>
                      <Link to="/contact-us">Contact</Link>
                    </li>
                    <li>
                      <a href="https://medium.com/lokarpan" target="_blank">
                        Blog
                      </a>
                    </li>
                    <li
                      className="quicklinks-subscribe-text"
                      onClick={() => {
                        setPopup(true);
                      }}
                    >
                      {/* <Link to="/leadership"> */}
                      {/*  need to update to in Link  */}
                      Subscribe
                      {/* </Link> */}
                    </li>
                    {popupVisible && (
                      <div className="popup-on">
                        <div className="popup-back"></div>
                        <div className="popup-in">
                          <div className="pop">
                            <h2>Get updates from Lokarpan.</h2>
                          </div>
                          <RxCross2
                            onClick={() => {
                              setPopup(false);
                            }}
                            className="x"
                          />
                          <div className="popup-text">
                            <p>
                              Join our vibrant community of engaged readers as
                              we deliver the latest updates, success stories,
                              and transformative initiatives aimed at empowering
                              rural education.
                            </p>
                            <form action="">
                              <input type="text" placeholder="Email address" />
                              <button type="submit">Subscribe</button>
                            </form>
                          </div>
                        </div>
                      </div>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li
            className="navbar-item mobile-padding-left dropdown"
            onClick={toggleDropdown}
            onMouseOver={() => openmaindropdown("eduDropdown")}
            onMouseOut={closemaindropdown}
          >
            <Link to="/approach" onClick={handleNavlinkClick}>
              Education
            </Link>
            <div
              className={`dropdown-content ${
                activeDropdown !== null ? "active" : ""
              } ${activeMainDropdown === "eduDropdown" ? "desktopactive" : ""}`}
            >
              <div className="dropdown-content-inner">
                <div className="dropdown-container">
                  <h1 className="nav-heading">Explore Education</h1>
                  <ul className="list-item-container">
                    <li className="mobile-explore">
                      <Link
                        to="/approach"
                        onClick={(e) => {
                          toggleMenu(e);
                        }}
                      >
                        Explore Education
                      </Link>
                    </li>
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
                <div className="dropdown-container">
                  <h1 className="quicklinks-heading">Quick Links</h1>
                  <ul className="quick-links">
                    <li>
                      <Link to="/impact">Impact</Link>
                    </li>
                    <li>
                      <Link to="/moonshots">Moonshots</Link>
                    </li>
                    <li>
                      <Link to="/being-a-volunteer">
                        {/*  need to update to in Link  */}
                        Volunteer
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="navbar-item mobile-padding-left">
            <Link to="/fellowship">Fellowship</Link>
          </li>
          <li className="navbar-item mobile-padding-left">
            <Link
              to="/kith/overview"
              onClick={(e) => {
                toggleMenu(e);
              }}
            >
              Kith
            </Link>
          </li>
          <li
            className="navbar-item mobile-padding-left dropdown"
            onClick={toggleDropdown}
            onMouseOver={() => openmaindropdown("designDropdown")}
            onMouseOut={closemaindropdown}
          >
            <Link to="/design" onClick={handleNavlinkClick}>
              Design
            </Link>
            <div
              className={`dropdown-content ${
                activeDropdown !== null ? "active" : ""
              } ${
                activeMainDropdown === "designDropdown" ? "desktopactive" : ""
              }`}
              style={{
                top: window.innerWidth <= 922 ? `${scrollPosition}px` : "",
              }}
            >
              <div className="dropdown-content-inner">
                <div className="dropdown-container">
                  <h1 className="nav-heading">Explore Design</h1>
                  <ul className="list-item-container">
                    <li className="mobile-explore">
                      <Link
                        to="/designlist"
                        onClick={(e) => {
                          toggleMenu(e);
                        }}
                      >
                        Explore Design
                      </Link>
                    </li>
                    <li>
                      <Link to="/designlist">Projects</Link>
                    </li>
                    <li>
                      <Link to="/guideline">Design Guidelines</Link>
                    </li>
                    <li>
                      <Link to="/our-role">Resources</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="navbar-item mobile-padding-left">
            <Link to="/health">Health</Link>
          </li>
          <li className="navbar-item mobile-padding-left">
            <Link to="/environment">Environment</Link>
          </li>
          <li className="navbar-item mobile-padding-left">
            <Link to="/livelihood">Livelihood</Link>
          </li>
          <li
            className="navbar-item mobile-padding-left dropdown"
            onClick={toggleDropdown}
            onMouseOver={() => openmaindropdown("supportDropdown")}
            onMouseOut={closemaindropdown}
          >
            <Link to="/ways-to-give" onClick={handleNavlinkClick}>
              Support
            </Link>
            <div
              className={`dropdown-content ${
                activeDropdown !== null ? "active" : ""
              } ${
                activeMainDropdown === "supportDropdown" ? "desktopactive" : ""
              }`}
              style={{
                top: window.innerWidth <= 922 ? `${scrollPosition}px` : "",
              }}
            >
              <div className="dropdown-content-inner">
                <div className="dropdown-container">
                  <h1 className="nav-heading">Explore Donate</h1>
                  <ul className="list-item-container">
                    <li className="mobile-explore">
                      <Link
                        to="/why-donate"
                        onClick={(e) => {
                          toggleMenu(e);
                        }}
                      >
                        Explore Donate
                      </Link>
                    </li>
                    <li>
                      <Link to="/ways-to-give">Ways to Give</Link>
                    </li>
                    <li>
                      <Link to="/being-a-volunteer">Being a Volunteer</Link>
                    </li>
                    <li>
                      <Link to="/our-supporter">Our Supporters</Link>
                    </li>
                    <li>
                      <Link to="/why-donate">Why Donate</Link>
                    </li>
                    <li>
                      <Link to="/donate">Donate Now</Link>
                    </li>
                  </ul>
                </div>
                <div className="dropdown-container">
                  <h1 className="quicklinks-heading">Quick Links</h1>
                  <ul className="quick-links">
                    <li>
                      <Link to="/financials">Financials</Link>
                    </li>
                    <li>
                      <Link to="/fellowship">Apply for Fellowship</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <ul className="navbar-links navbar-icons">
          <li
            className="navbar-item dropdown navbar-icon nav-search"
            onMouseLeave={closeSearchMenu}
          >
            <FiSearch
              style={{ color: "#6B7280", height: "100%" }}
              className="navbar-icon-inner"
              onClick={ToggleSearchmenu}
            />
            <div
              className={`click-dropdown click-dropdown-search  ${
                isSearchmenuOpen ? "active" : ""
              }`}
              onMouseEnter={OpenSearchmenu}
            >
              <div className="click-dropdown-inner search-click-dropdown">
                <div className="nav-searchbar">
                  <RxCross2
                    className="search-cross mobile-only"
                    onClick={closeSearchMenu}
                    style={{ fontSize: "20px" }}
                  />
                  <div className="nav-form">
                    <CiSearch className="react-icon margin0 size-80" />
                    <input
                      className="nav-form-control text-input"
                      type="text"
                      placeholder="Search..."
                      value={queryText}
                      onChange={handleSearchChange}
                      ref={(input) => {
                        if (input) {
                          input.focus();
                        }
                      }}
                    />
                  </div>
                  <div className="search-quick-links">
                    {queryText === "" ? (
                      <div>
                        <h4>Quick Links</h4>
                        <ul className="quick-links">
                          <li>
                            <Link to="/our-role">Our Role</Link>
                          </li>
                          <li>
                            <Link to="/history">History</Link>
                          </li>
                          <li>
                            <Link to="/fellowship">Fellowship</Link>
                          </li>
                          <li>
                            <Link to="/being-a-volunteer">
                              Being a Volunteer
                            </Link>
                          </li>
                          <li>
                            <Link to="/donate">Donate</Link>
                          </li>
                          <li>
                            <Link to="/contact-us">Contact</Link>
                          </li>
                        </ul>
                      </div>
                    ) : searchResults.length === 0 ? (
                      "No results found"
                    ) : (
                      <>
                        <h4>Suggested Links</h4>
                        <ul>
                          {searchResults.map((result) => (
                            <li key={result.item.id}>
                              {result.item.name ? (
                                <a href={result.item.link}>
                                  {result.item.name}
                                </a>
                              ) : (
                                ""
                              )}
                              {result.item.subnavlistitem ? (
                                <a href={result.item.Link}>
                                  {result.item.subnavlistitem}
                                </a>
                              ) : (
                                ""
                              )}
                              {result.item.navitem ? (
                                <a href={result.item.Link}>
                                  {result.item.navitem}
                                </a>
                              ) : (
                                ""
                              )}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            className="navbar-item dropdown navbar-icon nav-search"
            onMouseLeave={closeProfileMenu}
          >
            <IoPersonOutline
              className="navbar-icon-inner"
              style={{ color: "#6B7280", height: "100%" }}
              onClick={ToggleProfilemenu}
            />
            <div
              className={`click-dropdown click-dropdown-search  ${
                isProfilemenuOpen ? "active" : ""
              }`}
              onMouseEnter={OpenProfilemenu}
            >
              <div className="click-dropdown-inner">
                <RxCross2
                  className="icon-cross search-cross mobile-only"
                  onClick={closeProfileMenu}
                  style={{ fontSize: "20px" }}
                />
                <div className="nav-profile">
                  <Link to={"/newsletter"} className="nav-profile-link margin0">
                    Subscribe
                  </Link>
                  <p className="nav-profile-text">My apps</p>
                  <p className="nav-profile-text">
                    <span className=" nav-profile-one">L</span>
                    Lokarpan one
                  </p>

                  <p className="nav-profile-text">
                    <span className="nav-profile-one">L</span>
                    Lokarpan two
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="navbar-item hamburger-item">
            <div
              class={`hamburger cross navbar-icon-inner ${
                isActive ? "active" : ""
              }`}
              onClick={(e) => {
                toggleMenu(e);
              }}
            >
              <span class="bar"></span>
              <span class="bar"></span>
            </div>
            {/* <RxHamburgerMenu
              className="hamburger navbar-icon-inner"
              style={{ color: "#6B7280", height: "100%" }}
              onClick={toggleMenu}
            /> */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
