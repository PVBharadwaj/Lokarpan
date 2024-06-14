import { Link } from "react-router-dom";
import SupportSubNav from "../Navbar/SupportSubNav/SupportSubNav";
import "./WaysToGive.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
const WaysToGive = () => {
  const [popupVisibility, setPopupVisibility] = useState([false, false]); // Initialize with false for each popup

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
      <SupportSubNav />
      <div className="ways-top">
        <h1>Ways to give</h1>
      </div>
      {/* used in kith/employment */}
      <div className="ways-page">
        <div className="give-card padding40">
          <div className="give-card-img give-card-img-1"></div>
          <div className="give-card-text">
            <h1>Make a Gift</h1>
            <p>
              Lokarpan's impactful initiatives are sustained through the
              generosity of philanthropic support. Our programs have thrived
              thanks to the contributions of diverse donors, including
              individuals like yourself. These vital donations often take the
              form of endowment gifts or direct contributions, providing
              essential resources for our work. Additionally, we benefit from
              investment assets and planned gifting, where donors utilise estate
              planning and various funds to secure our ability to continue
              making a meaningful difference.
            </p>
            <Link className="give-card-link ways-space-up" to="/donate" style={{ color: '#06c' }}>
  Donate now<span className="arrow-icon">
        <ArrowForwardIosIcon style={{ verticalAlign: 'middle', fontSize: '15px' }} />
      </span></Link>

<button
  onClick={() => openpopup(0)}
  className="give-pop-up-button"
  style={{ cursor: "pointer" }}
>
  Explore a Gift<AddCircleOutlineIcon style={{ verticalAlign: 'middle', marginLeft: '10px' 
}} />
  
</button>
            {popupVisibility[0] && (
              <div className="misson-popup">
                <div className="misson-popup-content">
                  <RxCross2 onClick={() => closepopup(0)} className="x" />
                  <h1 style={{ width: "100%", paddingTop: "30px" }}>
                    Planned Giving
                  </h1>
                  <p className="mission-para">
                    Your investment in Lokarpan will empower our students and
                    rural communities to make the most of their potential. To
                    explore how your gift can advance our work, please contact
                    us at support@lokarpan.com.
                  </p>
                  <p className="mission-para">
                    In times of crisis, our culture shines through as we respond
                    swiftly and effectively to provide support and assistance
                    where it is most needed. We are committed to advancing
                    sustainability, both environmentally and socially, by
                    implementing practices that promote long-term well-being and
                    resilience.
                   <br></br> <span  className="mission-para1"> Thank you for your generous support.
                </span>
                  </p>
                  
                   
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="give-card padding40 give-card-reverse">
          <div className="give-card-text">
            <h1>Friend Circle</h1>
            <p>
              Join our Friend Circle to help us in our mission to empower rural
              communities through education. As a member, you'll gain special
              insights into our projects and opportunities to engage with our
              initiatives throughout the year. This circle is specifically
              tailored for our alumni, including past volunteers and fellows,
              who wish to continue supporting Lokarpan's impactful work beyond
              their service period. Subscribe to our newsletters and email us at
              support@lokarpan.com for more information.
            </p>
            <Link className="give-card-link ways-space-up" to="/newsletter">
              Register<span className="arrow-icon">
        <ArrowForwardIosIcon style={{ verticalAlign: 'middle', fontSize: '15px' }} />
      </span>
            </Link>
            {/* <Link className="give-card-link" to="/">Free Membership</Link> */}
          </div>
          <div className="give-card-img give-card-img-2"></div>
        </div>
        <div className="give-card padding40">
          <div className="give-card-img give-card-img-3"></div>
          <div className="give-card-text">
            <h1>Volunteers</h1>
            <p>
              Join us as a volunteer or a fellow and become an integral part of
              our mission to transform rural education. Volunteers dedicate
              their time and skills to support our programs, making a
              significant impact in the communities we serve. Our fellowship
              program offers a longer-term opportunity to devise innovative
              solutions that drive meaningful change, while receiving
              exceptional training and mentoring sessions from experienced
              colleagues and partners.
            </p>
            <Link className="give-card-link" to="/being-a-volunteer">
              Volunteer Opportunities<span className="arrow-icon">
        <ArrowForwardIosIcon style={{ verticalAlign: 'middle', fontSize: '15px' }} />
      </span>
            </Link>
            <Link className="give-card-link" to="/fellowship">
              Fellowship<span className="arrow-icon">
        <ArrowForwardIosIcon style={{ verticalAlign: 'middle', fontSize: '15px' }} />
      </span>

            </Link>
          </div>
        </div>
        <div className="give-card padding40 give-card-reverse">
          <div className="give-card-text">
            <h1>Corporate Partnerships</h1>
            <p>
              We invite inquiries regarding building robust partnerships with
              corporations and business entities interested in supporting
              Lokarpan's mission. Corporate support opportunities are available
              for various research activities and programs, empowering us to
              extend our impact and make education accessible to more children.
              To join our community of corporate supporters and gain exclusive
              insights into our projects and initiatives, please{" "}
              <a href="mailto:support@lokarpan.com" className="give-card-link">
                contact us.
              </a>
            </p>

            {/* <Link className="give-card-link" to="/">Free Membership</Link> */}
          </div>
          <div className="give-card-img give-card-img-4"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WaysToGive;
