import { Component } from "react";
import KithNavbar from "../Navbar/KithNavbar/index";
import KithInfoSubNavbar from "../Navbar/KithInfoSubNavbar/index";
import KithFooter from "../KithFooter/index";
import "./index.css";

class KithCareer extends Component {
  state = { current: "administration" };

  onClickFaculty = () => {
    this.setState({ current: "faculty" });
  };

  onClickFellowShip = () => {
    this.setState({ current: "fellowship" });
  };

  onClickAdministration = () => {
    this.setState({ current: "administration" });
  };
  render() {
    const { current } = this.state;

    return (
      <>
        <KithNavbar />
        <KithInfoSubNavbar />
        <div className="kith-emp-cont">
          <div className="emp-upper-section">
            <h1 className="emp-upper-section-h1">
              We are thrilled to extend a warm welcome to you as part of the
              Lokarpan family.
            </h1>
          </div>
          <div className="emp-seg-section">
            <div className="emp-seg-btn-section">
              <button
                onClick={this.onClickAdministration}
                className={`emp-seg-btn ${
                  current === "administration" ? "emp-active" : ""
                }`}
              >
                Administration
              </button>
              <button
                onClick={this.onClickFaculty}
                className={`emp-seg-btn ${
                  current === "faculty" ? "emp-active" : ""
                }`}
              >
                Faculty
              </button>
              <button
                onClick={this.onClickFellowShip}
                className={`emp-seg-btn ${
                  current === "fellowship" ? "emp-active" : ""
                }`}
              >
                Fellowship
              </button>
            </div>
            {current === "administration" && (
              <div className="emp-administration-section">
                <h1 className="emp-admin-h1">Search Jobs</h1>
                <p className="emp-admin-p">
                  Looking for a job at Harvard? Whether you’re a current
                  employee or interested in a position at Harvard, everything
                  you need to start your job search is on Harvard Careers, our
                  job application portal. You can access Harvard Careers on your
                  desktop, laptop or mobile device, where you’ll be able to:
                </p>

                <ul className="emp-admin-ul">
                  <li className="emp-admin-li">View all job opportunities,</li>
                  <li className="emp-admin-li">
                    Search on specific criteria to find jobs that interest you,{" "}
                  </li>
                  <li className="emp-admin-li">
                    Set up a search agent that will notify you when positions
                    are posted that match your qualifications,{" "}
                  </li>
                  <li className="emp-admin-li">
                    Create a personal profile to gain visibility with Human
                    Resources professionals and recruiters across every School,
                  </li>
                  <li className="emp-admin-li">
                    Unit and Department at Harvard, without having to apply for
                    a specific job.
                  </li>
                </ul>
                <h1 className="emp-admin-h1">
                  Administrative/Staff Jobs - External Candidates
                </h1>
                <p className="emp-admin-p">
                  If you are an external candidate, click here or on the
                  "Administrative/Staff Jobs - External Candidates" button above
                  to see our job listings.
                </p>

                <h1 className="emp-admin-h1 emp-space-above">
                  Administrative/Staff Jobs - Internal Candidates
                </h1>
                <p className="emp-admin-p">
                  If you are an external candidate, click here or on the
                  "Administrative/Staff Jobs - External Candidates" button above
                  to see our job listings.
                </p>
                <h1 className="emp-admin-h1 emp-space-above">
                  Faculty and Other Academic Positions
                </h1>
                <p className="emp-admin-p">
                  Hiring for faculty positions, post-doctoral fellowships, and
                  other academic appointments at Harvard is typically conducted
                  by academic deans and department chairs, and administered by
                  offices for academic or faculty affairs at each school.
                  Faculty and academic positions are posted at
                  academicpositions.harvard.edu, or you can click the "Faculty
                  and Other Academic Positions" button above to access the
                  related job listings.
                </p>
              </div>
            )}
            {current === "faculty" && (
              <div className="emp-administration-section">
                <h1 className="emp-admin-h1">Search Jobs</h1>
                <p className="emp-admin-p">
                  Looking for a job at Harvard? Whether you’re a current
                  employee or interested in a position at Harvard, everything
                  you need to start your job search is on Harvard Careers, our
                  job application portal. You can access Harvard Careers on your
                  desktop, laptop or mobile device, where you’ll be able to:
                </p>

                <ul className="emp-admin-ul">
                  <li className="emp-admin-li">View all job opportunities,</li>
                  <li className="emp-admin-li">
                    Search on specific criteria to find jobs that interest you,{" "}
                  </li>
                  <li className="emp-admin-li">
                    Set up a search agent that will notify you when positions
                    are posted that match your qualifications,{" "}
                  </li>
                  <li className="emp-admin-li">
                    Create a personal profile to gain visibility with Human
                    Resources professionals and recruiters across every School,
                  </li>
                  <li className="emp-admin-li">
                    Unit and Department at Harvard, without having to apply for
                    a specific job.
                  </li>
                </ul>
                <h1 className="emp-admin-h1">
                  Administrative/Staff Jobs - External Candidates
                </h1>
                <p className="emp-admin-p">
                  If you are an external candidate, click here or on the
                  "Administrative/Staff Jobs - External Candidates" button above
                  to see our job listings.
                </p>

                <h1 className="emp-admin-h1 emp-space-above">
                  Administrative/Staff Jobs - Internal Candidates
                </h1>
                <p className="emp-admin-p">
                  If you are an external candidate, click here or on the
                  "Administrative/Staff Jobs - External Candidates" button above
                  to see our job listings.
                </p>
                <h1 className="emp-admin-h1 emp-space-above">
                  Faculty and Other Academic Positions
                </h1>
                <p className="emp-admin-p">
                  Hiring for faculty positions, post-doctoral fellowships, and
                  other academic appointments at Harvard is typically conducted
                  by academic deans and department chairs, and administered by
                  offices for academic or faculty affairs at each school.
                  Faculty and academic positions are posted at
                  academicpositions.harvard.edu, or you can click the "Faculty
                  and Other Academic Positions" button above to access the
                  related job listings.
                </p>
              </div>
            )}
            {current === "fellowship" && (
              <div className="emp-administration-section">
                <h1 className="emp-admin-h1">Search Jobs</h1>
                <p className="emp-admin-p">
                  Looking for a job at Harvard? Whether you’re a current
                  employee or interested in a position at Harvard, everything
                  you need to start your job search is on Harvard Careers, our
                  job application portal. You can access Harvard Careers on your
                  desktop, laptop or mobile device, where you’ll be able to:
                </p>

                <ul className="emp-admin-ul">
                  <li className="emp-admin-li">View all job opportunities,</li>
                  <li className="emp-admin-li">
                    Search on specific criteria to find jobs that interest you,{" "}
                  </li>
                  <li className="emp-admin-li">
                    Set up a search agent that will notify you when positions
                    are posted that match your qualifications,{" "}
                  </li>
                  <li className="emp-admin-li">
                    Create a personal profile to gain visibility with Human
                    Resources professionals and recruiters across every School,
                  </li>
                  <li className="emp-admin-li">
                    Unit and Department at Harvard, without having to apply for
                    a specific job.
                  </li>
                </ul>
                <h1 className="emp-admin-h1">
                  Administrative/Staff Jobs - External Candidates
                </h1>
                <p className="emp-admin-p">
                  If you are an external candidate, click here or on the
                  "Administrative/Staff Jobs - External Candidates" button above
                  to see our job listings.
                </p>

                <h1 className="emp-admin-h1 emp-space-above">
                  Administrative/Staff Jobs - Internal Candidates
                </h1>
                <p className="emp-admin-p">
                  If you are an external candidate, click here or on the
                  "Administrative/Staff Jobs - External Candidates" button above
                  to see our job listings.
                </p>
                <h1 className="emp-admin-h1 emp-space-above">
                  Faculty and Other Academic Positions
                </h1>
                <p className="emp-admin-p">
                  Hiring for faculty positions, post-doctoral fellowships, and
                  other academic appointments at Harvard is typically conducted
                  by academic deans and department chairs, and administered by
                  offices for academic or faculty affairs at each school.
                  Faculty and academic positions are posted at
                  academicpositions.harvard.edu, or you can click the "Faculty
                  and Other Academic Positions" button above to access the
                  related job listings.
                </p>
              </div>
            )}
          </div>
          <div className="emp-last-sec">
            <h1 className="emp-admin-h1">Join Us</h1>
            <p className="emp-last-sec-p">
              Accelerate the world's transition to sustainable energy
            </p>
            <button className="emp-last-sec-btn">View Job</button>
            <button className="emp-last-sec-btn">View Internship</button>
          </div>
        </div>
        <KithFooter />
      </>
    );
  }
}

export default KithCareer;
