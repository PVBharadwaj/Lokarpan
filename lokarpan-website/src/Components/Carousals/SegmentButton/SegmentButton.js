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
                <h3>Applicants to Kith must have the following:</h3>
                <h2 className="how-to-head2">
                  An existing student in a school
                </h2>
                <ul>
                  <li>Ensure you have a valid Aadhar card.</li>
                  <li>
                    Provide your Student PEN (Permanent Education Number) code.
                  </li>
                  <li>
                    Provide your prior school name and address,, and/orInclude
                    your UDISE+ (Unified District Information System for
                    Education Plus) portal number.
                  </li>
                  <li>
                    Submit transcripts from your previous educational
                    institutions.
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="how-to-head2">
                  Entering the school system(out of school students, preprimary
                  or primary student who is entering the educational system for
                  the first time)
                </h2>
                <ul>
                  <li>
                    Parent and guardian details includes phone, address, aadhar
                  </li>
                  <li>
                    Proof of ageBirth certificate or aadhar application for
                    minors.
                  </li>
                  <li>
                    Caveat: Post admission, students who have yet to apply for
                    an aadhar can undergo their registration process for an
                    adhaar at the institution.
                  </li>
                </ul>
              </div>
              <div>
                <h3>Application Form</h3>
                <p>
                  Please complete the application forms and submit the
                  non-refundable application fee of Rs 50. This fee can also be
                  paid online. The link to the payment portal is{" "}
                  <a href="#">here</a>. you may also submit your application on
                  site after seeking an appointment at the institute.
                </p>
                <p>
                  If you have a child currently enrolled at Kith or one who has
                  recently graduated from Kith, please do not create a separate
                  profile for the new prospective student. Instead, we encourage
                  you to log in with your existing account details. If you don't
                  remember your login information, please reach out to us at
                  Admissions@kithnkinschool.org for assistance
                </p>
                <p>
                  Once we review the completed application materials, you will
                  receive an email informing you whether or not the applicant
                  will be invited for the interview and testing.
                </p>
              </div>
              <div>
                <h3>Interview</h3>
                <p>
                  If the student is not invited for an interview, this will
                  bring the admissions process to an end. If the student is
                  invited to the school for an interview and testing, we would
                  normally arrange a time and date for a visit, during which
                  time a tour of the school would also be given.
                </p>
              </div>
              <div>
                <h3>Financial Aid</h3>
                <p>
                  If you require “Financial Aid,” kindly specify this in your
                  application. Once indicated, the grant application form will
                  be made available in the checklist.
                </p>
              </div>
            </div>
          )}
          {active === "process" && (
            <div className="segment-button-text">
              <div>
                <h3>Your application deadline</h3>
                <p>
                  At the Kith and Kin School in Malhausi, we operate two
                  application cycles annually: one running from March to May,
                  and the other from June to August. As of now, applications for
                  the 2023-2024 academic year have concluded.
                </p>
                <p>
                  However, we are currently accepting applications for the
                  2024-2025 academic year. Prospective students are encouraged
                  to apply before the final application deadline on August 31,
                  2024, to secure their enrollment at our institution.
                </p>
              </div>
              <div>
                <h3>Apply now or register for more information</h3>
                <p>
                  To inquire or apply for the 2024-2025 school year please
                  follow this <a href="#">link</a>.
                </p>
              </div>
            </div>
          )}
          {active === "scholarships" && (
            <div className="segment-button-text">
              <div>
                <p>
                  At Kith n Kin School, accessibility to quality education is
                  paramount, which is why we're committed to providing
                  scholarships to deserving students. Our scholarship program is
                  designed to assist both based on merit and financial need,
                  ensuring that no qualified student is hindered by financial
                  constraints.
                </p>
                <p>
                  Our scholarship application process begins each year in March.
                  Families interested in applying will receive comprehensive
                  instructions on how to navigate our resources effectively.
                </p>
                <p>
                  Once you've submitted your formal application to our
                  institution, we'll guide you through the scholarship process
                  tailored to your specific requirements. For more details on
                  eligibility criteria, please visit our FAQ section.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SegmentButton;
