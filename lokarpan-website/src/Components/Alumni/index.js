import { Component } from "react";
import { BsArrowRight } from "react-icons/bs";
import KithNavbar from "../Navbar/KithNavbar/index";
import KithInfoSubNavbar from "../Navbar/KithInfoSubNavbar";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KithFooter from "../KithFooter/index";
import "./index.css";
import { Link } from "react-router-dom";

class Alumni extends Component {
  render() {
    return (
      <>
        <KithNavbar />
        <KithInfoSubNavbar />
        <div className="alumni-container">
          <div className="alumni-upper-container">
            {/* <h1>
            Alumni Day Registration Now Open!
            </h1> */}
          </div>

          <div className="app-page">
        <div className="app-div">
        {/* app-title title2, application-para1 - used in approach and kith/life-at-school/campus-and-culture */}
          <h1 className="app-title title2">
            Alumni Day Registration Now Open!
          </h1>
          {/* className="application-para1"  -- used in approach -> index.js */}
          <p className="application-para1">
            
          All alumni are invited to join the Lokarpan Alumni Association honouring alumni impact, citizenship, and community.

          </p>
            
        </div>
        </div>
          {/* <div className="safety-last-section">
            <div className="safety-last-section-content">
              <div className="safety-last-section-content-left">
                <h1 className="alumni-font36">Connect For Event</h1>
                <img
                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1707807265/Rectangle_1810_lkylax.png"
                  className="safety-last-img"
                />
                <ul className="safety-last-section-content-list">
                  <li>
                    <b>Program Development Committee:</b> Shape the direction of
                    our programs and initiatives.
                  </li>
                  <li>
                    <b>Community Outreach Committee:</b> Connect with external
                    partners and extend Lokarpan's reach.
                  </li>
                  <li>
                    <b>Innovation and Technology Committee:</b> Explore
                    cutting-edge solutions to drive positive change.
                  </li>
                </ul>
                <a href="#" className="alumni-link">
                  LearnMore
                </a>
              </div>
              <div className="safety-last-section-content-right">
                <h1 className="alumni-font36">Participants</h1>
                <img
                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1707807257/Rectangle_1811_sqkv2u.png"
                  className="safety-last-img"
                />
                <ul className="safety-last-section-content-list">
                  <li>
                    <b>Program Development Committee:</b> Shape the direction of
                    our programs and initiatives.
                  </li>
                  <li>
                    <b>Community Outreach Committee:</b> Connect with external
                    partners and extend Lokarpan's reach.
                  </li>
                  <li>
                    <b>Innovation and Technology Committee:</b> Explore
                    cutting-edge solutions to drive positive change.
                  </li>
                </ul>
                <a href="#" className="alumni-link">
                  LearnMore
                </a>
              </div>
            </div>
          </div> */}

          <div className="alumini-mail-section-top">
            <div className="alumni-mail-section">
              <div className="alumni-mail-first-sec">
                <h1 className="alumni-font28">Library</h1>
                <p className="alumni-font20">
                Alumni are eligible to visit the Kith n Kin libraries as well as apply for on-site Library access and borrowing
                </p>
              </div>
              <div className="alumni-mail-second-sec">
                <div>
                  <h1 className="alumni-font28">Sports Facilities</h1>
                  <p className="alumni-font20">
                  Gain access to Kith’s athletics facilities through alumni and family membership passes.
                  </p>
                  {/* <ul>
                    <li>Harvard College Fund</li>
                    <li> Divinity School Annual Fund</li>
                    <li> Business School John A. Smith Scholarship Fund</li>
                  </ul> */}
                </div>
                {/* <div>
                  <h1 className="alumni-font28">Kith Club</h1>
                  <p className="alumni-font20">
                  Get involved in one of the Kith Clubs across more than 5 countries worldwide.
                  </p>
                </div> */}
              </div>
              <div className="alumni-mail-third-sec">
                <h1 className="alumni-font28">
                Kith Club
                </h1>
                <p className="alumni-font20">
                Get involved in one of the Kith Clubs across more than 5 countries worldwide.
                </p>
              </div>
            </div>
          </div>


          <div className="alumni-donate-section alumini-top-padding">
            {/* <img
              src="https://res.cloudinary.com/digbzwlfx/image/upload/v1708016452/Rectangle_1812_ci3h1r.png"
              className="alumni-donate-img"
            /> */}
            <div className="health-cont-img-div alumni-img1"></div>
            <div className="alumni-donate-cont">
              <h1>Donate</h1>
              <p>
              The impactful initiatives of Kith and Kin School and the Centre of Excellence are sustained through generous philanthropic support. Our success is made possible by the contributions of diverse donors, including individuals like you. To continue supporting us, please click on the link below.
              </p>
              {/* <button className="alumni-donate-btn">Donate</button> */}
              <Link className="give-card-link ways-space-up" to="/donate" style={{ color: '#06c' }}>
                Donate<span className="arrow-icon">
                <ArrowForwardIosIcon style={{ verticalAlign: 'middle', fontSize: '15px' }} />
                </span></Link>
            </div>
          </div>



          <div className="alumni-donate-section">
            {/* <img
              src="https://res.cloudinary.com/digbzwlfx/image/upload/v1708016442/Rectangle_1814_u7as3o.png"
              className="alumni-donate-img"
            /> */}
            <div className="alumni-donate-cont">
              <h1>Make a Gift</h1>
              <p>
              Our vital donations often come as endowment gifts or direct contributions, providing essential resources for our work. Additionally, we benefit from investment assets and planned giving, where donors use estate planning and various funds to secure our ability to continue making a meaningful difference. To learn more, please click on the link below.
              </p>
              {/* <button className="alumni-donate-btn">Gift</button> */}
              <Link className="give-card-link ways-space-up" to="/donate" style={{ color: '#06c' }}>
                Gift<span className="arrow-icon">
                <ArrowForwardIosIcon style={{ verticalAlign: 'middle', fontSize: '15px' }} />
              </span></Link>
            </div>
            <div className="health-cont-img-div alumni-img2"></div>
          </div>
          {/* <div className="alumni-last-section">
            <h1 className="alumni-font24-last alumni-space-left">
              Alumni center Resources
            </h1>
            <div className="alumni-last-section-content">
              <div className="alumni-last-section-content-div ">
                <p className="alumni-font24">
                  McKinsey Statement on Sustainability Client Service
                </p>
                <div>
                  <p className="alumni-last-font20">Read More</p>
                  <BsArrowRight />
                </div>
              </div>
              <div className="alumni-last-section-content-div ">
                <p className="alumni-font24">
                  McKinsey Statement on Sustainability Client Service
                </p>
                <div>
                  <p className="alumni-last-font20">Read More</p>
                  <BsArrowRight />
                </div>
              </div>
              <div className="alumni-last-section-content-div ">
                <p className="alumni-font24">
                  McKinsey Statement on Sustainability Client Service
                </p>
                <div>
                  <p className="alumni-last-font20">Read More</p>
                  <BsArrowRight />
                </div>
              </div>
              <div className="alumni-last-section-content-div ">
                <p className="alumni-font24">
                  McKinsey Statement on Sustainability Client Service
                </p>
                <div>
                  <p className="alumni-last-font20">Read More</p>
                  <BsArrowRight />
                </div>
              </div>
              <div className="alumni-last-section-content-div ">
                <p className="alumni-font24">
                  McKinsey Statement on Sustainability Client Service
                </p>
                <div>
                  <p className="alumni-last-font20">Read More</p>
                  <BsArrowRight />
                </div>
              </div>
              <div className="alumni-last-section-content-div ">
                <p className="alumni-font24">
                  McKinsey Statement on Sustainability Client Service
                </p>
                <div>
                  <p className="alumni-last-font20">Read More</p>
                  <BsArrowRight />
                </div>
              </div>
              <div className="alumni-last-section-content-div ">
                <p className="alumni-font24">
                  McKinsey Statement on Sustainability Client Service
                </p>
                <div>
                  <p className="alumni-last-font20">Read More</p>
                  <BsArrowRight />
                </div>
              </div>
              <div className="alumni-last-section-content-div ">
                <p className="alumni-font24">
                  McKinsey Statement on Sustainability Client Service
                </p>
                <div>
                  <p className="alumni-last-font20">Read More</p>
                  <BsArrowRight />
                </div>
              </div>
              <div className="alumni-last-section-content-div ">
                <p className="alumni-font24">
                  McKinsey Statement on Sustainability Client Service
                </p>
                <div>
                  <p className="alumni-last-font20">Read More</p>
                  <BsArrowRight />
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <KithFooter />
      </>
    );
  }
}

export default Alumni;
