import React from "react";
import "./Academics.css";
import { Link } from "react-router-dom";
import KithNavbar from "../Navbar/KithNavbar/index";
import KithLifeAtSchoolSubNavbar from "../Navbar/KithLifeAtSchoolSubNavbar";
import KithFooter from "../KithFooter/index";
import Footer from "../KithFooter";

const Academics = () => {
  return (
    <>
      <KithNavbar />
      <KithLifeAtSchoolSubNavbar />
      <div className="academics-upper-section"></div>
      <div className="academics-upper-section-text">
        <h1>Academics</h1>
        <p>
          Our curriculum fosters academic excellence, encouraging independent
          thinking and nurturing a lifelong curiosity and love for learning.
        </p>
      </div>
      <div className="academics-stats">
        <div>
          <p>X</p>
          <p>Faculty Members</p>
        </div>
        <div>
          <p>6:1</p>
          <p>Student-to-faculty ratio</p>
        </div>
        <div>
          <p>Nearly X</p>
          <p>Course offered</p>
        </div>
      </div>
      <div className="academics-div">
        <h1>Curriculum and Approach</h1>
        <div className="academics-card">
          <div className="academics-card-img academics-card-img-1"></div>
          <div className="academics-card-text">
            <div>
              <h3>Holistic and Beyond Standard Policies</h3>
              <p>
                Our curriculum personalised learning pathways that extend beyond
                the NEP policy for Indian students, incorporating international
                standards like the Macau International School, IB Curriculum,
                and ICSE board.
              </p>
              {/* <Link to="/" className="kith-link">
                Stanford Undergrad
              </Link> */}
            </div>
          </div>
        </div>
        <div className="academics-card">
          <div className="academics-card-text">
            <div>
              <h3>Innovative and Inclusive Learning Environment</h3>
              <p>
                The Kith Centre of Excellence is dedicated to training educators
                to deliver world-class education
              </p>
              {/* <Link to="/" className="kith-link">
                Explore Majors
              </Link> */}
            </div>
          </div>
          <div className="academics-card-img academics-card-img-1"></div>
        </div>
        <div className="academics-card">
          <div className="academics-card-img academics-card-img-1"></div>
          <div className="academics-card-text">
            <div>
              <h3>Integration with Lokarpan</h3>
              <p>
                Kith works alongside Lokarpan to innovate and refine solutions
                in online learning, analytics, teaching methodology, performance
                feedback, practice and testing, as well as health and nutrition.
              </p>
              {/* <Link to="/" className="kith-link">
                Facts about the Undergraduate Program
              </Link> */}
            </div>
          </div>
        </div>
      </div>
      <div className="academics-div academics-div-blue">
        <h3>
          At Kith, we integrate technology as a tool to deliver a state of the
          art curriculum, offering students boundless opportunities to pursue
          their passions.
        </h3>
        <Link to="/donate" className="kith-apply-btn white">
          Apply
        </Link>
      </div>
      <div className="academics-div">
        <h1>Language and Bilingual Education</h1>
        <div className="academics-card academics-card-reverse">
          <div className="academics-card-text">
            <div>
              <h3>Encouraging Bilingualism</h3>
              <p>
                English is the medium of instruction, with opportunities to
                learn and build expertise across both English and other
                languages.
              </p>
              {/* <Link to="/" className="kith-link">
                Graduate Education
              </Link> */}
            </div>
          </div>
          <div className="academics-card-img academics-card-img-2"></div>
        </div>
        <div className="academics-card">
          <div className="academics-card-img academics-card-img-2"></div>
          <div className="academics-card-text">
            <div>
              <h3>Language Learning Opportunities</h3>
              <p>
                Beyond the primary years, students are individually advised on
                their choices of foreign language classes including Sanskrit,
                German, Portuguese, and Spanish.
              </p>
              {/* <Link to="/" className="kith-link">
                Graduate Educations
              </Link> */}
            </div>
          </div>
        </div>
      </div>
      <div className="academics-div academics-div-last">
        <h1>Academic Standards</h1>
        <div className="academics-card">
          <div className="academics-card-img academics-card-img-3"></div>
          <div className="academics-card-text">
            <div>
              <h3>High Academic Standards</h3>
              <p>
                We ensure a significantly low teacher-to-student ratio, allowing
                for more personalised attention and support.
              </p>
              {/* <Link to="/" className="kith-link">
                Stanford Undergrad
              </Link> */}
            </div>
          </div>
        </div>
        <div className="academics-card">
          <div className="academics-card-text">
            <div>
              <h3>Professional Development for Educators</h3>
              <p>
                Teachers are regularly evaluated and provided with professional
                development opportunities to enhance their teaching skills and
                methodologies.
              </p>
              {/* <Link to="/" className="kith-link">
                Explore Majors
              </Link> */}
            </div>
          </div>
          <div className="academics-card-img academics-card-img-3"></div>
        </div>
        <div className="academics-card">
          <div className="academics-card-img academics-card-img-3"></div>
          <div className="academics-card-text">
            <div>
              <h3>Commitment to Excellence</h3>
              <p>
                We uphold an honour code with a 100% pass percentage and high
                performance, particularly in STEM subjects.
              </p>
              {/* <Link to="/" className="kith-link">
                Facts about the Undergraduate Program
              </Link> */}
            </div>
          </div>
        </div>
      </div>
      <KithFooter />
    </>
  );
};

export default Academics;
