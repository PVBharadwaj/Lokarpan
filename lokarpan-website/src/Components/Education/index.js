import { Component } from "react";
import Marquee from "react-fast-marquee";
import { FaRegCirclePause, FaRegCirclePlay } from "react-icons/fa6";
import EducationSubNav from "../Navbar/EducationSubNav";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./index.css";

const images = [
  "https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png",
  "https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png",
  "https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png",
  "https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png",
  "https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png",
];

class Education extends Component {
  state = { isPlaying: true };

  togglePlayPause = () => {
    const { isPlaying } = this.state;
    this.setState({ isPlaying: !isPlaying });
  };

  render() {
    const { isPlaying } = this.state;
    return (
      <>
        <Navbar />
        <EducationSubNav />
        <div className="education-container">
          <div className="education-top-section">
            <h1 className="education-font48">
              We know that the best answers often come from those closest to the
              problem.
            </h1>
          </div>
          <div className="fellowship-page">
            <div className="edu-second-div">
              <div className="edu-sub-div">
                <img
                  className="edu-fellow-img"
                  src="https://www.colorhexa.com/ebebeb.png"
                  alt="img1"
                />
                <h3 className="edu-impact-title">We look for big ideas.</h3>
                <p className="edu-fellow-data">
                  We believe big things can happen when you dont shy from big
                  ideas. We look for non-profits, social enterprises and civic
                  entities who understand the needs of marginilized and
                  vulnerable populations andare working to address inequities at
                  scale.
                </p>
              </div>
              <div className="edu-sub-div">
                <img
                  className="edu-fellow-img"
                  src="https://www.colorhexa.com/ebebeb.png"
                  alt="img2"
                />
                <h3 className="edu-impact-title">
                  We ask communities what they need.
                </h3>
                <p className="edu-fellow-data">
                  We believe big things can happen when you dont shy from big
                  ideas. We look for non-profits, social enterprises and civic
                  entities who understand the needs of marginilized and
                  vulnerable populations andare working to address inequities at
                  scale.
                </p>
              </div>
            </div>
            <div className="edu-third-div">
              <h5 className="edu-impact-head">ACCLERATING IMPACT</h5>
              <h2 className="edu-impact-title">
                We provide support through a combination of funding, innovation
                and technical expertise.
              </h2>
            </div>
          </div>
          <div className="edu-marquee-cont">
            <Marquee gradient={false} pauseOnHover={false} play={isPlaying}>
              {images.map((image) => (
                <img src={image} className="edu-mar-img" />
              ))}
            </Marquee>
            <button className="button" onClick={this.togglePlayPause}>
              {isPlaying ? (
                <FaRegCirclePause className="carousal-icon" />
              ) : (
                <FaRegCirclePlay className="carousal-icon" />
              )}
            </button>
          </div>
          <div className="edu-fellowship-sec">
            <h1 className="edu-font40">The Google.org Fellowship</h1>
            <p className="edu-font28">
              The Google.org Fellowship is a pro bono program that matches
              Google employees with nonprofits and civic entities for up to six
              months on full time technical projects. Fellows leave their day
              jobs at Google to work alongside the organization’s staff to build
              scalable solutions, working as a team to ensure that the work has
              sustained and lasting impact
            </p>
          </div>
          <div className="edu-last-sec">
            <p className="edu-font24">OPPURTUNITIES</p>
            <p className="edu-font48-normal">
              Through Google.org Impact Challenges, we award nonprofits and
              social enterprises with support to help bring their ideas to life.
            </p>
            <button type="button" className="edu-apply-btn">
              Apply
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Education;
