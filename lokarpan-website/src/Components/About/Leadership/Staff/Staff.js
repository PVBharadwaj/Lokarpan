import { useState, useEffect } from "react";
import SecondaryNav from "../../../Navbar/SecondaryNav/SecondaryNav";
import SearchBar from "../../../Searchbar/Searchbar";
import "./Staff.css";
import axios from "axios";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Footer/Footer";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";

// const StaffData = [
//   {
//     id: 1,
//     img: "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png",
//     name: "Dummy",
//     position: "Classroom Educator",
//     description:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio",
//     hyperlink1: <i class="bi bi-facebook"></i>,
//     hyperlink2: <i class="bi bi-house-door"></i>,
//   },
//   {
//     id: 2,
//     img: "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png",
//     name: "test",
//     position: "Classroom Educator",
//     description:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio",
//     hyperlink1: <i class="bi bi-facebook"></i>,
//     hyperlink2: <i class="bi bi-house-door"></i>,
//   },
//   {
//     id: 3,
//     img: "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png",
//     name: "example",
//     position: "Classroom Educator",
//     description:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio",
//     hyperlink1: <i class="bi bi-facebook"></i>,
//     hyperlink2: <i class="bi bi-house-door"></i>,
//   },
//   {
//     id: 4,
//     img: "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png",
//     name: "person",
//     position: "Classroom Educator",
//     description:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio",
//     hyperlink1: <i class="bi bi-facebook"></i>,
//     hyperlink2: <i class="bi bi-house-door"></i>,
//   },
//   {
//     id: 5,
//     img: "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png",
//     name: "pupil",
//     position: "Classroom Educator",
//     description:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio",
//     hyperlink1: <i class="bi bi-facebook"></i>,
//     hyperlink2: <i class="bi bi-house-door"></i>,
//   },
//   {
//     id: 6,
//     img: "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png",
//     name: "people",
//     position: "Classroom Educator",
//     description:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio",
//     hyperlink1: <i class="bi bi-facebook"></i>,
//     hyperlink2: <i class="bi bi-house-door"></i>,
//   },
//   {
//     id: 7,
//     img: "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png",
//     name: "member",
//     position: "Classroom Educator",
//     description:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio",
//     hyperlink1: <i class="bi bi-facebook"></i>,
//     hyperlink2: <i class="bi bi-house-door"></i>,
//   },
//   {
//     id: 8,
//     img: "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png",
//     name: "item",
//     position: "Classroom Educator",
//     description:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio",
//     hyperlink1: <i class="bi bi-facebook"></i>,
//     hyperlink2: <i class="bi bi-house-door"></i>,
//   },
//   {
//     id: 9,
//     img: "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png",
//     name: "people",
//     position: "Classroom Educator",
//     description:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio",
//     hyperlink1: <i class="bi bi-facebook"></i>,
//     hyperlink2: <i class="bi bi-house-door"></i>,
//   },
//   {
//     id: 10,
//     img: "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png",
//     name: "member",
//     position: "Classroom Educator",
//     description:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio",
//     hyperlink1: <i class="bi bi-facebook"></i>,
//     hyperlink2: <i class="bi bi-house-door"></i>,
//   },
//   {
//     id: 11,
//     img: "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png",
//     name: "item",
//     position: "Classroom Educator",
//     description:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio",
//     hyperlink1: <i class="bi bi-facebook"></i>,
//     hyperlink2: <i class="bi bi-house-door"></i>,
//   },
// ];

const Staff = () => {

  
  const [StaffData, setStaffData] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/staff/')
      .then(response => {
        setStaffData(response.data);
        // alert("success");
      })
      .catch(error => {
        alert("error");
        console.error('Error fetching staff data:', error);
      });
  }, []);


  return (
    <>
    <Navbar />
      <SecondaryNav />
      <div className="staff-page">
        <h2 className="title1">Team</h2>
        <div className="lead-search">
      <SearchBar />
      </div>
        <div className="card-list">
          {StaffData.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
        <div className="dummy"></div>
      </div>
      <Footer />
    </>
  );
};

const Card = ({ item }) => {
  const [Mouseon, setMouseState] = useState(false);

  const handleMouseEnter = (event) => {
    const elements = document.getElementsByClassName("image");
    for (const element of elements) {
      element.classList.add("overlay");
    }
    event.target.classList.remove("overlay");
  };

  const handleMouseLeave = (event) => {
    const elements = document.getElementsByClassName("image");
    for (const element of elements) {
      element.classList.remove("overlay");
    }
  };


  const renderSocialIcon1 = () => {
    if (item.Social_Media_URL_1) {
      if (item.Social_Media_URL_1.includes("facebook.com")) {
        return <FaFacebook/>;
      } else if (item.Social_Media_URL_1.includes("instagram.com")) {
        return <RiInstagramFill/>;
      } else if (item.Social_Media_URL_1.includes("github.com")) {
        return <FaGithub/>;
      } else if (item.Social_Media_URL_1.includes("gitlab.com")) {
        return <FaGitlab/>;
      } else if (item.Social_Media_URL_1.includes("twitter.com")) {
        return <FaXTwitter/>;
      } else {
        return <FaGlobe/>;
      }
    }
  };

  const renderSocialIcon2 = () => {
    if (item.Social_Media_URL_2) {
      if (item.Social_Media_URL_2.includes("facebook.com")) {
        return <FaFacebook/>;
      } else if (item.Social_Media_URL_2.includes("instagram.com")) {
        return <RiInstagramFill/>;
      } else if (item.Social_Media_URL_2.includes("github.com")) {
        return <FaGithub/>;
      } else if (item.Social_Media_URL_2.includes("gitlab.com")) {
        return <FaGitlab/>;
      } else if (item.Social_Media_URL_2.includes("twitter.com")) {
        return <FaXTwitter/>;
      } else {
        return <FaGlobe/>;
      }
  }
  };


  return (
    <div
      className="card-lead"
      onMouseOver={() => {
        setMouseState(true);
      }}
      onMouseOut={() => {
        setMouseState(false);
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img className="image" src={item.Picture} alt={item.Name} />
      <div className={Mouseon ? "on" : "off"}>
        <h3 className="profile-name">{item.Name}</h3>
        <h4 className="profile-position">{item.Title}</h4>
        <p className="profile-text">{item.Info}</p>
        {(item.Social_Media_URL_1) &&
          <Link to={item.Social_Media_URL_1} target="_blank" className="profile-url">
          {renderSocialIcon1()}
          </Link>}
        {(item.Social_Media_URL_2) &&
          <Link to={item.Social_Media_URL_2} target="_blank" className="profile-url">
          {renderSocialIcon2()}
          </Link>}
      </div>
    </div>
  );
};

export default Staff;
