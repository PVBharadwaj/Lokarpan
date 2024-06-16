import { Component } from "react";
import { Link } from "react-router-dom";
import EducationSubNav from "../Navbar/EducationSubNav";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { IoHomeOutline } from "react-icons/io5";
import "./index.css";

class DigitalTool extends Component {
  render() {
    return (
      <>
        <Navbar />
        <EducationSubNav />

        <div className="digital-tool-container">
          <div className="digital-tool-head-cont">
            {/* <img src="https://res.cloudinary.com/digbzwlfx/image/upload/v1708782682/Group_1765_cvdn5q.png" /> */}
            {/* <h1>
              Transforming education through innovative technology solutions
            </h1> */}
          </div>
          <div className="digital-tool-img-sec">
            <h1>
              A suite of digital services that help our learners build
              knowledge, fuel curiosity, and prepare for what’s next.
            </h1>
            <div className="img-cont">
              <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1708784180/Group_1756_wixb2m.png"
                className="img-cont-img"
              />
              <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1708784166/Group_1757_bkkh55.png"
                className="img-cont-img"
              />
              <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1708784153/Group_1759_cdfdoy.png"
                className="img-cont-img"
              />
              <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1708784144/Group_1762_qugdzn.png"
                className="img-cont-img"
              />
              <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1708784137/Group_1761_xkcnfs.png"
                className="img-cont-img"
              />
              <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1708784129/Group_1755_sfm8yd.png"
                className="img-cont-img"
              />
            </div>
          </div>
          <div className="browse-cont">
            <div>
              <h2>
                Transforming education through innovative technology solutions
              </h2>
            </div>
            <div>
              <p>
                At Lokarpan, our digital services pave the way for a dynamic,
                inclusive, and future-ready education landscape. Our goal is to
                integrate technology as a tool to support, not replace, teachers
                in delivering the core curriculum.
              </p>
            </div>
          </div>
          <div className="temp-cont">
            <div className="temp-container">
              <div className="temp-each-cont">
                <div className="icon">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1708784180/Group_1756_wixb2m.png"
                    className="dig-icon-img"
                  />
                </div>
                <h4>Data Repository</h4>
                <p>
                  Survey, collect, and organise data efficiently with our
                  user-friendly tools tailored for diverse research needs.
                </p>
              </div>
              <div className="temp-each-cont">
                <div className="icon">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1708784166/Group_1757_bkkh55.png"
                    className="dig-icon-img"
                  />
                </div>
                <h4>Learning Management</h4>
                <p>
                  Seamlessly manage classrooms, programs, and users with our
                  Hybrid, Google Classroom, Notion, and Wiki platforms.
                </p>
              </div>
              <div className="temp-each-cont">
                <div className="icon">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1708784153/Group_1759_cdfdoy.png"
                    className="dig-icon-img"
                  />
                </div>
                <h4>Adobe</h4>
                <p>
                  Transform health and education data into insightful visuals with
                  our informatics web app for dynamic data visualisation.
                </p>
              </div>
              <div className="temp-each-cont">
                <div className="icon">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1708784144/Group_1762_qugdzn.png"
                    className="dig-icon-img"
                  />
                </div>
                <h4>Content Creation</h4>
                <p>
                  A repository of engaging digital content, captivating stories,
                  and immersive audio podcasts effortlessly with our innovative
                  tools.
                </p>
              </div>
              <div className="temp-each-cont">
                <div className="icon">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1708784137/Group_1761_xkcnfs.png"
                    className="dig-icon-img"
                  />
                </div>
                <h4>Analytics & Prediction</h4>
                <p>
                  Gain valuable insights into performance trends and predict
                  future outcomes with our advanced analytics practices.
                </p>
              </div>
              <div className="temp-each-cont">
                <div className="icon">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1708784129/Group_1755_sfm8yd.png"
                    className="dig-icon-img"
                  />
                </div>
                <h4>Exams & Quizzes</h4>
                <p>
                  Create and conduct engaging exams and quizzes for learners of
                  all ages using our Horizon app, designed for effective
                  assessments.
                </p>
              </div>
            </div>

          </div>
          <div className="digital-tool-last-sec">
            <h3>Be a Catalyst for Change</h3>
            <p>
              Join Lokarpan in our mission to combat educational disparities,
              empowering at-risk communities for a brighter future. Your support
              fuels innovation and transformative impact.
            </p>
            <div className="digital-tool-btn-cont">
              <button className="digital-tool-btn">Volunteer</button>
              <Link to="/donate" style={{ textDecoration: "none" }}>
                <button className="digital-tool-btn donate-orange">
                  Donate
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default DigitalTool;
