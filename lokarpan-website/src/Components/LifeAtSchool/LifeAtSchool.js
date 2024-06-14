import React from "react";
import { Link } from "react-router-dom";
import "./LifeAtSchool.css";
import KithNavbar from "../Navbar/KithNavbar/index";
import KithLifeAtSchoolSubNavbar from "../Navbar/KithLifeAtSchoolSubNavbar";
import KithFooter from "../KithFooter";
import Footer from "../KithFooter";

const LifeAtSchool = () => {
  return (
    <>
      <KithNavbar />
      <KithLifeAtSchoolSubNavbar />
      <div className="life-at-school-upper-section">
        {/* <p>
        Step into a place where every student's potential is nurtured and celebrated, and where our collective vision drives us towards excellence. At Kith n Kin School, our culture is built on inclusivity, collaboration, and a strong dedication to making a positive impact.
        </p> */}
      </div>
      <div className="kith-overview-div kith-overview-second-div">
        <h1 className="kith-life-head">Welcome to Kith</h1>
        <p className="kith-life-para">
          Step into a place where every student's potential is nurtured and
          celebrated, and where our collective vision drives us towards
          excellence. At Kith n Kin School, our culture is built on inclusivity,
          collaboration, and a strong dedication to making a positive impact.
        </p>
      </div>
      <div className="life-at-school-div">
        <h3 className="kith-life-head">Our Campus</h3>
        <p className="kith-life-para">
          While Kith n Kin School boasts a traditional physical campus, our
          virtual presence is equally vibrant. Engage with fellow students
          through our online learning platforms, join virtual events, and
          collaborate on projects that ignite your interests. Our campus extends
          beyond physical boundaries, allowing you to connect with peers from
          diverse backgrounds and locations.
        </p>
      </div>
      <div className="life-at-school-third-div life-at-school-div">
        <h3>Committee & Clubs</h3>
        <div className="clubs-div">
          <div>
            <img
              src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1709446763/Rectangle_1810_qknn4q.png"
              alt=""
            />
            <div className="give-card-text life-at-school">
              <ul>
                <li>
                  <span>Program Development Committee:</span> Shape the
                  direction of our programs and initiatives.
                </li>
                <li>
                  <span>Community Outreach Committee:</span> Connect with
                  external partners and extend Lokarpan's reach.
                </li>
                <li>
                  <span>Innovation and Technology Committee:</span> Explore
                  cutting-edge solutions to drive positive change.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1709446763/Rectangle_1811_k1elbd.png"
              alt=""
            />
            <div className="give-card-text life-at-school">
              <ul>
                <li>
                  <span>Program Development Committee:</span> Shape the
                  direction of our programs and initiatives.
                </li>
                <li>
                  <span>Community Outreach Committee:</span> Connect with
                  external partners and extend Lokarpan's reach.
                </li>
                <li>
                  <span>Innovation and Technology Committee:</span> Explore
                  cutting-edge solutions to drive positive change.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="life-at-school-div life-at-school-div-last">
        <h3>Safeguarding</h3>
        <img src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1709446763/Rectangle_1804_jmnf5c.png" />
        <ul>
          <li>
            Your privacy and personal information are of utmost importance to
            us. We have stringent measures in place to safeguard your data.
          </li>
          <li>
            Our online platforms are secure, and we regularly update our systems
            to ensure a safe digital environment for our students.
          </li>
          <li>
            Whether in-person or virtual, we prioritise the health and safety of
            our students. We strictly adhere to guidelines to maintain a secure
            and healthy campus environment.
          </li>
          <li>
            Whether in-person or virtual, we prioritise the health and safety of
            our students. We strictly adhere to guidelines to maintain a secure
            and healthy campus environment.
          </li>
          <li>
            At Kith n Kin School, we believe in nurturing not only academic
            excellence but also holistic growth and well-being. Join us on a
            journey where every student thrives and shines bright.
          </li>
        </ul>
      </div>
      <KithFooter />
    </>
  );
};

export default LifeAtSchool;
