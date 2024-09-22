import React from "react";
import "./Admission.css";
import KithNavbar from "../Navbar/KithNavbar/index";
import KithAdmissionSubNavbar from "../Navbar/KithAdmissionSubNavbar";
import KithFooter from "../KithFooter";
import { Link } from "react-router-dom";

const Admission = () => {
  return (
    <>
      <KithNavbar />
      <KithAdmissionSubNavbar />
      <div className="admissions-upper-section"></div>
      <div className="kith-overview-div kith-overview-second-div">
        <h1 className="kith-life-head ">
          {" "}
          We are thrilled to extend a warm welcome to you as part of the Kith n
          Kin family
        </h1>
      </div>
      <div className="admissions-div">
        <div className="admission-card">
          <div className="admission-card-img admission-card-img-1"></div>
          <div className="admission-card-text">
            <h3>Why Kith</h3>
            <p>
              Everyone at the Kith n Kin school works hard to create an exciting
              and caring environment for learners. Discover what makes Kith the
              standard for liberal arts and science to enable each child to
              reach their full potential. The School strives to offer the best
              resources to nurture the next generation of leaders.
            </p>
          </div>
        </div>
        <div className="admission-card">
          <div className="admission-card-text">
            <h3>How To Apply</h3>
            <p>
              A student must be registered at any time up to 15th September. All
              registered children seeking admission will sit for an initial
              assessment. Admission to Kith for grade three and above is
              possible either through the common entrance test or special form
              entry. Entry for these routes opens in spring, before a student
              starts their academic year via on-site application or an online
              application on the Kith n Kin school website. All applications
              received will be considered on a rolling basis.{" "}
              <span>
                <Link to="/kith/how-to">Read More</Link>
              </span>
            </p>
          </div>
          <div className="admission-card-img admission-card-img-2"></div>
        </div>
        <div className="admission-card">
          <div className="admission-card-img admission-card-img-3"></div>
          <div className="admission-card-text">
            <h3>Financial Aid</h3>
            <p>
              Kith is affordable for all admitted students. Financial aid covers
              all demonstrated need for all students, regardless of their
              economic status.{" "}
              <span>
                <Link to="/kith/financials">
                  Learn more about financial aid
                </Link>
              </span>
            </p>
          </div>
        </div>
        <div className="admission-card">
          <div className="admission-card-text">
            <h3>Calculate Your Tuition</h3>
            <p>
              How affordable is Kith? See for yourself with our tuition
              calculator.{" "}
              <span>
                <Link to="/kith/financials">Tuition estimator</Link>
              </span>
            </p>
          </div>
          <div className="admission-card-img admission-card-img-4"></div>
        </div>
        <div className="admission-card">
          <div className="admission-card-img admission-card-img-5"></div>
          <div className="admission-card-text">
            <h3>Our Team</h3>
            <p>
              The School Management Team comprises the principal as the Head of
              institution assisted by the School's Senior Management Team (SMT).
              Our faculty members bring a wealth of experience, expertise, and a
              shared commitment to our mission.{" "}
              <span>
                <Link to="/kith/leadership">Read more</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="admissions-div2">
        <div className="mobile-admissions-faculty-content">
          <h3>Admission Statistics</h3>
          <p>
            Kith welcomes students from across the country, with diverse
            backgrounds and far ranging talents and interests.
          </p>
        </div>
        <div className="admissions-grid">
          <div className="admission-grid-inner1 admissions-grid-inner">
            <h3>Admission Statistics</h3>
            <p>
              Kith welcomes students from across the country, with diverse
              backgrounds and far ranging talents and interests.
            </p>
          </div>
          <div className="admission-grid-inner2 admissions-grid-inner">
            <p>Student profiles</p>
          </div>
          <div className="admission-grid-inner3 admissions-grid-inner side-div">
            <h3>V</h3>
            <p>Applicants</p>
          </div>
          <div className="admission-grid-inner4 admissions-grid-inner side-div">
            <h3>W</h3>
            <p> Admitted students</p>
          </div>
          <div className="admission-grid-inner5 admissions-grid-inner side-div">
            <h3>X%</h3>
            <p> Girls enrolled</p>
          </div>
          <div className="admission-grid-inner6 admissions-grid-inner side-div">
            <h3>Y</h3>
            <p>Received need based scholarships</p>
          </div>
        </div>
      </div>
      <KithFooter />
    </>
  );
};

export default Admission;
