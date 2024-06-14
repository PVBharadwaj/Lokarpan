import { Component } from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import FinancialNav from "../Navbar/FinancialSubNav/FinancialNav";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import "./index.css";

class ContactUs extends Component {
  state = { active: "General" };

  updateActive = (event) => {
    console.log(event);
    this.setState({ active: event.target.value });
  };
  render() {
    const { active } = this.state;

    return (
      <>
        <Navbar />
        <FinancialNav
          navbarTitle="Contact"
          navitem1="Get in Touch"
          navitem2="Subscribe"
          link1="/contact-us"
          link2="/subscribe"
        />

        <div className="contact-us-container">
          <div className="contact-us-top-section">
            {/* <img src="https://res.cloudinary.com/digbzwlfx/image/upload/v1708797777/image_322_huxmrs.png" /> */}
            <div className="contact-us-top-sec"></div>
            <div className="contact-sec">
              <h1 className="contact-font64">Contact Us</h1>
              <p className="contact-font24">
                Thank you for visiting our website. Help us connect you with the
                right person.
              </p>
            </div>
            <div className="btn-section">
              <button
                className={
                  active === "General"
                    ? "contact-each-ele active"
                    : "contact-each-ele"
                }
                value="General"
                onClick={this.updateActive}
              >
                General
              </button>
              <button
                className={
                  active === "Press"
                    ? "contact-each-ele active"
                    : "contact-each-ele"
                }
                value="Press"
                onClick={this.updateActive}
              >
                Press
              </button>
            </div>
          </div>
          {active === "General" && (
            <div className="inquiries-sec">
              <p className="contact-font18">
                For media inquiries and interview requests, please contact us.
              </p>
              {/* <h1 className="contact-font48">General Queries</h1> */}
              <div className="inquiries-below-section">
                <div>
                  <p className="contact-font24-left bold">Phone</p>
                  <p className="contact-font24-left">0000-0000-0000</p>
                </div>
                <div>
                  <p className="contact-font24-left bold">Email</p>
                  <p className="contact-font24-left">support@lokarpan.com</p>
                </div>
              </div>
            </div>
          )}
          {active === "Press" && (
            <div className="inquiries-sec">
              {/* <h1 className="contact-font48">Press</h1> */}
              <p className="contact-font18">
                For media inquiries and interview requests, please contact us.
              </p>
              <div className="inquiries-below-section">
                <div>
                  <p className="contact-font24-left bold">Phone</p>
                  <p className="contact-font24-left">0000-0000-0000</p>
                </div>
                <div>
                  <p className="contact-font24-left bold">Email</p>
                  <p className="contact-font24-left">support@lokarpan.com</p>
                </div>
              </div>
            </div>
          )}
          <div className="maps-section">
            <h1 className="contact-font48">Maps & Directions</h1>
            <div className="maps-below-section">
              <div className="health-cont-img-div contact-us-img1">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.5015994442724!2d72.57717227386523!3d23.00534801697351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8553c71a49d9%3A0x107c166b9a9e6b16!2sLOKARPAN%20FOUNDATION!5e0!3m2!1sen!2sin!4v1714337317984!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: "0" }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="maps-below-right-sec">
                <h3 className="contact-font24-left">Address</h3>
                <p className="contact-font16">Lokarpan HQ</p>
                <p className="contact-font16-normal contact-600">V&P Malhausi</p>
                <p className="contact-font16-normal contact-600">Auariya, UP 206255</p>
                <p className="contact-font16-normal contact-600">India</p>
                <p className="contact-font16-normal contact-600">Tele : XXX-XXX-XXXX</p>
                <a href="#" className="contact-anchor contact-600">
                  Directions
                </a>
                <h3 className="contact-font24-left contact-font24-left1">
                  How to access
                </h3>
                <p className="contact-600 contact-font24-le">
                  The Apple Store faces Union Square. Parking: Union Square
                  Garage, accessed from Post or Geary. Public Transit: Bart to
                  Powell St. ; use Stockton exit. Light Rail F line to Market &
                  4th. Powell St cable cars to Post St. Multiple SF MTA bus
                  lines stop in the area.
                </p>
              </div>
            </div>
          </div>
          <div className="contact-last-section">
            <h1 className="contact-font64-left">In case you missed anything</h1>
            <p className="contact-font48-left">Resources</p>
            <ul className="list">
              <li className="each-item">
                <p className="contact-font28"><Link className="contact-font28 no-deco" to={"/donate"}>Donate</Link> </p>
                <p className="each-item-p">
                  Explore our Support Page to learn how you can make a
                  difference through your generosity.
                </p>
              </li>
              <li className="each-item">
                <p className="contact-font28"><Link className="contact-font28 no-deco" to={"/"}>Leadership</Link></p>
                <p className="each-item-p">
                  Visit our Leadership Page to meet the team driving Lokarpan's
                  mission forward.
                </p>
              </li>
              <li className="each-item">
                <p className="contact-font28"><Link className="contact-font28 no-deco" to={"/"}>Alumni</Link></p>
                <p className="each-item-p">
                  Connect with fellow Lokarpan alumni and discover how you can
                  stay engaged with our community on our Alumni Page.
                </p>
              </li>
              <li className="each-item">
                <p className="contact-font28"><Link className="contact-font28 no-deco" to={"/"}>Careers</Link></p>
                <p className="each-item-p">
                  Unlock exciting opportunities to join Lokarpan's dedicated
                  team by visiting our Careers Page.
                </p>
              </li>
              <li className="each-item">
                <p className="contact-font28"><Link className="contact-font28 no-deco" to={"/financial"}>Financial Info</Link></p>
                <p className="each-item-p">
                  Gain insights into Lokarpan's financial transparency and
                  stewardship by exploring our Financial Info Page.
                </p>
              </li>
              <li className="each-item">
                <p className="contact-font28"><Link className="contact-font28 no-deco" to={"/newsletter"}>Newsletters</Link></p>
                <p className="each-item-p">
                  Stay updated on Lokarpan's latest news, initiatives, and
                  events by subscribing to our newsletters.
                </p>
              </li>
            </ul>
          </div>
          {/* <div className="new-contact-sec">
            <h1 className="new-contact-head1">Contact</h1>
            <p className="new-para1">
              Please use the contact information below to connect with us.
            </p>
            <p className="new-para1">
              While it is important to us to be available to our partners,
              potential grantees, and the public, due to the large number of
              emails received, we may be unable to respond directly to your
              inquiry.
            </p>
            <Link to="/contact-us/write-to-us">
              <button className="new-contact-btn">Write to Us</button>
            </Link>
          </div> */}
          {/* <div className="new-follow-sec">
            <div className="new-f-left">
              <p className="new-f-p">Follow us:</p>
              <div className="new-icons-cont">
                <Link to="/">
                  <FaFacebook
                    className="footer-icon"
                    style={{ color: "black" }}
                  />
                </Link>
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
                <Link to="/">
                  <FaMedium
                    className="footer-icon"
                    style={{ color: "black" }}
                  />
                </Link>
              </div>
            </div>
            <div className="new-f-right">
              <h1 className="new-f-h">Media Queries</h1>
              <p className="new-f-p2">
                Note: If you are a member of the news media, please use the
                phone number or email address below to leave a detailed message.
                Include your name, press affiliation, phone number, questions,
                and deadline.
              </p>
              <p className="new-f-p3">Phone:</p>
              <p className="new-f-p3">Email:</p>
            </div>
          </div> */}
          {/* <div className="new-last-sec">
            <h1 className="new-last-h">Career Seekers</h1>
            <p className="new-last-p">
              We'd love to have you make a difference with us at Lokarpan.
              Browse our openings now.
            </p>
            <h1 className="new-last-h">Grant Inquiries</h1>
            <p className="new-last-p">
              Please note: the foundation is unable to make grants directly to
              individuals. Visit our Grant Seeker FAQ for more information.
            </p>
            <h1 className="new-last-h">Give with us</h1>
            <p className="new-last-p">
              If you would like to support our work beyond grants, head to our
              Ways to Give page to know more.
            </p>
          </div> */}
          {/* <div className="contact-last-section">
            <h1 className="contact-font64-left">In case you missed anything</h1>
            <p className="contact-font48-left">Resources</p>
            <ul className="list">
              <li className="each-item">
                <p className="contact-font28">Donate</p>
                <p className="each-item-p">
                  Visit our <a href="#">Support</a> Page to find how can help
                </p>
              </li>
              <li className="each-item">
                <p className="contact-font28">LeaderShip</p>
                <p className="each-item-p">
                  Visit our <a href="#">LeaderShip</a> to ...
                </p>
              </li>
              <li className="each-item">
                <p className="contact-font28">Alumni</p>
                <p className="each-item-p">
                  Visit our <a href="#">Alumni Page</a> to ...
                </p>
              </li>
              <li className="each-item">
                <p className="contact-font28">Careers</p>
                <p className="each-item-p">
                  Visit our <a href="#">Careers Page</a> to ...
                </p>
              </li>
              <li className="each-item">
                <p className="contact-font28">Financial Info</p>
                <p className="each-item-p">
                  Visit our <a href="#">Financial Info </a> to ...
                </p>
              </li>
              <li className="each-item">
                <p className="contact-font28">Careers</p>
                <p className="each-item-p">
                  Visit our <a href="#">Careers Page</a> to ...
                </p>
              </li>
            </ul>
          </div> */}
        </div>
        <Footer />
      </>
    );
  }
}

export default ContactUs;
