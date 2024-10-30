import React, { Component } from "react";
import Slider from "react-slick";
import "./d_home.css";
import Home from "./sliderimage";
import Navbar from "../Navbar/Navbar";
import SubnavBar from "./DesignSubNavbar/index";
import Footer from "../Footer/Footer";
import { FiPlusCircle } from "react-icons/fi";
import { IoIosCloseCircle } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

export default class d_home3 extends Component {
  constructor(props) {
    super(props);
    this.sliderRef = React.createRef();
  }
  state = { flippedCards: {} };
  next = () => {
    if (this.sliderRef.current) {
      this.sliderRef.current.slickNext();
    }
  };

  previous = () => {
    if (this.sliderRef.current) {
      this.sliderRef.current.slickPrev();
    }
  };

  handleClick = (cardIndex) => {
    this.setState((prevState) => ({
      flippedCards: {
        ...prevState.flippedCards,
        [cardIndex]: !prevState.flippedCards[cardIndex], // Toggle the flipped state of the clicked card
      },
    }));
  };

  render() {
    const { flippedCards } = this.state;

    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: "13%",
      arrows: true,
      responsive: [
        {
          breakpoint: 1150,
          settings: {
            centerPadding: "5%",
          },
        },
        {
          breakpoint: 1080,
          settings: {
            centerPadding: "10%",
          },
        },
        {
          breakpoint: 951,
          settings: {
            centerPadding: "0",
          },
        },
        {
          breakpoint: 950,
          settings: {
            centerPadding: "10%",
          },
        },
        {
          breakpoint: 750,
          settings: {
            centerPadding: "0%",
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            centerPadding: "0%",
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Navbar />
        <SubnavBar />

        <section className="guideline_design">
          <h1>
            At Lokarpan, we set the standard for education infrastructure in
            rural areas.
          </h1>
        </section>

        <div className="new-guidelines-sec">
          <h1>Our comprehensive design manual</h1>
          <p>
            Offers a blueprint for constructing large-footprint schools,
            integrating local resources and sustainable practices to create
            optimal learning environments.
          </p>

          <Link to="/designlist">View our design manual</Link>
          {/* <a href="#">View our design manual</a> */}
        </div>

        {/* <Home /> */}

        <div className="new-guidelines-last-head">
          <span className="g-l1">
            Our design parameters ensure that schools are efficient, adaptable,
            and cater to the diverse needs of modern education environments.
          </span>

          <br />
          {/* <span className="g-l2">
            Lokarpan pioneers rural design and landscaping, envisioning vibrant
            communities rooted in sustainability. Our guidance empowers
            community leaders, shaping rural construction policies for a better,
            more sustainable future.
          </span> */}
        </div>

        {/* ------------------------------------------------------------- */}
        <div className="new-design-carousal-container">
          <Slider {...settings} ref={this.sliderRef}>
            <div
              className={`new-design-carousal-card-out ${
                flippedCards[0] ? "new-flipped" : ""
              }`}
            >
              <div className="new-design-front">
                <div className="new-design-carousal-card des-card1">
                  <h1 className="new-des-front-head">Grid Layout</h1>
                  <FiPlusCircle
                    className="new-plus-icon"
                    onClick={() => this.handleClick(0)}
                  />
                </div>
              </div>
              <div className="new-design-back">
                <div className="new-design-carousal-card new-back-card">
                  <h1>
                    Maximises built form and open spaces using minimal site area
                    with a standardised structural system.
                  </h1>
                  <IoIosCloseCircle
                    className="new-cross-icon"
                    onClick={() => this.handleClick(0)}
                  />
                </div>
              </div>
            </div>
            <div
              className={`new-design-carousal-card-out ${
                flippedCards[1] ? "new-flipped" : ""
              }`}
            >
              <div className="new-design-front">
                <div className="new-design-carousal-card des-card2">
                  <h1 className="new-des-front-head">Child-Centric Design</h1>
                  <FiPlusCircle
                    className="new-plus-icon"
                    onClick={() => this.handleClick(1)}
                  />
                </div>
              </div>
              <div className="new-design-back">
                <div className="new-design-carousal-card new-back-card">
                  <h1>
                    Tailors design details to the scale and perspective of
                    individual children for enhanced learning environments.
                  </h1>
                  <IoIosCloseCircle
                    className="new-cross-icon"
                    onClick={() => this.handleClick(1)}
                  />
                </div>
              </div>
            </div>
            <div
              className={`new-design-carousal-card-out ${
                flippedCards[2] ? "new-flipped" : ""
              }`}
            >
              <div className="new-design-front">
                <div className="new-design-carousal-card des-card3">
                  <h1 className="new-des-front-head">
                    Responding to Site Context
                  </h1>
                  <FiPlusCircle
                    className="new-plus-icon"
                    onClick={() => this.handleClick(2)}
                  />
                </div>
              </div>
              <div className="new-design-back">
                <div className="new-design-carousal-card new-back-card">
                  <h1>
                    Allows flexible design alterations to accommodate
                    site-specific topography and vegetation.
                  </h1>
                  <IoIosCloseCircle
                    className="new-cross-icon"
                    onClick={() => this.handleClick(2)}
                  />
                </div>
              </div>
            </div>
            <div
              className={`new-design-carousal-card-out ${
                flippedCards[3] ? "new-flipped" : ""
              }`}
            >
              <div className="new-design-front">
                <div className="new-design-carousal-card des-card4">
                  <h1 className="new-des-front-head">Modular and Expandable</h1>
                  <FiPlusCircle
                    className="new-plus-icon"
                    onClick={() => this.handleClick(3)}
                  />
                </div>
              </div>
              <div className="new-design-back">
                <div className="new-design-carousal-card new-back-card">
                  <h1>
                    Enables spaces to extend for larger activities and adaptable
                    classroom configurations.
                  </h1>
                  <IoIosCloseCircle
                    className="new-cross-icon"
                    onClick={() => this.handleClick(3)}
                  />
                </div>
              </div>
            </div>
            <div
              className={`new-design-carousal-card-out ${
                flippedCards[4] ? "new-flipped" : ""
              }`}
            >
              <div className="new-design-front">
                <div className="new-design-carousal-card des-card1">
                  <h1 className="new-des-front-head">Transitions and Skins</h1>
                  <FiPlusCircle
                    className="new-plus-icon"
                    onClick={() => this.handleClick(4)}
                  />
                </div>
              </div>
              <div className="new-design-back">
                <div className="new-design-carousal-card new-back-card">
                  <h1>
                    Provides thermal insulation and comfortable movement through
                    outer skins and transition spaces.
                  </h1>
                  <IoIosCloseCircle
                    className="new-cross-icon"
                    onClick={() => this.handleClick(4)}
                  />
                </div>
              </div>
            </div>
            <div
              className={`new-design-carousal-card-out ${
                flippedCards[5] ? "new-flipped" : ""
              }`}
            >
              <div className="new-design-front">
                <div className="new-design-carousal-card des-card4">
                  <h1 className="new-des-front-head">Independent Systems</h1>
                  <FiPlusCircle
                    className="new-plus-icon"
                    onClick={() => this.handleClick(5)}
                  />
                </div>
              </div>
              <div className="new-design-back">
                <div className="new-design-carousal-card new-back-card">
                  <h1>
                    Utilises sustainable, independent thermal insulation,
                    energy, and water systems.
                  </h1>
                  <IoIosCloseCircle
                    className="new-cross-icon"
                    onClick={() => this.handleClick(5)}
                  />
                </div>
              </div>
            </div>
            <div
              className={`new-design-carousal-card-out ${
                flippedCards[6] ? "new-flipped" : ""
              }`}
            >
              <div className="new-design-front">
                <div className="new-design-carousal-card des-card1">
                  <h1 className="new-des-front-head">Classroom Design</h1>
                  <FiPlusCircle
                    className="new-plus-icon"
                    onClick={() => this.handleClick(6)}
                  />
                </div>
              </div>
              <div className="new-design-back">
                <div className="new-design-carousal-card new-back-card">
                  <h1>
                    Features 8x7m classrooms with sound-insulated,
                    multifunctional panels and optimal ventilation.
                  </h1>
                  <IoIosCloseCircle
                    className="new-cross-icon"
                    onClick={() => this.handleClick(6)}
                  />
                </div>
              </div>
            </div>
            <div
              className={`new-design-carousal-card-out ${
                flippedCards[7] ? "new-flipped" : ""
              }`}
            >
              <div className="new-design-front">
                <div className="new-design-carousal-card des-card2">
                  <h1 className="new-des-front-head">
                    Universal Accessibility
                  </h1>
                  <FiPlusCircle
                    className="new-plus-icon"
                    onClick={() => this.handleClick(7)}
                  />
                </div>
              </div>
              <div className="new-design-back">
                <div className="new-design-carousal-card new-back-card">
                  <h1>
                    Ensures all environments are accessible to people of all
                    ages and abilities, serving as community centres.
                  </h1>
                  <IoIosCloseCircle
                    className="new-cross-icon"
                    onClick={() => this.handleClick(7)}
                  />
                </div>
              </div>
            </div>
            <div
              className={`new-design-carousal-card-out ${
                flippedCards[8] ? "new-flipped" : ""
              }`}
            >
              <div className="new-design-front">
                <div className="new-design-carousal-card des-card3">
                  <h1 className="new-des-front-head">
                    Robust Electrification and Cable Management
                  </h1>
                  <FiPlusCircle
                    className="new-plus-icon"
                    onClick={() => this.handleClick(8)}
                  />
                </div>
              </div>
              <div className="new-design-back">
                <div className="new-design-carousal-card new-back-card">
                  <h1>
                    Implements maintenance-free, corrosion-resistant industrial
                    cable management systems.
                  </h1>
                  <IoIosCloseCircle
                    className="new-cross-icon"
                    onClick={() => this.handleClick(8)}
                  />
                </div>
              </div>
            </div>
          </Slider>
          <div className="new-des-arrows-cont">
            <button className="left-arrow-box" onClick={this.previous}>
              <div className="left-arrow"></div>
            </button>
            <button className="right-arrow-box" onClick={this.next}>
              <div className="right-arrow"></div>
            </button>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
