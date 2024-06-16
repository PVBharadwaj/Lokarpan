import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import SupportSubNav from "../Navbar/SupportSubNav/SupportSubNav";
import "./WhyDonate.css";
import { Link } from "react-router-dom";

import { IoIosArrowForward } from "react-icons/io";
import { RxFontSize } from "react-icons/rx";

const WhyDonate = () => {
  return (
    <>
      <Navbar />
      <SupportSubNav />
      <div className="donate-first-div">
        <h1>Why Donate to Lokarpan?</h1>
        {/* <p>
          We are facing our worst inequity ever. Millions of children in India
          do not have access to quality education. We envision a future where
          each one of these children will have an opportunity to attain an
          excellent education. It is this belief that every child can and must
          attain an excellent education, that drives each one of us at Lokarpan
          to work harder. We do all that we can to support every Fellow with
          training, mentors and resources to help them put children on a
          different life path.
        </p> */}
      </div>
      <div className="why-donate">
        {/* <div className="why-donate-topdiv">
          <p>
            We are facing our worst inequity ever. Millions of children in India
            do not have access to quality education. We envision a future where
            each one of these children will have an opportunity to attain an
            excellent education. It is this belief that every child can and must
            attain an excellent education, that drives each one of us at
            Lokarpan to work harder. We do all that we can to support every
            Fellow with training, mentors and resources to help them put
            children on a different life path.
          </p>
        </div> */}
        {/* <div className="donate-card">
          <div className="donate-card-img donate-card-img-1"></div>
          <div className="donate-card-text">
            <h1>Adding years to life and life to years</h1>
            <p>
              We are facing our worst inequity ever. Millions of children in India
              do not have access to quality education. We envision a future where
              each one of these children will have an opportunity to attain an
              excellent education. It is this belief that every child can and must
              attain an excellent education, that drives each one of us at Lokarpan
              to work harder. We do all that we can to support every Fellow with
              training, mentors and resources to help them put children on a
              different life path.
            </p>
          </div>
        </div> */}



          <div className="health-each-container approach-each-container">
            <div className="health-content-section why-donate-cards-cont approach-content-section content-left">
              <h1 className="approach-lokarpan-head3">
              Help us further our vision
              </h1>
              <p className="approach-card-para">
              We are facing our worst inequity ever. Millions of children in
              India do not have access to quality education. We envision a
              future where each one of these children will have an opportunity
              to attain an excellent education. It is this belief that every
              child can and must attain an excellent education, that drives each
              one of us at Lokarpan to work harder. We do all that we can to
              support every Fellow with training, mentors and resources to help
              them put children on a different life path.
              </p>
            </div>
            <div className="health-cont-img-div donate-card-img-2"></div>
          </div>
          <div className="health-each-container approach-each-container">
            <div className="health-cont-img-div donate-card-img-3"></div>
            <div className="health-content-section why-donate-cards-cont approach-content-section content-left">
              <h1 className="approach-lokarpan-head3">
              Why Education?
              </h1>
              <p className="approach-card-para">
              Education is the cornerstone of societal advancement, empowering
              individuals with the knowledge, skills, and confidence to thrive
              in an ever-changing world. At Lokarpan, we believe that investing
              in education is not only a moral imperative but also a strategic
              necessity for sustainable development. By providing access to
              quality education, we equip individuals with the tools they need
              to break the cycle of poverty, contribute meaningfully to their
              communities, and drive progress for generations to come.
              </p>
            </div>
          </div>
          <div className="health-each-container approach-each-container">
            <div className="health-content-section why-donate-cards-cont approach-content-section content-left">
              <h1 className="approach-lokarpan-head3">
              Why Focus on Rural Communities?
              </h1>
              <p className="approach-card-para">
              Rural communities are the backbone of our nation, yet they often
              face significant challenges in accessing basic services and
              opportunities. At Lokarpan, we believe in the power of inclusive
              development that leaves no community behind. By prioritising
              communities living in stress, we aim to address the unique needs
              and aspirations of those living in remote areas, ensuring that
              they have equal access to essential resources such as education,
              healthcare, livelihood opportunities and clean water. Through
              targeted interventions and community-driven initiatives, we strive
              to empower rural communities to build sustainable futures and
              thrive in the face of adversity.
              </p>
            </div>

            <div className="health-cont-img-div donate-card-img-4"></div>
          </div>
      </div>

      <div className="donate-section">
        <h1 className="last-space1">Be a Catalyst for Change</h1>
        <p className="our-role-font241">
          Join Lokarpan in our mission to combat social and economic
          disparities, empowering at-risk communities for a brighter future.
          Your support fuels innovation and transformative impact.
        </p>
        {/* <Link to="/donate" > */}
        <Link to="/donate">
          <button type="button" className="our-role-apply-btn">
            Donate
          </button>
        </Link>
      </div>
      {/* <div className="whydonate-opp">
        <h1>
          An AI power play: Fueling the next wave of innovation in the energy
          sector
        </h1>
        <div className="hyperlinks">
          <div className="apply-btn orange">
            <div>
              <Link
                to="/donate"
                
                className="apply-btn-text-white body-btn"
              >
                Donate
              </Link>
            </div>
          </div>
          <div>
            <Link
              to="/faqs"
             
              className="donate-hyperlink"
              href="/faqs"
            >
              FAQ
              <IoIosArrowForward style={{ fontSize: "15px" }} />
            </Link>
          </div>
        </div>
      </div> */}
      <Footer />
    </>
  );
};

export default WhyDonate;
