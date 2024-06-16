import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";

import "./index.css";

const Health = () => {
  const [healthPopupVisibility, setHealthPopupVisibility] = useState([
    false,
    false,
    false,
  ]);

  const healthopenpopup = (index) => {
    const updatedVisibility = [...healthPopupVisibility];
    updatedVisibility[index] = true;
    setHealthPopupVisibility(updatedVisibility);
  };

  const healthclosepopup = (index) => {
    const updatedVisibility = [...healthPopupVisibility];
    updatedVisibility[index] = false;
    setHealthPopupVisibility(updatedVisibility);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.which === 27) {
        setHealthPopupVisibility(healthPopupVisibility.map(() => false));
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [healthPopupVisibility]);

  useEffect(() => {
    if (healthPopupVisibility.some((isVisible) => isVisible)) {
      document.body.classList.add("body-no-scroll");
    } else {
      document.body.classList.remove("body-no-scroll");
    }
  }, [healthPopupVisibility]);

  return (
    <>
      <Navbar />
      <div className="fellowship-nav">
        <h1>Health</h1>
      </div>
      <div className="env-hero-cont">
        <h1 className="hlth-environment-main-head">
          Join Lokarpan in Bridging the Healthcare Gap for Rural Communities.
        </h1>
        <h1 className="hlth-new-head-text">
          Join us in our unwavering commitment to make healthcare accessible and
          available to all, particularly in the regions we serve. Our health
          programmes represent our response to the growing healthcare needs of
          communities living in stress, ensuring that vital medicines and
          supplies reach those who need them most, precisely when they need
          them.
        </h1>
      </div>
      <div className="health-container">
        <div className="health-full-img-text"></div>

        <div className="health-care-section">
          <h1>Healthcare for All</h1>
          <p>
            Lokarpan is dedicated to ensuring healthcare for all, especially in
            regions where access to essential medicines remains a challenge for
            millions. In Uttar Pradesh, where maternal mortality rates pose
            significant challenges, we actively support healthcare initiatives.
            Through tracking key health indicators, organising immunisation
            camps, and implementing wide-scale programmes, we equip local health
            facilities and practitioners in rural areas. Additionally, we train
            alternate medicine practitioners to diagnose and treat common
            diseases, striving to bridge the healthcare gap and save lives.
          </p>
        </div>

        <div className="health-cards-section">
          <h1 className="health-head">Lokarpan's Health Initiatives</h1>
          <p className="health-para2">
            Lokarpan's commitment to healthcare is structured around four
            thematic areas, each addressing critical aspects of public health
            and well-being
          </p>
          <div className="health-cards-cont">
            <div className="health-cards-cont-each-card">
              <h1>Maternal and Child Health</h1>
              <p>
                Lokarpan prioritises the reduction of infant and maternal
                mortality rates through comprehensive care programs. We ensure
                safe deliveries by providing essential midwife support to
                expectant mothers. Our initiatives guarantee access to vital
                support, nutrition, and education, nurturing healthy child
                development from infancy.
              </p>
            </div>
            <div className="health-cards-cont-each-card">
              <h1>Preventive Healthcare</h1>
              <p>
                Our nationwide vaccination programs target eight
                life-threatening diseases, safeguarding communities against
                preventable illnesses. We promote the completion of prescribed
                vaccination programs for children through comprehensive
                education efforts.
              </p>
            </div>
            <div className="health-cards-cont-each-card">
              <h1>Nutrition and Wellness</h1>
              <p>
                Monitoring key health indicators, Lokarpan ensures children and
                mothers receive adequate nutrition for optimal health. We
                implement nutrition programs in schools and households,
                combating malnutrition and fostering overall wellness. Our
                education initiatives promote holistic wellness, empowering
                communities with knowledge of healthy lifestyles and practices.
              </p>
            </div>
            <div className="health-cards-cont-each-card">
              <h1>Community Health Empowerment</h1>
              <p>
                Lokarpan supports family planning initiatives, advocating for
                healthier pregnancies and facilitating social-economic
                advancement. Through dental health camps and workshops, we
                enhance oral hygiene awareness and practices in communities. We
                train and empower alternative medicine practitioners, expanding
                local healthcare access and strengthening community health
                systems.
              </p>
            </div>
          </div>
        </div>

        <div className="health-full-img space-below">
          <img
            src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704818233/image_176_tcqfoh.png"
            alt="health-img"
          />
        </div>

        <div className="health-stories-cont">
          <h1 className="health-head health-space-below">Stories of Change</h1>
          <div className="health-stories-card-sec">
            <div className="health-stories-each-card hlth-card1">
              {/* <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704820084/image_177_gagtm0.png"
                className="stories-img"
              /> */}
              <div className="stories-img"></div>
              <div className="health-stories-each-card-content">
                <h1 className="hlth-popup-font18">Annapurna</h1>
                <p>Empowering Communities, One Safe Delivery at a Time</p>
                <span onClick={() => healthopenpopup(0)} className=" read-more">
                  Read more
                  <IoIosArrowForward className="new-margin-btn" />
                </span>
              </div>
            </div>
            {healthPopupVisibility[0] && (
              <div className="misson-popup">
                <div className="misson-popup-content">
                  <RxCross2 onClick={() => healthclosepopup(0)} className="x" />

                  <div className="mission-head">
                    Empowering Communities, One Safe Delivery at a Time.
                  </div>
                  <p className="mission-para">
                    Annapurna is a dedicated midwife (DAI) from the serene
                    village of Ghurau in Kanpur Dehat. In rural settings where
                    formal training is scarce, Mrs. Annapurna relied on age-old
                    practices and the wisdom passed down from her mother to
                    conduct safe deliveries. Recognised for her invaluable
                    service, the village health worker (Nitoo) chose Mrs.
                    Annapurna's humble abode as the venue for their monthly
                    health sessions, where she diligently rallied expecting
                    mothers to attend.
                  </p>
                  <p className="mission-para">
                    During one such enlightening session hosted by Lokarpan,
                    dedicated to training and empowering local midwives, Mrs.
                    Annapurna eagerly enrolled herself for a transformational
                    learning experience. Under the guidance of St. Catherine
                    Hospital, Kanpur, she received comprehensive training and
                    was equipped with a DAI kit containing essential items for
                    safe deliveries and newborn care. Armed with newfound
                    knowledge, Mrs. Annapurna fearlessly embraced her role,
                    bringing safe deliveries to the doorsteps of her community.
                  </p>
                  <p className="mission-para">
                    As time unfolded, the village buzzed with the excitement of
                    Panchayat elections. Encouraged by Nitoo and the village
                    women, Mrs. Annapurna took a leap of faith and contested for
                    a seat. To everyone's delight, she emerged victorious,
                    becoming an integral part of the Panchayat meetings and a
                    beacon of hope for her fellow villagers. Today, Mrs.
                    Annapurna not only continues her noble work of conducting
                    safe deliveries but also tirelessly informs her community
                    about government schemes and initiatives, earning the
                    unwavering trust and admiration of all. This is the
                    inspiring tale of a compassionate midwife turned community
                    leader, lighting the path to health and empowerment in rural
                    Ghurau.
                  </p>
                </div>
              </div>
            )}
            <div className="health-stories-each-card hlth-card2">
              <div className="stories-img"></div>
              <div className="health-stories-each-card-content">
                <h1 className="hlth-popup-font18">Usha Devi</h1>
                <p>Guardians of Community Well-being</p>
                <span onClick={() => healthopenpopup(1)} className=" read-more">
                  Read more
                  <IoIosArrowForward className="new-margin-btn" />
                </span>
              </div>
            </div>
            {healthPopupVisibility[1] && (
              <div className="misson-popup">
                <div className="misson-popup-content">
                  <RxCross2 onClick={() => healthclosepopup(1)} className="x" />
                  <div className="mission-head">
                    ASHA Workers: Guardians of Community Well-being
                  </div>
                  <p className="mission-para">
                    Usha Devi is a resilient resident of Sithau village, whose
                    journey from a hesitant observer to a confident leader in
                    healthcare is nothing short of inspiring. When the village
                    health worker, Saroj, initiated the Safe Motherhood and
                    Child Survival program's health sessions, Mrs. Usha Devi
                    graciously offered her verandah as the gathering place,
                    despite not being a direct beneficiary. Encouraged by Saroj,
                    she gradually became involved, assisting in weighing
                    children and pregnant women during these sessions
                  </p>
                  <p className="mission-para">
                    As Mrs. Usha Devi's understanding of health issues deepened,
                    Saroj saw immense potential in her and urged her to apply
                    for the ASHA Bahu position. With Saroj's guidance and
                    support, Mrs. Usha Devi successfully secured the role,
                    marking a significant turning point in her life. Now, as an
                    ASHA Bahu, she works tirelessly alongside Saroj, ensuring
                    the well-being of the village community. From arranging
                    immunizations to facilitating hospital visits for
                    deliveries, Mrs. Usha Devi has become a pillar of strength
                    and guidance.
                  </p>
                  <p className="mission-para">
                    Gone is the shy demeanour of yesteryears; today, Mrs. Usha
                    Devi confidently engages with villagers, advocating for
                    health services and government programs. Her transformation
                    stands as a testament to the impact of empowering
                    individuals within communities, fostering a brighter and
                    healthier future for all. This is the story of Mrs. Usha
                    Devi, a beacon of hope and change in Sithau village
                  </p>
                </div>
              </div>
            )}

            <div className="health-stories-each-card hlth-card3">
              <div className="stories-img"></div>
              <div className="health-stories-each-card-content">
                <h1 className="hlth-popup-font18">Kaunsar Jahan</h1>
                <p>Baby’s health, Mother’s Freedom</p>
                <span onClick={() => healthopenpopup(2)} className=" read-more">
                  Read more
                  <IoIosArrowForward className="new-margin-btn" />
                </span>
              </div>
            </div>
            {healthPopupVisibility[2] && (
              <div className="misson-popup">
                <div className="misson-popup-content">
                  <RxCross2 onClick={() => healthclosepopup(2)} className="x" />
                  <div className="mission-head">
                    Baby’s health, Mother’s Freedom: A Journey of Resilience and
                    Transformation
                  </div>
                  <p className="mission-para">
                    The story of Kaunsar Jahan from Bandariyapur village in
                    Auraiya district, Uttar Pradesh, highlights the
                    transformative impact of community health initiatives on
                    maternal and child well-being.
                  </p>
                  <p className="mission-para">
                    Eight years ago, Kaunsar Jahan faced a life-threatening
                    pregnancy complication due to lack of awareness and
                    resources. Fortunately, the village youth came together to
                    arrange transportation to a hospital and raise funds for her
                    treatment, showcasing the spirit of solidarity and support
                    within the community.
                  </p>
                  <p className="mission-para">
                    Following this incident, Lokarpan, in partnership with
                    Catholic Relief Services, introduced the Safe Motherhood and
                    Child Survival (SMCS) program in the village. Through this
                    initiative, pregnant women and young children received
                    essential support, including nutritional assistance and
                    regular health check-ups.
                  </p>
                  <p className="mission-para">
                    With access to vital information and services provided by
                    dedicated health workers like Nafisa, the village witnessed
                    a positive shift in maternal and child health practices.
                    Kaunsar Jahan, now equipped with knowledge about prenatal
                    care and immunization, welcomed her daughter Shahnaz into a
                    healthier environment.
                  </p>
                  <p className="mission-para">
                    Beyond improving health outcomes, the SMCS program fostered
                    a sense of empowerment and openness within the community.
                    Women gained confidence to discuss pregnancy-related issues
                    and actively participate in healthcare decisions. As a
                    result, traditional barriers, such as strict religious
                    norms, gradually eased, allowing for greater freedom of
                    movement and engagement in public life.
                  </p>
                  <p className="mission-para">
                    Kaunsar Jahan's story exemplifies the transformative power
                    of community-based health interventions in promoting
                    maternal and child well-being.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Health;
