import MoonshotCarousel from "../Carousals/MoonshotCarousel/MoonshotCarousel";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Moonshots.css";
import { Link } from "react-router-dom";
const Moonshots = () => {
  return (
    <>
      <Navbar />
      <div style={{padding: "150px 0px"}} className="livelihood-full-img-text moonshots-top">
        {/* <div className="moonshots-top"> */}
        {/* <h1 className="livelihood-full-img-text-head moonshot-text">
          So, what does the future hold for Lokarpan and its mission for
          educational equity?
        </h1> */}
      </div>
      <div className="fellowship-page">

        {/* below section taken from publications page */}
      <div className="public-text"> 
        <h1 className="public-title">
        What does the future hold?
        </h1>
        <p className="public-desp">
          Lokarpan aims to reimagine education from the ground up, introducing
          immersive technologies, personalised learning pathways, and dynamic
          content creation tools. Our goal is not just to improve learning
          outcomes, but to empower learners of all ages and backgrounds to
          thrive in the digital age.
        </p>
      </div>
        {/* <div className="why-donate-topdiv">
          <p>
            Lokarpan aims to reimagine education from the ground up, introducing
            immersive technologies, personalised learning pathways, and dynamic
            content creation tools. Our goal is not just to improve learning
            outcomes, but to empower learners of all ages and backgrounds to
            thrive in the digital age.
          </p>
        </div> */}
        <p className="moonshots-head padding-bottom-80">Our Focus Areas</p>
        <MoonshotCarousel />
        {/* second-div class taken from fellowshihp.js */}
        {/* <div className="second-div moonshots-div no-max-width-set">
          <div className="moonshots-sub-div moonshots-img1">
            <div style={{backgroundColor: "pink"}} className="moons-text-div">
              <p className="moons-head">Progressive Curriculum</p>
              <p className="moons-text">
                Developing technology-driven, innovative curriculum to empower
                rural students for a brighter future
              </p>
            </div>
          </div>
          <div className="moonshots-sub-div moonshots-img2">
            <div style={{backgroundColor: "#a4fba4"}} className="moons-text-div">
              <p className="moons-head">Empowering Educators</p>
              <p className="moons-text">
                Equipping teachers with skills for engaging lesson plans,
                enhancing Mathematics and Science education quality.
              </p>
            </div>
          </div>
          <div className="moonshots-sub-div moonshots-img3">
            <div style={{backgroundColor: "#ff8cff"}} className="moons-text-div">
              <p className="moons-head">Strategic Partnerships</p>
              <p className="moons-text">
                Forging collaborations with higher education institutes,
                fostering innovation in education practices.
              </p>
            </div>
          </div>
          <div className="moonshots-sub-div moonshots-img4">
            <div style={{backgroundColor: "#c3c3ff"}} className="moons-text-div">
              <p className="moons-head">Infrastructure Investment</p>
              <p className="moons-text">
                Building modern facilities and classrooms to inspire creativity
                and ensure access to quality education.
              </p>
            </div>
          </div>
        </div> */}
      </div>
      <div className="donate-section moonshots-margin-top">
        <h1 className="last-space">Be a Catalyst for Change</h1>
        <p className="our-role-font24">
          Join Lokarpan in our mission to combat social and economic
          disparities, empowering at-risk communities for a brighter future.
          Your support fuels innovation and transformative impact.
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

export default Moonshots;
