import React,{ useEffect, useState } from 'react'
import "./Kith.css"
import { Link } from 'react-router-dom'

import Navbar from '../Navbar/KithNavbar'
import Footer from '../KithFooter'

import { FaArrowRightLong } from "react-icons/fa6";

import { RxCross2 } from "react-icons/rx";

const Kith = () => {
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
      <div className="kith-overview-head kith-overview-div">
          <h1>Overview</h1>
          {/* <p>Those who venture here—to learn, research, teach, work, and grow—join nearly three decades of students and scholars in the pursuit of truth, knowledge, and a better world. At Kith, we advocate for quality education as a means to unlock every child's potential, fostering a future where socio-economic barriers do not hinder growth.</p> */}
      </div>
      {/* used in life at school also - below div */}
      <div className="kith-overview-div kith-overview-second-div">
          <p>Those who venture here—to learn, research, teach, work, and grow—join nearly three decades of students and scholars in the pursuit of truth, knowledge, and a better world. At Kith, we advocate for quality education as a means to unlock every child's potential, fostering a future where socio-economic barriers do not hinder growth.</p>
      </div>
      <div className="kith-overview-div kith-overview-third-div">
        {/* used in campus-and-culture */}
        <div className="kith-overview-card">
          <div className='kith-overview-card-img kith-overview-card-img-1'></div>
          <div className="kith-overview-card-text">
            <h3>Who we are?</h3>
            <p>
            Founded in 2014, Kith and Kin School in Auraiya, Uttar Pradesh, aims to elevate education levels, especially in low-income communities. We strive towards a vision where every child receives exceptional education, creating equity that paves the way for India's holistic development. Our ecosystem centres on parent, student, and teacher collaboration.
            </p>
          </div>
        </div>
        <div className="kith-overview-card kith-overview-card-reverse">
          <div className="kith-overview-card-text">
            <h3>Our faculty</h3>
            <p>
            These are just a few of the dedicated individuals who form the backbone of Kith. Our faculty members bring a wealth of experience, expertise, and a shared commitment to our mission. Each member of our staff plays a crucial role in driving our initiatives forward and making a positive impact in the communities we serve.
            </p> <span className='our-role-faculty'>Shunyuan  Zhang, The professor, Lokarpan</span>
          </div>
          <div className='kith-overview-card-img kith-overview-card-img-2'></div>
        </div>
      </div>
      <div className="kith-overview-div grid-head">NEW AT KITH</div>
      <div className='new-kith-display'>
      <div className="kith-overview-div kith-overview-grid">
        <div className='overview-grid-inner kith-overview-grid-inner1'>
          <div>
            <p>We prioritise accessibility and excellence in education. Join our vibrant learning community today. </p>
            <Link to="/kith/admission" className='kith-link'>Learn more about our Admissions</Link> 
          </div>
        </div>
        <div className='overview-grid-inner kith-overview-grid-inner2'>
          <div className='mobile-only'>
            <p>Explore transparent and accessible information about tuition fees and scholarships available to support your child's education journey at the Kith n Kin School</p>
            <Link to="/kith/financials" className='kith-link'>Learn more about our Financials</Link> 
          </div>
        </div>
        <div className='overview-grid-inner kith-overview-grid-inner3'>
          <div>
            <p>Explore transparent and accessible information about tuition fees and scholarships available to support your child's education journey at the Kith n Kin School</p>
            <Link to="/kith/financials" className='kith-link'>Learn more about our Financials</Link> 
          </div>
        </div>
        <div className='overview-grid-inner kith-overview-grid-inner4'>
        <p>Exceptionalism can come anywhere from.</p>
        </div>
        <div className='overview-grid-inner kith-overview-grid-inner5'>
        <div>
            <p>Access essential information about our school's leadership, employment opportunities, frequently asked questions, and donation options to support our mission.</p>
            <Link to="/kith/leadership" className='kith-link'>Read more </Link> 
          </div>
        </div>

        <div className='overview-grid-inner kith-overview-grid-inner6'>
          <div>
            {/* text can be added in this div */}
          </div>
        </div>

        <div className='overview-grid-inner kith-overview-grid-inner7'>
          <div>
            <p>Immerse yourself in our dynamic campus environment, cultural activities and a curriculum tailored to meet the diverse learning needs of students, empowering them to achieve academic excellence and personal growth.</p>
            <div className='no-hover-effect'><Link to="/kith/life-at-school" className='kith-link1'>Read more about Life at School <FaArrowRightLong/></Link> </div>
          </div>
        </div>

        <div className='overview-grid-inner kith-overview-grid-inner8'>
        
        </div>
        </div>
        
      </div>
      <div className='new-kith-display-mobile'>
        <div className='new-kith-display1'>


        </div>
        <div className='new-kith-display2'>


        </div>
        <div className='new-kith-display3'>


        </div>
        <div className='new-kith-display4'>


        </div>
        <div className='new-kith-display5'>


        </div>
        <div className='new-kith-display6'>


        </div>
        </div>
      <div className='kith-overview-div overview-img-div'>
        {/* <div className="kith-overview-img-list">
          <KithCarousels />
        </div> */}
       
       {/* <div className="health-stories-cont">
          <h1 className="health-head health-space-below">Stories of Change</h1>
          <div className="health-stories-card-sec">
            <div className="health-stories-each-card1">
              <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704820084/image_177_gagtm0.png"
                className="stories-img"
              />
              <div className="health-stories-each-card-content1">
                <h1 className="popup-font18">ARTICLE</h1>
                <p>Empowering Communities, One Safe Delivery at a Time</p>
                <span onClick={() => healthopenpopup(0)} className=" read-more1k">
                  Read more
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
            <div className="health-stories-each-card1">
              <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704820084/image_177_gagtm0.png"
                className="stories-img"
              />
              <div className="health-stories-each-card-content1">
                <h1 className="popup-font18">ARTICLE</h1>
                <p>ASHA Workers: Guardians of Community Well-being</p>
                <span onClick={() => healthopenpopup(1)} className=" read-more1k">
                  Read more
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

            <div className="health-stories-each-card1">
              <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704820084/image_177_gagtm0.png"
                className="stories-img"
              />
              <div className="health-stories-each-card-content1">
                <h1 className="popup-font18">ARTICLE</h1>
                <p>
                  Baby’s health, Mother’s Freedom: A Journey of Resilience and
                  Transformation
                </p>
                <span onClick={() => healthopenpopup(2)} className=" read-more1k">
                  Read more
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
        </div> */}

        
      </div>
      <div className='kith-overview-div kith-overview-last-div'>
        <h3>Even more places to get Lokarpan</h3>
        <Link to="/" className='overview-link'>Set up your Device</Link>
        <div>
          <img src='https://res.cloudinary.com/dtfzxqpoy/image/upload/v1709463719/image_260_chijgx.png' />
          <img src='https://res.cloudinary.com/dtfzxqpoy/image/upload/v1709463718/image_259_yx3vqh.png' />
          <img src='https://res.cloudinary.com/dtfzxqpoy/image/upload/v1709463717/image_258_nnzwlj.png' />
        </div>
        <div>
          <img src='https://res.cloudinary.com/dtfzxqpoy/image/upload/v1709463719/image_260_chijgx.png' />
          <img src='https://res.cloudinary.com/dtfzxqpoy/image/upload/v1709463718/image_259_yx3vqh.png' />
          <img src='https://res.cloudinary.com/dtfzxqpoy/image/upload/v1709463717/image_258_nnzwlj.png' />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Kith;
