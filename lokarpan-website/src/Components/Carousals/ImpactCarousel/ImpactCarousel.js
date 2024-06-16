import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImpactCarousel.css";
import { PiHouseFill } from "react-icons/pi";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

const ImpactCarousel = () => {
  const items = [
    {
      img: "https://res.cloudinary.com/dtfzxqpoy/image/upload/v1708622708/KFES3192_1_nxuqap.png",
      head: "Temperature",
      desp: "Model S plaid has the quickest accleration of any vechile in production.",
    },
    {
      img: "https://res.cloudinary.com/dtfzxqpoy/image/upload/v1708622707/puppet_groups_alc_011_1_fezqsa.png",
      head: "Humidity",
      desp: "Model S plaid has the quickest accleration of any vechile in production.",
    },
    {
      img: "https://res.cloudinary.com/dtfzxqpoy/image/upload/v1708622706/IMG_8894_1_vcares.png",
      head: "Temperature",
      desp: "Model S plaid has the quickest accleration of any vechile in production.",
    },
    {
      img: "https://res.cloudinary.com/dtfzxqpoy/image/upload/v1708622703/18062009438_1_hqbd6k.png",
      head: "Humidity",
      desp: "Model S plaid has the quickest accleration of any vechile in production.",
    },
    {
      img: "https://res.cloudinary.com/dtfzxqpoy/image/upload/v1708622702/Classrooms14_ytjf5v.png",
      head: "Temperature and humidity",
      desp: "Model S plaid has the quickest accleration of any vechile in production.",
    },
  ];

  const CustomPrevArrow = (props) => (
    <div
      {...props}
      // className="custom-arrow impact-prev-arrow prev-arrow"
      className="custom-arrow impact-prev-arrow"
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
      // className="custom-arrow impact-next-arrow next-arrow"
      className="custom-arrow impact-next-arrow"
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
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  if (window.innerWidth <= 600) {
    settings.slidesToShow = 1;
    settings.centerMode = true;
  } else {
    settings.slidesToShow = 5;
    settings.centerMode = false;
  }

  return (
    <>
      <div className="carousel-container">
        <div>
          <Slider className="slider" {...settings}>
            {items.map((item, index) => (
              <div
                key={index}
                className="impact-carousel"
                style={{
                  background: "#f0f0f0",
                  padding: "20px",
                  borderRadius: "8px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                <img className="impact-carousel-img" src={item.img} alt="" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default ImpactCarousel;
