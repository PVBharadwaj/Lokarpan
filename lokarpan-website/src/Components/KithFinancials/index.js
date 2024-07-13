import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import KithNavbar from "../Navbar/KithNavbar/index";
import KithAdmissionSubNavbar from "../Navbar/KithAdmissionSubNavbar";
import KithFooter from "../KithFooter";

class KithFinancials extends Component {
  render() {
    return (
      <>
        <KithNavbar />
        <KithAdmissionSubNavbar />
        <div className="kith-financials-container">
          <div className="kith-financials-each-sub-container">
            <h1 className="kith-financials-head">Scholarships and Bursaries</h1>
            <p className="kith-financials-para">
              The School believes that investment in education is of the utmost
              importance. The School strives to recognise outstanding, talented
              and ambitious students. Hence, regardless of your financial
              circumstances, if you have the drive to study and excel, you are
              welcome to apply.
            </p>
            <p className="kith-financials-para">
              The School welcomes those students who will not only reap benefits
              from attending the school, but will also learn to be a leader and
              make a difference in society and in life at large.
            </p>
            <p className="kith-financials-para">
              There is an annual allocation of scholarships for this purpose.
              The School offers three kinds of scholarships to enable and
              encourage meritorious students.
            </p>
            <div className="k-f-sub-each-cat">
              <h2 className="kith-financials-head2">CATEGORY – A</h2>
              <p className="kith-financials-para">
                Merit-cum-Means Scholarship for new admissions in a given
                academic year based on grades achieved in the Aptitude
                Assessment and need for financial assistance. The Scholarships
                offered to the students at the time of admission on a merit cum
                means basis are as per the following criteria:
              </p>
              <ul>
                <li>Student must enroll for the assessment.</li>
                <li>
                  Clearing the entrance assessment with 80% or higher accuracy
                </li>
              </ul>
            </div>
            <div className="k-f-sub-each-cat">
              <h2 className="kith-financials-head2">CATEGORY – B</h2>
              <p className="kith-financials-para">
                Merit-cum-Means Scholarship for existing students in a given
                academic year based on student’s performance scores in
                Academics, Sports and Co-curricular activities and need for
                financial assistance.
              </p>
              <ul>
                <li>Top 10% rankholder in their batch</li>
                <li>Minimum GPA of 3.5</li>
                <li>
                  Student belongs to a minority community or the EWS
                  category(Economically weaker section)
                </li>
              </ul>
            </div>
            <div className="k-f-sub-each-cat">
              <h2 className="kith-financials-head2">CATEGORY – C</h2>
              <p className="kith-financials-para">
                Purely Merit Based Scholarship for new admissions in a given
                academic year to recognise the meritorious students for their
                excellent performance irrespective of their financial needs.
              </p>
              <ul>
                <li>Top 5% rankholder in their batch</li>
                <li>Minimum GPA of 3.5</li>
              </ul>
            </div>
          </div>
          <p className="kith-financials-para">
            All rights to scholarships are reserved with the School Management.
          </p>
          <p className="kith-financials-para">
            The scholarship categories include full or partial fee waiver for
            the full-time course, an arrival allowance, and allowance for school
            stationary.
          </p>
        </div>
        <KithFooter />
      </>
    );
  }
}

export default KithFinancials;
