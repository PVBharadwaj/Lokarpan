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
      <div className="how-to-upper-section">
        <h1>
          We are thrilled to extend a warm welcome to you as part of the Kith n
          Kin family
        </h1>
      </div>
      <div className="howto-page">
        <div className="howto-card">
          <div className="howto-card-img"></div>
          <div className="howto-card-text">
            <h3>How to?</h3>
            <p>
              As you embark on this journey with us, your commitment and
              enthusiasm are integral to our success. Lokarpan is built on the
              principles of transparency, inclusivity, and empowerment.
            </p>
          </div>
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
        <button className="how-to-apply-btn">Apply</button>
      </div>
      <Footer />
    </>
  );
};

export default HowTo;
