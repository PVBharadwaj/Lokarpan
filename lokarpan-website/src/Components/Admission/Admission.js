import React from "react";
import "./Admission.css";
import KithNavbar from "../Navbar/KithNavbar/index";
import KithAdmissionSubNavbar from "../Navbar/KithAdmissionSubNavbar";
import KithFooter from "../KithFooter";

const Admission = () => {
  return (
    <>
      <KithNavbar />
      <KithAdmissionSubNavbar />
      <div className="admissions-upper-section">
        <h1>
          We are thrilled to extend a warm welcome to you as part of the
          Lokarpan family.
        </h1>
      </div>
      <div className="admissions-div">
        <div className="admission-card">
          <div className="admission-card-img admission-card-img-1"></div>
          <div className="admission-card-text">
            <h3>About Us</h3>
            <p>
              At the Kith n Kin school, academics take on added dimensions. Here
              academic striving encompasses a life-long thirst for scholarship
              and curiosity. The School aims to instil a progressive mind-set
              and nurture leaders of tomorrow, who will succeed in any endeavour
              that they turn their hand to, anywhere in the world.
            </p>
          </div>
        </div>
        <div className="admission-card admission-card-reverse">
          <div className="admission-card-text">
            <h3>Our Team</h3>
            <p>
              The School Management Team comprises the principal as the Head of
              institution assisted by the School's Senior Management Team (SMT).
              Our faculty members bring a wealth of experience, expertise, and a
              shared commitment to our mission
            </p>
          </div>
          <div className="admission-card-img admission-card-img-2"></div>
        </div>
        <div className="admission-card">
          <div className="admission-card-img admission-card-img-1"></div>
          <div className="admission-card-text">
            <h3>Admissions Information</h3>
            <p>
              If you have a child currently enrolled at Kith or one who has
              recently graduated from Kith, please do not create a separate
              profile for the new prospective student. Instead, we encourage you
              to log in with your existing account details. If you don't
              remember your login information, please reach out to us at
              Admissions@kithnkinschool.org for assistance.
            </p>
          </div>
        </div>
      </div>
      <div className="admissions-div2">
        <div className="mobile-admissions-faculty-content">
          <h3>Faculty</h3>
          <p>
            Harvard faculty are invested in helping you celebrate your passions.
            You'll build close and enduring relationships with professors who
            challenge you to see with new eyes and serve as models of engaged,
            conscientious leadership.
          </p>
        </div>
        <div className="admissions-grid">
          <div className="admission-grid-inner1 admissions-grid-inner">
            <h3>Faculty</h3>
            <p>
              Harvard faculty are invested in helping you celebrate your
              passions. You'll build close and enduring relationships with
              professors who challenge you to see with new eyes and serve as
              models of engaged, conscientious leadership.
            </p>
          </div>
          <div className="admission-grid-inner2 admissions-grid-inner">
            <p>Faculty Engagement by the Numbers</p>
          </div>
          <div className="admission-grid-inner3 admissions-grid-inner side-div">
            <h3>X</h3>
            <p>Faculty teaching primary and secondary school</p>
          </div>
          <div className="admission-grid-inner4 admissions-grid-inner side-div">
            <h3>Y</h3>
            <p>Technical advisors</p>
          </div>
          <div className="admission-grid-inner5 admissions-grid-inner side-div">
            <h3>X:Y</h3>
            <p>Student-to-faculty ratio</p>
          </div>
          <div className="admission-grid-inner6 admissions-grid-inner side-div">
            <h3>Z</h3>
            <p>Median course size</p>
          </div>
        </div>
      </div>
      <KithFooter />
    </>
  );
};

export default Admission;
