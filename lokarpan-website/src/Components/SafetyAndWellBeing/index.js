import { Component } from "react";
import KithNavbar from "../Navbar/KithNavbar/index";
import KithLifeAtSchoolSubNavbar from "../Navbar/KithLifeAtSchoolSubNavbar/index";
import KithFooter from "../KithFooter/index";
import "./index.css";

class SafetyAndWellBeing extends Component {
  render() {
    return (
      <>
        <KithNavbar />
        <KithLifeAtSchoolSubNavbar />
        <div className="safety-wellbeing-container">
          <div className="safety-wellbeing-upper-section">
            <h1 className="safety-font80 safety-space-below">
              Safety & WellBeing
            </h1>
          </div>
          <ul className="safety-upper-section-content">
            <li className="safety-font24">
              At Kith, your safety and well-being are paramount. We've
              implemented robust measures to safeguard your privacy and personal
              information across all our platforms, online and offline.
            </li>
            <li className="safety-font24">
              Whether you're engaging virtually or in person, we strictly adhere
              to health and safety guidelines to ensure the protection of all
              our members. Additionally, our Kith n Kin Help Center offers a
              range of confidential services, including counselling, workshops,
              and facilitated discussions, providing comprehensive support for
              our community.
            </li>
            <li className="safety-font24">
              As the Director of the Kith n Kin Centre (KnK) and Education
              Programs, Ujjwala Singh serves as a crucial resource for Lokarpan
              students. From academic challenges to personal difficulties, she
              offers guidance and connects students with the necessary
              resources. In emergency situations, she provides immediate
              assistance and support. With a commitment to fostering open
              communication, our team and fellow members are here to lend a
              listening ear and offer assistance whenever needed, creating a
              supportive environment for all.
            </li>
          </ul>
          {/* <ul className="safety-upper-section-content">
            <li className="safety-font24">
              Lokarpan is committed to supporting the mental health and
              wellbeing of our members.
            </li>
            <li className="safety-font24">
              Look out for workshops, webinars, and resources focused on mental
              health and self-care. Our community encourages open communication.
            </li>
            <li className="safety-font24">
              If you ever need support, our team and fellow members are here to
              listen and assist.
            </li>
          </ul> */}
          <div className="safety-last-section">
            <h1 className="safety-font48">Committee & Clubs</h1>
            <div className="safety-last-section-content">
              <div className="safety-last-section-content-left">
                <img
                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1707807265/Rectangle_1810_lkylax.png"
                  className="safety-last-img"
                />
                <ul className="safety-last-section-content-list">
                  <li>
                    <b>Program Development Committee:</b> Shape the direction of
                    our programs and initiatives.
                  </li>
                  <li>
                    <b>Community Outreach Committee:</b> Connect with external
                    partners and extend Lokarpan's reach.
                  </li>
                  <li>
                    <b>Innovation and Technology Committee:</b> Explore
                    cutting-edge solutions to drive positive change.
                  </li>
                </ul>
              </div>
              <div className="safety-last-section-content-right">
                <img
                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1707807257/Rectangle_1811_sqkv2u.png"
                  className="safety-last-img"
                />
                <ul className="safety-last-section-content-list">
                  <li>
                    <b>Program Development Committee:</b> Shape the direction of
                    our programs and initiatives.
                  </li>
                  <li>
                    <b>Community Outreach Committee:</b> Connect with external
                    partners and extend Lokarpan's reach.
                  </li>
                  <li>
                    <b>Innovation and Technology Committee:</b> Explore
                    cutting-edge solutions to drive positive change.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <KithFooter />
      </>
    );
  }
}

export default SafetyAndWellBeing;
