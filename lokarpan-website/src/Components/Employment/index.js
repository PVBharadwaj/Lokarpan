import { Component } from "react";
import KithNavbar from "../Navbar/KithNavbar/index";
import KithInfoSubNavbar from "../Navbar/KithInfoSubNavbar/index";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import KithFooter from "../KithFooter/index";
import "./index.css";
import { Link } from "react-router-dom";

class Employment extends Component {
  state = { current: "administration" };

  onClickFaculty = () => {
    this.setState({ current: "faculty" });
  };

  onClickFellowShip = () => {
    this.setState({ current: "fellowship" });
  };

  onClickAdministration = () => {
    this.setState({ current: "administration" });
  };
  render() {
    const { current } = this.state;

    return (
      <>
        <KithNavbar />
        <KithInfoSubNavbar />
        <div className="kith-emp-cont">
          <div className="emp-upper-section">
            <h1 className="emp-upper-section-h1">
            Making an impact that matters
            </h1>
            <p className="emp-upper-section-p">
            Here at Kith, we are continuously evolving how we work and how we look at marketplace challenges so we can continue to deliver measurable, sustainable results for our educators, students, parents and our communities.
            </p>
          </div>

          <div className="app-page">
        <div className="app-div">
        {/* app-title title2, application-para1 - used in approach and kith/life-at-school/campus-and-culture */}
          <h1 className="app-title title2">
          Interested in working for us?
          </h1>
          {/* className="application-para1"  -- used in approach -> index.js */}
          <p className="application-para1">
            
          Are you ready to apply your knowledge and background to exciting new challenges? From learning to leadership, this is your chance to take your career to the next level. Search and apply for a job today.  To further narrow your results, use the feature below to explore our opportunities.
          </p>
            
        </div>
      </div>





      <div className="ways-page">
        <div className="give-card padding40">
          <div className="give-card-img give-card-img-1"></div>
          <div className="give-card-text">
            <h1>Why Kith?</h1>
            <p>
            Kith is a special place inclusive of diverse, energetic, and talented people who are driven to grow and succeed. By working here, you join a vibrant community that advances Kith’s world-changing mission in meaningful ways, inspires innovation and collaboration, and builds skills and expertise.
            </p>
           
          </div>
        </div>







        <div className="app-page">
          <div className="app-div">
          {/* app-title title2, application-para1 - used in approach and kith/life-at-school/campus-and-culture */}
            {/* <h1 className="app-title title2">
            We offer a wide range of exciting and challenging job opportunities that support our world-class academic environment. We invite you to explore the many reasons to work for Kith:
            </h1> */}
            {/* className="application-para1"  -- used in approach -> index.js */}
            
            <span className="g-l1">We offer a wide range of exciting and challenging job opportunities that support our world-class academic environment. We invite you to explore the many reasons to work for Kith: </span>
            {/* <br /> */}
            {/* <span className="g-l2">
            Here, we are committed to educating leaders and advancing young minds that make a difference in the world.
            </span> */}
<br/>

<div style={{textAlign: "left"}}>



  
<span className="g-l1">Support our inspiring mission. </span>
            {/* <br /> */}
            <span className="g-l2">
            Here, we are committed to educating leaders and advancing young minds that make a difference in the world.
            </span>
<br/>
            <span className="g-l1">Meet amazing people. </span>
            {/* <br /> */}
            <span className="g-l2">
            You have the opportunity to work with incredible people -- among them, world-renowned researchers, thought leaders, innovators, and problem solvers.
            </span>
            <br/>
            <span className="g-l1">Receive excellent rewards.</span>
            {/* <br /> */}
            <span className="g-l2">
            Competitive compensation is just the beginning. From health care and unmatched paid time off to an unbeatable package of perks and access to our facilities, at Kith, you’ll enjoy benefits that are on par with the most prestigious institutions in the region.
            </span>
            <br/>
            <span className="g-l1">Enjoy our beautiful campus.</span>
            {/* <br /> */}
            <span className="g-l2">
            Our 6-acre campus ranges from the historic scenery to cutting-edge research and academic buildings designed by leading architects. Conveniently located near public transportation along with a traditional bazaar and entertainment, our campus provides a stunning backdrop for all that happens here at the institute.
            </span>
            <br/>
            <span className="g-l1">Take advantage of unparalleled cultural opportunities.</span>
            {/* <br /> */}
            <span className="g-l2">
            Get your culture fix at Kith’s Theater, our world-class Art and Media Labs, and on-campus musical events and virtual lectures.
            </span>
            <br/>
            <span className="g-l1">Advance your education.</span>
            {/* <br /> */}
            <span className="g-l2">
            Here, lifelong learning is encouraged. Take a course through our Center for Excellence, attend the Kith Extension School, or have your higher education subsidised by Kith.
            </span>
            <br/>
</div>
          </div>
        </div>




        {/* <div className="alumini-mail-section-top">
            <div className="alumni-mail-section">
              <div className="alumni-mail-first-sec">
                <h1 className="alumni-font28">Support our inspiring mission.</h1>
                <p className="alumni-font20">
                Here, we are committed to educating leaders and advancing young minds that make a difference in the world.
                </p>
              </div>
              <div className="alumni-mail-second-sec">
                <div>
                  <h1 className="alumni-font28">Meet amazing people.</h1>
                  <p className="alumni-font20">
                  You have the opportunity to work with incredible people -- among them, world-renowned researchers, thought leaders, innovators, and problem solvers.
                  </p>
                </div>
              </div>
              <div className="alumni-mail-third-sec">
                <h1 className="alumni-font28">
                Receive excellent rewards.
                </h1>
                <p className="alumni-font20">
                Competitive compensation is just the beginning. From health care and unmatched paid time off to an unbeatable package of perks and access to our facilities, at Kith, you’ll enjoy benefits that are on par with the most prestigious institutions in the region.
                </p>
              </div>
            </div>
          </div> */}



        <div className="give-card padding40 give-card-reverse">
          <div className="give-card-text">
            <h1>Contingent Staffing</h1>
            <p>
            Working on assignment at Kith in a temporary (also known as contingent) role is a great way to get to know the Institute and gain valuable professional experience. We welcome any and all to express interest in roles of this nature, including former  employees and retirees. New contingent work opportunities arise frequently.
            </p>
            {/* <Link className="give-card-link" to="/">Free Membership</Link> */}
          </div>
          <div className="give-card-img give-card-img-2"></div>
        </div>
        <div className="give-card padding40">
          <div className="give-card-img give-card-img-3"></div>
          <div className="give-card-text">
            <h1>Fellows</h1>
            <p>
            Fellows join our technical and research projects from around the world to work in teams and directly with our beneficiaries. When you join Kith as a Fellow, you are joining an organisation that will challenge you and invest heavily in your professional development. In this role you will have the opportunity to help the most vulnerable – across a wide range of initiatives – solving some of their most difficult problems. To learn more, follow this link below. 
            </p>
          </div>
        </div>
      </div>








          {/* <div className="emp-emp-seg-section">
            <div className="emp-seg-btn-section">
              <button
                onClick={this.onClickAdministration}
                className={`emp-seg-btn ${
                  current === "administration" ? "emp-active" : ""
                }`}
              >
                Administration
              </button>
              <button
                onClick={this.onClickFaculty}
                className={`emp-seg-btn ${
                  current === "faculty" ? "emp-active" : ""
                }`}
              >
                Faculty
              </button>
              <button
                onClick={this.onClickFellowShip}
                className={`emp-seg-btn ${
                  current === "fellowship" ? "emp-active" : ""
                }`}
              >
                Fellowship
              </button>
            </div>
            {current === "administration" && (
              <div className="emp-administration-section">
                <h1 className="emp-admin-h1">Why Kith?</h1>
                <p className="emp-admin-p">
                Kith is a special place inclusive of diverse, energetic, and talented people who are driven to grow and succeed. By working here, you join a vibrant community that advances Kith’s world-changing mission in meaningful ways, inspires innovation and collaboration, and builds skills and expertise.
                </p>

                <p className="emp-admin-p">
                We offer a wide range of exciting and challenging job opportunities that support our world-class academic environment. We invite you to explore the many reasons to work for Kith:
                </p>

                <p className="emp-admin-p">
                Support our inspiring mission. Here, we are committed to educating leaders and advancing young minds that make a difference in the world.
                </p>
                <p className="emp-admin-p">
                Meet amazing people. You have the opportunity to work with incredible people -- among them, world-renowned researchers, thought leaders, innovators, and problem solvers.
                </p>
                <p className="emp-admin-p">
                Receive excellent rewards. Competitive compensation is just the beginning. From health care and unmatched paid time off to an unbeatable package of perks and access to our facilities, at Kith, you’ll enjoy benefits that are on par with the most prestigious institutions in the region.
                </p>
                <p className="emp-admin-p">
                Enjoy our beautiful campus. Our 6-acre campus ranges from the historic scenery to cutting-edge research and academic buildings designed by leading architects. Conveniently located near public transportation along with a traditional bazaar and entertainment, our campus provides a stunning backdrop for all that happens here at the institute.
                </p>
                <p className="emp-admin-p">
                Take advantage of unparalleled cultural opportunities. Get your culture fix at Kith’s Theater, our world-class Art and Media Labs, and on-campus musical events and virtual lectures.
                </p>
                <p className="emp-admin-p">
                Advance your education. Here, lifelong learning is encouraged. Take a course through our Center for Excellence, attend the Kith Extension School, or have your higher education subsidised by Kith.
                </p>
              </div>
            )}
            {current === "faculty" && (
              <div className="emp-administration-section">
                <h1 className="emp-admin-h1">Contingent Staffing</h1>
                <p className="emp-admin-p">
                Working on assignment at Kith in a temporary (also known as contingent) role is a great way to get to know the Institute and gain valuable professional experience. We welcome any and all to express interest in roles of this nature, including former  employees and retirees. New contingent work opportunities arise frequently.
                </p>

              </div>
            )}
            {current === "fellowship" && (
              <div className="emp-administration-section">
                <h1 className="emp-admin-h1">Fellows</h1>
                <p className="emp-admin-p">
                Fellows join our technical and research projects from around the world to work in teams and directly with our beneficiaries. When you join Kith as a Fellow, you are joining an organisation that will challenge you and invest heavily in your professional development. In this role you will have the opportunity to help the most vulnerable – across a wide range of initiatives – solving some of their most difficult problems. To learn more, follow this link below. 
                </p>

              </div>
            )}
          </div> */}

          
          <div className="emp-emp-last-sec">
            {/* <h1 className="emp-admin-h1">Join Us</h1> */}
          

              <Link
              to={"/fellowship"}
                className="give-pop-up-button"
                style={{ cursor: "pointer", textDecoration: "none"}}
              >
                Fellowship 
                {/* <AddCircleOutlineIcon style={{ verticalAlign: 'middle', marginLeft: '10px' }} /> */}
                
              </Link>

              <p className="emp-last-sec-p">
            Search and apply for a job today 
            </p>


              <a href="https://www.linkedin.com/company/lokarpan/mycompany/" 
                className="give-pop-up-button"
                style={{ cursor: "pointer", textDecoration: "none"}}
                target="_blank">
                Apply 
              </a>

          </div>
        </div>
        <KithFooter />
      </>
    );
  }
}

export default Employment;
