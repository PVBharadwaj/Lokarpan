import AppCarousel from "../Carousals/ApplicationCarousal/AppCarousal";
import { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import EducationSubNav from "../Navbar/EducationSubNav";
import Navbar from "../Navbar/Navbar";
import "./Application.css";
import { FaRegGem } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

const Plans = [
  {
    color: "appblue",
    name: "Basic",
    cost: "₹100/mo.",
    desp: "Save $9/mo.** on your favorite content and iCloud+ storage.",
    // features: "loremipsum loremipsum",
    features1: ["icloud", "tv", "music", "arcade"],
    type: "Basic",
  },
  {
    color: "red",
    name: "Plus",
    cost: "₹100/mo.",
    desp: "Save $9/mo.** on your favorite content and iCloud+ storage.",
    // features: "loremipsum loremipsum",
    features1: ["icloud", "tv", "music", "arcade"],
    type: "Plus",
  },
  {
    color: "green",
    name: "Pro",
    cost: "₹100/mo.",
    desp: "Save $9/mo.** on your favorite content and iCloud+ storage.",
    // features: "loremipsum loremipsum",
    features1: ["icloud", "tv", "music", "arcade", "fitness", "news"],
    type: "Pro",
  },
];

const Application = () => {
  // const [popupVisibility, setPopupVisibility] = useState([false]);

  // const openpopup = (index) => {
  //   const updatedVisibility = [...popupVisibility];
  //   updatedVisibility[index] = true;
  //   setPopupVisibility(updatedVisibility);
  // };

  // const closepopup = (index) => {
  //   const updatedVisibility = [...popupVisibility];
  //   updatedVisibility[index] = false;
  //   setPopupVisibility(updatedVisibility);
  // };

  // useEffect(() => {
  //   const handleKeyPress = (event) => {
  //     if (event.which === 27) {
  //       setPopupVisibility(popupVisibility.map(() => false));
  //     }
  //   };
  //   window.addEventListener("keydown", handleKeyPress);
  //   return () => {
  //     window.removeEventListener("keydown", handleKeyPress);
  //   };
  // }, [popupVisibility]);

  // useEffect(() => {
  //   if (popupVisibility.some((isVisible) => isVisible)) {
  //     document.body.classList.add("body-no-scroll");
  //   } else {
  //     document.body.classList.remove("body-no-scroll");
  //   }
  // }, [popupVisibility]);

  return (
    <>
      <Navbar />
      <EducationSubNav />
      <div className="application-top-img"></div>
      {/* used kith alumini and employment pages */}
      <div className="app-page">
        <div className="app-div">
          {/* app-title title2, application-para1 - used in approach and kith/life-at-school/campus-and-culture */}
          <h1 className="app-title title2">
            Lokarpan presents a suite of digital applications to redefine
            classroom strategies
          </h1>
          {/* className="application-para1"  -- used in approach -> index.js */}
          <p className="application-para1">
            The education sector is constantly evolving, and technology has
            played a significant role in shaping the way we learn. Our goal? To
            take the stress out of assessment for learners and instructors
            alike.
          </p>
        </div>
      </div>

      <div className="app-wide-cards">
        <div className="app-wide-cards-inside-cont">
          <p className="digital-para app-space-below">
            Introducing Horizon App - Unlocking student potential anytime,
            anywhere.
          </p>
          <div
            style={{ backgroundColor: "#ff8cbd" }}
            className="adobe-horizon-in app-width-wise"
          >
            <h2 className="app-title title3 adobe-horizon-in-text adobe-horizon-wide-text">
              Learning with Horizon: Earn points, unlock levels, gain real-world
              skills
            </h2>
            {/* <p style={{padding: "0px 30px 50px", textAlign: "left"}} className="application-para2">
                </p> */}
          </div>
          <div className="adobe-horizon app-height-wise">
            <div
              style={{ border: "solid 2px black" }}
              className="adobe-horizon-in"
            >
              <h2 className="app-title title3 adobe-horizon-in-text">
                Students can practice bite-size quizzes anywhere, anytime
              </h2>
            </div>

            <div
              style={{ backgroundColor: "#ff8cbd" }}
              className="adobe-horizon-in"
            >
              <h2 className="app-title title3 adobe-horizon-in-text">
                Teachers can choose assessments, grade them and provide feedback
                with ease
              </h2>
            </div>
          </div>
          <div
            style={{ border: "solid 2px #d7d7d7" }}
            className="adobe-horizon-in app-width-wise"
          >
            <h2 className="app-title title3 adobe-horizon-in-text adobe-horizon-wide-text">
              Streamlined assessments can drive student progress with constant
              visibility
            </h2>
          </div>
        </div>
      </div>

      <div className="app-page app-div-bottom ">
        <div className="app-div">
          {/* <h1 className="title2"> */}
          <h1 className="app-title title2 app-" style={{ maxWidth: "800px" }}>
            Empower Teaching and Learning with Advanced Tools
          </h1>
          {/* <p className="app-para-5"> */}
          <p className="application-para1 app-para-5">
            Our Applications unlock the potential of personalised learning
            experiences, and time-saving solutions for educators.
          </p>
        </div>
      </div>
      {/* <AppCarousel /> */}

      <div className="square-cards-out">
        <div className="square-cards">
          {/* <div className="temp-container"> */}
          <div className="square-cards-each-cont">
            <div className="icon">
              <img
                src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1713120024/shuffle_ehqjjw.png"
                className="dig-icon-img"
              />
            </div>
            {/* <h4>Adobe</h4> */}
            <p>Track student performances</p>
          </div>
          <div className="square-cards-each-cont">
            <div className="icon">
              <img
                src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1713120024/shuffle_ehqjjw.png"
                className="dig-icon-img"
              />
            </div>
            {/* <h4>Content Creation</h4> */}
            <p>Track health and nutrition metrics</p>
          </div>
          <div className="square-cards-each-cont">
            <div className="icon">
              <img
                src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1713120024/shuffle_ehqjjw.png"
                className="dig-icon-img"
              />
            </div>
            {/* <h4>Analytics & Prediction</h4> */}
            <p>Gather data driven insights</p>
          </div>
          <div className="square-cards-each-cont">
            <div className="icon">
              <img
                src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1713120024/shuffle_ehqjjw.png"
                className="dig-icon-img"
              />
            </div>
            {/* <h4>Exams & Quizzes</h4> */}
            <p>Gamify results</p>
          </div>
          <div className="square-cards-each-cont">
            <div className="icon">
              <img
                src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1713120024/shuffle_ehqjjw.png"
                className="dig-icon-img"
              />
            </div>
            {/* <h4>Adobe</h4> */}
            <p>Submit sickness reports</p>
          </div>
          <div className="square-cards-each-cont">
            <div className="icon">
              <img
                src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1713120024/shuffle_ehqjjw.png"
                className="dig-icon-img"
              />
            </div>
            {/* <h4>Adobe</h4> */}
            <p>Access trends across institutions</p>
          </div>
          {/* </div> */}
        </div>
      </div>
      <div className="app-page">
        <div className="app-div">
          <div className="plan">
            <h1 style={{ maxWidth: "500px" }} className="app-title title2">
              Access one of our plans below
            </h1>
            {/* <p className="app-para-4"> */}
            <p className="application-para1 app-para-5">
              In education, technology serves as a powerful supplement to the
              expertise and creativity of educators. Our commitment to
              responsible tech practices ensures that our tools are
              human-centered and meticulously designed to enhance teaching and
              learning experiences.
            </p>

            <div className="app-card-list">
              {Plans.map((item, index) => (
                <Card key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="donate-section">
        <h1 className="last-space">Be a Catalyst for Change</h1>
        <p className="our-role-font24">
          Join Lokarpan in our mission to combat educational disparities,
          empowering at-risk communities for a brighter future. Your support
          fuels innovation and transformative impact.
        </p>
        <Link to="/donate">
          <button type="button" className="our-role-apply-btn">
            Donate
          </button>
        </Link>
      </div>
      <Footer />
    </>
  );
};

const Card = ({ item }) => {
  return (
    <div className="plan-list">
      <h3 className="plan-list-font">
        {/* <h1 className={item.color}> */}
        {/* <FaRegGem className="app-card-icon" /> */}
        {item.name}
      </h3>
      <h1 className={item.color}>{item.cost}</h1>
      <p className="plan-list-desp">{item.desp}</p>
      <hr style={{ margin: "10px 0px" }} />
      <div className="features-div">
        {item.features1.map((feature, index) => (
          <p key={index}>
            <FaCheckCircle className={`app-card-icon ${item.color}`} />
            {feature}
          </p>
        ))}
        {/* <p>
          <FaCheckCircle className={`app-card-icon ${item.color}`} />
          {item.features}
        </p>
        <p>
          <FaCheckCircle className={`app-card-icon ${item.color}`} />
          {item.features}
        </p>
        <p>
          <FaCheckCircle className={`app-card-icon  ${item.color}`} />
          {item.features}
        </p>
        <p>
          <FaCheckCircle className={`app-card-icon  ${item.color}`} />
          {item.features}
        </p> */}
      </div>

      <div className="apply-btn transparent">
        <Link to="/donate" className="apply-btn-text-black body-btn">
          Choose {item.type}
        </Link>
      </div>
    </div>
  );
};

export default Application;
