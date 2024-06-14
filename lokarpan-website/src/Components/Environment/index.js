import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "../Health/index.css";

import "./index.css";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

const Environment = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  if (window.innerWidth <= 600) {
    settings.slidesToShow = 1;
  } else if (window.innerWidth > 600 && window.innerWidth <= 700) {
    settings.slidesToShow = 2;
  } else if (window.innerWidth > 700 && window.innerWidth <= 950) {
    settings.slidesToShow = 2;
  } else {
    settings.slidesToShow = 3;
  }
  const Desp = [
    {
      id: 1,
      img: "https://res.cloudinary.com/dtfzxqpoy/image/upload/v1713120024/shuffle_ehqjjw.png",
      head: "Enhancing Green Cover for a Sustainable Future",
      des: "Lokarpan's tree planting endeavours are paving the way for a greener, healthier environment for generations to come.",
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/dtfzxqpoy/image/upload/v1713120024/shuffle_ehqjjw.png",
      head: "Tracking Exotic Bird Populations for Biodiversity Conservation",
      des: "Our efforts in bird migration tracking contribute to scientific knowledge and vital conservation strategies, ensuring the continued existence of these fascinating avian species.",
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/dtfzxqpoy/image/upload/v1713120024/shuffle_ehqjjw.png",
      head: "Promoting Sustainable Water Management for Community Well-being",
      des: "Through education and advocacy, we work towards the maintenance and restoration of local water bodies, ensuring sustainable access to clean water for rural communities.",
    },
    {
      id: 4,
      img: "https://res.cloudinary.com/dtfzxqpoy/image/upload/v1713120024/shuffle_ehqjjw.png",
      head: "Renewable Energy Solutions for a Sustainable Tomorrow",
      des: "Lokarpan leads the charge in renewable energy production, committed to a low carbon footprint for a cleaner, greener future.",
    },
    {
      id: 5,
      img: "https://res.cloudinary.com/dtfzxqpoy/image/upload/v1713120024/shuffle_ehqjjw.png",
      head: "Addressing Indoor Air Pollution",
      des: "We promote environmentally-friendly, renewable energy sources such as Biogas to educate rural communities on safe cooking methods, including smokeless technologies like improved chulhas and solar cookers to mitigate indoor air pollution.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="fellowship-nav">
        <h1>Environment</h1>
      </div>

      <div className="health-container">
        <div className="health-full-img-text"></div>
        <div className="env-hero-cont">
          <h1 className="environment-main-head">
            We aim to cultivate a greener, more sustainable future, ensuring the
            well-being of both people and the environment.
          </h1>
        </div>

        {/* <div className="new-liv-carousal-cont">
          <h1 className="livelihood-desp-cards-head">Our Focus Areas</h1>
        </div> */}

        <div className="health-container-section environment-container-section">
          <div className="livelihood-top-section environment-bottom-section">
            <span className="g-l1">Imagine the impact of clean water in </span>
            <br />
            <span className="g-l2">
              a rural village for the very first time. It marks the beginning of
              a transformation, a turning point towards a brighter future.
            </span>
            <div className="env-grid-sec">
              <div>
                <span className="env-l1">Right now, </span>
                <span className="env-l2">
                  in countless rural areas like those we serve, millions of
                  families lack access to safe water, clean toilets, and proper
                  hygiene. For children like those in our communities, this
                  means enduring long walks to collect water, missing school,
                  and facing the risk of illness.
                </span>
              </div>
              <div>
                <span className="env-l1">
                  By supporting Lokarpan's initiatives,
                </span>
                <span className="env-l2">
                  you're not just providing water—you're changing lives. Your
                  contribution helps us conserve precious water sources,
                  ensuring that rural communities can spend more time learning
                  and growing, rather than struggling for the basics.
                </span>
              </div>
              <div>
                <span className="env-l1">Join us in </span>{" "}
                <span className="env-l2">
                  our mission to safeguard our water resources. Together, we'll
                  make sure that every community we touch has access to clean
                  water, decent sanitation, and the knowledge to maintain a
                  healthy environment for generations to come.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="env-carousal-container">
          <h1 className="env-carousal-head">Our Focus Areas</h1>
          <Slider
            {...settings}
            ref={(slider) => {
              sliderRef = slider;
            }}
          >
            <div className="env-c">
              <div className="env-carousal-card">
                <img
                  src="https://www.apple.com/v/home-app/f/images/overview/icon/icon_watering__c4f2nr78tay6_large_2x.png"
                  className="env-card-img"
                  alt="Slide 1"
                />
                <h2 className="env-card-head">
                  Enhancing Green Cover for a Sustainable Future
                </h2>
                <p className="env-card-para">
                  Lokarpan's tree planting endeavours are paving the way for a
                  greener, healthier environment for generations to come.
                </p>
              </div>
            </div>
            <div className="env-c">
              <div className="env-carousal-card">
                <img
                  src="https://www.apple.com/v/home-app/f/images/overview/icon/icon_watering__c4f2nr78tay6_large_2x.png"
                  className="env-card-img"
                  alt="Slide 2"
                />
                <h2 className="env-card-head">
                  Tracking Exotic Bird Populations
                </h2>
                <p className="env-card-para">
                  Our efforts in bird migration tracking contribute to
                  scientific knowledge and vital conservation strategies.
                </p>
              </div>
            </div>
            <div className="env-c">
              <div className="env-carousal-card">
                <img
                  src="https://www.apple.com/v/home-app/f/images/overview/icon/icon_watering__c4f2nr78tay6_large_2x.png"
                  className="env-card-img"
                  alt="Slide 3"
                />
                <h2 className="env-card-head">
                  Promoting Sustainable Water Management
                </h2>
                <p className="env-card-para">
                  Through education and advocacy, we work towards the
                  maintenance and restoration of local water bodies.
                </p>
              </div>
            </div>
            <div className="env-c">
              <div className="env-carousal-card">
                <img
                  src="https://www.apple.com/v/home-app/f/images/overview/icon/icon_watering__c4f2nr78tay6_large_2x.png"
                  className="env-card-img"
                  alt="Slide 3"
                />
                <h2 className="env-card-head">Renewable Energy Solutions</h2>
                <p className="env-card-para">
                  Lokarpan leads the charge in renewable energy production,
                  committed to a low carbon footprint for a cleaner, greener
                  future.
                </p>
              </div>
            </div>
            <div className="env-c">
              <div className="env-carousal-card">
                <img
                  src="https://www.apple.com/v/home-app/f/images/overview/icon/icon_watering__c4f2nr78tay6_large_2x.png"
                  className="env-card-img"
                  alt="Slide 3"
                />
                <h2 className="env-card-head">
                  Addressing Indoor Air Pollution
                </h2>
                <p className="env-card-para">
                  We promote environmentally-friendly, renewable energy sources
                  including smokeless technologies to mitigate indoor air
                  pollution.
                </p>
              </div>
            </div>
          </Slider>
          <div className="env-arrows-cont">
            <button className="left-arrow-box" onClick={previous}>
              <div className="left-arrow"></div>
            </button>
            <button className="right-arrow-box" onClick={next}>
              <div className="right-arrow"></div>
            </button>
          </div>
        </div>

        <div className="donate-section">
          <h1 className="last-space">Be a Catalyst for Change</h1>
          <p className="our-role-font24">
            Join Lokarpan in our mission to combat social and economic
            disparities, empowering at-risk communities for a brighter future.
            Your support fuels innovation and transformative impact.
          </p>
          {/* <Link to="/donate"> */}
          <Link to="/donate">
            <button type="button" className="our-role-apply-btn">
              Donate
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Environment;
