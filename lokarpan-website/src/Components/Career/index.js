import { Component } from "react";
import { FaLinkedin } from "react-icons/fa6";
import SubNavbar from "../Navbar/SubNavbar";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "../Health/index.css";

import "./index.css";

class Career extends Component {
  render() {
    return (
      <>
        <Navbar />
        <SubNavbar />
        <div className="career-container">
          <div className="career-top-container">
            <h1 className="head2">Join Us!</h1>
            <h3 className="head1">You’ve come to the right place</h3>
            <p className="career-para1">
              What does it take to create sustainable and inclusive growth? At
              Lokarpan, it takes passion, dedication, and a commitment to
              driving positive change. We believe in the power of exceptional
              individuals who are eager to learn, grow, and make a real impact.
            </p>
            <a
              href="https://www.linkedin.com/company/lokarpan/"
              target="_blank"
              className=" anchor-no-line"
            >
              <div className="linked-in-section">
                <FaLinkedin style={{ fontSize: "28px", color: "#ffffff" }} />
                <p className="para2">Follow us on LinkedIn</p>
              </div>
            </a>
          </div>
          <div className="mobile-career-top-container">
            <img src="https://images.unsplash.com/photo-1681164315393-8d2850f570fa?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <h1 className="mobile-head2">Join Us!</h1>
            <h3 className="mobile-head1">You’ve come to the right place</h3>
            <p className="mobile-career-para1">
              What does it take to create sustainable and inclusive growth? At
              Lokarpan, it takes passion, dedication, and a commitment to
              driving positive change. We believe in the power of exceptional
              individuals who are eager to learn, grow, and make a real impact.
            </p>
            <div className="linked-in-section">
              <FaLinkedin style={{ fontSize: "28px" }} />
              <p className="mobile-para2">Follow us on LinkedIn</p>
            </div>
          </div>

          <div className="health-each-container approach-each-container">
            <div className="health-content-section approach-content-section content-left">
              <h1 className="approach-lokarpan-head3">Volunteer with us</h1>
              <p className="approach-card-para">
                The journey to eradicate educational inequity is a collaborative
                one, and we welcome passionate individuals to join us. If you
                have a few hours to spare each week and share our vision,
                consider volunteering with our Fellows in classrooms or
                supporting various departments on staff. Your contribution can
                make a meaningful difference in the lives of rural learners.
              </p>
            </div>

            <div className="career-cont-img-div1"></div>
          </div>
          <div className="health-each-container approach-each-container">
            <div className="career-cont-img-div2"></div>
            <div className="health-content-section approach-content-section content-right">
              <h1 className="approach-lokarpan-head3">
                Exceptional can come from anywhere
              </h1>
              <p className="approach-card-para">
                We value people over credentials. Lokarpan is a place where your
                potential is recognised, regardless of your background. We
                embrace diversity and welcome individuals with a range of skills
                and experiences.
              </p>
            </div>
          </div>
          <div className="health-each-container approach-each-container">
            <div className="health-content-section approach-content-section content-left">
              <h1 className="approach-lokarpan-head3">
                Drive Impact through Meaningful Projects
              </h1>
              <p className="approach-card-para">
                Every day at Lokarpan brings new challenges and opportunities
                for growth. As a member of our team, you'll have the chance to
                tackle diverse projects that make a difference in rural
                communities. Whether designing sustainable solutions, developing
                educational programs, or leading health initiatives, your work
                will have a lasting impact.
              </p>
            </div>

            <div className="career-cont-img-div3"></div>
          </div>
          <div className="health-each-container approach-each-container">
            <div className="career-cont-img-div4"></div>
            <div className="health-content-section approach-content-section content-right">
              <h1 className="approach-lokarpan-head3">Our Culture</h1>
              <p className="approach-card-para">
                At Lokarpan, we foster innovation and collaboration, empowering
                every team member to make a difference in rural communities. Our
                mission is to uplift lives through impactful solutions in
                health, education, income generation, and veterinary care. We're
                an equal opportunity employer, committed to diversity and
                inclusion across all our endeavours.
              </p>
            </div>
          </div>

          <div className="health-full-img">
            <img
              src="https://res.cloudinary.com/digbzwlfx/image/upload/v1708687736/Rectangle_1931_zuy1zr.png"
              alt="health-img"
            />
          </div>
          <div className="career-next-step-section">
            <h1 className="head3">Working At Lokarpan</h1>
            <p>
              See our areas of work, worldwide Locations and opportunities for
              students
            </p>
            <a
              to="https://www.linkedin.com/company/lokarpan/posts/?feedView=all"
              href="_blank"
            >
              <button type="button" className="career-apply-btn">
                Apply
              </button>
            </a>
          </div>
        </div>
        <div className="footer-content">
          <p>
            At Lokarpan, we uphold the highest standards of ethical employment
            practices. Our unwavering commitment lies in establishing a work
            environment that genuinely respects and safeguards the rights and
            well-being of all individuals engaged in our operations. We maintain
            zero tolerance for forced labour, child labour, and discrimination,
            striving for a safe, equitable workplace. As an equal opportunity
            employer, we embrace diversity and do not discriminate based on any
            factors.
          </p>
          <hr className="hor-line4" />
        </div>
        <Footer />
      </>
    );
  }
}

export default Career;
