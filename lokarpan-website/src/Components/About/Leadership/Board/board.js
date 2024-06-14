import { useState, useEffect } from "react";
import SecondaryNav from "../../../Navbar/SecondaryNav/SecondaryNav";
import SearchBar from "../../../Searchbar/Searchbar";
import "./Board.css"
import axios from "axios";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Footer/Footer";


// const BoardData = [
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

const Board = () => {


  const [BoardData, setBoardData] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/board/')
      .then(response => {
        setBoardData(response.data);
        // alert("success");
      })
      .catch(error => {
        alert("error");
        console.error('Error fetching Board data:', error);
      });
  }, []);


  return (
    <>
    <Navbar />
      <SecondaryNav />
      <div className="board-page">
      <h2 className="title1">Board</h2>
      <div className="lead-search">
      <SearchBar />
      </div>
      <div className="card-list">
        {BoardData.map((item, index) => (
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
      <img className="image" src={item.img} alt={item.name} />
      <div className={Mouseon ? "on" : "off"}>
        <h3 className="profile-name">{item.name}</h3>
        <h4 className="profile-position">{item.position}</h4>
        <p className="profile-text">{item.description}</p>
        <a href="www.google.com" target={"_blank"}>
          {item.hyperlink2}
        </a>
        <a href="www.google.com" target={"_blank"}>
          {item.hyperlink1}
        </a>
      </div>
    </div>
  );
};

export default Board;
