import { Component } from "react";
import { Link } from "react-router-dom";
import FinancialNav from "../Navbar/FinancialSubNav/FinancialNav";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import "./index.css";

class WriteToUs extends Component {
  submitForm = (e) => {
    e.preventDefault();
  };
  render() {
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
          <div className="contact-us-top-sec"></div>
          <div className="write-to-us-sec">
            <h1 className="w-head1">Write to us</h1>
            <p className="w-para1">
              Many of the questions we receive can be answered by information on
              our web site, where you can:
            </p>
            <ul className="w-list">
              <li className="w-list-item">
                search for{" "}
                <Link to="/career" className="w-link">
                  <span className="w-line"> careers</span>
                </Link>{" "}
                at the foundation
              </li>
              <li className="w-list-item">
                learn more about{" "}
                <Link to="/ways-to-give" className="w-link">
                  <span className="w-line">grant opportunities</span>
                </Link>{" "}
              </li>
              <li className="w-list-item">
                access information about our{" "}
                <Link to="/financials" className="w-link">
                  <span className="w-line"> financials</span>
                </Link>{" "}
              </li>
              <li className="w-list-item">
                learn about our{" "}
                <Link to="/kith/overview" className="w-link">
                  <span className="w-line"> kith</span>
                </Link>{" "}
                programme
              </li>
            </ul>

            <p className="w-para2">
              If you are unable to find the answer to your question via the
              links above, please use the form below. Please note: we are only
              able to review inquiries submitted in English. The foundation is
              not in a position to grant to individuals. Please do not submit
              funding requests or proposals as they will not be reviewed.
            </p>
            <form
              className="w-form-sec"
              onSubmit={(e) => {
                this.submitForm;
              }}
            >
              <label className="w-label">Message Type*</label>
              <select className="w-input-select">
                <option>--None--</option>
                <option>General Inquiry</option>
                <option>Grant Information</option>
                <option>
                  Grantee Communications Requests(active grantees only)
                </option>
                <option>Human Resources</option>
                <option>Other</option>
              </select>
              <label className="w-label">Name*</label>
              <input type="text" className="w-input" />
              <label className="w-label">Email*</label>
              <input type="email" className="w-input" />
              <label className="w-label">Phone</label>
              <input type="text" className="w-input" />
              <label className="w-label">Country*</label>
              <input className="w-input" />
              <label className="w-label">Street*</label>
              <input type="text" className="w-input" />
              <label className="w-label">City*</label>
              <input type="text" className="w-input" />
              <label className="w-label">State</label>
              <input type="text" className="w-input" />
              <label className="w-label">Postal/Zip Code</label>
              <input className="w-input" />
              <label className="w-label">Message* (max 500 characters)</label>
              <textarea rows={15} cols={55} className="w-text-area" />
              <button className="w-submit">Submit</button>
            </form>
            <p className="w-para2">
              By clicking Submit, you agree to{" "}
              <span className="w-line cur">
                Lokarpan's Privacy and Cookies Notice.
              </span>
            </p>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default WriteToUs;
