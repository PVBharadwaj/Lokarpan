import React from "react";
import "./OnlineEnrollment.css";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import KithCarousels from "../Carousals/KithCarousels/KithCarousels";
import Navbar from "../Navbar/KithNavbar";
import Footer from "../KithFooter";
import KithAdmissionSubNavbar from "../Navbar/KithAdmissionSubNavbar";

const OnlineEnrollment = () => {
  return (
    <>
      <Navbar />
      <KithAdmissionSubNavbar />
      <div className="enrollment-upper-section">
        <h1>Welcome to our Admissions portal</h1>
        <p>
          A Registration of Interest allows you to submit general and contact
          information for a parent or guardian as well as the potential
          candidate’s general information.{" "}
          <span>
            <a href="/" className="enrollment-upper-section-a">
              Read more
            </a>
          </span>
        </p>
        <Link to="/donate" className="kith-apply-btn white">
          Apply
        </Link>
      </div>

      <div className="enrollment-div">
        <h3>Start your Application</h3>
        <p>
          Applications to Kith are submitted online via the Application Form.
        </p>
      </div>
      <div className="enrollment-form enrollment-card-div enrollment-div">
        <div className="enrollment-card">
          <div className="enrollment-card-img enrollment-card-img-1"></div>
          <div className="enrollment-card-text">
            <h3>Application Form</h3>
            <p className="white-txt">
              This form is for submitting detailed information required for the
              admissions process. It includes general and contact information
              for a parent or guardian, as well as specific details about the
              potential candidate's academic background, extracurricular
              activities, and any other relevant information. Click here to
              access the Admissions Application Form.
            </p>
            <Link to="/" className="kith-apply-btn white">
              Submit Application
            </Link>
          </div>
        </div>
        <div className="enrollment-card enrollment-card-reverse">
          <div className="enrollment-card-text">
            <h3>Registration of Interest</h3>
            <p className="white-txt">
              The ROI allows you to express your interest in the school by
              providing basic general and contact information for a parent or
              guardian, along with general information about the potential
              candidate. It serves as an initial step before completing the full
              admissions application. Click here to submit your Registration of
              Interest.
            </p>
            <Link to="/" className="kith-apply-btn white">
              Submit ROI
            </Link>
          </div>
          <div className="enrollment-card-img enrollment-card-img-2"></div>
        </div>
      </div>
      <div className="enrollment-cards-mobile">
        <div className="each-card-1">
          <h3>Application form</h3>
          <p>
            A Registration of Interest allows you to submit general and contact
            information for a parent or guardian as well as the potential
            candidate’s general information. Read more
          </p>
          <Link to="/" className="kith-apply-btn black left">
            Submit Application
          </Link>
        </div>
        <div className="each-card-2">
          <h3>Registration of Interest</h3>
          <p>
            A Registration of Interest allows you to submit general and contact
            information for a parent or guardian as well as the potential
            candidate’s general information. Read more
          </p>
          <Link to="/" className="kith-apply-btn white right">
            Submit ROI
          </Link>
        </div>
      </div>
      <div className="enrollment-last-sec">
        <h3>Admissions Contact</h3>
        {/* <div className="admissions-img-list">
          <KithCarousels />
        </div> */}
        <div className="enrollment-imgs-list enrollment-desktop">
          <div>
            <img src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709263933/Rectangle_1833_4_mwlc6g.png" />
            <p>Berlina</p>
          </div>
          <div>
            <img src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709263925/Rectangle_1833_5_wwssgw.png" />
            <p>Berlina</p>
          </div>
          <div>
            <img src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709263916/Rectangle_1833_6_aczvwl.png" />
            <p>Berlina</p>
          </div>
          <div>
            <img src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709263911/Rectangle_1833_7_jt1x6w.png" />
            <p>Berlina</p>
          </div>
        </div>

        <Marquee className="enrollment-marquee">
          <div>
            <img src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709263933/Rectangle_1833_4_mwlc6g.png" />
            <p>Berlina</p>
          </div>
          <div>
            <img src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709263925/Rectangle_1833_5_wwssgw.png" />
            <p>Berlina</p>
          </div>
          <div>
            <img src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709263916/Rectangle_1833_6_aczvwl.png" />
            <p>Berlina</p>
          </div>
        </Marquee>
      </div>
      <Footer />
    </>
  );
};

export default OnlineEnrollment;
