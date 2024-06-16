import { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "../Health/index.css";
import { Link } from "react-router-dom";
import { PiContactlessPaymentFill } from "react-icons/pi";
import "./index.css";

class Livelihood extends Component {
  render() {
    const Desp = [
      {
        id: 1,
        img: "https://res.cloudinary.com/dtfzxqpoy/image/upload/v1713120024/shuffle_ehqjjw.png",
        head: "Skill Development Initiatives",
        des: "Equipping individuals with the skills and knowledge necessary to excel in diverse livelihood opportunities.",
      },
      {
        id: 2,
        img: "https://res.cloudinary.com/dtfzxqpoy/image/upload/v1713120024/shuffle_ehqjjw.png",
        head: "Entrepreneurship Support",
        des: "Nurturing budding rural entrepreneurs, providing mentorship, training, and access to local producers and broader markets, expanding opportunities for sustainable income.",
      },
      {
        id: 3,
        img: "https://res.cloudinary.com/dtfzxqpoy/image/upload/v1713120024/shuffle_ehqjjw.png",
        head: "Financial Inclusion",
        des: "Promoting access to financial services, micro-loans, and savings mechanisms to empower economic independence.",
      },
      {
        id: 4,
        img: "https://res.cloudinary.com/dtfzxqpoy/image/upload/v1713120024/shuffle_ehqjjw.png",
        head: "Community Capacity Building",
        des: "Strengthening community resilience through education, awareness, and collaborative initiatives for long-term prosperity.",
      },
      // {
      //   id: 5,
      //   img: "https://res.cloudinary.com/dtfzxqpoy/image/upload/v1713120024/shuffle_ehqjjw.png",
      //   head: "Empowering Communities, Igniting Economic Growth",
      //   des: " Lokarpan is dedicated to creating avenues for economic growth and prosperity. We work tirelessly to identify and develop new opportunities for income generation, whether through entrepreneurship support, market linkages, or innovative business models.",
      // },
    ];

    return (
      <>
        <Navbar />
        <div className="fellowship-nav">
          <h1>Livelihood</h1>
        </div>
        <div className="health-container">
          <h1 className="livelihood-full-img-text-head">
            Building sustainable futures for communities living in stress.
          </h1>
          <div className="livelihood-full-img-text"></div>
          <div className="new-liv-grid-sec">
            <h1 className="new-liv-grid-head">Our Approach</h1>
            <div className="env-grid-sec">
              <div>
                <span className="env-l1"> At Lokarpan,</span>
                <span className="env-l2">
                  our approach to livelihood development is rooted in
                  empowerment and sustainability.
                </span>
              </div>
              <div>
                <span className="env-l1">We believe</span>{" "}
                <span className="env-l2">
                  in creating lasting change by providing opportunities for
                  skill development, fostering entrepreneurship, and
                  facilitating access to markets.
                </span>
              </div>
              <div>
                <span className="env-l1">By focusing on </span>{" "}
                <span className="env-l2">
                  self-sufficiency, improving agricultural practices, and
                  enhancing trade networks, we pave the way for communities to
                  thrive and grow economically.
                </span>
              </div>
            </div>
          </div>

          <div className="health-container-section livelihood-cont-section">
            <div className="new-liv-sec">
              <h1>Strengthening Livelihoods Across Every Link in the Chain.</h1>
              <p>
                In the face of growing economic challenges, particularly amidst
                the global pandemic, securing livelihoods stands as a crucial
                mission within Lokarpan's work across various sectors.
              </p>
              <p>
                As a dedicated advocate for empowering communities, Lokarpan
                focuses on bolstering each pivotal element in the livelihood
                supply chain. Our programs are designed to support every aspect
                of livelihood development, ensuring that underserved communities
                have access to the resources they need to thrive.
              </p>
            </div>
          </div>

          <div className="livelihood-top-section">
            <h1 className="livelihood-desp-cards-head">Our Programs</h1>
            <div className="new-liv-cards">
              {Desp.map((item, index) => (
                <DespCard
                  key={index}
                  item={item}
                  index={index}
                  totalCount={Desp.length}
                />
              ))}
            </div>
          </div>

          <div className="donate-section">
            <h1 className="last-space">Be a Catalyst for Change</h1>
            <p className="our-role-font24">
              Join Lokarpan in our mission to combat social and economic
              disparities, empowering at-risk communities for a brighter future.
              Your support fuels innovation and transformative impact.
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

const DespCard = ({ item, index, totalCount }) => {
  const isOddTotalCount = totalCount % 2 !== 0;
  const isLastCard = index === totalCount - 1;
  const cardClassName = `desp-card-list livelihood-card-list ${
    isOddTotalCount && isLastCard ? "last-card" : ""
  }`;

  return (
    <div className="new-liv-card">
      <h2 className="new-liv-card-head">{item.head}</h2>
      <h2 className="new-liv-card-para">{item.des}</h2>
    </div>
  );
};

export default Livelihood;
