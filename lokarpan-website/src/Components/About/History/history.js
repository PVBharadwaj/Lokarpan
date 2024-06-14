import React, { useState, useEffect } from "react";
import "./histroy.css";
import Time from "./timeline";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import BackToTopButton from "./backtotop";
import Timelinemobile from "./timelinemobile";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import SubNavbar from "../../Navbar/SubNavbar";

const History = () => {
  const [TimelineData, setTimelineData] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/timeline/")
      .then((response) => {
        setTimelineData(response.data);
        // alert("success");
      })
      .catch((error) => {
        alert("error");
        console.error("Error fetching the data:", error);
      });
  }, []);

  const scrollToYear = (year) => {
    const element = document.getElementById(year);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const filterByDecade = (decade) => {
    let targetYear = null;
    TimelineData.filter((item) => {
      const itemYear = parseInt(item.Year);
      const yeararray = itemYear >= decade && itemYear < decade + 10;
      if (yeararray) {
        targetYear = itemYear;
        return true;
      }
      return false;
    });
    if (targetYear) {
      scrollToYear(targetYear.toString());
    } else {
      alert("Sorry!! No data found for this input");
    }
  };

  return (
    <>
      <Navbar />
      <SubNavbar />
      
      <div className="history-top_section">
        <div className="history-top-sec-cont">
          <div className="history-left-side">
            <div className="history-lsh1">History</div>
            <div className="history-lsh2">
          
              <div className="history-lsh21">of our </div> Firm
            </div>
          </div>
          <div className="history-right-side">
            <p className="history-subheader">
              Established in November 1996, Lokarpan emerged as a beacon of hope
              for rural communities grappling with poverty and inequity.
            </p>
            <p className="history-subheader1">
              Under the guidance of Shri H.V. Singh, our organisation was born
              from the belief in empowering communities to become architects of
              their own progress. This ethos formed the bedrock of our mission:
              to organise and empower the rural poor, fostering development as a
              catalyst for social justice, economic growth, and self-reliance.
             
            </p>
          </div>
        </div>
      </div>
      <div className="history-section-container">
        {/* ------------------------- */}
<div className="his-sec-text"> Over two decades, Lokarpan has developed a comprehensive strategy
              rooted in community engagement, forging sustainable solutions to
              the diverse challenges confronting rural India. Through our
              strategic partnerships, we've built a robust network of
              change-makers, amplifying our impact and driving inclusive
              development. With a team of sector-specialist trainers, locally
              trained staff, and grassroots infrastructure, Lokarpan remains
              steadfast in its commitment to a brighter, more equitable future
              for all.</div>
        {/* -------------------- */}
        <div className="history-jumto">Jump to :</div>

        <div className="history-buttons">
          <button onClick={() => filterByDecade(2020)}>2020's</button>
          <button onClick={() => filterByDecade(2010)}>2010's</button>
          <button onClick={() => filterByDecade(2000)}>2000's</button>
          <button onClick={() => filterByDecade(1990)}>1990's</button>
        </div>
        <div class="history-down">
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
        <div className="timeline-desk">
          <Time />
        </div>
        <div className="timeline-mobile">
          <Timelinemobile />
        </div>

        <BackToTopButton />
      </div>
      <Footer />
    </>
  );
};

export default History;
