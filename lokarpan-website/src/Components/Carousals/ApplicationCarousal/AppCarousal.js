import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AppCarousal.css";
import { PiHouseFill } from "react-icons/pi";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

const AppCarousal = () => {
  const items = [
    {
      head: "Temperature",
      desp: "Track student performance on leaderboards",
    },
    {
      head: "Humidity",
      desp: "Gamify results to boost student engagement",
    },
    {
      head: "Temperature",
      desp: "Track health and nutrition metrics and submit sickness reports",
    },
    {
      head: "Humidity",
      desp: "Gather insights into education and health trends across institutions",
    },
    {
      head: "Temperature and humidity",
      desp: "Track student performance on leaderboards",
    },
    {
      head: "Temperature and humidity",
      desp: "Gamify results to boost student engagement",
    },
    {
      head: "Temperature and humidity",
      desp: "Track health and nutrition metrics and submit sickness reports",
    },
    {
      head: "Temperature and humidity",
      desp: "Gather insights into education and health trends across institutions",
    },
  ];

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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    centerMode: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  if (window.innerWidth <= 500) {
    settings.slidesToShow = 1;
  } else if (window.innerWidth > 500 && window.innerWidth <= 700) {
    settings.slidesToShow = 2;
  } else if (window.innerWidth > 700 && window.innerWidth <= 950) {
    settings.slidesToShow = 3;
  } else {
    settings.slidesToShow = 4;
  }

  return (
    <>
      <div className="carousel-container">
        <div>
          <Slider className="slider" {...settings} ref={carouselRef}>
            {items.map((item, index) => (
              <div
                key={index}
                className="carousel"
                style={{
                  background: "#f0f0f0",
                  padding: "20px",
                  borderRadius: "8px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                <PiHouseFill className="app-icon" />
                {/* <h3
                  style={{
                    color: "#333",
                    width: "180px",
                    padding: "20px 0px",
                  }}
                >
                  {item.head}
                </h3> */}
                <p
                  style={{
                    color: "#555",
                    width: "225px",
                    height: "auto",
                    padding: "20px 0px",
                    fontSize: "20px",
                    marginTop: "30px",
                    lineHeight: "30px",
                  }}
                >
                  {item.desp}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default AppCarousal;
