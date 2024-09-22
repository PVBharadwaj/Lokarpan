import React from "react";
import { Link } from "react-router-dom";
import "./LifeAtSchool.css";
import KithNavbar from "../Navbar/KithNavbar/index";
import KithLifeAtSchoolSubNavbar from "../Navbar/KithLifeAtSchoolSubNavbar";
import KithFooter from "../KithFooter";

const LifeAtSchool = () => {
  return (
    <>
      <KithNavbar />
      <KithLifeAtSchoolSubNavbar />
      <div className="life-at-school-upper-section"></div>
      <div className="kith-overview-div kith-overview-second-div">
        <h1 className="kith-life-head">Welcome to Kith n Kin School</h1>
        <p className="kith-life-para">
          At Kith n Kin School we believe that leadership and values are
          inseparable. The teaching of ethics here is explicit, not implicit,
          and our community values of mutual respect, honesty and integrity, and
          personal accountability support the Kith learning environment and are
          at the heart of a School-wide aspiration: to make Kith a model of the
          highest standards essential to responsible leadership in the modern
          world.
        </p>
      </div>
      <div className="life-at-school-div">
        <h3 className="kith-life-head">Our Campus</h3>
        <p className="kith-life-para">
          While Kith n Kin School boasts a traditional physical campus, our
          virtual presence is equally vibrant. Engage with fellow students
          through our online learning platforms, participate in virtual events,
          and collaborate on projects that ignite your interests. Our campus
          extends beyond physical boundaries, allowing you to connect with peers
          from diverse backgrounds and locations.
        </p>
      </div>
      <div className="life-at-school-third-div life-at-school-div">
        <h3>Committee & Clubs</h3>

        <h2 className="life-at-school-para-ch">
          The Kith n Kin School offers a diverse and enriching campus life,
          reflected in the growing popularity of societies that celebrate and
          champion diversity in its many forms. Students can join and explore a
          range of cultural and community-based interests, including the Debate
          Club, Literacy Club, and Languages Club, which fosters learning
          European languages such as Spanish and French. A dedicated student
          committee, working with teachers and staff, organises social and
          leisure activities, ensuring an inclusive and vibrant learning
          environment throughout the academic process. This committee also plays
          a pivotal role in integrating new students and promoting a community
          free from bullying
        </h2>
        <h2 className="life-at-school-para-ch">
          Additionally, the school hosts annual functions, Business Day events,
          parades, and CDEMO days, all of which complement our arts and sports
          offerings. These activities provide each student with a well-rounded
          learning experience.
        </h2>
      </div>
      <div className="life-at-school-div life-at-school-div-last">
        <h3>Safeguarding</h3>
        <img src="https://images.unsplash.com/photo-1599493347474-7e864c18489e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <div className="life-at-school-content-sec">
          <h2 className="life-at-school-para-ch">
            At Kith n Kin School, the welfare and safety of our students are our
            top priorities. We pride ourselves on offering individual care of
            the highest quality, ensuring that every student thrives in a secure
            environment.
          </h2>
          <h2 className="life-at-school-para-ch">
            Your privacy and personal information are of utmost importance to
            us. We have robust measures in place to safeguard your data, with
            secure online platforms and regular system updates to ensure a safe
            digital environment for our students.
          </h2>
          <h2 className="life-at-school-para-ch">
            Whether in-person or online, we are committed to the health and
            safety of our students, strictly adhering to guidelines to maintain
            a secure and healthy campus. At Kith n Kin School, we believe in
            nurturing not only academic excellence but also the holistic growth
            and well-being of each student. Join us on a journey where every
            student thrives and shines bright every single day.
          </h2>
        </div>
      </div>
      <KithFooter />
    </>
  );
};

export default LifeAtSchool;
