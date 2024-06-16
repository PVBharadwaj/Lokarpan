import FlipCard from "../Carousals/FlipCards/FlipCard";
import VolunteerCarousel from "../Carousals/VolunteerCarousal/VolunteerCarousel";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import SupportSubNav from "../Navbar/SupportSubNav/SupportSubNav";
import { Link } from "react-router-dom";
import "./BeingAVolunteer.css";
import MobileFlipcards from "../Carousals/FlipCards/MobileFlipcards";
import FlipCard2 from "../Carousals/FlipCards/FlipCard2";
import FlipCard3 from "../Carousals/FlipCards/FlipCard3";
import FlipCard4 from "../Carousals/FlipCards/FlipCard4";
const BeingAVolunteer = () => {
  return (
    <>
      <Navbar />
      <SupportSubNav />
      <div className="being-a-volunteer volunteer-top">
        <div className="volunteer-first-div">
          <h1>Being a Volunteer</h1>
          <p>
          The road to end educational inequity is long and we cannot do this on our own. If you are passionate about our vision and have a certain number of hours a week to put in, you can volunteer with Fellows in their classroom or with different departments on staff.
          </p>
        </div>
        <h1 className="vol-head-div-text">Why?</h1>
        
     <MobileFlipcards/>
     <div className="bavflip">
        <FlipCard/>
        <FlipCard2/>
       
        <FlipCard3 />
        <FlipCard4 /> 
        </div>
      </div>
        <h1 className="meet-vol">Meet Our Volunteers</h1>
      <div className="being-a-volunteer-second">
        <VolunteerCarousel />
      </div>
      <div className="volunter-opp">
        <div className="volunter-opp-inner">
          {/* <h1>
            An AI power play: Fueling the next wave of innovation in the{" "}
            energy sector
          </h1> */}
          <h1>Explore current volunteering opportunities</h1>
          <p>Lokarpan collaborates with volunteers primarily through our dedicated volunteer program. If you hold an undergraduate degree, possess relevant work experience, and are passionate about making a difference, you may qualify to join us as a volunteer.
           
          </p>
          <div style={{width: "150px"}} className="hyperlinks">
          <div className="apply-btn white">
              <Link to="/donate" className="apply-btn-text-black body-btn">Apply</Link>
          </div>
          </div>
        </div>

        </div>
        <Footer />
    </>
  );
};

export default BeingAVolunteer;
