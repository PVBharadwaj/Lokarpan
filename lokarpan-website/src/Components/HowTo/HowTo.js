import React, { useState } from "react";
import "./HowTo.css";
import { Link } from "react-router-dom";
import SegmentButton from "../Carousals/SegmentButton/SegmentButton";
import Navbar from "../Navbar/KithNavbar";
import Footer from "../KithFooter";
import KithAdmissionSubNavbar from "../Navbar/KithAdmissionSubNavbar";

const HowTo = () => {
  const howtoFaqs = [
    {
      id: 1,
      question: "1. How do I apply for admission to Kith n Kin School?",
      answer:
        "You can start the admission process by registering an interest on our website or by contacting our admissions office for further assistance.",
    },
    {
      id: 2,
      question:
        "2. What are the age requirements for admission to different grades?",
      answer:
        "Age requirements vary depending on the grade level. Please contact our admissions office for specific age criteria.",
    },
    {
      id: 3,
      question: "3. What documents are required for the admission process?",
      answer:
        "Required documents typically include a completed application form, academic transcripts, birth certificate, copies of aadhar, PEN code, and your UDISE+ number.",
    },
    {
      id: 4,
      question: "4. Is there an entrance exam for admission?",
      answer:
        "Yes, depending on the grade level, applicants may be required to take an entrance exam as part of the admission process. However, we do conduct a basic aptitude and language test during our interview round to determine your eligibility. Please contact our admissions office for more information.",
    },
    {
      id: 5,
      question: "5. When does the admission process start and end?",
      answer:
        "The admission process typically starts in March and ends in August. Specific dates may vary each year, so it's advisable to check our website or contact our admissions office for current information.",
    },
    {
      id: 6,
      question:
        "6. Are there any specific criteria for admission, such as academic or extracurricular achievements?",
      answer:
        "Admission criteria may include academic performance, extracurricular activities, and an assessment of the student's character and potential to contribute positively to the school community.",
    },
    {
      id: 7,
      question: "7. Is financial aid or scholarships available for students?",
      answer:
        "Yes, we offer scholarships to eligible students based on both merit and need. For more information on financial assistance options, please contact our admissions office.",
    },
    {
      id: 8,
      question: "8. How will I be notified of my admission status?",
      answer:
        "You will be notified of your admission status via email or postal mail within a specified timeframe after completing the application process.",
    },
    {
      id: 9,
      question:
        "9. Can I schedule a campus tour or interview before applying for admission?",
      answer:
        "Yes, we encourage prospective students and their families to schedule a campus tour and interview to learn more about our school community and programs. Please contact our admissions office to arrange a visit.",
    },
    {
      id: 10,
      question:
        "10. Whom should I contact if I have further questions about the admission process?",
      answer:
        "For any further questions or assistance regarding the admission process, please feel free to contact our admissions office either by phone or email. We're here to help!",
    },
  ];

  const [showAll, setShowAll] = useState(false);

  const [checkboxes, setCheckboxes] = useState(
    howtoFaqs.reduce((acc, curr) => {
      acc[curr.id] = false;
      return acc;
    }, {})
  );

  const handleCheckboxChange = (id) => {
    setCheckboxes((prev) => ({
      // ...prev,
      [id]: !prev[id],
    }));
  };

  const handleShowAllClick = () => {
    setShowAll((prevShowAll) => {
      const newShowAll = !prevShowAll;
      if (!newShowAll) {
        setCheckboxes(
          howtoFaqs.reduce((acc, curr) => {
            acc[curr.id] = false;
            return acc;
          }, {})
        );
      }
      return newShowAll;
    });
  };

  return (
    <>
      <Navbar />
      <KithAdmissionSubNavbar />
      <div className="how-to-upper-section"></div>
      <div className="kith-overview-div kith-overview-second-div">
        <h3 className="kith-life-head-ch">
          {" "}
          The mission of the Kith n Kin School is to educate leaders to make a
          difference in the world. In each class, we create a dynamic
          environment that mirrors the breadth and depth of our world. Our
          promise to our faculty, researchers and to every Kith student is to
          create a class of exceptional students who bring as many different
          experiences and perspectives as possible.
        </h3>
      </div>
      <div className="howto-page">
        <div className="howto-card">
          <div className="howto-card-img"></div>
          <div className="howto-card-text">
            <h3>How To Apply</h3>
            <p>
              We have a three step admission process. The first step is to
              submit an application. After your application has been submitted
              and reviewed, you may be invited to an interview. Your interview
              will be tailored to your child’s personality and cognitive level
              and is designed to learn more about your child in the context of a
              conversation. Older students are required to undertake a common
              entrance test. Finally, we ask that you assemble and prepare a
              variety of materials like your school report cards, birth
              certificate and Aadhar.
            </p>
          </div>
        </div>
        <div className="howto-start-app-cont">
          <h2 className="howto-start-head1">1. Starting An Application</h2>
          <p className="howto-start-head2">
            For all first year and transfer applicants, your first step will be
            to fill out and submit an application.
          </p>
          <h2 className="howto-start-head1">Application Requirements</h2>
          <p className="howto-start-head2">
            All applicants - first year and transfer students - must complete
            the following application components.
          </p>
          <ul className="howto-start-list">
            <li>Application form </li>
            <li>INR 50 fee </li>
            <li>Common entrance test </li>
            <li>Birth certificate</li>
            <li>
              Aadhar card (Students who have yet to apply for an Aadhar card can
              undergo their registration process for an Aadhar card at the
              institution itself)
            </li>
            <li>
              Parent/guardian details, including phone number, home address and
              Aadhar Card
            </li>
            <li>Passport sized photograph of the prospective student.</li>
          </ul>
          <p className="howto-start-head2">For transfer students:</p>
          <ul className="howto-start-list">
            <li>Student PEN (Permanent Education Number) code </li>
            <li>
              Prior school name and address, and/or include your UDISE+ (Unified
              District Information System for Education Plus) portal number
            </li>
            <li>
              Parent/guardian details, including phone number, home address and
              Aadhar Card
            </li>
            <li>
              Proof of Age: Birth Certificate or Aadhar card application for
              minors
            </li>
            <li>Passport sized photograph of the prospective student</li>
            <li>Transcripts from your previous school (if applicable)</li>
            <li>
              Transfer certificate (please inform admissions team if you haven't
              received a TC)
            </li>
          </ul>
          <p className="howto-start-head2">
            <b>Important:</b> For Playgroup, a child should be 3 years of age as
            on December 31 of the academic year in which the parents are
            applying. Our admissions team is happy to help with any questions
            that you may have.{" "}
          </p>
          <h2 className="howto-start-head1">
            2. Interview and Common Entrance Test
          </h2>
          <p className="howto-start-head2">
            Once online application forms and required documents have been
            received, candidates are invited to our campus to get to know the
            school and to take a common entrance test in mathematics, english
            and hindi. They are interviewed by academic heads and they have the
            chance to ask questions.
          </p>
          <p className="howto-start-head2">
            If the student is not invited for an interview, this will bring the
            admissions process to an end. If the student is invited to the
            school for an interview and testing, we would normally arrange a
            time and date for a visit, during which time a tour of the school
            would also be given. No entrance test will be conducted for students
            from playgroup to grade three, however, they may undergo an
            interview to assess their personality and cognitive level.
          </p>
          <p className="howto-start-head2">
            <b>Disclaimer: </b>Children develop fairly quickly over the course
            of a year and all candidates who are refused an admission or a place
            can always reapply for the following year. To increase their chances
            of admission, applicants are encouraged to apply as early as
            possible after the month of February.
          </p>
          <p className="howto-start-head2">
            For further assistance, please reach out to us at{" "}
            <a href="mailto:support@lokarpan.com" className="howto-mail-link">
              support@lokarpan.com
            </a>
          </p>
        </div>
        <SegmentButton />
      </div>
      <div className="how-to-questions-section">
        <div className="how-to-faq-section">
          <div className="how-to-head-sec">
            <h1 className="how-to-faqs-head">Frequently asked Questions</h1>
            <p className="how-to-faqs-para-1" onClick={handleShowAllClick}>
              {showAll ? "Hide All" : "Show All"}
            </p>
          </div>

          <ul className="how-to-questions-container-1">
            {howtoFaqs.map((each) => (
              <li className="how-to-each-question-1" key={each.id}>
                <input
                  type="checkbox"
                  id={each.id}
                  name={each.id}
                  checked={showAll || checkboxes[each.id]}
                  onChange={() => handleCheckboxChange(each.id)}
                  className="how-to-input-1"
                />
                <label htmlFor={each.id} className="how-to-question-1">
                  {each.question}
                </label>
                <div className="how-to-ans-sec-1">
                  <p className="how-to-faq-answer-1">{each.answer}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="howto-apply">
        <h1>Ready to Apply</h1>
        <a style={{textDecoration: "None"}} href="https://docs.google.com/forms/d/e/1FAIpQLSdSOC6OuqumZ14IayR0pr0AaGqM7KzJD1kRsgsxXC7xnbcxFg/viewform" target="_blank" rel="noopener noreferrer">
              <button className="how-to-apply-btn">
              Apply
              </button>
            </a>
      </div>
      <Footer />
    </>
  );
};

export default HowTo;
