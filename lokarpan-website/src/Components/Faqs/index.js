import React, { useEffect, useState, useRef } from "react";
import FinancialNav from "../Navbar/FinancialSubNav/FinancialNav";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { FaCirclePlus } from "react-icons/fa6";
import "./index.css";

const questions = [
  {
    id: 1,
    question: "Are my donations eligible for tax exemptions?",
    answer:
      "Yes, Lokarpan (registered as ?) is registered for Tax Exemption under Section 80G of the Income Tax Act, 1961. All donations to Lokarpan are 50% exempt from tax under Section 80G. This is valid only for Indian Citizens",
  },
  {
    id: 2,
    question: "How can I donate if I am not an Indian Citizen?",
    answer:
      "You can continue to donate to Lokarpan even if you are not an Indian citizen. You can donate through our U.S. partner website, Benevity. To know more, you can reach out to us at support@lokarpan.com.",
  },
  {
    id: 3,
    question: "How is my money being used?",
    answer:
      "Your contribution will be used to further our vision. This may look like equipping our Students with classroom supplies, supporting a training event for our Fellows, or contributing to the salary of a staff member. Each and every contribution takes us one step further towards achieving an excellent, equitable education for our Students. Please write to support@lokarpan.com for any assistance or queries regarding your donations.",
  },
  {
    id: 4,
    question: "When will I receive my tax exemption certificate?",
    answer:
      "We will send a Section 80G Income Tax Exemption receipt of your donation to the email address you provide within 30 days from the date of your donation.",
  },
];

const Faqs = () => {
  return (
    <>
      <Navbar />
      <FinancialNav
        navbarTitle="Donate"
        navitem1="Donate"
        navitem2="FAQ"
        link1="/donate"
        link2="/faqs"
      />
      <div className="faqs-container">
        <div className="donate-upper-section">
          <img src="https://res.cloudinary.com/digbzwlfx/image/upload/v1708856246/image_345_du7cda.png" />
          <h1 className="faqs-font64">Frequently Asked Questions</h1>
        </div>
        <div className="faqs-browse-sec">
          <h2>Browse through some common questions that you might have.</h2>
          <p>
            If you don’t find what you’re looking for, please write to us at
            support@lokarpan.com and we’ll be happy to address your query!
          </p>
        </div>
        <div className="donate-faq-section">
          <div className="faqs-head-sec">
            <h1 className="faqs-head">Frequently Asked Questions</h1>
            <p className="faqs-para-1">Show All</p>
          </div>

          <ul className="questions-container-1">
            {questions.map((each) => (
              <li className="each-question-1" key={each.id}>
                <input
                  type="checkbox"
                  id={each.id}
                  name={each.id}
                  className="input-1"
                />
                <label
                  htmlFor={each.id}
                  className="question-1"
                  style={{ color: "#000000" }}
                >
                  {each.question}
                </label>
                <div className="ans-sec-1">
                  <p className="faq-answer-1">{each.answer}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Faqs;
