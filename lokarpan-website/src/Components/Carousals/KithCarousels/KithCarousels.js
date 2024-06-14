import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./KithCarousels.css";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";


const KithCarousels = () => {
    const items = [
        {
          img: "https://www.colorhexa.com/ebebeb.png",
          name: "Test name",
        },
        {
          img: "https://www.colorhexa.com/ebebeb.png",
          name: "Test name",
        },
        {
          img: "https://www.colorhexa.com/ebebeb.png",
          name: "Test name",
        },
      ];
    
      const CustomPrevArrow = (props) => (
        <div
          {...props}
          className="custom-arrow prev-arrow"
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
          className="custom-arrow next-arrow"
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
        // centerMode: true,
        // prevArrow: <CustomPrevArrow />,
        // nextArrow: <CustomNextArrow />,
      };
    
      if (window.innerWidth <= 600) {
        settings.slidesToShow = 1;
        settings.prevArrow = <CustomPrevArrow />;
        settings.nextArrow = <CustomNextArrow />;
      } else {
        settings.slidesToShow = 3;
      }
    
      return (
        <>
          <div className="carousel-container">
            <div>
              <Slider className="slider" {...settings}>
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="kith-carousel"
                    style={{
                      background: "#f0f0f0",
                      padding: "20px",
                    //   borderRadius: "8px",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <img className="kith-carousel-img" src={item.img} alt="" />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </>
      );
    };

export default KithCarousels
