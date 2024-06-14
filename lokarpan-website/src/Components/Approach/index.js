import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import EducationSubNav from "../Navbar/EducationSubNav";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { RxCross2 } from "react-icons/rx";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import "./index.css";
import "../Health/index.css";

const Approach = () => {
  const [approachPopupVisibility, setApproachPopupVisibility] = useState([
    false,
    false,
    false,
  ]);

  const headingRefs = Array.from({ length: 4 }, () => useRef());
  let intersectionObserver = null;

  const approachopenpopup = (index) => {
    const updatedVisibility = [...approachPopupVisibility];
    updatedVisibility[index] = true;
    setApproachPopupVisibility(updatedVisibility);
  };

  const approachclosepopup = (index) => {
    const updatedVisibility = [...approachPopupVisibility];
    updatedVisibility[index] = false;
    setApproachPopupVisibility(updatedVisibility);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.which === 27) {
        setApproachPopupVisibility(approachPopupVisibility.map(() => false));
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [approachPopupVisibility]);

  useEffect(() => {
    if (approachPopupVisibility.some((isVisible) => isVisible)) {
      document.body.classList.add("body-no-scroll");
    } else {
      document.body.classList.remove("body-no-scroll");
    }
  }, [approachPopupVisibility]);

  useEffect(() => {
    intersectionObserver = new IntersectionObserver(
      handleIntersection,
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    // Iterate over the array of refs and observe each heading
    headingRefs.forEach((ref) => {
      if (ref.current) {
        intersectionObserver.observe(ref.current);
      }
    });

    return () => {
      if (intersectionObserver) {
        intersectionObserver.disconnect();
      }
    };
  }, []);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-animation");
      } else {
        entry.target.classList.remove("fade-in-animation");
      }
    });
  };

  return (
    <>
      <Navbar />
      <EducationSubNav />

      <div className="approach-container">
        <div className="approach-full-img no-space-above">
          {/* <img
            src="https://res.cloudinary.com/digbzwlfx/image/upload/v1710768925/image_314_vscall.png"
            alt="health-img"
          /> */}
          {/* <h1 className="white-head">
            At Lokarpan, we are committed to reshaping the landscape of
            education, ensuring that every child has the opportunity to thrive
            and contribute meaningfully to India's bright future.
          </h1> */}


            {/* <h1 className="white-head">
              Inspiring every kind of learner.
            </h1> */}
            {/* <p className="white-head">
            At Lokarpan, we are committed to reshaping the landscape of education, ensuring that every child has the opportunity to thrive and contribute meaningfully to India's bright future.
            </p> */}

        </div>
        {/* className="app-title title2"  -- taken from application.js */}
        <h1 className="app-title title2 approach-head1">
              Inspiring every kind of learner.
            </h1> 
        {/* className="application-para1"  -- taken from application.js */}
          <p className="application-para1 approach-para1">
          At Lokarpan, we are committed to reshaping the landscape of education, ensuring that every child has the opportunity to thrive and contribute meaningfully to India's bright future.
          </p>
        {/* <div className="taglines-section">
          <h1>
            A delivery system that revolutionises education at the systemic
            level
          </h1>
          <h1>Utilising technology to bring experts into classrooms</h1>
          <h1>
            Inspiring Excellence Through interactive, project-Based Learning
          </h1>
          <h1>
            Leveraging data to tailor learning experiences and measure progress
          </h1>
        </div> */}

        <div className="approach">
          {headingRefs.map((ref, index) => (
            <h1 key={index} className="font48-podcasts" ref={ref}>
              {index === 0 && "Revolutionising education at the systemic level"}
              {index === 1 &&
                "Utilising technology to bring experts to the classroom"}
              {index === 2 && "Leveraging data to tailor learning experiences"}
            </h1>
          ))}
        </div>

        {/* <div className="health-container-section"> */}
        {/* used in careers, why-donate */}
          <div className="health-each-container approach-each-container">
            <div className="health-content-section approach-content-section content-left">
              <h1 className="approach-lokarpan-head3">
                Discover how we are shaping the learning environment
              </h1>
              <p className="approach-card-para">
                Despite India's vast school network, many children struggle with
                basic literacy and numeracy skills. Lokarpan recognises the
                transformative power of education and is committed to bridging
                learning gaps through innovative curriculums, enhanced teaching
                tools, and technology. Our investment aims not just at today's
                students, but at building a brighter future for generations to
                come.
              </p>
              <button
                onClick={() => approachopenpopup(0)}
                className="give-pop-up-button"
                style={{ cursor: "pointer" }}
              >
                Read more <AddCircleOutlineIcon style={{ verticalAlign: 'middle', marginLeft: '10px' }} />
                
              </button>
              {/* <div className="hyperlinks mission-popup">
                <div className="apply-btn white">
                  <span
                    onClick={() => approachopenpopup(0)}
                    className="approach-anchor"
                  >
                    Read more
                  </span>
                </div>
              </div> */}
            </div>
            {approachPopupVisibility[0] && (
              <div className="misson-popup">
                <div className="misson-popup-content">
                  <RxCross2
                    onClick={() => approachclosepopup(0)}
                    className="x"
                  />
                  <p className="mission-para">
                    At Lokarpan, we are dedicated to creating an enriching
                    learning environment that empowers both educators and
                    students. In 2017, we embarked on a journey to enhance our
                    systems, focusing on improved data portability, security,
                    and analytics for our staff. Our investment in web
                    applications streamlined processes, reduced costs, and
                    facilitated easier adoption in rural areas, aligning with
                    our vision for a dynamic educational ecosystem.
                  </p>
                  <p className="mission-para">
                    Key to our mission is the development of Hybrid, a powerful
                    web app designed to revolutionise classroom management.
                    Building on the success of Project Wiki, Hybrid has
                    empowered teachers to grade tests, track student progress,
                    and gain valuable insights. This tool seamlessly integrates
                    into our schools, enhancing the standard curriculum and
                    supporting innovative teaching methods.
                  </p>
                  <p className="mission-para">
                    Additionally, Lokarpan prioritises the growth and
                    development of educators through tailored training programs.
                    Our Orientation and Deployment workshops provide practical
                    tools, vocational exercises, and classroom engagement
                    strategies to ensure educators are equipped for success. By
                    2030, Lokarpan aims to transform all our 75 partner schools
                    across Uttar Pradesh, creating opportunities for all
                    students and preparing them for prosperous futures.
                  </p>
                </div>
              </div>
            )}
            {/* <img
              src="https://res.cloudinary.com/digbzwlfx/image/upload/v1710768785/nehal-patel-aho7nVdauuc-unsplash_1_azf35q.png"
              alt="learn-img"
              className="health-cont-img"
            /> */}

            <div className="health-cont-img-div approach-img1"></div>
          </div>
          <div className="health-each-container approach-each-container">
            {/* <img
              src="https://res.cloudinary.com/digbzwlfx/image/upload/v1710768741/Rectangle_1764_1_mwljyp.png"
              alt="learn-img"
              className="health-cont-img"
            /> */}
            <div className="health-cont-img-div approach-img2"></div>
            <div className="health-content-section approach-content-section content-right">
              <h1 className="approach-lokarpan-head3">
                Empowering Education Through Digital Innovation
              </h1>
              <p className="approach-card-para">
                Lokarpan pioneers digital transformation in education, offering
                tailored content, personalised learning, and advanced analytics.
                Our digital infrastructure, including interactive apps and
                virtual training, ensures efficient and effective education
                delivery, fostering a culture of continuous improvement.
              </p>
              {/* <span
                onClick={() => approachopenpopup(1)}
                className="approach-anchor give-card-link"
              >
                Read more
              </span> */}
              <button
                onClick={() => approachopenpopup(1)}
                className="give-pop-up-button"
                style={{ cursor: "pointer" }}
              >
                Read more <AddCircleOutlineIcon style={{ verticalAlign: 'middle', marginLeft: '10px' }} />
                
              </button>
            </div>
            {approachPopupVisibility[1] && (
              <div className="misson-popup">
                <div className="misson-popup-content">
                  <RxCross2
                    onClick={() => approachclosepopup(1)}
                    className="x"
                  />
                  <p className="mission-para">
                    Lokarpan is leading the charge in digital innovation within
                    the education sector, revolutionising the way students learn
                    and teachers teach. Our comprehensive digital infrastructure
                    encompasses tailored content creation, personalised learning
                    experiences, and advanced analytics to ensure optimal
                    educational outcomes. From developing robust digital
                    learning frameworks to automating finance, administration,
                    and operations, we ensure efficiency and effectiveness in
                    every aspect of education delivery.
                  </p>
                  <p className="mission-para">
                    In addition to our digital learning frameworks and extensive
                    digital library, Lokarpan is leveraging technology in
                    various innovative ways to enhance education. We have
                    developed interactive educational apps and platforms that
                    cater to diverse learning styles, providing students with
                    engaging tools to reinforce concepts. Our analytics-driven
                    approach helps in identifying learning gaps and tailoring
                    interventions for individual student needs. Furthermore,
                    Lokarpan has implemented digital assessment systems that
                    offer real-time feedback to students and teachers, fostering
                    a culture of continuous improvement. We also provide virtual
                    training modules for teachers, equipping them with the
                    latest pedagogical techniques and educational resources.
                    Through these initiatives, Lokarpan is at the forefront of
                    digital innovation in education, aiming to create a
                    transformative learning experience for all.
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="health-each-container approach-each-container">
            <div className="health-content-section approach-content-section content-left">
              <h1 className="approach-lokarpan-head3">Fellowship Programme</h1>
              <p className="approach-card-para">
                The road to end educational inequity is long, and Lokarpan
                recognises the power of collective effort in achieving this
                vision. We invite passionate individuals who share our
                commitment to join us in this journey through our Fellowship
                Program. Whether you have a few hours a week or more to spare,
                volunteering in our classrooms or contributing to our existing
                programmes can make a significant impact.
              </p>
              <button
                onClick={() => approachopenpopup(2)}
                className="give-pop-up-button"
                style={{ cursor: "pointer" }}
              >
                Read more <AddCircleOutlineIcon style={{ verticalAlign: 'middle', marginLeft: '10px' }} />
                
              </button>
            </div>
            {approachPopupVisibility[2] && (
              <div className="misson-popup">
                <div className="misson-popup-content">
                  <RxCross2
                    onClick={() => approachclosepopup(2)}
                    className="x"
                  />
                  <p className="mission-para">
                    Our Fellowship Program offers a unique opportunity to engage
                    directly with our mission of transforming education in rural
                    India. As a Fellow, you will have the chance to work closely
                    with educators, students, and community members, gaining
                    invaluable hands-on experience in the field. Whether you
                    choose to assist teachers in implementing innovative
                    teaching methods, collaborate on curriculum development, or
                    support our digital and design led initiatives, your
                    contributions will directly contribute to creating positive
                    change.
                  </p>
                  <p className="mission-para">
                    The Fellowship Program provides a platform for personal
                    growth and professional development. You will have access to
                    training sessions, workshops, and mentorship opportunities
                    to enhance your skills and broaden your perspective. By
                    becoming a Fellow, you not only become part of Lokarpan's
                    impactful work but also join a vibrant community of
                    like-minded individuals dedicated to making a difference in
                    the lives of children and communities. Join us in our
                    mission to build a brighter future for all through
                    education.
                  </p>
                </div>
              </div>
            )}

            {/* <img
              src="https://res.cloudinary.com/digbzwlfx/image/upload/v1710768715/IMG_3648_1_lr2rgu.png"
              alt="learn-img"
              className="health-cont-img"
            /> */}
            <div className="health-cont-img-div approach-img3"></div>
          </div>
        {/* </div> */}

        <div className="health-full-img">
          <img
            src="https://res.cloudinary.com/digbzwlfx/image/upload/v1710768797/divyanshi-verma-pxw2e3wnlgM-unsplash_1_1_jkzbvd.png"
            alt="health-img"
          />
        </div>
        <div className="approach-row-container">
          <div className="app-row-cont-left-container">
            {/* <h3 className="sub-head1">Plaid</h3> */}
            <h3 className="sub-head2">Mission 2030</h3>
            <p className="app-mobile-para">
              75 schools in Uttar Pradesh have adopted Mission 2030, a
              comprehensive program designed by Lokarpan to help everyone learn
              to build better schools. These schools are adopting Lokarpan's
              curriculum, helping to create opportunities for all students and
              equipping them with the skills they need to pursue their dreams.
            </p>
            {/* <button className="sub-btn sub-btn-black">Order Now</button>
            <button className="sub-btn">Compare Model</button> */}
          </div>
          <div className="app-row-cont-right-container">
            <p>
              75 schools in Uttar Pradesh have adopted Mission 2030, a
              comprehensive program designed by Lokarpan to help everyone learn
              to build better schools. These schools are adopting Lokarpan's
              curriculum, helping to create opportunities for all students and
              equipping them with the skills they need to pursue their dreams.
            </p>
          </div>
        </div>
        {/* <div className="mobile-health-full-img">
          <img
            src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704818233/image_176_tcqfoh.png"
            alt="health-img"
          />
        </div> */}
        <div className="approach-modal-container">
          <div className="approach-modal-each-cont">
            <h2>Model S</h2>
            <p>
              Dual Motor All-Wheel Drive unlocks more range than any other
              vehicle in our current lineup, with insane power and maximum
              control.
            </p>
            <div className="approach-modal-col">
              <div className="app-modal-each-col">
                <h3>3.1s</h3>
                <p>0-60mph</p>
              </div>
              <div className="app-modal-each-col">
                <h3>3.1s</h3>
                <p>0-60mph</p>
              </div>
              <div className="app-modal-each-col">
                <h3>3.1s</h3>
                <p>0-60mph</p>
              </div>
            </div>
          </div>
          <div className="approach-modal-each-cont">
            <h2>Model S</h2>
            <p>
              Maintain 1,000+ horsepower all the way to 200 mph with Tri-Motor
              All-Wheel Drive, featuring torque vectoring and three independent
              carbon-sleeved rotors.
            </p>
            <div className="approach-modal-col">
              <div className="app-modal-each-col">
                <h3>3.1s</h3>
                <p>0-60mph</p>
              </div>
              <div className="app-modal-each-col">
                <h3>3.1s</h3>
                <p>0-60mph</p>
              </div>
              <div className="app-modal-each-col">
                <h3>3.1s</h3>
                <p>0-60mph</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-approach-modal-container">
          <div className="mobile-approach-modal-each-cont">
            <h2>Model S</h2>
            <p>
              Dual Motor All-Wheel Drive unlocks more range than any other
              vehicle in our current lineup, with insane power and maximum
              control.
            </p>
            <div className="mobile-approach-modal-col">
              <div className="mobile-app-modal-each-col">
                <h3>3.1s</h3>
                <p>0-60mph</p>
              </div>
              <div className="mobile-app-modal-each-col">
                <h3>3.1s</h3>
                <p>0-60mph</p>
              </div>
              <div className="mobile-app-modal-each-col">
                <h3>3.1s</h3>
                <p>0-60mph</p>
              </div>
            </div>
          </div>
          <div className="mobile-approach-modal-each-cont">
            <h2>Model S</h2>
            <p>
              Dual Motor All-Wheel Drive unlocks more range than any other
              vehicle in our current lineup, with insane power and maximum
              control.
            </p>
            <div className="mobile-approach-modal-col">
              <div className="mobile-app-modal-each-col">
                <h3>3.1s</h3>
                <p>0-60mph</p>
              </div>
              <div className="mobile-app-modal-each-col">
                <h3>3.1s</h3>
                <p>0-60mph</p>
              </div>
              <div className="mobile-app-modal-each-col">
                <h3>3.1s</h3>
                <p>0-60mph</p>
              </div>
            </div>
          </div>
        </div>
        <div className="approach-last-sec-cont">
          <h2>Freedom to Travel</h2>
          <p>
            Enter a destination on your touchscreen and Trip Planner will
            automatically calculate your route with Superchargers along the way.
          </p>
        </div>
        {/* <div className="mobile-health-full-img">
          <img
            src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704818233/image_176_tcqfoh.png"
            alt="health-img"
          />
        </div> */}
        <div className="approach-last-sec-each-cont">
          <div style={{ marginLeft: "0px" }}>
            <p>San Francisco to Los Angeles</p>
            <h3>178 miles</h3>
          </div>
          <div>
            <p>San Francisco to Los Angeles</p>
            <h3>178 miles</h3>
          </div>
          <div>
            <p>San Francisco to Los Angeles</p>
            <h3>178 miles</h3>
          </div>
          <div>
            <p>San Francisco to Los Angeles</p>
            <h3>178 miles</h3>
          </div>
        </div>
        <div className="new-platform-sec">
          <h1>Donate Now</h1>
          {/* <h1>An all-new for developers</h1> */}
          <p>
            If you're unable to volunteer but still want to support our mission,
            consider making a donation. Every contribution helps us continue our
            work of providing quality education, innovative programs, and
            sustainable solutions to communities in need. Together, we can build
            a brighter future for all. Donate now to make a difference.
          </p>
          {/* <a href="#" className="approach-anchor">
            Learn More
          </a> */}
          <Link to="/donate" className="approach-anchor white-content">
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

export default Approach;
