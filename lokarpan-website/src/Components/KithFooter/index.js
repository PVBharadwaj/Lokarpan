import "./index.css";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import React, { useState } from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  const [openStates, setOpenStates] = useState({
    about: false,
    contactUs: false,
    admissions: false,
    helpfulLinks: false,
  });

  const toggleList = (listName) => {
    setOpenStates((prevState) => ({
      ...prevState,
      [listName]: !prevState[listName],
    }));
  };

  return (
    <div className="footer-container footer-mobile">
      {/* <hr className="hor-line4" /> */}
      <div className="footer-container-inner">
        <div className="content">
          <div className="icons-footer-list">
            <img
              src="https://res.cloudinary.com/digbzwlfx/image/upload/v1708862176/Frame_48098090_hvamgv.png"
              className="lokarpan-logo"
            />
            <div className="icons-container icons-list">
              <a href="">
                <FaFacebook className="footer-icon" />
              </a>
              <Link to="/">
                <img
                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1710866199/instagram-with-circle-svgrepo-com_whdr2l.svg"
                  className="footer-icon1"
                />
              </Link>
              <Link to="/">
                <img
                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1710866191/linkedin-round-svgrepo-com_nnnkkd.svg"
                  className="footer-icon1"
                />
              </Link>
              <a href="">
                <FaMedium className="footer-icon" />
              </a>
            </div>
            <div className="address">
              <p>Lokarpan HQ</p>
              <p>V&P Malhausi</p>
              <p>Auariya, U.P</p>
              <p>206255</p>
              <p>India</p>
              <p>Tel:91-00 0000 0000</p>
              <p>Tel:91-00 0000 0000</p>
            </div>
          </div>
          <hr className="hor-line3" />

          <div className="footer-list">
            <div
              className="footer-list-title"
              onClick={() => toggleList("about")}
            >
              <h4>About </h4>
              <FaAngleDown
                className={`footerArrow ${openStates.about ? "active" : ""}`}
              />
            </div>

            <ul
              className={`footer-list-items ${openStates.about ? "open" : ""}`}
            >
              <li>
                <a href="/">Overview</a>
              </li>
              <li>
                <a href="/">Leadership</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
              <li>
                <a href="/">Events</a>
              </li>
            </ul>
            <hr className="footer-hor-line" />
          </div>
          <div className="mobile-footer-list">
            <ul className="footer-questions-container-1">
              <div className="footer-each-question-1">
                <input
                  type="checkbox"
                  id="about-lokarpan"
                  name="about-lokarpan"
                  className="footer-input-1"
                />
                <label htmlFor="about-lokarpan" className="footer-question-1">
                  About
                </label>
                <div className="footer-ans-sec-1">
                  <ul className="footer-faq-answer-1">
                    <li>
                      <Link to="/kith/overview">Overview</Link>
                    </li>
                    <li>
                      <Link to="/kith/leadership">Leadership</Link>
                    </li>
                    <li>
                      <Link to="/contact-us">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="/">Events</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </ul>
          </div>
          <hr className="footer-hor-line" />
          <div className="footer-list">
            <div
              className="footer-list-title"
              onClick={() => toggleList("admissions")}
            >
              <h4>Admissions</h4>
              <FaAngleDown
                className={`footerArrow ${
                  openStates.admissions ? "active" : ""
                }`}
              />
            </div>

            <ul
              className={`footer-list-items ${
                openStates.admissions ? "open" : ""
              }`}
            >
              <li>
                <a href="/">How to ?</a>
              </li>
              <li>
                <a href="/">Online Enrollment</a>
              </li>
              <li>
                <a href="/">Scholarships</a>
              </li>
            </ul>
            <hr className="footer-hor-line" />
          </div>
          <div className="mobile-footer-list">
            <ul className="footer-questions-container-1">
              <div className="footer-each-question-1">
                <input
                  type="checkbox"
                  id="admissions"
                  name="about-lokarpan"
                  className="footer-input-1"
                />
                <label htmlFor="admissions" className="footer-question-1">
                  Admissions
                </label>
                <div className="footer-ans-sec-1">
                  <ul className="footer-faq-answer-1">
                    <li>
                      <Link to="/our-role">How to ?</Link>
                    </li>
                    <li>
                      <Link to="/history">Online Enrollment</Link>
                    </li>
                    <li>
                      <Link to="/mission">Scholarships</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </ul>
          </div>
          <hr className="footer-hor-line" />
          <div className="footer-list">
            <div
              className="footer-list-title"
              onClick={() => toggleList("helpfulLinks")}
            >
              <h4>Helpful Links</h4>
              <FaAngleDown
                className={`footerArrow ${
                  openStates.helpfulLinks ? "active" : ""
                }`}
              />
            </div>
            <ul
              className={`footer-list-items ${
                openStates.helpfulLinks ? "open" : ""
              }`}
            >
              <li>
                <a href="/">Donate</a>
              </li>
              <li>
                <a href="/">Employment</a>
              </li>
              <li>
                <a href="/">Alumni</a>
              </li>
              <li>
                <a href="/">FAQ</a>
              </li>
              <li>
                <a href="/">Press</a>
              </li>
            </ul>
            <hr className="footer-hor-line" />
          </div>
          <div className="mobile-footer-list">
            <ul className="footer-questions-container-1">
              <div className="footer-each-question-1">
                <input
                  type="checkbox"
                  id="helpful-links"
                  name="about-lokarpan"
                  className="footer-input-1"
                />
                <label htmlFor="helpful-links" className="footer-question-1">
                  Helpful Links
                </label>
                <div className="footer-ans-sec-1">
                  <ul className="footer-faq-answer-1">
                    <li>
                      <Link to="/our-role">Donate</Link>
                    </li>
                    <li>
                      <Link to="/history">Employment</Link>
                    </li>
                    <li>
                      <Link to="/mission">Alumni</Link>
                    </li>
                    <li>
                      <Link to="/leadership">FAQ</Link>
                    </li>
                    <li>
                      <Link to="/careers">Press</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </ul>
          </div>
          <hr className="footer-hor-line" />
          <div className="mobile-footer-list">
            <ul className="footer-questions-container-1">
              <div className="footer-each-question-1">
                <input
                  type="checkbox"
                  id="contact-us"
                  name="about-lokarpan"
                  className="footer-input-1"
                />
                <label htmlFor="contact-us" className="footer-question-1">
                  Contact Us
                </label>
                <div className="footer-ans-sec-1">
                  <ul className="footer-faq-answer-1">
                    <li>
                      <div className="address-mobile">
                        <p>Lokarpan HQ</p>
                        <p>V&P Malhausi</p>
                        <p>Auariya, U.P</p>
                        <p>206255</p>
                        <p>India</p>
                        <p>Tel:91-00 0000 0000</p>
                        <p>Tel:91-00 0000 0000</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </ul>
          </div>
          <hr className="footer-hor-line" />
          {/* <div className="footer-list kith-footer-mobile">
            <div
              className="footer-list-title"
              onClick={() => toggleList("contactUs")}
            >
              <h4>Contact Us</h4>
              <FaAngleDown
                className={`footerArrow ${
                  openStates.contactUs ? "active" : ""
                }`}
              />
            </div>
            <ul
              className={`footer-list-items ${
                openStates.contactUs ? "open" : ""
              }`}
            >
              <li>
                <div className="address-mobile">
                  <p>Lokarpan HQ</p>
                  <p>V&P Malhausi</p>
                  <p>Auariya, U.P</p>
                  <p>206255</p>
                  <p>India</p>
                  <p>Tel:91-00 0000 0000</p>
                  <p>Tel:91-00 0000 0000</p>
                </div>
              </li>
            </ul>
            <hr className="footer-hor-line" />
          </div> */}

          {/* <div className="footer-list">
            <div
              className="footer-list-title"
              onClick={() => toggleList("contribute")}
            >
              <h4>Contribute</h4>
              <FaAngleDown
                className={`footerArrow ${
                  openStates.contribute ? "active" : ""
                }`}
              />
            </div>
            <ul
              className={`footer-list-items ${
                openStates.contribute ? "open" : ""
              }`}
            >
              <li>
                <a href="/">Donate</a>
              </li>
              <li>
                <a href="/">Volunteer</a>
              </li>
              <li>
                <a href="/">Our Supporters</a>
              </li>
            </ul>
            <hr className="footer-hor-line" />
          </div> */}
        </div>

        <div className="social-links">
          <div className="policy-text">
            <span>Copyright @ {year} Lokarpan Inc. All right reserved.</span>
            <span className="desktop-footer-last-sec">
              <a href="/">Privacy Policy</a>
            </span>
            <span className="desktop-footer-last-sec">
              <a href="/">Terms of Use</a>
            </span>
            <span className="desktop-footer-last-sec">
              <Link to="/sitemap">Sitemap</Link>
            </span>
            <span className="mobile-footer-last-sec">
              <a href="/">Privacy Policy</a> | <a href="/">Terms of Use</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
