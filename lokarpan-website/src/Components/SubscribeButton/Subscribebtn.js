import { useState, useEffect } from "react";
import "./Subscribebtn.css";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
const Subscribebtn = () => {
  const [popupVisible, setPopup] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event) => {
      const activeElement = document.activeElement;
      const InputText = document.getElementsByClassName("text-input");
      const TextInput = Array.from(InputText);
      const activeElementNotInArray = !TextInput.some(
        (element) => element === activeElement
      );

      if (activeElementNotInArray) {
        if (event.key === "s" || event.key === "S") {
          setPopup(true);
        } else if (event.which == 27) {
          setPopup(false);
        }
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="subscribe-container">
      <div className={popupVisible ? "popup-on" : "popup-off"}>
        <div className="popup-back"></div>
        <div className="popup-in">
          <div className="pop">
            <h2>Get updates from Lokarpan.</h2>
            {/* <i
              onClick={() => {
                setPopup(false);
              }}
              class="x bi bi-x"
            ></i> */}
          </div>
          <RxCross2
            onClick={() => {
              setPopup(false);
            }}
            className="x"
          />
          <div className="popup-text">
            <p>
              Join our vibrant community of engaged readers as we deliver the
              latest updates, success stories, and transformative initiatives
              aimed at empowering rural education.
            </p>
            <form action="">
              <input type="text" placeholder="Email address" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <button type="submit" className="subscribe-btn main-subscribe-btn">
        Press{" "}
        <span>
          <img
            src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704876734/Vector_mtf1zt.svg"
            alt="subscribe"
            className="subscribe"
          />
        </span>
        anytime to subscribe.
      </button>
    </div>
  );
};

export default Subscribebtn;
