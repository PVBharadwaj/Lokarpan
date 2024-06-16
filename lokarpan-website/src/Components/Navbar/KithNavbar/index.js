import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { CiSearch } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { IoExitOutline } from "react-icons/io5";
import Fuse from "fuse.js";
import items from "../Navsearch.json";

// const items = [
//   {
//     id: 1,
//     link: "/staff",
//     img: "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png",
//     name: "Dummy",
//     position: "Classroom Educator",
//     description:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio",
//     hyperlink1: <i class="bi bi-facebook"></i>,
//     hyperlink2: <i class="bi bi-house-door"></i>,
//   },
//   {
//     id: 2,
//     link: "/staff",
//     img: "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png",
//     name: "test",
//     position: "Classroom Educator",
//     description:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio",
//     hyperlink1: <i class="bi bi-facebook"></i>,
//     hyperlink2: <i class="bi bi-house-door"></i>,
//   },
//   {
//     id: 3,
//     link: "/staff",
//     img: "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png",
//     name: "example",
//     position: "Classroom Educator",
//     description:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio",
//     hyperlink1: <i class="bi bi-facebook"></i>,
//     hyperlink2: <i class="bi bi-house-door"></i>,
//   },
//   {
//     id: 4,
//     link: "/staff",
//     img: "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png",
//     name: "person",
//     position: "Classroom Educator",
//     description:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio",
//     hyperlink1: <i class="bi bi-facebook"></i>,
//     hyperlink2: <i class="bi bi-house-door"></i>,
//   },
//   {
//     id: 5,
//     link: "/staff",
//     img: "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png",
//     name: "pupil",
//     position: "Classroom Educator",
//     description:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio",
//     hyperlink1: <i class="bi bi-facebook"></i>,
//     hyperlink2: <i class="bi bi-house-door"></i>,
//   },
//   {
//     id: 6,
//     link: "/staff",
//     img: "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png",
//     name: "people",
//     position: "Classroom Educator",
//     description:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio",
//     hyperlink1: <i class="bi bi-facebook"></i>,
//     hyperlink2: <i class="bi bi-house-door"></i>,
//   },
//   {
//     id: 7,
//     link: "/staff",
//     img: "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png",
//     name: "member",
//     position: "Classroom Educator",
//     description:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio",
//     hyperlink1: <i class="bi bi-facebook"></i>,
//     hyperlink2: <i class="bi bi-house-door"></i>,
//   },
//   {
//     id: 8,
//     link: "/staff",
//     img: "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png",
//     name: "item",
//     position: "Classroom Educator",
//     description:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio",
//     hyperlink1: <i class="bi bi-facebook"></i>,
//     hyperlink2: <i class="bi bi-house-door"></i>,
//   },
// ];

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
  const [activeIconDropdown, setActiveIconDropdown] = useState(null);
  const [isSearchmenuOpen, setSearchmenuOpen] = useState(false);
  const [isProfilemenuOpen, setProfilemenuOpen] = useState(false);
  const [queryText, setqueryText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchState, setSearchLength] = useState(false);
  const timeoutRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      setSearchmenuOpen(false);
      setProfilemenuOpen(false);
    }
  });

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("body-no-scroll");
    } else {
      document.body.classList.remove("body-no-scroll");
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const menunavbar = document.getElementById("navbar-mainmenu");
    if (activeDropdown) {
      menunavbar.classList.add("body-no-scroll");
    } else {
      menunavbar.classList.remove("body-no-scroll");
    }
  });

  // useEffect(() => {
  //   const handleScroll2 = () => {
  //     if (isMenuOpen) {
  //       document.body.classList.add("body-no-scroll");
  //     } else {
  //       document.body.classList.remove("body-no-scroll");
  //     }
  //   };

  //   // Add event listener for scrolling
  //   window.addEventListener("scroll", handleScroll2);

  //   // Clean up the event listener
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll2);
  //   };
  // }, [isMenuOpen]);

  // useEffect(() => {
  //   const menunavbar = document.getElementById("navbar-mainmenu");

  //   const handleScroll1 = () => {
  //     if (activeDropdown) {
  //       menunavbar.classList.add("body-no-scroll");
  //     } else {
  //       menunavbar.classList.remove("body-no-scroll");
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll1);

  //   // Clean up the event listener
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll1);
  //   };
  // });

  useEffect(() => {
    if (window.innerWidth <= 922) {
      if (isSearchmenuOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }
  });

  useEffect(() => {
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

  // const openmaindropdown = (dropdownId) => {
  //   setActiveMainDropdown(dropdownId);
  //   var desktopActiveElement = document.querySelector('.desktopactive');
  //   if (desktopActiveElement) {
  //     var currentHeight = desktopActiveElement.clientHeight;
  //     var dropdownHeight = document.getElementById('navbar-bg-layer');
  //     dropdownHeight.style.height = currentHeight + "px";
  //   }
  // }
  const openmaindropdown = (dropdownId) => {
    setActiveMainDropdown(dropdownId);
    var dropdownHeight = document.getElementById("navbar-bg-layer");
    if (dropdownHeight) {
      if (dropdownId === "overviewDropdown") {
        dropdownHeight.style.height = "200px";
      } else if (dropdownId === "schoolDropdown") {
        dropdownHeight.style.height = "240px";
      } else {
        dropdownHeight.style.height = "280px";
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
            src="https://res.cloudinary.com/digbzwlfx/image/upload/v1708862176/Frame_48098090_hvamgv.png"
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
          {/* <RxCross2
            className="cross"
            onClick={toggleMenu}
            style={{ fontSize: "20px" }}
          /> */}
          <li className="navbar-item mobile-padding-left mobile-padding-top">
            <Link to="/kith/overview">Overview</Link>
          </li>
          <li
            className="navbar-item mobile-padding-left dropdown"
            onClick={toggleDropdown}
            onMouseOver={() => openmaindropdown("overviewDropdown")}
            onMouseOut={closemaindropdown}
          >
            <Link to="/kith/admission" onClick={handleNavlinkClick}>
              Admission
            </Link>
            {/* <IoIosArrowForward className="up" /> */}
            <div
              className={`dropdown-content ${
                activeDropdown !== null ? "active" : ""
              } ${
                activeMainDropdown === "overviewDropdown" ? "desktopactive" : ""
              }`}
            >
              <div className="dropdown-content-inner">
                <div className="dropdown-container">
                  <ul className="list-item-container">
                  <li>
                      <Link to="/kith/admission">Explore</Link>
                    </li>
                    <li>
                      <Link to="/kith/admission">Admission</Link>
                    </li>
                    <li>
                      <Link to="/kith/how-to">How to ?</Link>
                    </li>
                    <li>
                      <Link to="/kith/enrollment">Online Enrollment</Link>
                    </li>
                    <li>
                      <Link to="/kith/financials">Financials</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li
            className="navbar-item mobile-padding-left dropdown"
            onClick={toggleDropdown}
            onMouseOver={() => openmaindropdown("schoolDropdown")}
            onMouseOut={closemaindropdown}
          >
            <Link to="/kith/life-at-school" onClick={handleNavlinkClick}>
              Life at School
            </Link>
            {/* <IoIosArrowForward className="up" /> */}
            <div
              className={`dropdown-content ${
                activeDropdown !== null ? "active" : ""
              } ${
                activeMainDropdown === "schoolDropdown" ? "desktopactive" : ""
              }`}
            >
              <div className="dropdown-content-inner">
                <div className="dropdown-container">
                  <ul className="list-item-container">
                  <li>
                      <Link to="/kith/life-at-school">Explore</Link>
                    </li>
                    <li>
                      <Link to="/kith/life-at-school">
                        Life At School
                      </Link>
                    </li>
                    <li>
                      <Link to="/kith/campus-and-culture">
                        Campus & Culture
                      </Link>
                    </li>
                    <li>
                      <Link to="/kith/club-and-commitee">
                        Committees & Clubs
                      </Link>
                    </li>
                    <li>
                      <Link to="/kith/safety-and-wellbeing">
                        Safety & Wellbeing
                      </Link>
                    </li>
                    <li>
                      <Link to="/kith/academics">Academics</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li
            className="navbar-item mobile-padding-left dropdown"
            onClick={toggleDropdown}
            onMouseOver={() => openmaindropdown("informationDropdown")}
            onMouseOut={closemaindropdown}
          >
            <Link to="/kith/information" onClick={handleNavlinkClick}>
              Information
            </Link>
            <div
              className={`dropdown-content ${
                activeDropdown !== null ? "active" : ""
              } ${
                activeMainDropdown === "informationDropdown"
                  ? "desktopactive"
                  : ""
              }`}
            >
              <div className="dropdown-content-inner">
                <div className="dropdown-container">
                  <ul className="list-item-container">
                  <li>
                      <Link to="/kith/information">Explore</Link>
                    </li>
                    <li>
                      <Link to="/kith/information">Information</Link>
                    </li>
                    <li>
                      <Link to="/kith/leadership">Leadership</Link>
                    </li>
                    <li>
                      <Link to="/kith/employment">Employment</Link>
                    </li>
                    <li>
                      <Link to="/kith/alumni">Alumni</Link>
                    </li>
                    <li>
                      <Link to="/kith/faqs">FAQ</Link>
                    </li>
                    <li>
                      <Link to="/donate">Donate</Link>
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
              <div className="click-dropdown-inner">
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
                            <Link to="/history">History</Link>
                          </li>
                          <li>
                            <Link to="/moonshots">Careers</Link>
                          </li>
                          <li>
                            <Link to="/our-role">Blog</Link>
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
          <li className="navbar-item navbar-icon">
            <Link to={"/"} className="kith-back-to-main">
              <IoExitOutline
                className="navbar-icon-inner"
                style={{ color: "#6B7280", height: "100%" }}
              />
            </Link>
          </li>
          <li className="navbar-item hamburger-item">
            <div
              class={`hamburger cross navbar-icon-inner ${
                isActive ? "active" : ""
              }`}
              onClick={toggleMenu}
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
