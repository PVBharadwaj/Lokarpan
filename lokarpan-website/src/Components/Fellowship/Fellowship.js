import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PiPauseCircleThin, PiPlayCircleThin } from "react-icons/pi";
import Marquee from "react-fast-marquee";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";
import "./Fellowship.css";

const Fellowship = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [popupVisibility, setPopupVisibility] = useState([false, false, false]); // Initialize with false for each popup

  const handlePauseClick = () => {
    console.log("clicked");
    setIsPaused((prevState) => !prevState);
  };

  const openpopup = (index) => {
    const updatedVisibility = [...popupVisibility];
    updatedVisibility[index] = true;
    setPopupVisibility(updatedVisibility);
  };

  const closepopup = (index) => {
    const updatedVisibility = [...popupVisibility];
    updatedVisibility[index] = false;
    setPopupVisibility(updatedVisibility);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.which === 27) {
        setPopupVisibility(popupVisibility.map(() => false));
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [popupVisibility]);

  useEffect(() => {
    if (popupVisibility.some((isVisible) => isVisible)) {
      document.body.classList.add("body-no-scroll");
    } else {
      document.body.classList.remove("body-no-scroll");
    }
  }, [popupVisibility]);

  return (
    <>
      <Navbar />
      <div className="fellowship-nav">
        <h1>Fellowship</h1>
      </div>
      <div className="fellowship-top">
        {/* <h1>
          At Lokarpan, we firmly believe that the best solutions arise from
          those who intimately understand the challenges at hand
        </h1> */}
      </div>
      <h1 className="fellow-hero">
          At Lokarpan, we firmly believe that the best solutions arise from
          those who intimately understand the challenges at hand
      </h1>
          
      <div className="fellowship-page">
      <div className="third-div">
          <h3 className="impact-head">ACCLERATING IMPACT</h3>
          <h2 className="impact-title">
          We provide support through a combination of funding, innovation and technical expertise.
          </h2>
        </div>
        {/* ****************  second-div class also used in moonshots */}
        <div className="second-div fellow-second-div">
          <div className="sub-div">
            <img
              className="fellow-img"
              src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1708613081/DSC03865_1_qx9uvp.png"
              alt="img1"
            />
            <p className="fellow-large-text">
              <span className="fellow-large-text-head">We look for big ideas.</span>
              By joining Lokarpan Fellows, you become part of a community-driven
              initiative where your insights, experiences, and ideas are not
              just valued but actively sought after. Whether you're working in a
              classroom, collaborating with our teams, or engaging directly with
              communities, your voice matters.
            </p>
            {/* <h3 className="impact-title">We look for big ideas.</h3>
            <p className="fellow-data fellow-data-no-padding fellow-space-above">
              By joining Lokarpan Fellows, you become part of a community-driven
              initiative where your insights, experiences, and ideas are not
              just valued but actively sought after. Whether you're working in a
              classroom, collaborating with our teams, or engaging directly with
              communities, your voice matters.
            </p> */}
          </div>
          <div className="sub-div">
            <img
              className="fellow-img"
              src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1714983509/IMG_3313_2_vdy6sq.png"
              alt="img2"
            />
            <p className="fellow-large-text">
              <span className="fellow-large-text-head">Our Approach is Community Centric </span>
              We believe that true solutions emerge when we listen closely to
              the voices of the communities we serve. By engaging directly with
              those most affected by social challenges, we gain valuable
              insights into their needs and aspirations. Together, we co-create
              innovative initiatives and programs that have a meaningful impact
              and pave the way for a more equitable society. engaging directly
              with communities, your voice matters.
            </p>
          </div>
        </div>
      </div>

      <div className="carousal-container1 fellow-carousal-cont1">
        <h3 className="fellows">Meet Our Fellows</h3>
        <div className="arrows-cont1">
          <button className="button1" onClick={handlePauseClick}>
            {!isPaused ? (
              <PiPauseCircleThin className="carousal-icon1" />
            ) : (
              <PiPlayCircleThin className="carousal-icon1" />
            )}
          </button>
        </div>
        <Marquee play={!isPaused} className="marquee">
          <div className="each-carousal1 fellow-each-carousal1">
            <div className="carousal1 fellow-carousal1">
              <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1714480299/fp1_a6flep.png"
                alt="Slide 1"
                className="carousal-img1 fellow-carousal1-img "
              />
              <div className="link-cont">
                <button className="home-link" onClick={() => openpopup(0)}>
                  Learn More
                </button>
              </div>
            </div>
            <p className="lokarpan-para2">Nyssa Desai</p>
          </div>

          <div className="each-carousal1 fellow-each-carousal1">
            <div className="carousal1 fellow-carousal1">
              <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1714480431/fp2_irtkd3.png"
                alt="Slide 1"
                className="carousal-img1 fellow-carousal1-img "
              />
              <div className="link-cont">
                <button className="home-link" onClick={() => openpopup(1)}>
                  Learn More
                </button>
              </div>
            </div>
            <p className="lokarpan-para2">Divya Chaudhary</p>
          </div>

          <div className="each-carousal1 fellow-each-carousal1">
            <div className="carousal1 fellow-carousal1">
              <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1714480276/fp3_mu5ikn.jpg"
                alt="Slide 1"
                className="carousal-img1 fellow-carousal1-img "
              />
              <div className="link-cont">
                <button className="home-link" onClick={() => openpopup(2)}>
                  Learn More
                </button>
              </div>
            </div>
            <p className="lokarpan-para2">Shreya Kothawale</p>
          </div>
        </Marquee>

        {popupVisibility[0] && (
          <div className="misson-popup">
            <div className="misson-popup-content">
              <RxCross2 onClick={() => closepopup(0)} className="x" />
              <p className="mission-para">
                Nyssa Desai, hailing from Mumbai, holds a Bachelor's degree in
                Management Studies from H.R. College. Beyond her academic
                pursuits, Nyssa is renowned for her unwavering passion for the
                culinary arts, making her the ultimate authority on restaurant
                recommendations throughout Mumbai's vibrant dining scene.
                Inspired by her belief that quality education is not just a
                privilege but a fundamental right for every child, Nyssa has
                wholeheartedly devoted herself to Lokarpan's mission.
                Recognizing the transformative potential of education, she is
                driven by a deep-seated commitment to ensuring that every child,
                regardless of background or circumstance, has access to the
                enriching opportunities that education affords. With her
                boundless enthusiasm and dedication, Nyssa embodies Lokarpan's
                ethos of empowering communities through education, one child at
                a time.
              </p>
            </div>
          </div>
        )}
        {popupVisibility[1] && (
          <div className="misson-popup">
            <div className="misson-popup-content">
              <RxCross2 onClick={() => closepopup(1)} className="x" />
              <p className="mission-para">
                Divya Chaudhary is a globetrotter with a passion for both
                engineering and the arts. Graduating with an undergraduate
                degree in Electrical and Electronics Engineering from Delhi and
                dual masters in Engineering and Management from Sydney, Divya
                has accumulated diverse professional experiences in sales,
                marketing, and user research across India, Australia, and the
                United States. Outside of her professional pursuits, Divya
                immerses herself in art projects, baking, and her love for the
                violin, having played professionally. These experiences have not
                only allowed her to explore remarkable places but also to
                connect with inspiring individuals—an aspect of life she
                cherishes deeply. Currently, Divya is embarking on a journey to
                rediscover her passions, with teaching emerging as a newfound
                interest. Excited to be a part of the Lokarpan program, she
                believes in the transformative power of education, aspiring not
                just to educate but to inspire dreams.
              </p>
            </div>
          </div>
        )}
        {popupVisibility[2] && (
          <div className="misson-popup">
            <div className="misson-popup-content">
              <RxCross2 onClick={() => closepopup(2)} className="x" />
              <p className="mission-para">
                Shreya Kothawale is an accomplished architect, dedicated to
                exploring how architecture can contribute to peace-building in
                conflict-affected areas. Collaborating closely with rural
                communities, she addresses pressing issues in under-represented
                villages. Her expertise has earned her an invitation from UN
                Habitat Youth to present her design proposal for public
                sanitation infrastructure in Trans-communities. In addition to
                her impactful work in architecture, Shreya is connected to
                Lokarpan through our design fellowship. Inspired by Lokarpan's
                mission to transform rural education, she is enthusiastic about
                applying her architectural skills to empower communities and
                build sustainable rural infrastructures.
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="fellowship-page">
      <div className="fourth-div">
          <h3 className="impact-title">Who You’ll Work with</h3>
          <p className="fourth-div-data fellow-data">
            You'll join one of our locations on site or opt for working
            remotely. Fellows join our technical and research projects from
            around the world to work in teams and directly with our
            beneficiaries. When you join Lokarpan as a Fellow, you are joining
            an organisation that will challenge you and invest heavily in your
            professional development. In this role you will have the opportunity
            to work in teams and help the most vulnerable – across a wide range
            of initiatives – solving some of their most difficult problems. You
            will also work with a diverse range of experts in the organisation,
            from researchers to software and app designers.
          </p>
        </div>
      </div>

      {/* <button className="button1 mobile-home1" onClick={handlePauseClick}>
        {!isPaused ? (
          <PiPauseCircleThin className="carousal-icon1" />
        ) : (
          <PiPlayCircleThin className="carousal-icon1" />
        )}
      </button> */}

      <div style={{marginBottom: "0px"}} className="opp grey-back ">
          <h1 className="blue-font">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"</h1>
          <p className="grey-font">Daniel Trego, Educational & Media Design Specialist at Michigan State University</p>
        </div>

      <div style={{marginBottom: "0px"}} className="opp grey-back">
        <h3 style={{paddingBottom: "40px"}} className="opp-head fellow-data weight-800">What You’ll Do</h3>
        <h1 className="fellow-opp-new-head">As a Lokarpan Fellow, you join a mission to transform education and empower rural communities. </h1>
        <div className="fellow-what-sec">
        <p className="opp-data impact-title fellow-opp-horizontal-cards">
        You will formulate innovative solutions to drive impactful change, working closely with our dedicated team members on ground
        </p>
        <p className="opp-data impact-title fellow-opp-horizontal-cards">
        You'll have the opportunity to develop and present recommendations to our partner schools and communities.
        </p>
        <p className="opp-data impact-title fellow-opp-horizontal-cards">
        Throughout your journey, you'll receive exceptional training and mentoring sessions from experienced colleagues and partners.
        </p>
        </div>

      </div>


      {/* <div className="opp">
        <h3 className="opp-head fellow-data">What You’ll Do</h3>
        <p className="opp-data impact-title">
          As a Lokarpan Fellow, you'll be an integral part of a team of
          passionate individuals, actively engaged in our mission to transform
          education and empower rural communities.
        </p>
        <p className="opp-data impact-title">
          Your role will involve formulating innovative solutions to drive
          impactful change. You'll have the opportunity to develop and present
          recommendations to our partner schools and communities, working
          closely with our dedicated team members on ground. Throughout your
          journey, you'll receive exceptional training and mentoring sessions
          from experienced colleagues and partners.
        </p>
      </div> */}
      {/* <div className="new-f-text-cont">
        <h1 className="new-f-text">
          At Lokarpan, we believe in broadening your skills and experiences.
          While you'll contribute your unique talents and insights, you'll also
          have the chance to learn and grow in a diverse and dynamic
          environment. Whether you're new to the field or an experienced
          professional, joining our Fellowship Program means embarking on a
          journey of discovery and impact.
        </h1>

        <Link to="/">
          <button className="fell-apply-btn">Apply</button>
        </Link>
      </div> */}


      <div style={{marginTop: "0px"}} className="donate-section fellow-donate">
          <h1 className="last-space blue-font">Be a Catalyst for Change</h1>
          <p style={{color: "#6e6e73"}} className="our-role-font24 fellow-width-800">
          At Lokarpan, we believe in broadening your skills and experiences.
          While you'll contribute your unique talents and insights, you'll also
          have the chance to learn and grow in a diverse and dynamic
          environment. Whether you're new to the field or an experienced
          professional, joining our Fellowship Program means embarking on a
          journey of discovery and impact.
          </p>
          {/* <Link to="/donate"> */}
          {/* <Link to="/donate">
            <button type="button" className="our-role-apply-btn">
            Apply
            </button>
          </Link> */}

          <div>
            <Link
              to="/donate"
              style={{color: "#3f86f0", paddingTop: "40px", paddingBottom: "30px"}}
              className="donate-hyperlink"
              href="/d0nate"
            >
              Apply
              <IoIosArrowForward style={{ color: "#3f86f0", fontSize: "15px" }} />
            </Link>
          </div>
        </div>


      <Footer />
    </>
  );
};

export default Fellowship;
