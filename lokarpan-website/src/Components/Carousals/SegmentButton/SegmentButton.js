import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SegmentButton.css";

const SegmentButton = () => {
  const [active, setActive] = useState("deadline");

  const handleSegmentClick = (segment) => {
    setActive(segment);
  };

  return (
    <>
      <div className="segment-button">
        <div className="menu-items-seg">
          <div className="items-seg">
            <div
              className={
                active === "process"
                  ? "element-seg btn-active-seg"
                  : "element-seg"
              }
              onClick={() => handleSegmentClick("process")}
            >
              Process
            </div>
            <div
              className={
                active === "deadline"
                  ? "element-seg btn-active-seg"
                  : "element-seg"
              }
              onClick={() => handleSegmentClick("deadline")}
            >
              Deadline
            </div>

            <div
              className={
                active === "scholarships"
                  ? "element-seg btn-active-seg"
                  : "element-seg"
              }
              onClick={() => handleSegmentClick("scholarships")}
            >
              Scholarships
            </div>
          </div>
        </div>
        <div className="segments">
          {active === "deadline" && (
            <div className="segment-button-text">
              <div>
                <h2 className="how-to-head2">
                  At the Kith and Kin School in Malhausi, we operate two
                  application cycles annually: one running from March to May,
                  and the other from June to September. As of now, applications
                  for the 2023-2024 academic year have concluded.
                </h2>
                <h2 className="how-to-head2">
                  However, we are currently accepting applications for the
                  2024-2025 academic year. Prospective students are encouraged
                  to apply before the final application deadline on 15th
                  September, 2024, to secure their enrollment at our
                  institution.
                </h2>
              </div>

              <div>
                <h3>Apply now or register for more information</h3>
                <p>
                  To inquire or apply for the 2024-2025 school year please
                  follow this <a href="#">link.</a>
                </p>
              </div>
            </div>
          )}
          {active === "process" && (
            <div className="segment-button-text">
              <div>
                <h3>Application Form</h3>
                <p>
                  Kindly complete the application forms as well as submit the{" "}
                  <b>non-refundable application fee</b> of Rs.50. This fee can
                  also be paid online via the provided payment portal link. You
                  may also submit your application form on-site after scheduling
                  an appointment with the admissions office at the institute.
                </p>
                <p>
                  Once we review the completed application materials,
                  shortlisted students will receive an email or phone call
                  informing you whether or not the applicant will be invited for
                  the interview and testing. Due to a large number of inquiries,
                  the admission process follows a first in first out queue.
                </p>

                <h3>Application Decision</h3>
                <p>
                  For applicants, as soon as the form is submitted, the
                  admissions exam corrected and the application fee paid, our
                  admissions committee reviews each application and arrives at
                  one of the following decisions:
                </p>

                <ul className="segment-list">
                  <li>Acceptance</li>
                  <li>Deferral</li>
                  <li>Waiting List</li>
                  <li>Denial </li>
                </ul>
                <p>
                  <b>Note:</b> The turnaround time from a completed application
                  to decision is usually one week.
                </p>

                <h3>Understanding the decisions </h3>
                <p>Four decisions are possible:</p>
                <ul className="segment-list">
                  <li>Acceptance and an offer is made to the candidate</li>
                  <li>
                    In some cases, the admission decision may be deferred
                    because of competition for the applied class. In such cases,
                    parents or guardians are informed of when a decision can be
                    expected and the date when the application will be reviewed.
                  </li>
                  <li>
                    Waiting list means that candidates have the qualities to be
                    admitted but that there are currently no places left for
                    technical reasons i.e, the class is full. If the situation
                    changes, parents are informed and decide whether to accept
                    the place
                  </li>
                  <li>
                    Denial which means that a candidate cannot come to the Kith
                    n Kin School in the following September; the application
                    can, however be carried over into the next academic year
                  </li>
                </ul>
                <p>
                  <b>Note:</b> There is a limited number of seats at Kith and
                  even the most brilliant and well qualified students may not be
                  admitted if there is no room. The Kith n Kin school never
                  accepts donations. While the school may depend on the parents
                  and alumni and donors’ generosity, no contributions are
                  considered as guarantees or substitutes for the application
                  and assessment process.
                </p>
              </div>
            </div>
          )}
          {active === "scholarships" && (
            <div className="segment-button-text">
              <div className="kith-financials-each-sub-container">
                <h1 className="kith-financials-head">Scholarships</h1>
                <p className="kith-financials-para">
                  At Kith n Kin School, accessibility to quality education is
                  paramount, which is why we're committed to providing
                  scholarships to deserving students. Our scholarship program is
                  designed to assist both based on merit and financial need,
                  ensuring that no qualified student is hindered by financial
                  constraints.
                </p>
                <p className="kith-financials-para">
                  Our scholarship application process begins each year in March.
                  Families interested in applying will receive comprehensive
                  instructions on how to navigate our resources effectively. The
                  School welcomes those students who will not only reap benefits
                  from attending the school, but will also learn to be a leader
                  and make a difference in society and in life at large.
                </p>
                <p className="kith-financials-para">
                  There is an annual allocation of scholarships for this
                  purpose. The School offers three kinds of scholarships to
                  enable and encourage meritorious students.
                </p>
                <div className="k-f-sub-each-cat">
                  <h2 className="kith-financials-head2">
                    CATEGORY A: Merit-cum Means Scholarship for New Admissions
                  </h2>
                  <p className="kith-financials-para">
                    Scholarships are offered to new students based on their
                    performance in the Aptitude Test and their need for their
                    financial assistance. The criteria for the Merit-cum-Means
                    Scholarship are as follows:
                  </p>
                  <ul>
                    <li>Student must enroll for the assessment.</li>
                    <li>
                      The student must clear the entrance assessment with 80%
                      for higher accuracy
                    </li>
                  </ul>
                </div>
                <div className="k-f-sub-each-cat">
                  <h2 className="kith-financials-head2">
                    CATEGORY B: Merit-cum-Means Scholarship for Existing
                    Students
                  </h2>
                  <p className="kith-financials-para">
                    Scholarships for existing students are awarded based their
                    performance in academics, sports and co-curricular
                    activities, as well as their need for financial assistance.
                    The criteria for this scholarship are as follows:
                  </p>
                  <ul>
                    <li>
                      The student must be among the top 10% rank holders in
                      their batch.
                    </li>
                    <li>
                      The student must have a minimum GPA (Grade Point Average)
                      of 3.5.
                    </li>
                    <li>
                      The student must belong to a minority community or the EWS
                      (Economically Weaker Section) category.
                    </li>
                  </ul>
                </div>
                <div className="k-f-sub-each-cat">
                  <h2 className="kith-financials-head2">
                    CATEGORY C: Purely Merit-Based Scholarship for New
                    Admissions
                  </h2>
                  <p className="kith-financials-para">
                    Scholarships are awarded purely on merit to recognize new
                    students for their execellent performance, regardless of
                    their financial needs. The criteria for this scholarship are
                    as follows:
                  </p>
                  <ul>
                    <li>
                      The student must be among the top 5% rank holders in their
                      batch
                    </li>
                    <li>
                      The student must have a minimum GPA (Grade Point Average)
                      of 3.5.
                    </li>
                  </ul>
                </div>
              </div>

              <p className="kith-financials-para">
                <b>Disclaimer:</b> All rights to scholarships are reserved with
                the School Management. The scholarship categories include full
                or partial fee waiver for the full-time course, an arrival
                allowance, and an allowance for school stationary.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SegmentButton;
