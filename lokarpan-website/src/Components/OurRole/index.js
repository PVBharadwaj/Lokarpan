import React, { Component } from "react";
import { Link } from "react-router-dom";
import SubNavbar from "../Navbar/SubNavbar";
import { IoMdClose, IoMdExpand } from "react-icons/io";
import Popup from "reactjs-popup";
import Slider from "react-slick";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

class OurRole extends Component {
  constructor(props) {
    super(props);
    this.updatePopUpOpen = this.updatePopUpOpen.bind(this);
    this.containerRef = React.createRef();
    this.startX = null;
    this.startY = null;
    this.isMoving = false;
  }
  state = { active: "education", showContainer: true, isPopUpOpen: false };

  onChangeActive = (ele) => {
    this.setState({ active: ele, showContainer: true });
  };

  scrollBar = () => {
    const { isPopUpOpen } = this.state;
    console.log(isPopUpOpen);
    if (isPopUpOpen) {
      document.body.classList.add("body-no-scroll");
    } else {
      document.body.classList.remove("body-no-scroll");
    }
  };

  updatePopUpOpen = () => {
    console.log("Entered");
    this.setState(
      (prevState) => ({
        isPopUpOpen: !prevState.isPopUpOpen,
      }),
      () => this.scrollBar()
    );
  };

  onKeyDown = (event, close) => {
    if (event.key === "Escape") {
      close();
    }
  };

  render() {
    const { active, showContainer, isPopUpOpen } = this.state;

    const containerClass = `our-role-each-container ${
      showContainer ? "show" : ""
    }`;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      arrows: false,
      centerMode: true,
    };

    return (
      <>
        <Navbar />
        <SubNavbar />
        <div className="our-role-container">
          <div className="top-section">
            {/* <h1>
              We focus our work on the areas where we can have the largest
              impact.
            </h1> */}
          </div>
          <div className="our-role-topdiv">
            <p>
            We prioritise our efforts where they matter most.
            </p>
          </div>
          <div className="menu-items">
            <div className="items">
              <div
                className={
                  active === "education" ? "element btn-active" : "element"
                }
                onClick={() => this.onChangeActive("education")}
              >
                Education
              </div>
              <div
                className={
                  active === "health" ? "element btn-active" : "element"
                }
                onClick={() => this.onChangeActive("health")}
              >
                Health
              </div>
              <div
                className={
                  active === "livelihood" ? "element btn-active" : "element"
                }
                onClick={() => this.onChangeActive("livelihood")}
              >
                Livelihood
              </div>
              <div
                className={
                  active === "design" ? "element btn-active" : "element"
                }
                onClick={() => this.onChangeActive("design")}
              >
                Design
              </div>
              <div
                className={
                  active === "environment" ? "element btn-active" : "element"
                }
                onClick={() => this.onChangeActive("environment")}
              >
                Environment
              </div>
            </div>
          </div>
          {active === "education" && (
            <div className={containerClass}>
              <div className="our-role-each-container-content">
                <h1>Education</h1>
                <p>
                  Lokarpan is dedicated to bridging gaps in the education system
                  through innovative, technology-assisted solutions for learners
                  of all ages. Our mission? To elevate India's representation in
                  the PISA rankings by 2027, benefiting over 100,000
                  individuals. With a diverse team of instructors, we actively
                  engage with students in schools and communities, focusing on
                  creating enhanced teaching tools, expanding skill development,
                  and integrating technology to deliver the very best
                  educational standards across rural India.
                </p>
              </div>
              <div className="education-cards-container ">
                <div className="cards-left-container">
                  <div className="card">
                    <img
                      src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                      className="edu-img"
                      alt="Card 1"
                    />
                    <div className="card-content">
                      {/* <h4>Our Kith Programme</h4> */}
                      <h3>
                        Building India’s most technologically advanced low cost
                        schools to foster educational equity
                      </h3>

                      <Popup
                        trigger={
                          <div className="expand-sec">
                            <p>EXPAND TO LEARN MORE</p>
                            <IoMdExpand />
                          </div>
                        }
                        modal
                        onOpen={this.updatePopUpOpen}
                        onClose={this.updatePopUpOpen}
                        onKeyDown={(event, close) => {
                          this.onKeyDown(event, close);
                        }}
                      >
                        {(close) => (
                          <>
                            <div className="popup-container">
                              <button className="close-btn">
                                <IoMdClose
                                  style={{
                                    fontSize: "30px",
                                  }}
                                  onClick={() => close()}
                                />
                              </button>
                              <div className="popup-section">
                                <div className="popup-left-container">
                                  <h3 className="popup-font40">
                                    OUR KITH PROGRAMME
                                  </h3>
                                  <p className="popup-font20">
                                    As part of Lokarpan's commitment to
                                    achieving great results through innovation,
                                    the organisation helped accelerate the
                                    development of an integrated teaching model.
                                  </p>
                                </div>
                                <div className="popup-right-container">
                                  <img
                                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                    alt="popup-img"
                                    className="popup-img"
                                  />
                                  <div className="popup-content">
                                    <h3 className="popup-font18">SPOTLIGHT</h3>
                                    <p className="popup-font16">
                                      Lokarpan's vision extends far beyond a
                                      traditional learning environment, aiming
                                      to cultivate an educational ecosystem that
                                      empowers parents, students, and educators
                                      alike. Anchored in a meticulously curated
                                      curriculum and cutting-edge teaching
                                      tools, Lokarpan is working on the delivery
                                      of an effective and innovative curriculum
                                      across an expansive network of 75 partner
                                      schools.
                                    </p>

                                    <p className="popup-font16">
                                      At the heart of this initiative lies the
                                      Kith and Kin School in Auraiya, Uttar
                                      Pradesh. Founded in April 2014, the scool
                                      embodies Lokarpan's commitment to
                                      uplifting educational standards in the
                                      region. Serving as a model of excellence,
                                      the school pioneers specially designed
                                      curriculums and infrastructure development
                                      for partner schools in rural districts.
                                      Through state-of-the-art digital
                                      classrooms, and a research centre, we
                                      delve deep into educational methodologies,
                                      curating new strategies to enhance
                                      learning outcomes. From data-driven
                                      insights to emerging pedagogical
                                      approaches, the Kith n Kin Research Centre
                                      is at the forefront of educational
                                      innovation, shaping the future of
                                      learning.
                                    </p>

                                    <p className="popup-font16">
                                      Our Kith n Kin Centre of Excellence,
                                      providing specialised training for
                                      educators and pioneering ed-tech
                                      solutions. Through the Kith Programme, we
                                      seek to not only replicate successful
                                      learning models among partner schools but
                                      also scale up pilots to elevate the
                                      educational landscape across several
                                      districts, standardising quality metrics
                                      for low-cost private and publicly aided
                                      schools alike.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="popup-overlay"></div>
                          </>
                        )}
                      </Popup>
                    </div>
                  </div>
                </div>
                <div className="cards-right-container">
                  <div className="card space">
                    <img
                      src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                      className="edu-img"
                      alt="Card 1"
                    />
                    <div className="card-content">
                      {/* <h4>Transition to Digital Learning during COVID </h4> */}
                      <h3>
                        Helping out of school children get access to digital
                        learning opportunities during COVID
                      </h3>

                      <Popup
                        trigger={
                          <div className="expand-sec">
                            <p>EXPAND TO LEARN MORE</p>
                            <IoMdExpand />
                          </div>
                        }
                        modal
                        onOpen={this.updatePopUpOpen}
                        onClose={this.updatePopUpOpen}
                        onKeyDown={(event, close) => {
                          this.onKeyDown(event, close);
                        }}
                      >
                        {(close) => (
                          <>
                            <div className="popup-container">
                              <button className="close-btn">
                                <IoMdClose
                                  style={{
                                    fontSize: "30px",
                                  }}
                                  onClick={() => close()}
                                />
                              </button>
                              <div className="popup-section">
                                <div className="popup-left-container">
                                  <h3 className="popup-font40">
                                    TRANSITION TO DIGITAL LEARNING DURING COVID
                                  </h3>
                                  <p className="popup-font20">
                                    Our digital resources offer an enriching
                                    educational experience that nurtures
                                    curiosity and knowledge.
                                  </p>
                                </div>
                                <div className="popup-right-container">
                                  <img
                                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                    alt="popup-img"
                                    className="popup-img"
                                  />
                                  <div className="popup-content">
                                    <h3 className="popup-font18">SPOTLIGHT</h3>
                                    <p className="popup-font16">
                                      Lokarpan's Hybrid platform represents a
                                      pioneering leap into the future of
                                      education technology. This innovative web
                                      application seamlessly integrates forms,
                                      feedback systems, surveys, databases,
                                      calculation strategies, and learning
                                      management systems, creating a dynamic and
                                      interactive digital space for educators.
                                      Designed to optimise teaching practices
                                      and enhance student learning experiences,
                                      Hybrid offers educators a comprehensive
                                      suite of tools to grade tests, track
                                      student progress, and tap into powerful
                                      insights for tailored instruction.
                                    </p>
                                    <p className="popup-font16">
                                      In response to the challenges posed by the
                                      COVID-19 pandemic, Lokarpan accelerated
                                      the development of Hybrid, adding
                                      digitised content and optimising delivery
                                      mechanisms. This platform serves as a
                                      powerful solution for educators, enabling
                                      them to de-plagiarize content, create
                                      independent materials, and provide
                                      personalised learning experiences for each
                                      student. With Hybrid, Lokarpan aims to
                                      revolutionise the way education is
                                      delivered, ensuring that teachers have the
                                      necessary tools to navigate the
                                      complexities of modern-day learning
                                      environments and empower students for
                                      success.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="popup-overlay"></div>
                          </>
                        )}
                      </Popup>
                    </div>
                  </div>
                  <div className="card">
                    <img
                      src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                      className="edu-img"
                      alt="Card 1"
                    />
                    <div className="card-content">
                      {/* <h4> Solving India’s Reading Crisis</h4> */}
                      <h3>
                        Helping advance children's literacy capabilities through
                        curated reading assessments
                      </h3>

                      <Popup
                        trigger={
                          <div className="expand-sec">
                            <p>EXPAND TO LEARN MORE</p>
                            <IoMdExpand />
                          </div>
                        }
                        modal
                        onOpen={this.updatePopUpOpen}
                        onClose={this.updatePopUpOpen}
                        onKeyDown={(event, close) => {
                          this.onKeyDown(event, close);
                        }}
                      >
                        {(close) => (
                          <>
                            <div className="popup-container">
                              <button className="close-btn">
                                <IoMdClose
                                  style={{
                                    fontSize: "30px",
                                  }}
                                  onClick={() => close()}
                                />
                              </button>
                              <div className="popup-section">
                                <div className="popup-left-container">
                                  <h3 className="popup-font40">
                                    SOLVING INDIA'S READING CRISIS
                                  </h3>
                                  <p className="popup-font20">
                                    Our innovative reading assessments are
                                    enhancing educational outcomes for children
                                    in diverse learning environments.
                                  </p>
                                </div>
                                <div className="popup-right-container">
                                  <img
                                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                    alt="popup-img"
                                    className="popup-img"
                                  />
                                  <div className="popup-content">
                                    <h3 className="popup-font18">SPOTLIGHT</h3>
                                    <p className="popup-font16">
                                      Lokarpan's "Reading Ability Assessment for
                                      Children (READ)" is a comprehensive tool
                                      designed to gather vital insights into a
                                      child's reading skills and habits. We use
                                      a blend of qualitative and quantitative
                                      metrics to gather data on the frequency of
                                      reading at home, number of books read
                                      monthly, and words per minute (WPM)
                                      reading speed. This helps educators tailor
                                      strategies to individual learning needs.
                                    </p>
                                    <p className="popup-font16">
                                      Through the READ assessment, we weave
                                      together Likert scales and multiple-choice
                                      options for clear, consistent insights.
                                      From unravelling comprehension skills to
                                      exploring the joy of reading and the use
                                      of reading aids, educators gain a vibrant
                                      canvas of information. With this rich
                                      tapestry of data, teachers find themselves
                                      equipped to craft personalised pathways to
                                      literacy for each child in their care,
                                      nurturing a love for reading that lasts a
                                      lifetime.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="popup-overlay"></div>
                          </>
                        )}
                      </Popup>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mobile-education-cards-container">
                <div className="card">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                    className="edu-img"
                    alt="Card 1"
                  />
                  <div className="card-content" onClick={this.updatePopUpOpen}>
                    {/* <h4> Our Kith Programme</h4> */}
                    <h3>
                      Building India’s most technologically advanced low cost
                      schools to foster educational equity
                    </h3>

                    <Popup
                      trigger={
                        <div className="expand-sec">
                          <p>EXPAND TO LEARN MORE</p>
                          <IoMdExpand />
                        </div>
                      }
                      modal
                      onOpen={this.updatePopUpOpen}
                      onClose={this.updatePopUpOpen}
                      onKeyDown={(event, close) => {
                        this.onKeyDown(event, close);
                      }}
                    >
                      {(close) => (
                        <>
                          <div className="popup-container">
                            <button className="close-btn">
                              <IoMdClose
                                style={{
                                  fontSize: "30px",
                                }}
                                onClick={() => close()}
                              />
                            </button>
                            <div className="popup-section popup-mobile">
                              <div className="popup-right-container">
                                <div className="popup-left-container">
                                  <h3 className="popup-font40">
                                    OUR KITH PROGRAMME
                                  </h3>
                                  <p className="popup-font20">
                                    As part of Lokarpan's commitment to
                                    achieving great results through innovation,
                                    the organisation helped accelerate the
                                    development of an integrated teaching model.
                                  </p>
                                </div>
                                <img
                                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                  alt="popup-img"
                                  className="popup-img"
                                />
                                <div className="popup-content">
                                  <h3 className="popup-font18">SPOTLIGHT</h3>
                                  <p className="popup-font16">
                                    Lokarpan's vision extends far beyond a
                                    traditional learning environment, aiming to
                                    cultivate an educational ecosystem that
                                    empowers parents, students, and educators
                                    alike. Anchored in a meticulously curated
                                    curriculum and cutting-edge teaching tools,
                                    Lokarpan is working on the delivery of an
                                    effective and innovative curriculum across
                                    an expansive network of 75 partner schools.
                                  </p>

                                  <p className="popup-font16">
                                    At the heart of this initiative lies the
                                    Kith and Kin School in Auraiya, Uttar
                                    Pradesh. Founded in April 2014, the scool
                                    embodies Lokarpan's commitment to uplifting
                                    educational standards in the region. Serving
                                    as a model of excellence, the school
                                    pioneers specially designed curriculums and
                                    infrastructure development for partner
                                    schools in rural districts. Through
                                    state-of-the-art digital classrooms, and a
                                    research centre, we delve deep into
                                    educational methodologies, curating new
                                    strategies to enhance learning outcomes.
                                    From data-driven insights to emerging
                                    pedagogical approaches, the Kith n Kin
                                    Research Centre is at the forefront of
                                    educational innovation, shaping the future
                                    of learning.
                                  </p>

                                  <p className="popup-font16 popup-last-space">
                                    Our Kith n Kin Centre of Excellence,
                                    providing specialised training for educators
                                    and pioneering ed-tech solutions. Through
                                    the Kith Programme, we seek to not only
                                    replicate successful learning models among
                                    partner schools but also scale up pilots to
                                    elevate the educational landscape across
                                    several districts, standardising quality
                                    metrics for low-cost private and publicly
                                    aided schools alike.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="popup-overlay"></div>
                        </>
                      )}
                    </Popup>
                  </div>
                </div>

                <div className="card">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                    className="edu-img"
                    alt="Card 1"
                  />
                  <div className="card-content">
                    {/* <h4>Transition to Digital Learning during COVID</h4> */}
                    <h3>
                      Helping out of school children get access to digital
                      learning opportunities during COVID
                    </h3>

                    <Popup
                      trigger={
                        <div className="expand-sec">
                          <p>EXPAND TO LEARN MORE</p>
                          <IoMdExpand />
                        </div>
                      }
                      modal
                      onOpen={this.updatePopUpOpen}
                      onClose={this.updatePopUpOpen}
                      onKeyDown={(event, close) => {
                        this.onKeyDown(event, close);
                      }}
                    >
                      {(close) => (
                        <>
                          <div className="popup-container">
                            <button className="close-btn">
                              <IoMdClose
                                style={{
                                  fontSize: "30px",
                                }}
                                onClick={() => close()}
                              />
                            </button>
                            <div className="popup-section">
                              <div className="popup-right-container">
                                <div className="popup-left-container">
                                  <h3 className="popup-font40">
                                    TRANSITION TO DIGITAL LEARNING DURING COVID.
                                  </h3>
                                  <p className="popup-font20">
                                    Our digital resources offer an enriching
                                    educational experience that nurtures
                                    curiosity and knowledge.
                                  </p>
                                </div>
                                <img
                                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                  alt="popup-img"
                                  className="popup-img"
                                />
                                <div className="popup-content">
                                  <h3 className="popup-font18">SPOTLIGHT</h3>
                                  <p className="popup-font16">
                                    Lokarpan's Hybrid platform represents a
                                    pioneering leap into the future of education
                                    technology. This innovative web application
                                    seamlessly integrates forms, feedback
                                    systems, surveys, databases, calculation
                                    strategies, and learning management systems,
                                    creating a dynamic and interactive digital
                                    space for educators. Designed to optimise
                                    teaching practices and enhance student
                                    learning experiences, Hybrid offers
                                    educators a comprehensive suite of tools to
                                    grade tests, track student progress, and tap
                                    into powerful insights for tailored
                                    instruction.
                                  </p>
                                  <p className="popup-font16 popup-last-space">
                                    In response to the challenges posed by the
                                    COVID-19 pandemic, Lokarpan accelerated the
                                    development of Hybrid, adding digitised
                                    content and optimising delivery mechanisms.
                                    This platform serves as a powerful solution
                                    for educators, enabling them to
                                    de-plagiarize content, create independent
                                    materials, and provide personalised learning
                                    experiences for each student. With Hybrid,
                                    Lokarpan aims to revolutionise the way
                                    education is delivered, ensuring that
                                    teachers have the necessary tools to
                                    navigate the complexities of modern-day
                                    learning environments and empower students
                                    for success.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="popup-overlay"></div>
                        </>
                      )}
                    </Popup>
                  </div>
                </div>

                <div className="card">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                    className="edu-img"
                    alt="Card 1"
                  />
                  <div className="card-content">
                    {/* <h4>Solving India’s Reading Crisis</h4> */}
                    <h3>
                      Helping advance children's literacy capabilities through
                      curated reading assessments
                    </h3>

                    <Popup
                      trigger={
                        <div className="expand-sec">
                          <p>EXPAND TO LEARN MORE</p>
                          <IoMdExpand />
                        </div>
                      }
                      modal
                      onOpen={this.updatePopUpOpen}
                      onClose={this.updatePopUpOpen}
                      onKeyDown={(event, close) => {
                        this.onKeyDown(event, close);
                      }}
                    >
                      {(close) => (
                        <>
                          <div className="popup-container">
                            <button className="close-btn">
                              <IoMdClose
                                style={{
                                  fontSize: "30px",
                                }}
                                onClick={() => close()}
                              />
                            </button>
                            <div className="popup-section">
                              <div className="popup-right-container">
                                <div className="popup-left-container">
                                  <h3 className="popup-font40">
                                    SOLVING INDIA'S READING CRISIS
                                  </h3>
                                  <p className="popup-font20">
                                    Our innovative reading assessments are
                                    enhancing educational outcomes for children
                                    in diverse learning environments.
                                  </p>
                                </div>
                                <img
                                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                  alt="popup-img"
                                  className="popup-img"
                                />
                                <div className="popup-content">
                                  <h3 className="popup-font18">SPOTLIGHT</h3>
                                  <p className="popup-font16">
                                    Lokarpan's "Reading Ability Assessment for
                                    Children (READ)" is a comprehensive tool
                                    designed to gather vital insights into a
                                    child's reading skills and habits. We use a
                                    blend of qualitative and quantitative
                                    metrics to gather data on the frequency of
                                    reading at home, number of books read
                                    monthly, and words per minute (WPM) reading
                                    speed. This helps educators tailor
                                    strategies to individual learning needs.
                                  </p>
                                  <p className="popup-font16 popup-last-space">
                                    Through the READ assessment, we weave
                                    together Likert scales and multiple-choice
                                    options for clear, consistent insights. From
                                    unravelling comprehension skills to
                                    exploring the joy of reading and the use of
                                    reading aids, educators gain a vibrant
                                    canvas of information. With this rich
                                    tapestry of data, teachers find themselves
                                    equipped to craft personalised pathways to
                                    literacy for each child in their care,
                                    nurturing a love for reading that lasts a
                                    lifetime.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="popup-overlay"></div>
                        </>
                      )}
                    </Popup>
                  </div>
                </div>
              </div>
            </div>
          )}
          {active === "health" && (
            <div className={containerClass}>
              <div className="education-cards-container">
                <div className="cards-right-container">
                  <div className="card space">
                    <img
                      src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                      className="edu-img"
                      alt="Card 1"
                    />
                    <div className="card-content">
                      {/* <h4>Maternal and Child Health Initiatives</h4> */}
                      <h3>
                        Empowering families through essential midwife support
                        and educational resources for maternal and child health.
                      </h3>

                      <Popup
                        trigger={
                          <div className="expand-sec">
                            <p>EXPAND TO LEARN MORE</p>
                            <IoMdExpand />
                          </div>
                        }
                        modal
                        onOpen={this.updatePopUpOpen}
                        onClose={this.updatePopUpOpen}
                        onKeyDown={(event, close) => {
                          this.onKeyDown(event, close);
                        }}
                      >
                        {(close) => (
                          <>
                            <div className="popup-container">
                              <button className="close-btn">
                                <IoMdClose
                                  style={{
                                    fontSize: "30px",
                                  }}
                                  onClick={() => close()}
                                />
                              </button>
                              <div className="popup-section">
                                <div className="popup-left-container">
                                  <h3 className="popup-font40">
                                    MATERNAL AND CHILD HEALTH INITIATIVES
                                  </h3>
                                  <p className="popup-font20">
                                    Project VISTAAR: Advocating for improved
                                    MNCHN programming
                                  </p>
                                </div>
                                <div className="popup-right-container">
                                  <img
                                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                    alt="popup-img"
                                    className="popup-img"
                                  />
                                  <div className="popup-content">
                                    <h3 className="popup-font18">SPOTLIGHT</h3>
                                    <p className="popup-font16">
                                      Over the course of eight years, Lokarpan's
                                      Safe Motherhood and Child Survival program
                                      made a profound impact in 160 villages
                                      across Kanpur Dehat and Auraiya districts,
                                      reaching a population of 186,750. This
                                      initiative brought about a remarkable
                                      shift in the awareness and practices of
                                      women within these villages, emphasising
                                      the importance of immunizations, regular
                                      check-ups, and safe deliveries at Primary
                                      Health Centers (PHCs) and Community Health
                                      Centers (CHCs). The program empowered
                                      village health workers as pivotal figures,
                                      guiding new mothers and maintaining close
                                      coordination with Auxiliary Nurse Midwives
                                      (ANMs).
                                    </p>
                                    <p className="popup-font16">
                                      Building on this legacy, Lokarpan, in 2006
                                      launched Project VISTAAR in Bulandshahr
                                      district, focusing on providing strategic
                                      technical assistance, generating
                                      evidence-based knowledge, and advocating
                                      for improved Maternal, Neonatal, and Child
                                      Health and Nutrition (MNCHN) programming.
                                      This initiative encompassed efforts to
                                      strengthen MNCHN programs through tailored
                                      technical assistance, evidence-based
                                      interventions, and advocacy for
                                      prioritising nutrition and newborn care.
                                      The project also emphasised equity and
                                      gender considerations, striving to improve
                                      MNCHN outcomes for the most vulnerable
                                      populations, while actively promoting
                                      knowledge management to share best
                                      practices and evidence-based approaches in
                                      the community.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="popup-overlay"></div>
                          </>
                        )}
                      </Popup>
                    </div>
                  </div>
                  <div className="card">
                    <img
                      src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                      className="edu-img"
                      alt="Card 1"
                    />
                    <div className="card-content">
                      {/* <h4>Our Vaccination Initiatives</h4> */}
                      <h3>
                        Safeguarding community health through comprehensive
                        vaccination initiatives
                      </h3>

                      <Popup
                        trigger={
                          <div className="expand-sec">
                            <p>EXPAND TO LEARN MORE</p>
                            <IoMdExpand />
                          </div>
                        }
                        modal
                        onOpen={this.updatePopUpOpen}
                        onClose={this.updatePopUpOpen}
                        onKeyDown={(event, close) => {
                          this.onKeyDown(event, close);
                        }}
                      >
                        {(close) => (
                          <>
                            <div className="popup-container">
                              <button className="close-btn">
                                <IoMdClose
                                  style={{
                                    fontSize: "30px",
                                  }}
                                  onClick={() => close()}
                                />
                              </button>
                              <div className="popup-section">
                                <div className="popup-left-container">
                                  <h3 className="popup-font40">
                                    OUR VACCINATION INITIATIVES
                                  </h3>
                                  <p className="popup-font20">
                                    Lokarpan has worked to ensure that children
                                    – no matter who they are or where they live
                                    – have access to the vaccines they need to
                                    survive and thrive.
                                  </p>
                                </div>
                                <div className="popup-right-container">
                                  <img
                                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                    alt="popup-img"
                                    className="popup-img"
                                  />
                                  <div className="popup-content">
                                    <h3 className="popup-font18">SPOTLIGHT</h3>
                                    <p className="popup-font16">
                                      Lokarpan's Vaccination program was
                                      designed to shield communities from eight
                                      life-threatening diseases. Following
                                      government guidelines, we diligently
                                      completed vaccination schedules for
                                      children, aiming to prevent diseases like
                                      malaria and polio, ensuring the robust
                                      health of our communities.
                                    </p>
                                    <p className="popup-font16">
                                      In close coordination with government
                                      counterparts, we facilitated TT
                                      vaccination, distributed essential IFA
                                      tablets, and encouraged the intake of
                                      nutritional supplements through health
                                      education sessions with community groups.
                                      Furthermore, our outreach extended to
                                      forming Self-Help Groups (SHGs) in the
                                      areas, integrating them into our
                                      comprehensive health initiatives for a
                                      stronger, healthier community.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="popup-overlay"></div>
                          </>
                        )}
                      </Popup>
                    </div>
                  </div>
                </div>
                <div className="cards-left-container space-left">
                  <div className="card">
                    <img
                      src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                      className="edu-img"
                      alt="Card 1"
                    />
                    <div className="card-content">
                      {/* <h4>Food aid programme</h4> */}
                      <h3>
                        Ensuring adequate nutrition for children is a key focus
                        of our nutrition initiatives.
                      </h3>
                      <Popup
                        trigger={
                          <div className="expand-sec">
                            <p>EXPAND TO LEARN MORE</p>
                            <IoMdExpand />
                          </div>
                        }
                        modal
                        onOpen={this.updatePopUpOpen}
                        onClose={this.updatePopUpOpen}
                        onKeyDown={(event, close) => {
                          this.onKeyDown(event, close);
                        }}
                      >
                        {(close) => (
                          <>
                            <div className="popup-container">
                              <button className="close-btn">
                                <IoMdClose
                                  style={{
                                    fontSize: "30px",
                                  }}
                                  onClick={() => close()}
                                />
                              </button>
                              <div className="popup-section">
                                <div className="popup-left-container">
                                  <h3 className="popup-font40">
                                    FOOD AID PROGRAMME
                                  </h3>
                                  <p className="popup-font20">
                                    We monitor health indicators closely to
                                    address any nutritional gaps and implement
                                    programs that combat malnutrition and
                                    promote healthy growth.
                                  </p>
                                </div>
                                <div className="popup-right-container">
                                  <img
                                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                    alt="popup-img"
                                    className="popup-img"
                                  />
                                  <div className="popup-content">
                                    <h3 className="popup-font18">SPOTLIGHT</h3>
                                    <p className="popup-font16">
                                      Lokarpan's nutritional initiatives have
                                      been instrumental in nurturing healthy
                                      communities. In partnership with USAID, we
                                      have carefully designed and implemented
                                      programs centred on providing crucial
                                      supplements like iron and folic acid
                                      tablets to address prevalent deficiencies.
                                      Our endeavours also encompass extensive
                                      education efforts, enlightening community
                                      members on the significance of balanced
                                      diets for optimal growth and development.
                                    </p>
                                    <p className="popup-font16">
                                      Through initiatives such as the Village
                                      Health and Nutrition Day (VHND) and
                                      sector-level meetings, Lokarpan continues
                                      to lead impactful interventions aimed at
                                      reducing infant mortality, tackling the
                                      pervasive issue of malnutrition, and
                                      fostering a healthier future for
                                      communities. Collaborating with local
                                      Self-Help Groups (SHGs), we have actively
                                      engaged community members in workshops
                                      that promote sustainable nutritional
                                      practices and ensure equitable access to
                                      nutritious foods for all.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="popup-overlay"></div>
                          </>
                        )}
                      </Popup>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mobile-education-cards-container">
                <div className="card">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                    className="edu-img"
                    alt="Card 1"
                  />
                  <div className="card-content">
                    {/* <h4> Maternal and Child Health Initiatives</h4> */}
                    <h3>
                      Empowering families through essential midwife support and
                      educational resources for maternal and child health
                    </h3>

                    <Popup
                      trigger={
                        <div className="expand-sec">
                          <p>EXPAND TO LEARN MORE</p>
                          <IoMdExpand />
                        </div>
                      }
                      modal
                      onOpen={this.updatePopUpOpen}
                      onClose={this.updatePopUpOpen}
                      onKeyDown={(event, close) => {
                        this.onKeyDown(event, close);
                      }}
                    >
                      {(close) => (
                        <>
                          <div className="popup-container">
                            <button className="close-btn">
                              <IoMdClose
                                style={{
                                  fontSize: "30px",
                                }}
                                onClick={() => close()}
                              />
                            </button>
                            <div className="popup-section">
                              <div className="popup-right-container">
                                <div className="popup-left-container">
                                  <h3 className="popup-font40">
                                    MATERNAL AND CHILD HEALTH INITIATIVES
                                  </h3>
                                  <p className="popup-font20">
                                    Project VISTAAR: Advocating for improved
                                    MNCHN programming
                                  </p>
                                </div>
                                <img
                                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                  alt="popup-img"
                                  className="popup-img"
                                />
                                <div className="popup-content">
                                  <h3 className="popup-font18">SPOTLIGHT</h3>
                                  <p className="popup-font16">
                                    Over the course of eight years, Lokarpan's
                                    Safe Motherhood and Child Survival program
                                    made a profound impact in 160 villages
                                    across Kanpur Dehat and Auraiya districts,
                                    reaching a population of 186,750. This
                                    initiative brought about a remarkable shift
                                    in the awareness and practices of women
                                    within these villages, emphasising the
                                    importance of immunizations, regular
                                    check-ups, and safe deliveries at Primary
                                    Health Centers (PHCs) and Community Health
                                    Centers (CHCs). The program empowered
                                    village health workers as pivotal figures,
                                    guiding new mothers and maintaining close
                                    coordination with Auxiliary Nurse Midwives
                                    (ANMs).
                                  </p>
                                  <p className="popup-font16 popup-last-space">
                                    Building on this legacy, Lokarpan, in 2006
                                    launched Project VISTAAR in Bulandshahr
                                    district, focusing on providing strategic
                                    technical assistance, generating
                                    evidence-based knowledge, and advocating for
                                    improved Maternal, Neonatal, and Child
                                    Health and Nutrition (MNCHN) programming.
                                    This initiative encompassed efforts to
                                    strengthen MNCHN programs through tailored
                                    technical assistance, evidence-based
                                    interventions, and advocacy for prioritising
                                    nutrition and newborn care. The project also
                                    emphasised equity and gender considerations,
                                    striving to improve MNCHN outcomes for the
                                    most vulnerable populations, while actively
                                    promoting knowledge management to share best
                                    practices and evidence-based approaches in
                                    the community.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="popup-overlay"></div>
                        </>
                      )}
                    </Popup>
                  </div>
                </div>

                <div className="card">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                    className="edu-img"
                    alt="Card 1"
                  />
                  <div className="card-content">
                    {/* <h4>Our Vaccination Initiatives</h4> */}
                    <h3>
                      Safeguarding community health through comprehensive
                      vaccination initiatives
                    </h3>

                    <Popup
                      trigger={
                        <div className="expand-sec">
                          <p>EXPAND TO LEARN MORE</p>
                          <IoMdExpand />
                        </div>
                      }
                      modal
                      onOpen={this.updatePopUpOpen}
                      onClose={this.updatePopUpOpen}
                      onKeyDown={(event, close) => {
                        this.onKeyDown(event, close);
                      }}
                    >
                      {(close) => (
                        <>
                          <div className="popup-container">
                            <button className="close-btn">
                              <IoMdClose
                                style={{
                                  fontSize: "30px",
                                }}
                                onClick={() => close()}
                              />
                            </button>
                            <div className="popup-section">
                              <div className="popup-right-container">
                                <div className="popup-left-container">
                                  <h3 className="popup-font40">
                                    {" "}
                                    OUR VACCINATION INITIATIVES
                                  </h3>
                                  <p className="popup-font20">
                                    Lokarpan has worked to ensure that children
                                    – no matter who they are or where they live
                                    – have access to the vaccines they need to
                                    survive and thrive.
                                  </p>
                                </div>
                                <img
                                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                  alt="popup-img"
                                  className="popup-img"
                                />
                                <div className="popup-content">
                                  <h3 className="popup-font18">SPOTLIGHT</h3>
                                  <p className="popup-font16">
                                    Lokarpan's Vaccination program was designed
                                    to shield communities from eight
                                    life-threatening diseases. Following
                                    government guidelines, we diligently
                                    completed vaccination schedules for
                                    children, aiming to prevent diseases like
                                    malaria and polio, ensuring the robust
                                    health of our communities.
                                  </p>
                                  <p className="popup-font16 popup-last-space">
                                    In close coordination with government
                                    counterparts, we facilitated TT vaccination,
                                    distributed essential IFA tablets, and
                                    encouraged the intake of nutritional
                                    supplements through health education
                                    sessions with community groups. Furthermore,
                                    our outreach extended to forming Self-Help
                                    Groups (SHGs) in the areas, integrating them
                                    into our comprehensive health initiatives
                                    for a stronger, healthier community.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="popup-overlay"></div>
                        </>
                      )}
                    </Popup>
                  </div>
                </div>

                <div className="card">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                    className="edu-img"
                    alt="Card 1"
                  />
                  <div className="card-content">
                    {/* <h4>food aid programmes</h4> */}
                    <h3>
                      Ensuring adequate nutrition for children is a key focus of
                      our nutrition initiatives.
                    </h3>

                    <Popup
                      trigger={
                        <div className="expand-sec">
                          <p>EXPAND TO LEARN MORE</p>
                          <IoMdExpand />
                        </div>
                      }
                      modal
                      onOpen={this.updatePopUpOpen}
                      onClose={this.updatePopUpOpen}
                      onKeyDown={(event, close) => {
                        this.onKeyDown(event, close);
                      }}
                    >
                      {(close) => (
                        <>
                          <div className="popup-container">
                            <button className="close-btn">
                              <IoMdClose
                                style={{
                                  fontSize: "30px",
                                }}
                                onClick={() => close()}
                              />
                            </button>
                            <div className="popup-section">
                              <div className="popup-right-container">
                                <div className="popup-left-container">
                                  <h3 className="popup-font40">
                                    FOOD AID PROGRAMME
                                  </h3>
                                  <p className="popup-font20">
                                    We monitor health indicators closely to
                                    address any nutritional gaps and implement
                                    programs that combat malnutrition and
                                    promote healthy growth.
                                  </p>
                                </div>
                                <img
                                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                  alt="popup-img"
                                  className="popup-img"
                                />
                                <div className="popup-content">
                                  <h3 className="popup-font18">SPOTLIGHT</h3>
                                  <p className="popup-font16">
                                    Lokarpan's nutritional initiatives have been
                                    instrumental in nurturing healthy
                                    communities. In partnership with USAID, we
                                    have carefully designed and implemented
                                    programs centred on providing crucial
                                    supplements like iron and folic acid tablets
                                    to address prevalent deficiencies. Our
                                    endeavours also encompass extensive
                                    education efforts, enlightening community
                                    members on the significance of balanced
                                    diets for optimal growth and development.
                                  </p>
                                  <p className="popup-font16 popup-last-space">
                                    Through initiatives such as the Village
                                    Health and Nutrition Day (VHND) and
                                    sector-level meetings, Lokarpan continues to
                                    lead impactful interventions aimed at
                                    reducing infant mortality, tackling the
                                    pervasive issue of malnutrition, and
                                    fostering a healthier future for
                                    communities. Collaborating with local
                                    Self-Help Groups (SHGs), we have actively
                                    engaged community members in workshops that
                                    promote sustainable nutritional practices
                                    and ensure equitable access to nutritious
                                    foods for all.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="popup-overlay"></div>
                        </>
                      )}
                    </Popup>
                  </div>
                </div>
              </div>
              <div className="our-role-each-container-content">
                <h1>Health</h1>
                <p>
                  Lokarpan is committed to advancing community health through a
                  range of impactful initiatives. Our goal is to reduce infant
                  and mother mortality rates, ensuring a safe and healthy start
                  for families. With a focus on providing midwife support,
                  essential nutrition, and educational resources, we strive to
                  empower mothers and children alike.
                </p>
              </div>
            </div>
          )}
          {active === "livelihood" && (
            <div className={containerClass}>
              <div className="our-role-each-container-content">
                <h1>Livelihood</h1>
                <p>
                  Lokarpan is committed to alleviating poverty in rural India.
                  Through tailored skill development programs, microfinance
                  initiatives, and entrepreneurship support, we empower
                  individuals to improve economic conditions and enhance social
                  mobility. Our goal is to foster stronger, more self-reliant
                  communities.
                </p>
              </div>
              <div className="education-cards-container">
                <div className="cards-left-container liv-space-above">
                  <div className="card">
                    <img
                      src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                      className="edu-img"
                      alt="Card 1"
                    />
                    <div className="card-content">
                      {/* <h4>Microfinance Initiatives</h4> */}
                      <h3>
                        Empowering individuals and communities through financial
                        inclusion.
                      </h3>

                      <Popup
                        trigger={
                          <div className="expand-sec">
                            <p>EXPAND TO LEARN MORE</p>
                            <IoMdExpand />
                          </div>
                        }
                        modal
                        onOpen={this.updatePopUpOpen}
                        onClose={this.updatePopUpOpen}
                        onKeyDown={(event, close) => {
                          this.onKeyDown(event, close);
                        }}
                      >
                        {(close) => (
                          <>
                            <div className="popup-container">
                              <button className="close-btn">
                                <IoMdClose
                                  style={{
                                    fontSize: "30px",
                                  }}
                                  onClick={() => close()}
                                />
                              </button>
                              <div className="popup-section">
                                <div className="popup-left-container">
                                  <h3 className="popup-font40">
                                    MICROFINANCE INITIATIVES
                                  </h3>
                                  <p className="popup-font20">
                                    In Uttar Pradesh, Lokarpan has helped
                                    reshape communities by fostering financial
                                    autonomy among women entrepreneurs
                                  </p>
                                </div>
                                <div className="popup-right-container">
                                  <img
                                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                    alt="popup-img"
                                    className="popup-img"
                                  />
                                  <div className="popup-content">
                                    <h3 className="popup-font18">SPOTLIGHT</h3>
                                    <p className="popup-font16">
                                      Lokarpan initiated the establishment of
                                      Self-Help Groups (SHGs) in 2003,
                                      recognising the compelling need for
                                      economic empowerment among the women
                                      engaged in our health and education
                                      initiatives. This pivotal step introduced
                                      a structured microcredit and savings
                                      program, strategically designed to
                                      facilitate their access to vital funds for
                                      livelihood enhancement.
                                    </p>
                                    <p className="popup-font16">
                                      Out of the formed groups, a commendable 41
                                      SHGs successfully inaugurated bank
                                      accounts with HDFC, enabling them to
                                      proficiently manage bank loans and
                                      internal lending. With a total membership
                                      tallying 3133 individuals spread across
                                      169 villages, Lokarpan maintained a
                                      steadfast engagement with these groups.
                                      The program facilitated the mobilisation
                                      of savings, inspiring members to
                                      strategically deploy funds towards
                                      pressing economic exigencies. Loans were
                                      utilised by women to venture into
                                      livestock acquisition, launch small-scale
                                      enterprises, establish tailoring
                                      boutiques, store agricultural produce, and
                                      engage in profitable sales.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="popup-overlay"></div>
                          </>
                        )}
                      </Popup>
                    </div>
                  </div>
                </div>
                <div className="cards-right-container">
                  {/* <div className="card space">
                    <img
                      src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                      className="edu-img"
                      alt="Card 1"
                    />
                    <div className="card-content">
                     
                      <h3>
                        Empowering individuals and communities through financial
                        inclusion.
                      </h3>

                      <Popup
                        trigger={
                          <div className="expand-sec">
                            <p>EXPAND TO LEARN MORE</p>
                            <IoMdExpand />
                          </div>
                        }
                        modal
                        onOpen={this.updatePopUpOpen}
                        onClose={this.updatePopUpOpen}
                        onKeyDown={(event, close) => {
                          this.onKeyDown(event, close);
                        }}
                      >
                        {(close) => (
                          <>
                            <div className="popup-container">
                              <button className="close-btn">
                                <IoMdClose
                                  style={{
                                    fontSize: "30px",
                                  }}
                                  onClick={() => close()}
                                />
                              </button>
                              <div className="popup-section">
                                <div className="popup-left-container">
                                  <h3 className="popup-font40">
                                    MICROFINANCE INITIATIVES
                                  </h3>
                                  <p className="popup-font20">
                                    In Uttar Pradesh, Lokarpan has helped
                                    reshape communities by fostering financial
                                    autonomy among women entrepreneurs
                                  </p>
                                </div>
                                <div className="popup-right-container">
                                  <img
                                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                    alt="popup-img"
                                    className="popup-img"
                                  />
                                  <div className="popup-content">
                                    <h3 className="popup-font18">SPOTLIGHT</h3>
                                    <p className="popup-font16">
                                      Lokarpan initiated the establishment of
                                      Self-Help Groups (SHGs) in 2003,
                                      recognising the compelling need for
                                      economic empowerment among the women
                                      engaged in our health and education
                                      initiatives. This pivotal step introduced
                                      a structured microcredit and savings
                                      program, strategically designed to
                                      facilitate their access to vital funds for
                                      livelihood enhancement.
                                    </p>
                                    <p className="popup-font16">
                                      Out of the formed groups, a commendable 41
                                      SHGs successfully inaugurated bank
                                      accounts with HDFC, enabling them to
                                      proficiently manage bank loans and
                                      internal lending. With a total membership
                                      tallying 3133 individuals spread across
                                      169 villages, Lokarpan maintained a
                                      steadfast engagement with these groups.
                                      The program facilitated the mobilisation
                                      of savings, inspiring members to
                                      strategically deploy funds towards
                                      pressing economic exigencies. Loans were
                                      utilised by women to venture into
                                      livestock acquisition, launch small-scale
                                      enterprises, establish tailoring
                                      boutiques, store agricultural produce, and
                                      engage in profitable sales.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="popup-overlay"></div>
                          </>
                        )}
                      </Popup>
                    </div>
                  </div> */}
                  <div className="card">
                    <img
                      src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                      className="edu-img"
                      alt="Card 1"
                    />
                    <div className="card-content">
                      {/* <h4>Economic Resilience Programmes</h4> */}
                      <h3>
                        Working with civil society to tackle social exclusion
                      </h3>
                      <Popup
                        trigger={
                          <div className="expand-sec">
                            <p>EXPAND TO LEARN MORE</p>
                            <IoMdExpand />
                          </div>
                        }
                        modal
                        onOpen={this.updatePopUpOpen}
                        onClose={this.updatePopUpOpen}
                        onKeyDown={(event, close) => {
                          this.onKeyDown(event, close);
                        }}
                      >
                        {(close) => (
                          <>
                            <div className="popup-container">
                              <button className="close-btn">
                                <IoMdClose
                                  style={{
                                    fontSize: "30px",
                                  }}
                                  onClick={() => close()}
                                />
                              </button>
                              <div className="popup-section">
                                <div className="popup-left-container">
                                  <h3 className="popup-font40">
                                    ECONOMIC RESILIENCE PROGRAMMES
                                  </h3>
                                  <p className="popup-font20">
                                    Lokarpan's vision for the future includes a
                                    comprehensive Livelihoods intervention,
                                    ensuring sustainable growth and improved
                                    quality of life for rural households.
                                  </p>
                                </div>
                                <div className="popup-right-container">
                                  <img
                                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                    alt="popup-img"
                                    className="popup-img"
                                  />
                                  <div className="popup-content">
                                    <h3 className="popup-font18">SPOTLIGHT</h3>
                                    <p className="popup-font16">
                                      Lokarpan's PACS programme was implemented
                                      across 40 villages in Pihani and
                                      Rasoolabad blocks of Hardoi and
                                      Kanpur-Dehat districts. Leading a
                                      collaborative effort with four Civil
                                      Society Organizations (CSOs), Lokarpan
                                      initiated the SAMVIKAS project funded by
                                      PACS to uplift rural economies. These
                                      villages, situated in remote interiors,
                                      had long grappled with limited
                                      opportunities and low literacy rates,
                                      particularly impacting educational
                                      standards. With a focus on enhancing
                                      livelihoods, the PACS programme was driven
                                      by the goal of fostering economic
                                      empowerment within these communities.
                                    </p>
                                    <p className="popup-font16">
                                      The programme's objectives centred on
                                      transforming the rural economic landscape.
                                      It aimed to bolster household incomes by
                                      introducing Strategic Self-Help Groups
                                      (SHGs) and promoting a diverse range of
                                      on-farm and off-farm enterprises. Through
                                      this approach, Lokarpan was able to
                                      revitalise agricultural practices,
                                      identify resilient crop varieties for
                                      degraded lands, and introduce innovations
                                      like Jatropha cultivation. The
                                      intervention was pivotal in enhancing
                                      employment quality and economic resilience
                                      by equipping community members with
                                      essential skills and fostering linkages
                                      with financial institutions like HDFC
                                      bank.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="popup-overlay"></div>
                          </>
                        )}
                      </Popup>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mobile-education-cards-container">
                {/* <div className="card">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                    className="edu-img"
                    alt="Card 1"
                  />
                  <div className="card-content">
                    <h4>Skill Development</h4>
                    <h3>
                      Tailored skill development programmes fostering
                      entrepreneurship and self-reliance.
                    </h3>

                    <Popup
                      trigger={
                        <div className="expand-sec">
                          <p>EXPAND TO LEARN MORE</p>
                          <IoMdExpand />
                        </div>
                      }
                      modal
                      onOpen={this.updatePopUpOpen}
                      onClose={this.updatePopUpOpen}
                      onKeyDown={(event, close) => {
                        this.onKeyDown(event, close);
                      }}
                    >
                      {(close) => (
                        <>
                          <div className="popup-container">
                            <button className="close-btn">
                              <IoMdClose
                                style={{
                                  fontSize: "30px",
                                }}
                                onClick={() => close()}
                              />
                            </button>
                            <div className="popup-section">
                              <div className="popup-left-container">
                                <h3 className="popup-font40">
                                  SKILL DEVELOPMENT
                                </h3>
                                <p className="popup-font20">
                                  Our initiatives enhance employability,
                                  creating sustainable livelihoods for community
                                  growth.
                                </p>
                              </div>
                              <div className="popup-right-container">
                                <img
                                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                  alt="popup-img"
                                  className="popup-img"
                                />
                                <div className="popup-content">
                                  <h3 className="popup-font18">SPOTLIGHT</h3>
                                  <p className="popup-font16">
                                    GiveDirectly empowers marginalized
                                    communities and those affected by disasters
                                    like COVID-19 through direct cash transfers,
                                    which give people the flexibility to provide
                                    for their true needs, in contrast to in-kind
                                    donations. Since 2012, Google.org has
                                    provided over $10 million to GiveDirectly to
                                    support people in need and research the
                                    impact of GiveDirectly’s innovative
                                    approach.
                                  </p>
                                  <p className="popup-font16">
                                    GiveDirectly empowers marginalized
                                    communities and those affected by disasters
                                    like COVID-19 through direct cash transfers,
                                    which give people the flexibility to provide
                                    for their true needs, in contrast to in-kind
                                    donations. Since 2012, Google.org has
                                    provided over $10 million to GiveDirectly to
                                    support people in need and research the
                                    impact of GiveDirectly’s innovative
                                    approach.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="popup-overlay"></div>
                        </>
                      )}
                    </Popup>
                  </div>
                </div> */}

                <div className="card">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                    className="edu-img"
                    alt="Card 1"
                  />
                  <div className="card-content">
                    {/* <h4> Microfinance Initiatives</h4> */}
                    <h3>
                      Empowering individuals and communities through financial
                      inclusion.
                    </h3>

                    <Popup
                      trigger={
                        <div className="expand-sec">
                          <p>EXPAND TO LEARN MORE</p>
                          <IoMdExpand />
                        </div>
                      }
                      modal
                      onOpen={this.updatePopUpOpen}
                      onClose={this.updatePopUpOpen}
                      onKeyDown={(event, close) => {
                        this.onKeyDown(event, close);
                      }}
                    >
                      {(close) => (
                        <>
                          <div className="popup-container">
                            <button className="close-btn">
                              <IoMdClose
                                style={{
                                  fontSize: "30px",
                                }}
                                onClick={() => close()}
                              />
                            </button>
                            <div className="popup-section">
                              <div className="popup-right-container">
                                <div className="popup-left-container">
                                  <h3 className="popup-font40">
                                    MICROFINANCE INITIATIVES
                                  </h3>
                                  <p className="popup-font20">
                                    In Uttar Pradesh, Lokarpan has helped
                                    reshape communities by fostering financial
                                    autonomy among women entrepreneurs
                                  </p>
                                </div>
                                <img
                                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                  alt="popup-img"
                                  className="popup-img"
                                />
                                <div className="popup-content">
                                  <h3 className="popup-font18">SPOTLIGHT</h3>
                                  <p className="popup-font16">
                                    Lokarpan initiated the establishment of
                                    Self-Help Groups (SHGs) in 2003, recognising
                                    the compelling need for economic empowerment
                                    among the women engaged in our health and
                                    education initiatives. This pivotal step
                                    introduced a structured microcredit and
                                    savings program, strategically designed to
                                    facilitate their access to vital funds for
                                    livelihood enhancement.
                                  </p>
                                  <p className="popup-font16 popup-last-space">
                                    Out of the formed groups, a commendable 41
                                    SHGs successfully inaugurated bank accounts
                                    with HDFC, enabling them to proficiently
                                    manage bank loans and internal lending. With
                                    a total membership tallying 3133 individuals
                                    spread across 169 villages, Lokarpan
                                    maintained a steadfast engagement with these
                                    groups. The program facilitated the
                                    mobilisation of savings, inspiring members
                                    to strategically deploy funds towards
                                    pressing economic exigencies. Loans were
                                    utilised by women to venture into livestock
                                    acquisition, launch small-scale enterprises,
                                    establish tailoring boutiques, store
                                    agricultural produce, and engage in
                                    profitable sales.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="popup-overlay"></div>
                        </>
                      )}
                    </Popup>
                  </div>
                </div>

                <div className="card">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                    className="edu-img"
                    alt="Card 1"
                  />
                  <div className="card-content">
                    {/* <h4> Economic Resilience Programmes</h4> */}
                    <h3>
                      Working with civil society to tackle social exclusion.
                    </h3>

                    <Popup
                      trigger={
                        <div className="expand-sec">
                          <p>EXPAND TO LEARN MORE</p>
                          <IoMdExpand />
                        </div>
                      }
                      modal
                      onOpen={this.updatePopUpOpen}
                      onClose={this.updatePopUpOpen}
                      onKeyDown={(event, close) => {
                        this.onKeyDown(event, close);
                      }}
                    >
                      {(close) => (
                        <>
                          <div className="popup-container">
                            <button className="close-btn">
                              <IoMdClose
                                style={{
                                  fontSize: "30px",
                                }}
                                onClick={() => close()}
                              />
                            </button>
                            <div className="popup-section">
                              <div className="popup-right-container">
                                <div className="popup-left-container">
                                  <h3 className="popup-font40">
                                    ECONOMIC RESILIENCE PROGRAMMES
                                  </h3>
                                  <p className="popup-font20">
                                    Lokarpan's vision for the future includes a
                                    comprehensive Livelihoods intervention,
                                    ensuring sustainable growth and improved
                                    quality of life for rural households.
                                  </p>
                                </div>
                                <img
                                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                  alt="popup-img"
                                  className="popup-img"
                                />
                                <div className="popup-content">
                                  <h3 className="popup-font18">SPOTLIGHT</h3>
                                  <p className="popup-font16">
                                    Lokarpan's PACS programme was implemented
                                    across 40 villages in Pihani and Rasoolabad
                                    blocks of Hardoi and Kanpur-Dehat districts.
                                    Leading a collaborative effort with four
                                    Civil Society Organizations (CSOs), Lokarpan
                                    initiated the SAMVIKAS project funded by
                                    PACS to uplift rural economies. These
                                    villages, situated in remote interiors, had
                                    long grappled with limited opportunities and
                                    low literacy rates, particularly impacting
                                    educational standards. With a focus on
                                    enhancing livelihoods, the PACS programme
                                    was driven by the goal of fostering economic
                                    empowerment within these communities.
                                  </p>
                                  <p className="popup-font16 popup-last-space">
                                    The programme's objectives centred on
                                    transforming the rural economic landscape.
                                    It aimed to bolster household incomes by
                                    introducing Strategic Self-Help Groups
                                    (SHGs) and promoting a diverse range of
                                    on-farm and off-farm enterprises. Through
                                    this approach, Lokarpan was able to
                                    revitalise agricultural practices, identify
                                    resilient crop varieties for degraded lands,
                                    and introduce innovations like Jatropha
                                    cultivation. The intervention was pivotal in
                                    enhancing employment quality and economic
                                    resilience by equipping community members
                                    with essential skills and fostering linkages
                                    with financial institutions like HDFC bank.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="popup-overlay"></div>
                        </>
                      )}
                    </Popup>
                  </div>
                </div>
              </div>
            </div>
          )}
          {active === "design" && (
            <div className={containerClass}>
              <div className="education-cards-container">
                <div className="cards-right-container">
                  <div className="card space">
                    <img
                      src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                      className="edu-img"
                      alt="Card 1"
                    />
                    <div className="card-content">
                      {/* <h4>Design Fellowship</h4> */}
                      <h3>
                        Help us design the ideal school for our communities.
                      </h3>

                      <Popup
                        trigger={
                          <div className="expand-sec">
                            <p>EXPAND TO LEARN MORE</p>
                            <IoMdExpand />
                          </div>
                        }
                        modal
                        onOpen={this.updatePopUpOpen}
                        onClose={this.updatePopUpOpen}
                        onKeyDown={(event, close) => {
                          this.onKeyDown(event, close);
                        }}
                      >
                        {(close) => (
                          <>
                            <div className="popup-container">
                              <button className="close-btn">
                                <IoMdClose
                                  style={{
                                    fontSize: "30px",
                                  }}
                                  onClick={() => close()}
                                />
                              </button>
                              <div className="popup-section">
                                <div className="popup-left-container">
                                  <h3 className="popup-font40">
                                    DESIGN FELLOWSHIP
                                  </h3>
                                  <p className="popup-font20">
                                    Drawing insights from challenges in rural
                                    educational infrastructure, we invite
                                    experts to join us in designing the most
                                    optimal learning spaces
                                  </p>
                                </div>
                                <div className="popup-right-container">
                                  <img
                                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                    alt="popup-img"
                                    className="popup-img"
                                  />
                                  <div className="popup-content">
                                    <h3 className="popup-font18">SPOTLIGHT</h3>
                                    <p className="popup-font16">
                                      Lokarpan recognises the urgent need to
                                      revolutionise the approach to schooling
                                      infrastructure. In resource constrained
                                      settings, infrastructural projects are
                                      often driven by strict budget constraints,
                                      adhering closely to government guidelines
                                      for basic facilities such as bathrooms and
                                      water supply. However, the focus often
                                      remains on meeting minimal requirements,
                                      neglecting the potential for innovative
                                      design solutions.
                                    </p>
                                    <p className="popup-font16">
                                      This lack of emphasis on design innovation
                                      results in standardised layouts that offer
                                      limited room for creativity or
                                      sustainability. Buildings are constructed
                                      without due consideration for green spaces
                                      or facade openings, missing valuable
                                      opportunities for energy efficiency and
                                      positive environmental impact. Moreover,
                                      post-construction, these structures often
                                      suffer from inadequate maintenance, as
                                      attention shifts solely to the initial
                                      building phase rather than long-term
                                      sustainability measures.
                                    </p>
                                    <p className="popup-font16">
                                      By fostering a culture of innovation and
                                      strategic planning, we seek to create
                                      educational spaces that not only meet
                                      regulatory standards but also inspire
                                      learning, promote sustainability, and
                                      stand the test of time. Through this
                                      fellowship, Lokarpan aims to transform the
                                      landscape of educational infrastructure,
                                      ensuring that every building reflects our
                                      commitment to quality, sustainability, and
                                      community well-being.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="popup-overlay"></div>
                          </>
                        )}
                      </Popup>
                    </div>
                  </div>
                  <div className="card">
                    <img
                      src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                      className="edu-img"
                      alt="Card 1"
                    />
                    <div className="card-content">
                      {/* <h4>Reading Rooms</h4> */}
                      <h3>
                        Learning spaces that sparks curiosity and exploration.
                      </h3>

                      <Popup
                        trigger={
                          <div className="expand-sec">
                            <p>EXPAND TO LEARN MORE</p>
                            <IoMdExpand />
                          </div>
                        }
                        modal
                        onOpen={this.updatePopUpOpen}
                        onClose={this.updatePopUpOpen}
                        onKeyDown={(event, close) => {
                          this.onKeyDown(event, close);
                        }}
                      >
                        {(close) => (
                          <>
                            <div className="popup-container">
                              <button className="close-btn">
                                <IoMdClose
                                  style={{
                                    fontSize: "30px",
                                  }}
                                  onClick={() => close()}
                                />
                              </button>
                              <div className="popup-section">
                                <div className="popup-left-container">
                                  <h3 className="popup-font40">
                                    READING ROOMS
                                  </h3>
                                  <p className="popup-font20">
                                    Transforming spaces that support inclusive
                                    approaches to education, enabling children
                                    to learn together.
                                  </p>
                                </div>
                                <div className="popup-right-container">
                                  <img
                                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                    alt="popup-img"
                                    className="popup-img"
                                  />
                                  <div className="popup-content">
                                    <h3 className="popup-font18">SPOTLIGHT</h3>
                                    <p className="popup-font16">
                                      In rural India, education often faces
                                      challenges due to a lack of suitable
                                      infrastructure that can truly facilitate
                                      learning. From health issues caused by
                                      improper postures to limited engagement
                                      between teachers and students, the absence
                                      of dedicated educational spaces hampers
                                      the process of imparting equal education.
                                      To address this, Lokarpan proposes the
                                      design and construction of a 310 square
                                      foot reading room tailored for 15-20
                                      children. This space will serve as a
                                      beacon of learning, offering a haven for
                                      young readers with a capacity for 1000
                                      books, power outlets, and workstations for
                                      laptops. With a focus on optimal lighting,
                                      ergonomic seating, and an elegant yet
                                      cost-effective design, the reading room
                                      aims to maximise its impact in fostering a
                                      love for reading and learning among
                                      children.
                                    </p>
                                    <p className="popup-font16">
                                      The project's objectives are clear: to
                                      create a space where children can
                                      comfortably immerse themselves in the
                                      world of books and technology. From
                                      planning a layout that encourages movement
                                      and collaboration to integrating
                                      technology seamlessly, the reading room
                                      will be a hub of educational exploration.
                                      With an eye for elegance and practicality,
                                      Lokarpan aims to ensure that every element
                                      of the room, from bookshelves to seating
                                      arrangements, is designed to enhance the
                                      educational experience.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="popup-overlay"></div>
                          </>
                        )}
                      </Popup>
                    </div>
                  </div>
                </div>
                <div className="cards-left-container space-left">
                  <div className="card">
                    <img
                      src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                      className="edu-img"
                      alt="Card 1"
                    />
                    <div className="card-content">
                      {/* <h4>Sanitation</h4> */}
                      <h3>
                        Child-friendly, functional sanitation stalls for school
                        environments
                      </h3>

                      <Popup
                        trigger={
                          <div className="expand-sec">
                            <p>EXPAND TO LEARN MORE</p>
                            <IoMdExpand />
                          </div>
                        }
                        modal
                        onOpen={this.updatePopUpOpen}
                        onClose={this.updatePopUpOpen}
                        onKeyDown={(event, close) => {
                          this.onKeyDown(event, close);
                        }}
                      >
                        {(close) => (
                          <>
                            <div className="popup-container">
                              <button className="close-btn">
                                <IoMdClose
                                  style={{
                                    fontSize: "30px",
                                  }}
                                  onClick={() => close()}
                                />
                              </button>
                              <div className="popup-section">
                                <div className="popup-left-container">
                                  <h3 className="popup-font40">
                                    CHILD-FRIENDLY SANITATION STALLS
                                  </h3>
                                  <p className="popup-font20">
                                    Ensuring a safer, comfortable, and
                                    age-appropriate restroom experience for
                                    children
                                  </p>
                                </div>
                                <div className="popup-right-container">
                                  <img
                                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                    alt="popup-img"
                                    className="popup-img"
                                  />
                                  <div className="popup-content">
                                    <h3 className="popup-font18">SPOTLIGHT</h3>
                                    <p className="popup-font16">
                                      Lokarpan is embarking on a transformative
                                      project to construct child-friendly
                                      bathroom stalls at the Kith n Kin School
                                      in Auraiya, Uttar Pradesh. With a keen
                                      focus on safety, comfort, and
                                      age-appropriate design, these stalls are
                                      envisioned to provide young students with
                                      a positive restroom experience. Each stall
                                      is meticulously designed to offer privacy
                                      and independence, featuring child-friendly
                                      fixtures such as lower sink heights,
                                      smaller toilet seats, and easily
                                      accessible amenities like clothes hooks
                                      and trash bins.
                                    </p>
                                    <p className="popup-font16">
                                      The project scope encompasses a holistic
                                      approach, from optimising space
                                      utilisation and incorporating
                                      energy-efficient lighting to ensuring
                                      accessibility for children with
                                      disabilities. Lokarpan's design
                                      prioritises durability and easy
                                      maintenance, using water-resistant
                                      materials and fixtures designed for
                                      minimal contact points. With an eye for
                                      sustainability, the project integrates
                                      eco-friendly practices while maintaining a
                                      keen attention to detail in every aspect,
                                      from child-friendly colours to ergonomic
                                      layouts. Through this initiative, Lokarpan
                                      aims to create a safe, inviting, and
                                      hygienic restroom environment that
                                      enhances the overall learning experience
                                      for students at the Kith n Kin School.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="popup-overlay"></div>
                          </>
                        )}
                      </Popup>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mobile-education-cards-container">
                <div className="card">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                    className="edu-img"
                    alt="Card 1"
                  />
                  <div className="card-content">
                    {/* <h4>Design Fellowship</h4> */}
                    <h3>
                      Help us design the ideal school for our communities.
                    </h3>
                    <Popup
                      trigger={
                        <div className="expand-sec">
                          <p>EXPAND TO LEARN MORE</p>
                          <IoMdExpand />
                        </div>
                      }
                      modal
                      onOpen={this.updatePopUpOpen}
                      onClose={this.updatePopUpOpen}
                      onKeyDown={(event, close) => {
                        this.onKeyDown(event, close);
                      }}
                    >
                      {(close) => (
                        <>
                          <div className="popup-container">
                            <button className="close-btn">
                              <IoMdClose
                                style={{
                                  fontSize: "30px",
                                }}
                                onClick={() => close()}
                              />
                            </button>
                            <div className="popup-section">
                              <div className="popup-right-container">
                                <div className="popup-left-container">
                                  <h3 className="popup-font40">
                                    DESIGN FELLOWSHIP
                                  </h3>
                                  <p className="popup-font20">
                                    Drawing insights from challenges in rural
                                    educational infrastructure, we invite
                                    experts to join us in designing the most
                                    optimal learning spaces
                                  </p>
                                </div>
                                <img
                                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                  alt="popup-img"
                                  className="popup-img"
                                />
                                <div className="popup-content">
                                  <h3 className="popup-font18">SPOTLIGHT</h3>
                                  <p className="popup-font16">
                                    Lokarpan recognises the urgent need to
                                    revolutionise the approach to schooling
                                    infrastructure. In resource constrained
                                    settings, infrastructural projects are often
                                    driven by strict budget constraints,
                                    adhering closely to government guidelines
                                    for basic facilities such as bathrooms and
                                    water supply. However, the focus often
                                    remains on meeting minimal requirements,
                                    neglecting the potential for innovative
                                    design solutions.
                                  </p>
                                  <p className="popup-font16">
                                    This lack of emphasis on design innovation
                                    results in standardised layouts that offer
                                    limited room for creativity or
                                    sustainability. Buildings are constructed
                                    without due consideration for green spaces
                                    or facade openings, missing valuable
                                    opportunities for energy efficiency and
                                    positive environmental impact. Moreover,
                                    post-construction, these structures often
                                    suffer from inadequate maintenance, as
                                    attention shifts solely to the initial
                                    building phase rather than long-term
                                    sustainability measures.
                                  </p>
                                  <p className="popup-font16 popup-last-space">
                                    By fostering a culture of innovation and
                                    strategic planning, we seek to create
                                    educational spaces that not only meet
                                    regulatory standards but also inspire
                                    learning, promote sustainability, and stand
                                    the test of time. Through this fellowship,
                                    Lokarpan aims to transform the landscape of
                                    educational infrastructure, ensuring that
                                    every building reflects our commitment to
                                    quality, sustainability, and community
                                    well-being.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="popup-overlay"></div>
                        </>
                      )}
                    </Popup>
                  </div>
                </div>

                <div className="card">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                    className="edu-img"
                    alt="Card 1"
                  />
                  <div className="card-content">
                    {/* <h4>Reading Rooms</h4> */}
                    <h3>
                      Learning spaces that sparks curiosity and exploration.
                    </h3>

                    <Popup
                      trigger={
                        <div className="expand-sec">
                          <p>EXPAND TO LEARN MORE</p>
                          <IoMdExpand />
                        </div>
                      }
                      modal
                      onOpen={this.updatePopUpOpen}
                      onClose={this.updatePopUpOpen}
                      onKeyDown={(event, close) => {
                        this.onKeyDown(event, close);
                      }}
                    >
                      {(close) => (
                        <>
                          <div className="popup-container">
                            <button className="close-btn">
                              <IoMdClose
                                style={{
                                  fontSize: "30px",
                                }}
                                onClick={() => close()}
                              />
                            </button>
                            <div className="popup-section">
                              <div className="popup-right-container">
                                <div className="popup-left-container">
                                  <h3 className="popup-font40">
                                    READING ROOMS
                                  </h3>
                                  <p className="popup-font20">
                                    Transforming spaces that support inclusive
                                    approaches to education, enabling children
                                    to learn together.
                                  </p>
                                </div>
                                <img
                                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                  alt="popup-img"
                                  className="popup-img"
                                />
                                <div className="popup-content">
                                  <h3 className="popup-font18">SPOTLIGHT</h3>
                                  <p className="popup-font16">
                                    In rural India, education often faces
                                    challenges due to a lack of suitable
                                    infrastructure that can truly facilitate
                                    learning. From health issues caused by
                                    improper postures to limited engagement
                                    between teachers and students, the absence
                                    of dedicated educational spaces hampers the
                                    process of imparting equal education. To
                                    address this, Lokarpan proposes the design
                                    and construction of a 310 square foot
                                    reading room tailored for 15-20 children.
                                    This space will serve as a beacon of
                                    learning, offering a haven for young readers
                                    with a capacity for 1000 books, power
                                    outlets, and workstations for laptops. With
                                    a focus on optimal lighting, ergonomic
                                    seating, and an elegant yet cost-effective
                                    design, the reading room aims to maximise
                                    its impact in fostering a love for reading
                                    and learning among children.
                                  </p>
                                  <p className="popup-font16 popup-last-space">
                                    The project's objectives are clear: to
                                    create a space where children can
                                    comfortably immerse themselves in the world
                                    of books and technology. From planning a
                                    layout that encourages movement and
                                    collaboration to integrating technology
                                    seamlessly, the reading room will be a hub
                                    of educational exploration. With an eye for
                                    elegance and practicality, Lokarpan aims to
                                    ensure that every element of the room, from
                                    bookshelves to seating arrangements, is
                                    designed to enhance the educational
                                    experience.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="popup-overlay"></div>
                        </>
                      )}
                    </Popup>
                  </div>
                </div>

                <div className="card">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                    className="edu-img"
                    alt="Card 1"
                  />
                  <div className="card-content">
                    {/* <h4>Sanitation</h4> */}
                    <h3>
                      Child-friendly, functional sanitation stalls for school
                      environments.
                    </h3>

                    <Popup
                      trigger={
                        <div className="expand-sec">
                          <p>EXPAND TO LEARN MORE</p>
                          <IoMdExpand />
                        </div>
                      }
                      modal
                      onOpen={this.updatePopUpOpen}
                      onClose={this.updatePopUpOpen}
                      onKeyDown={(event, close) => {
                        this.onKeyDown(event, close);
                      }}
                    >
                      {(close) => (
                        <>
                          <div className="popup-container">
                            <button className="close-btn">
                              <IoMdClose
                                style={{
                                  fontSize: "30px",
                                }}
                                onClick={() => close()}
                              />
                            </button>
                            <div className="popup-section">
                              <div className="popup-right-container">
                                <div className="popup-left-container">
                                  <h3 className="popup-font40">
                                    CHILD-FRIENDLY SANITATION STALLS
                                  </h3>
                                  <p className="popup-font20">
                                    Ensuring a safer, comfortable, and
                                    age-appropriate restroom experience for
                                    children
                                  </p>
                                </div>
                                <img
                                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                  alt="popup-img"
                                  className="popup-img"
                                />
                                <div className="popup-content">
                                  <h3 className="popup-font18">SPOTLIGHT</h3>
                                  <p className="popup-font16">
                                    Lokarpan is embarking on a transformative
                                    project to construct child-friendly bathroom
                                    stalls at the Kith n Kin School in Auraiya,
                                    Uttar Pradesh. With a keen focus on safety,
                                    comfort, and age-appropriate design, these
                                    stalls are envisioned to provide young
                                    students with a positive restroom
                                    experience. Each stall is meticulously
                                    designed to offer privacy and independence,
                                    featuring child-friendly fixtures such as
                                    lower sink heights, smaller toilet seats,
                                    and easily accessible amenities like clothes
                                    hooks and trash bins.
                                  </p>
                                  <p className="popup-font16 popup-last-space">
                                    The project scope encompasses a holistic
                                    approach, from optimising space utilisation
                                    and incorporating energy-efficient lighting
                                    to ensuring accessibility for children with
                                    disabilities. Lokarpan's design prioritises
                                    durability and easy maintenance, using
                                    water-resistant materials and fixtures
                                    designed for minimal contact points. With an
                                    eye for sustainability, the project
                                    integrates eco-friendly practices while
                                    maintaining a keen attention to detail in
                                    every aspect, from child-friendly colours to
                                    ergonomic layouts. Through this initiative,
                                    Lokarpan aims to create a safe, inviting,
                                    and hygienic restroom environment that
                                    enhances the overall learning experience for
                                    students at the Kith n Kin School.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="popup-overlay"></div>
                        </>
                      )}
                    </Popup>
                  </div>
                </div>
              </div>
              <div className="our-role-each-container-content">
                <h1>Design</h1>
                <p>
                  Our initiatives in design reflect our dedication to
                  transforming education in rural India. With a focus on
                  project-based learning, online resources, and cutting-edge
                  labs, Lokarpan seeks to bridge the gap in educational
                  infrastructure. We believe that by prioritising children's
                  perspectives in design, we can foster environments that
                  empower young learners, enabling them to shape the spaces they
                  inhabit.
                </p>
              </div>
            </div>
          )}
          {active === "environment" && (
            <div className={containerClass}>
              <div className="our-role-each-container-content">
                <h1>Environment</h1>
                <p>
                  Lokarpan is dedicated to environmental stewardship in rural
                  India, with initiatives ranging from tracking heavy metals in
                  water to conserving exotic bird populations. We also focus on
                  preserving village ponds, building solar capacity, and
                  educating communities on conservation. Through these efforts,
                  we strive for a greener, more sustainable future for all,
                  safeguarding both people and the environment.
                </p>
              </div>
              <div className="education-cards-container">
                <div className="cards-left-container">
                  <div className="card">
                    <img
                      src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                      className="edu-img"
                      alt="Card 1"
                    />
                    <div className="card-content">
                      {/* <h4>Tree Plantations</h4> */}
                      <h3>
                        Lokarpan has planted one lakh trees, contributing
                        significantly to reforestation efforts.
                      </h3>

                      <Popup
                        trigger={
                          <div className="expand-sec">
                            <p>EXPAND TO LEARN MORE</p>
                            <IoMdExpand />
                          </div>
                        }
                        modal
                        onOpen={this.updatePopUpOpen}
                        onClose={this.updatePopUpOpen}
                        onKeyDown={(event, close) => {
                          this.onKeyDown(event, close);
                        }}
                      >
                        {(close) => (
                          <>
                            <div className="popup-container">
                              <button className="close-btn">
                                <IoMdClose
                                  style={{
                                    fontSize: "30px",
                                  }}
                                  onClick={() => close()}
                                />
                              </button>
                              <div className="popup-section">
                                <div className="popup-left-container">
                                  <h3 className="popup-font40">
                                    TREE PLANTATIONS
                                  </h3>
                                  <p className="popup-font20">
                                    Our ongoing tree plantation initiatives aim
                                    to enhance green cover, combat climate
                                    change, and promote a healthier environment
                                    for generations to come.
                                  </p>
                                </div>
                                <div className="popup-right-container">
                                  <img
                                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                    alt="popup-img"
                                    className="popup-img"
                                  />
                                  <div className="popup-content">
                                    <h3 className="popup-font18">SPOTLIGHT</h3>
                                    <p className="popup-font16">
                                      Forests stand as invaluable ecosystems,
                                      providing essential habitats for diverse
                                      wildlife while offering crucial benefits
                                      to humanity. They act as nature's lungs,
                                      purifying the air we breathe and playing a
                                      vital role in regulating local
                                      temperatures. Moreover, they serve as
                                      vital carbon sinks, absorbing and storing
                                      significant amounts of carbon dioxide from
                                      the atmosphere. Recognising the critical
                                      importance of preserving our forest cover,
                                      Lokarpan is deeply committed to
                                      safeguarding these natural treasures.
                                    </p>
                                    <p className="popup-font16">
                                      One of our key conservation efforts
                                      involves extensive tree planting
                                      initiatives, working closely with farmers
                                      and local communities. Over the years,
                                      Lokarpan has proudly facilitated the
                                      planting of 1 lakh trees, making
                                      significant strides in reforestation
                                      endeavours. These efforts go beyond mere
                                      carbon capture; they also play a crucial
                                      role in preventing soil erosion, promoting
                                      biodiversity, and creating sustainable
                                      ecosystems. By fostering green cover and
                                      combating climate change, Lokarpan's tree
                                      plantation initiatives are paving the way
                                      for a greener, healthier environment for
                                      present and future generations alike.
                                      Through collective action and unwavering
                                      dedication, we continue to nurture our
                                      forests, ensuring they thrive for years to
                                      come.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="popup-overlay"></div>
                          </>
                        )}
                      </Popup>
                    </div>
                  </div>
                </div>
                <div className="cards-right-container">
                  <div className="card space">
                    <img
                      src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                      className="edu-img"
                      alt="Card 1"
                    />
                    <div className="card-content">
                      {/* <h4> Annual Migratory Bird Survey</h4> */}
                      <h3>
                        Safeguarding biodiversity and protecting critical
                        habitats.
                      </h3>

                      <Popup
                        trigger={
                          <div className="expand-sec">
                            <p>EXPAND TO LEARN MORE</p>
                            <IoMdExpand />
                          </div>
                        }
                        modal
                        onOpen={this.updatePopUpOpen}
                        onClose={this.updatePopUpOpen}
                        onKeyDown={(event, close) => {
                          this.onKeyDown(event, close);
                        }}
                      >
                        {(close) => (
                          <>
                            <div className="popup-container">
                              <button className="close-btn">
                                <IoMdClose
                                  style={{
                                    fontSize: "30px",
                                  }}
                                  onClick={() => close()}
                                />
                              </button>
                              <div className="popup-section">
                                <div className="popup-left-container">
                                  <h3 className="popup-font40">
                                    ANNUAL MIGRATORY BIRD SURVEY
                                  </h3>
                                  <p className="popup-font20">
                                    Tracking migratory birds across districts to
                                    monitor and conserve exotic bird populations
                                  </p>
                                </div>
                                <div className="popup-right-container">
                                  <img
                                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                    alt="popup-img"
                                    className="popup-img"
                                  />
                                  <div className="popup-content">
                                    <h3 className="popup-font18">SPOTLIGHT</h3>
                                    <p className="popup-font16">
                                      Lokarpan employs rigorous quantitative
                                      methods to track the migratory patterns of
                                      birds across neighbouring districts. This
                                      scientific endeavour serves a dual
                                      purpose: to monitor the movement of exotic
                                      bird species and to actively contribute to
                                      their conservation. By studying the routes
                                      taken by migratory birds, we gain
                                      invaluable insights into their behaviour,
                                      habitat preferences, and seasonal
                                      movements.
                                    </p>
                                    <p className="popup-font16">
                                      The overarching goal of this initiative is
                                      to safeguard biodiversity in our regions
                                      by identifying and protecting critical
                                      habitats along these migratory pathways.
                                      By understanding the specific needs of
                                      these birds during their journeys, we can
                                      advocate for the preservation of key
                                      stopover sites, nesting areas, and feeding
                                      grounds. Lokarpan's efforts in bird
                                      migration tracking not only contributes to
                                      scientific knowledge but has also played a
                                      vital role in conservation strategies
                                      aimed at ensuring the continued existence
                                      of these fascinating and essential avian
                                      species.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="popup-overlay"></div>
                          </>
                        )}
                      </Popup>
                    </div>
                  </div>
                  <div className="card">
                    <img
                      src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                      className="edu-img"
                      alt="Card 1"
                    />
                    <div className="card-content">
                      {/* <h4>
                        Water Quality Assessment and Freshwater Availability
                      </h4> */}
                      <h3>
                        Sustainable, community owned water conservation projects
                      </h3>

                      <Popup
                        trigger={
                          <div className="expand-sec">
                            <p>EXPAND TO LEARN MORE</p>
                            <IoMdExpand />
                          </div>
                        }
                        modal
                        onOpen={this.updatePopUpOpen}
                        onClose={this.updatePopUpOpen}
                        onKeyDown={(event, close) => {
                          this.onKeyDown(event, close);
                        }}
                      >
                        {(close) => (
                          <>
                            <div className="popup-container">
                              <button className="close-btn">
                                <IoMdClose
                                  style={{
                                    fontSize: "30px",
                                  }}
                                  onClick={() => close()}
                                />
                              </button>
                              <div className="popup-section">
                                <div className="popup-left-container">
                                  <h3 className="popup-font40">
                                    WATER CONSERVATION
                                  </h3>
                                  <p className="popup-font20">
                                    Promoting conservation practices and
                                    fostering a harmonious balance between human
                                    needs and the preservation of our natural
                                    resources.
                                  </p>
                                </div>
                                <div className="popup-right-container">
                                  <img
                                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                    alt="popup-img"
                                    className="popup-img"
                                  />
                                  <div className="popup-content">
                                    <h3 className="popup-font18">SPOTLIGHT</h3>
                                    <p className="popup-font16">
                                      Lokarpan is dedicated to safeguarding the
                                      health of local ecosystems through water
                                      quality assessments and monitoring the
                                      availability of freshwater in our region.
                                      Our aim is to ensure the purity and safety
                                      of water sources, vital for both
                                      environmental sustainability and community
                                      well-being. Through advanced techniques,
                                      we track the presence of heavy metals in
                                      water, striving to maintain high-quality
                                      standards and promote effective water
                                      conservation practices.
                                    </p>
                                    <p className="popup-font16">
                                      In addition to our focus on water quality,
                                      Lokarpan actively engages in the
                                      preservation of village ponds, essential
                                      reservoirs of freshwater in rural
                                      settings. We educate local communities on
                                      the significance of these ponds and their
                                      role in sustaining biodiversity and
                                      supporting agricultural activities.
                                      Through advocacy efforts and fundraising
                                      initiatives, we work towards the
                                      maintenance and restoration of these
                                      precious water bodies. Furthermore, our
                                      experts provide valuable guidance on rural
                                      planning strategies that prioritise the
                                      preservation of village ponds, ensuring
                                      sustainable access to clean water for
                                      generations to come.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="popup-overlay"></div>
                          </>
                        )}
                      </Popup>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mobile-education-cards-container">
                <div className="card">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                    className="edu-img"
                    alt="Card 1"
                  />
                  <div className="card-content">
                    {/* <h4> Tree Plantations</h4> */}
                    <h3>
                      Lokarpan has planted one lakh trees, contributing
                      significantly to reforestation efforts.
                    </h3>
                    <Popup
                      trigger={
                        <div className="expand-sec">
                          <p>EXPAND TO LEARN MORE</p>
                          <IoMdExpand />
                        </div>
                      }
                      modal
                      onOpen={this.updatePopUpOpen}
                      onClose={this.updatePopUpOpen}
                      onKeyDown={(event, close) => {
                        this.onKeyDown(event, close);
                      }}
                    >
                      {(close) => (
                        <>
                          <div className="popup-container">
                            <button className="close-btn">
                              <IoMdClose
                                style={{
                                  fontSize: "30px",
                                }}
                                onClick={() => close()}
                              />
                            </button>
                            <div className="popup-section">
                              <div className="popup-right-container">
                                <div className="popup-left-container">
                                  <h3 className="popup-font40">
                                    TREE PLANTATIONS
                                  </h3>
                                  <p className="popup-font20">
                                    Our ongoing tree plantation initiatives aim
                                    to enhance green cover, combat climate
                                    change, and promote a healthier environment
                                    for generations to come.
                                  </p>
                                </div>
                                <img
                                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                  alt="popup-img"
                                  className="popup-img"
                                />
                                <div className="popup-content">
                                  <h3 className="popup-font18">SPOTLIGHT</h3>
                                  <p className="popup-font16">
                                    Forests stand as invaluable ecosystems,
                                    providing essential habitats for diverse
                                    wildlife while offering crucial benefits to
                                    humanity. They act as nature's lungs,
                                    purifying the air we breathe and playing a
                                    vital role in regulating local temperatures.
                                    Moreover, they serve as vital carbon sinks,
                                    absorbing and storing significant amounts of
                                    carbon dioxide from the atmosphere.
                                    Recognising the critical importance of
                                    preserving our forest cover, Lokarpan is
                                    deeply committed to safeguarding these
                                    natural treasures.
                                  </p>
                                  <p className="popup-font16 popup-last-space">
                                    One of our key conservation efforts involves
                                    extensive tree planting initiatives, working
                                    closely with farmers and local communities.
                                    Over the years, Lokarpan has proudly
                                    facilitated the planting of 1 lakh trees,
                                    making significant strides in reforestation
                                    endeavours. These efforts go beyond mere
                                    carbon capture; they also play a crucial
                                    role in preventing soil erosion, promoting
                                    biodiversity, and creating sustainable
                                    ecosystems. By fostering green cover and
                                    combating climate change, Lokarpan's tree
                                    plantation initiatives are paving the way
                                    for a greener, healthier environment for
                                    present and future generations alike.
                                    Through collective action and unwavering
                                    dedication, we continue to nurture our
                                    forests, ensuring they thrive for years to
                                    come.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="popup-overlay"></div>
                        </>
                      )}
                    </Popup>
                  </div>
                </div>

                <div className="card">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                    className="edu-img"
                    alt="Card 1"
                  />
                  <div className="card-content">
                    {/* <h4> Annual Migratory Bird Survey </h4> */}
                    <h3>
                      Safeguarding biodiversity and protecting critical
                      habitats.
                    </h3>

                    <Popup
                      trigger={
                        <div className="expand-sec">
                          <p>EXPAND TO LEARN MORE</p>
                          <IoMdExpand />
                        </div>
                      }
                      modal
                      onOpen={this.updatePopUpOpen}
                      onClose={this.updatePopUpOpen}
                      onKeyDown={(event, close) => {
                        this.onKeyDown(event, close);
                      }}
                    >
                      {(close) => (
                        <>
                          <div className="popup-container">
                            <button className="close-btn">
                              <IoMdClose
                                style={{
                                  fontSize: "30px",
                                }}
                                onClick={() => close()}
                              />
                            </button>
                            <div className="popup-section">
                              <div className="popup-right-container">
                                <div className="popup-left-container">
                                  <h3 className="popup-font40">
                                    ANNUAL MIGRATORY BIRD SURVEY
                                  </h3>
                                  <p className="popup-font20">
                                    Tracking migratory birds across districts to
                                    monitor and conserve exotic bird populations
                                  </p>
                                </div>
                                <img
                                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                  alt="popup-img"
                                  className="popup-img"
                                />
                                <div className="popup-content">
                                  <h3 className="popup-font18">SPOTLIGHT</h3>
                                  <p className="popup-font16">
                                    Lokarpan employs rigorous quantitative
                                    methods to track the migratory patterns of
                                    birds across neighbouring districts. This
                                    scientific endeavour serves a dual purpose:
                                    to monitor the movement of exotic bird
                                    species and to actively contribute to their
                                    conservation. By studying the routes taken
                                    by migratory birds, we gain invaluable
                                    insights into their behaviour, habitat
                                    preferences, and seasonal movements.
                                  </p>
                                  <p className="popup-font16 popup-last-space">
                                    The overarching goal of this initiative is
                                    to safeguard biodiversity in our regions by
                                    identifying and protecting critical habitats
                                    along these migratory pathways. By
                                    understanding the specific needs of these
                                    birds during their journeys, we can advocate
                                    for the preservation of key stopover sites,
                                    nesting areas, and feeding grounds.
                                    Lokarpan's efforts in bird migration
                                    tracking not only contributes to scientific
                                    knowledge but has also played a vital role
                                    in conservation strategies aimed at ensuring
                                    the continued existence of these fascinating
                                    and essential avian species.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="popup-overlay"></div>
                        </>
                      )}
                    </Popup>
                  </div>
                </div>

                <div className="card">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                    className="edu-img"
                    alt="Card 1"
                  />
                  <div className="card-content">
                    {/* <h4>
                      Water Quality Assessment and Freshwater Availability
                    </h4> */}
                    <h3>
                      Sustainable, community owned water conservation projects
                    </h3>

                    <Popup
                      trigger={
                        <div className="expand-sec">
                          <p>EXPAND TO LEARN MORE</p>
                          <IoMdExpand />
                        </div>
                      }
                      modal
                      onOpen={this.updatePopUpOpen}
                      onClose={this.updatePopUpOpen}
                      onKeyDown={(event, close) => {
                        this.onKeyDown(event, close);
                      }}
                    >
                      {(close) => (
                        <>
                          <div className="popup-container">
                            <button className="close-btn">
                              <IoMdClose
                                style={{
                                  fontSize: "30px",
                                }}
                                onClick={() => close()}
                              />
                            </button>
                            <div className="popup-section">
                              <div className="popup-right-container">
                                <div className="popup-left-container">
                                  <h3 className="popup-font40">
                                    WATER CONSERVATION
                                  </h3>
                                  <p className="popup-font20">
                                    Promoting conservation practices and
                                    fostering a harmonious balance between human
                                    needs and the preservation of our natural
                                    resources.
                                  </p>
                                </div>
                                <img
                                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                  alt="popup-img"
                                  className="popup-img"
                                />
                                <div className="popup-content">
                                  <h3 className="popup-font18">SPOTLIGHT</h3>
                                  <p className="popup-font16">
                                    Lokarpan is dedicated to safeguarding the
                                    health of local ecosystems through water
                                    quality assessments and monitoring the
                                    availability of freshwater in our region.
                                    Our aim is to ensure the purity and safety
                                    of water sources, vital for both
                                    environmental sustainability and community
                                    well-being. Through advanced techniques, we
                                    track the presence of heavy metals in water,
                                    striving to maintain high-quality standards
                                    and promote effective water conservation
                                    practices.
                                  </p>
                                  <p className="popup-font16 popup-last-space">
                                    In addition to our focus on water quality,
                                    Lokarpan actively engages in the
                                    preservation of village ponds, essential
                                    reservoirs of freshwater in rural settings.
                                    We educate local communities on the
                                    significance of these ponds and their role
                                    in sustaining biodiversity and supporting
                                    agricultural activities. Through advocacy
                                    efforts and fundraising initiatives, we work
                                    towards the maintenance and restoration of
                                    these precious water bodies. Furthermore,
                                    our experts provide valuable guidance on
                                    rural planning strategies that prioritise
                                    the preservation of village ponds, ensuring
                                    sustainable access to clean water for
                                    generations to come.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="popup-overlay"></div>
                        </>
                      )}
                    </Popup>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="donate-section">
            <h1 className="last-space">Give us your support</h1>
            <p className="our-role-font24">
              Lokarpan is a small nonprofit with a big dream. Join others
              helping to fight poverty, disease, school parity, and inequity for
              at risk communities.
            </p>
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
  }
}

export default OurRole;
