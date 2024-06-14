import { useState,useEffect, Component } from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { RxCross2 } from "react-icons/rx";
import SubNavbar from "../../Navbar/SubNavbar";
import { FaCirclePlus } from "react-icons/fa6";
import './Mission.css'

const CodeOfConduct = () => {

      
const [popupVisibility, setPopupVisibility] = useState([false, false]); // Initialize with false for each popup

const openpopup = (index) => {
  const updatedVisibility = [...popupVisibility];
  updatedVisibility[index] = true;
  setPopupVisibility(updatedVisibility);
};

const closepopup = (index) => {
  const updatedVisibility = [...popupVisibility];
  updatedVisibility[index] = false;
  setPopupVisibility(updatedVisibility);
};

useEffect(() => {
  const handleKeyPress = (event) => {
    if (event.which === 27) {
      setPopupVisibility(popupVisibility.map(() => false));
    }
  };
  window.addEventListener("keydown", handleKeyPress);
  return () => {
    window.removeEventListener("keydown", handleKeyPress);
  };
}, [popupVisibility]);

useEffect(() => {
  if (popupVisibility.some((isVisible) => isVisible)) {
    document.body.classList.add('body-no-scroll');
  } else {
    document.body.classList.remove('body-no-scroll');
  }
}, [popupVisibility]);




    return (
      <>
        <Navbar />
        <SubNavbar />
        <div className="mission-img">
        <h1 className="mission-head-div-head">Code of Conduct</h1>
      </div>
        <div className="faqs-container">
          <div style={{width: "100%"}} className="donate-faq-section">
            {/* <div className="faqs-head-sec">
              <h1 className="faqs-head">Code of Conduct</h1>
              <p className="faqs-para-1" onClick={() => setShowAll(!showAll)}>Show All</p>
            </div> */}


            <ul className="questions-container-1 coc-questions">
              <li onClick={() => openpopup(0)}>Integrity and Honesty</li>
              <li onClick={() => openpopup(1)}>Respect and Inclusivity</li>
              <li onClick={() => openpopup(2)}>Confidentiality and Privacy</li>
              <li onClick={() => openpopup(3)}>Empowerment and Self-Reliance</li>
              <li onClick={() => openpopup(4)}>Accountability and Responsibility</li>
              <li onClick={() => openpopup(5)}>Professionalism and Excellence</li>
              <li onClick={() => openpopup(6)}>Compliance with Laws and Regulations</li>
              <li onClick={() => openpopup(7)}>Conflict Resolution and Open Communication</li>
              <li onClick={() => openpopup(8)}>Environmental Responsibility</li>
              <li onClick={() => openpopup(9)}>Community Engagement and Collaboration</li>
            </ul>
            {popupVisibility[0] && (
              <div className="misson-popup">
                <div className="misson-popup-content">
                  <RxCross2 
                    onClick={() => closepopup(0)} 
                    className="x"
                  />
                  <p className="mission-para">
                  At Lokarpan, we conduct ourselves with the highest standards of integrity and honesty. We are committed to transparency in all our dealings and interactions, ensuring that our actions are always in alignment with our values.
                  </p>
                </div>
              </div>
            )}
            {popupVisibility[1] && (
              <div className="misson-popup">
                <div className="misson-popup-content">
                  <RxCross2 
                    onClick={() => closepopup(1)} 
                    className="x"
                  />
                  <p className="mission-para">
                  We respect the dignity and rights of every individual, valuing diversity and inclusivity in all aspects of our work. Discrimination of any kind is not tolerated, and we strive to create an environment where everyone feels valued and heard.
                  </p>
                </div>
              </div>
            )}
            {popupVisibility[3] && (
              <div className="misson-popup">
                <div className="misson-popup-content">
                  <RxCross2 
                    onClick={() => closepopup(3)} 
                    className="x"
                  />
                  <p className="mission-para">
                  Our aim is to empower individuals and communities to become self-reliant and independent. We believe in fostering self-sufficiency through education, skill-building, and creating opportunities for growth.
                  </p>
                </div>
              </div>
            )}
            {popupVisibility[2] && (
              <div className="misson-popup">
                <div className="misson-popup-content">
                  <RxCross2 
                    onClick={() => closepopup(2)} 
                    className="x"
                  />
                  <p className="mission-para">
                  We understand the importance of confidentiality and privacy, especially when dealing with sensitive information. All personal and organisational data is handled with the utmost care and respect for privacy rights.
                  </p>
                </div>
              </div>
            )}
            {popupVisibility[4] && (
              <div className="misson-popup">
                <div className="misson-popup-content">
                  <RxCross2 
                    onClick={() => closepopup(4)} 
                    className="x"
                  />
                  <p className="mission-para">
                  Every member of Lokarpan is accountable for their actions and decisions. We take responsibility for the impact of our work and strive to continuously improve and learn from both successes and failures.
                  </p>
                </div>
              </div>
            )}
            {popupVisibility[5] && (
              <div className="misson-popup">
                <div className="misson-popup-content">
                  <RxCross2 
                    onClick={() => closepopup(5)} 
                    className="x"
                  />
                  <p className="mission-para">
                  We uphold professional standards of conduct in all our interactions, maintaining a commitment to excellence in our work. We strive for quality, innovation, and continuous improvement in everything we do.
                  </p>
                </div>
              </div>
            )}
            {popupVisibility[6] && (
              <div className="misson-popup">
                <div className="misson-popup-content">
                  <RxCross2 
                    onClick={() => closepopup(6)} 
                    className="x"
                  />
                  <p className="mission-para">
                  Lokarpan operates in full compliance with all applicable laws, regulations, and ethical standards. We ensure that our actions are legal, ethical, and in accordance with our mission and values.
                  </p>
                </div>
              </div>
            )}
            {popupVisibility[7] && (
              <div className="misson-popup">
                <div className="misson-popup-content">
                  <RxCross2 
                    onClick={() => closepopup(7)} 
                    className="x"
                  />
                  <p className="mission-para">
                  In the event of conflicts or disagreements, we encourage open and respectful communication to find constructive solutions. We value feedback and input from all stakeholders and work towards resolving issues in a fair and timely manner.
                  </p>
                </div>
              </div>
            )}
            {popupVisibility[8] && (
              <div className="misson-popup">
                <div className="misson-popup-content">
                  <RxCross2 
                    onClick={() => closepopup(8)} 
                    className="x"
                  />
                  <p className="mission-para">
                  Recognizing our impact on the environment, we are committed to sustainable practices and minimising our ecological footprint. We strive to protect and preserve natural resources for future generations.
                  </p>
                </div>
              </div>
            )}
            {popupVisibility[9] && (
              <div className="misson-popup">
                <div className="misson-popup-content">
                  <RxCross2 
                    onClick={() => closepopup(9)} 
                    className="x"
                  />
                  <p className="mission-para">
                  Lokarpan values partnerships and collaboration with local communities, organisations, and stakeholders. We believe in the power of collective action and work together towards shared goals for the betterment of society.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <Footer />
      </>
    );
}

export default CodeOfConduct;
