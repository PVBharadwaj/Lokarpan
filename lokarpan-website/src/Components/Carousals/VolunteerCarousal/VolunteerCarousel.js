import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./VolunteerCarousel.css";
import { IoChevronBackOutline } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";

const VolunteerCarousel = () => {
  const persons = [
    {
      name: "Akshay Wakhlu",
     
      desp: "Introducing Akshay, a dedicated Lokarpan volunteer originating from the vibrant city of Lucknow. With a Bachelor's degree in Economics from the University of Delhi, he gained valuable experience as an analyst in the Investment Banking Division at Goldman Sachs, Bangalore, spanning nearly three enriching years. Outside of his professional endeavours, Akshay is deeply passionate about music. As a self-trained flautist, tabla, and guitar player, he finds solace and joy in the intricate art of composition. Driven by the ethos of giving back more than he receives, Akshay is committed to leveraging his skills and experiences as a volunteer with Lokarpan to make a meaningful impact in our communities. ",
      img: "https://res.cloudinary.com/digbzwlfx/image/upload/v1714214899/person1_a0rbpw.jpg",
    },
    {
      name: "Yash Goray",
   
      desp: "Meet Yash Goray, hailing from Mumbai. For the past 3.5 years, he has been dedicatedly serving as an Investment Banking Analyst at JP Morgan, with his most recent focus in the Oil and Gas sector. Despite his background in Computer Science Engineering, Yash has found his passion in the dynamic world of finance. Beyond his professional pursuits, Yash harbours a deep love for football. In 2018, he realised a childhood dream by witnessing Liverpool play at Anfield. Inspired by the guidance of his mentors, Yash is committed to paying it forward by contributing to the betterment of children's lives in any way possible.",
      img: "https://res.cloudinary.com/digbzwlfx/image/upload/v1714215001/person2_sbw3v6.jpg",
    },
    {
      name: "Ayesha Safwi",

      desp: "Ayesha, hailing from Lucknow, is a passionate advocate for social change. Holding a Bachelor's degree in Political Science and an MSW from Delhi University, she has dedicated her career to empowering rural artisans through her social enterprise. Driven by the belief that individuals have a responsibility to contribute to society, Ayesha is deeply committed to making a meaningful impact through her endeavours. She firmly believes that even small efforts can lead to significant positive change, and it is these efforts that bring her the greatest joy and satisfaction. With her unwavering dedication to social welfare, Ayesha embodies Lokarpan's mission of empowering communities and fostering sustainable development.",
      img: "https://res.cloudinary.com/digbzwlfx/image/upload/v1714215152/person3_lwymqk.jpg",
    },
    {
      name: "Anushka Gupta",

      desp: "Anushka is an architect with a passion for sustainability and design. Volunteering for Lokarpan, she lends her expertise to architectural design tasks that involve defining design standards and creating spaces that fulfil the vital aspect of improving education infrastructure. Through her work, Anushka strives to combine her design creativity with her commitment to sustainable practices, ensuring Lokarpan's educational facilities are not only functional and inspiring but also environmentally responsible.",
      img: "https://res.cloudinary.com/dtfzxqpoy/image/upload/v1716314148/1000026253_myksdq.jpg",
    },
  ];

  const CustomPrevArrow = (props) => (
    <div
      {...props}
      className="custom-arrow prev-arrow"
      style={{
        ...props.style,
        bottom: "0%",
        left: "17%",
        transform: "translateX(-50%)",
        zIndex: 1,
      }}
    >
      <IoChevronBackOutline className="app-nav-icon" />
    </div>
  );

  const CustomNextArrow = (props) => (
    <div
      {...props}
      className="custom-arrow next-arrow"
      style={{
        ...props.style,
        bottom: "0%",
        left: "19%",
        transform: "translateX(50%)",
        zIndex: 1,
      }}
    >
      <IoChevronForward className="app-nav-icon" />
    </div>
  );

  const [activeSlide, setActiveSlide] = useState(0);

  const handleAfterChange = (index) => {
    setActiveSlide(index);
  };

  const [showDots, setShowDots] = useState(window.innerWidth > 1170);

  useEffect(() => {
    const handleResize = () => {
      setShowDots(window.innerWidth > 1170);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    customPaging: function (i) {
      const { name, img } = persons[i];
      return (
        <a>
          <img
            style={{
              width: "70px",
              height: "80px",
              opacity: "1",
            }}
            src={img}
            title={name}
            alt=""
          />
        </a>
      );
    },
    dots: showDots,
    dotsClass: "slick-dots slick-thumb",
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          padding: "10px",
          top: "70%",
          left: "-37%",
        }}
      >
        <ul style={{ margin: "0px", opacity: "1" }}> {dots} </ul>
      </div>
    ),
    afterChange: handleAfterChange,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <>
      <div className="volunteer-carousel-main">
        <div className="carousel-container">
          <div>
            <Slider className="slider" {...settings}>
              {persons.map((item, index) => (
                <div className="remove-inline-block">
                  <div className="carousel-container1">
                    <div key={index} className="carousel-inner">
                      <h2>{item.name}</h2>
                     
                      <p>{item.desp}</p>
                    </div>
                  </div>
                  <div className="carousel-container2">
                    <div
                      key={index}
                      className="main-img"
                      style={
                        {
                          // padding: "20px",
                        }
                      }
                    >
                      <img src={item.img} alt="" />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default VolunteerCarousel;
