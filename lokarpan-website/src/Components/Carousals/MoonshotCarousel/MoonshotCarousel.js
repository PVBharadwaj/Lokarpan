import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MoonshotCarousel.css'; // Add your own CSS for styling
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

const CustomPrevArrow = (props) => (
  <div
    {...props}
    className="custom-arrow app-prev-arrow"
    style={{
      ...props.style,
      bottom: "-55px",
      left: "47%",
      transform: "translateX(-50%)",
      zIndex: 1,
    }}
  >
    <FaChevronLeft className="app-nav-icon" />
  </div>
);

const CustomNextArrow = (props) => (
  <div
    {...props}
    className="custom-arrow app-next-arrow"
    style={{
      ...props.style,
      bottom: "-55px",
      left: "50%",
      transform: "translateX(50%)",
      zIndex: 1,
    }}
  >
    <FaChevronRight className="app-nav-icon" />
  </div>
);

const MoonshotCarousel = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    // slidesToShow: 2,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  
  if (window.innerWidth <= 500) {
    settings.slidesToShow = 1;
  } else if (window.innerWidth > 500 && window.innerWidth <= 700) {
    settings.slidesToShow = 1;
  } else if (window.innerWidth > 700 && window.innerWidth <= 950) {
    settings.slidesToShow = 2;
  } else {
    settings.slidesToShow = 3;
  }


  return (
    <div className="moonshots-carousel">
      <Slider {...settings}>
        <div className="moonshots-sub-div mooncarouselsubdiv moonshots-img1">
          <div style={{ backgroundColor: '#e9bfde' }} className="moons-text-div">
            <p className="moons-car-head">Progressive Curriculum</p>
            <p className="moons-car-text">
            Develop technology-driven, innovative curriculum to empower rural students.
            </p>
          </div>
        </div>
        <div className="moonshots-sub-div mooncarouselsubdiv moonshots-img2">
          <div style={{ backgroundColor: '#d2e1b4' }} className="moons-text-div">
            <p className="moons-car-head">Empowering Educators</p>
            <p className="moons-car-text">
            Equip teachers with skills for engaging lesson plans, enhancing education quality.
            </p>
          </div>
        </div>
        <div className="moonshots-sub-div mooncarouselsubdiv moonshots-img3">
          <div style={{ backgroundColor: '#e9bfde' }} className="moons-text-div">
            <p className="moons-car-head">Strategic Partnerships</p>
            <p className="moons-car-text">
            Forge collaborations to foster innovative practices.
            </p>
          </div>
        </div>
        <div className="moonshots-sub-div mooncarouselsubdiv moonshots-img4">
          <div style={{ backgroundColor: '#d8f1ff' }} className="moons-text-div">
            <p className="moons-car-head">Infrastructure Investment</p>
            <p className="moons-car-text">
            Build modern facilities and classrooms to inspire creativity.
            </p>
              </div>
            </div>
      </Slider>
    </div>
  );
};

export default MoonshotCarousel;
