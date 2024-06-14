import React, { useState, Component } from "react";
import "./Newsletter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import Popup from "reactjs-popup";
import axios from "axios";
// import clsx from "@mui/base/node_modules/clsx";

import {
  faNewspaper,
  faCalendarDays,
  faComputer,
  faMicroscope,
} from "@fortawesome/free-solid-svg-icons";
import { counter } from "@fortawesome/fontawesome-svg-core";
import { IoMdClose } from "react-icons/io";

// class Newslettert extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedNewsletters: [],
//       counter: 0,
//       email: "",
//     };
//   }

//   onChangeEmail = (event) => {
//     this.setState({ email: event.target.value });
//   };

//   handleNewsletterSelection = (e, newsletter) => {
//     console.log("Hi");
//     const { selectedNewsletters } = this.state;
//     let updatedNewsletters;

//     if (selectedNewsletters.includes(newsletter)) {
//       updatedNewsletters = selectedNewsletters.filter(
//         (item) => item !== newsletter
//       );
//     } else {
//       updatedNewsletters = [...selectedNewsletters, newsletter];
//     }

//     this.setState({
//       selectedNewsletters: updatedNewsletters,
//       counter: updatedNewsletters.length,
//     });
//   };

//   handleSubmit = async () => {
//     const { email, selectedNewsletters } = this.state;

//     try {
//       // Check if email is provided and at least one newsletter is selected
//       if (email.trim() !== "" && selectedNewsletters.length > 0) {
//         // if (email.trim() !== "" && selectedNewsletters.length > 0) {
//         // if (email && selectedNewsletters.length > 0) {
//         // Prepare data to be sent to the backend
//         const formData = {
//           email: email,
//           newsletters: selectedNewsletters,
//         };
//         console.log(formData)

//         // Send a POST request to your Django backend
//         const response = await axios.post(
//           "http://127.0.0.1:8000/api/newsletter_subscribe/",
//           formData
//         );

//         // Handle the response from the backend
//         if (response.status === 201) {
//           console.log("Email submitted successfully");
//           // Optionally, you can reset the form fields here
//           this.setState({
//             email: "",
//             selectedNewsletters: [],
//             counter: 0,
//           });
//         } else {
//           console.error("Failed to submit email", error);
//         }
//       } else {
//         console.error("Email or newsletters not provided");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

const Newslettert = () => {
  const [email, setEmail] = useState("");
  const [selectedNewsletters, setSelectedNewsletters] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedNewsletters([...selectedNewsletters, value]);
    } else {
      setSelectedNewsletters(
        selectedNewsletters.filter((item) => item !== value)
      );
    }
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = {
        email: email,
        newsletters: selectedNewsletters,
      };
      const response = await axios.post(
        "http://localhost:8000/api/newsletter_subscribe/",
        formData
      );
      if (response.status === 201) {
        alert("Subscription successful!");
        setEmail("");
        setSelectedNewsletters([]);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="newsletter">
      <Navbar />
      <div className="newsletter-top-section">
        <h1 className="newsletter-heading">
          Stay Informed, Stay Inspired: Join Lokarpan's Newsletter Community
          Today.
        </h1>
        <h2 className="newsletter-heading2">
          Select the newsletters you’d like to receive. Then, add your e-mail to
          sign up.
        </h2>
      </div>
      <section className="newsletter-letters">
        {/* Your existing newsletter sections */}
        <h3 className="news-head3">Newsletters</h3>
        <div className="newletter-inner-section">
          <div className="daily">
            <div className="daily-icon">
              <FontAwesomeIcon icon={faNewspaper} className="daily-icon1" />
              <div
                className={`newsletter-icon-container ${
                  selectedNewsletters.includes("Daily") ? "" : ""
                }`}
              >
                <input
                  type="checkbox"
                  id="newsletter-checkbox-daily"
                  onClick={handleCheckboxChange}
                />
                <label
                  htmlFor="newsletter-checkbox-daily"
                  className="ihmHAQ"
                ></label>
              </div>
            </div>
            <div className="newsbox-heading">Lokarpan</div>
            <div className="newsbox-content">
              Our flagship newsletter highlights the latest developments and
              insights from our kith programme, our research and learning
              initiatives and podcasts
            </div>
            <button className="newsbox-tag">Lokarpan</button>
          </div>

          <div className="daily">
            <div className="daily-icon">
              <FontAwesomeIcon icon={faCalendarDays} className="daily-icon12" />
              <div
                className={`newsletter-icon-container ${
                  selectedNewsletters.includes("Weekly") ? "" : ""
                }`}
              >
                <input
                  type="checkbox"
                  id="newsletter-checkbox-weekly"
                  onClick={handleCheckboxChange}
                />
                <label
                  htmlFor="newsletter-checkbox-weekly"
                  className="ihmHAQ"
                ></label>
              </div>
            </div>
            <div className="newsbox-heading">Technology</div>
            <div className="newsbox-content">
              Lokarpan's specialised newsletter, where we delve into the latest
              advancements, trends, and innovations shaping the intersection of
              technology and rural education
            </div>
            <button className="newsbox-tag">Technology</button>
          </div>
        </div>
      </section>
      <section className="newsletter-letters-1">
        {/* Your existing newsletter sections */}
        <div className="kith">Kith</div>
        <div className="newsletter-letters-1-newsboxs">
          <div className="daily">
            <div className="daily-icon">
              <FontAwesomeIcon icon={faComputer} className="ic1" />
              <div
                className={`newsletter-icon-container ${
                  selectedNewsletters.includes("NewYorker") ? "" : ""
                }`}
              >
                <input
                  type="checkbox"
                  id="newsletter-checkbox-newyorker"
                  onClick={handleCheckboxChange}
                />
                <label
                  htmlFor="newsletter-checkbox-newyorker"
                  className="ihmHAQ"
                ></label>
              </div>
            </div>
            <div className="newsbox-heading">Quarterly newsletter</div>
            <div className="newsbox-content">
              Latest updates, success stories, and impactful initiatives aimed
              at transforming education in rural communities.
            </div>
            <button className="newsbox-tag">Quarterly Newsletter</button>
          </div>
          <div className="daily">
            <div className="daily-icon">
              <FontAwesomeIcon icon={faMicroscope} className="ic1" />
              <div
                className={`newsletter-icon-container ${
                  selectedNewsletters.includes("Science") ? "" : ""
                }`}
              >
                <input
                  type="checkbox"
                  id="newsletter-checkbox-science"
                  onClick={handleCheckboxChange}
                />
                <label
                  htmlFor="newsletter-checkbox-science"
                  className="ihmHAQ"
                ></label>
              </div>
            </div>
            <div className="newsbox-heading">Annual Newsletter</div>
            <div className="newsbox-content">
              Comprehensive insights, impactful milestones, and compelling
              narratives that showcase the ear-long journey of our annual Kith
              newsletter
            </div>
            <button className="newsbox-tag">Annual Newsletter</button>
          </div>
        </div>
      </section>
      <section className="subs-newsletter">
        <ul>
          <li>Daily</li>
          <li>Weekly</li>
        </ul>
      </section>

      <section className="subs-newsletter">
        <ul>
          <li>Daily</li>
          <li>Weekly</li>
        </ul>
      </section>
      {selectedNewsletters.length > 0 && (
        <Popup
          className="newsletter-popup-container"
          modal
          trigger={
            <div className="email">
              <div className="counter">{selectedNewsletters.length}</div>
              <div>E-mail address</div>
            </div>
          }
        >
          {(close) => (
            // <div className="modal">
            //   <button className="btn-close" onClick={close}>
            //     <IoMdClose style={{ fontSize: "24px" }} />
            //   </button>
            //   <div className="n-header"> Email Address </div>
            //   <div className="n-content">
            //     <input
            //       type="text"
            //       className="n-input"
            //       placeholder="E-mail Address"
            //       value={email}
            //       onChange={onChangeEmail}
            //     />
            //     <button className="n-email-box" onClick={handleSubmit}>
            //       <span className="span-c">{counter}</span>
            //       <p>complete sign-up</p>
            //     </button>
            //     <p className="n-para">
            //       By signing up, you agree to our User Agreement and Privacy
            //       Policy & Cookie Statement. This site is protected by reCAPTCHA
            //       and the Google Privacy Policy and Terms of Service apply.
            //     </p>
            //   </div>
            // </div>
            <iframe
              src="https://swathipyla.substack.com/embed"
              width="480"
              height="320"
              style={{ border: "1px solid #EEE", background: "white" }}
              sandbox="allow-scripts allow-same-origin"
              // scrolling="no"
            />
          )}
        </Popup>
      )}
      <Footer />
    </div>
  );
};
// }

export default Newslettert;

// import React, { useState } from "react";
// import "./Newsletter.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Navbar from "../../Navbar/Navbar";
// import Footer from "../../Footer/Footer";
// import Popup from "reactjs-popup";
// import axios from "axios";
// import { IoMdClose } from "react-icons/io";

// import {
//   faNewspaper,
//   faCalendarDays,
//   faComputer,
//   faMicroscope,
// } from "@fortawesome/free-solid-svg-icons";

// const Newslettert = () => {
//   const [email, setEmail] = useState("");
//   const [selectedNewsletters, setSelectedNewsletters] = useState([]);

//   const handleCheckboxChange = (event) => {
//     const { value, checked } = event.target;
//     if (checked) {
//       setSelectedNewsletters([...selectedNewsletters, value]);
//     } else {
//       setSelectedNewsletters(
//         selectedNewsletters.filter((item) => item !== value)
//       );
//     }
//   };

//   const onChangeEmail = (event) => {
//     setEmail(event.target.value);
//   };

//   // const handleSubmit = async (event) => {
//   //   event.preventDefault();
//   //   try {
//   //     const formData = {
//   //       email: email,
//   //       newsletters: selectedNewsletters.join(", "),
//   //     };
//   //     const response = await axios.post(
//   //       "http://localhost:8000/api/newsletter_subscribe/",
//   //       formData,
//   //       {
//   //         headers: {
//   //           "Content-Type": "application/json", // Make sure to set content type
//   //         },
//   //       }
//   //     );

//   //     alert("Form Data:", formData);
//   //     if (response.status === 201) {
//   //       alert("Subscription successful!");
//   //       setEmail("");
//   //       setSelectedNewsletters([]);
//   //     }
//   //   } catch (error) {
//   //     alert(
//   //       `Subscription successful!\n\nEmail: ${email}\nSelected Newsletters: ${selectedNewsletters.join(", ")}`
//   //     );
//   //     console.error("Error:", error);
//   //   }
//   // };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const formData = {
//         email: email,
//         newsletters: selectedNewsletters,
//       };

//       const response = await axios.post(
//         "http://localhost:8000/api/newsletter_subscribe/",
//         formData,
//         {
//           headers: {
//             "Content-Type": "application/json", // Make sure to set content type
//           },
//         }
//       );

//       // Convert formData to string for displaying in the alert
//       const formDataString = JSON.stringify(formData, null, 2);

//       alert("Form Data:\n" + formDataString);

//       if (response.status === 201) {
//         alert("Subscription successful!");
//         setEmail("");
//         setSelectedNewsletters([]);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div className="newsletter">
//       <Navbar />
//       <div className="newsletter-top-section">
//         <h1 className="newsletter-heading">
//           Stay Informed, Stay Inspired: Join Lokarpan's Newsletter Community
//           Today.
//         </h1>
//         <h2 className="newsletter-heading2">
//           Select the newsletters you’d like to receive. Then, add your e-mail
//           to sign up.
//         </h2>
//       </div>
//       <form onSubmit={handleSubmit}>
//         <section className="newsletter-letters">
//           <h3 className="news-head3">Newsletters</h3>
//           <div className="newletter-inner-section">
//             <div className="daily">
//               <div className="daily-icon">
//                 <FontAwesomeIcon
//                   icon={faNewspaper}
//                   className="daily-icon1"
//                 />
//                 <div
//                   className={`newsletter-icon-container ${
//                     selectedNewsletters.includes("Daily") ? "selected" : ""
//                   }`}
//                 >
//                   <input
//                     type="checkbox"
//                     id="newsletter-checkbox-daily"
//                     value="Daily"
//                     checked={selectedNewsletters.includes("Daily")}
//                     onChange={handleCheckboxChange}
//                   />
//                   <label
//                     htmlFor="newsletter-checkbox-daily"
//                     className="ihmHAQ"
//                   ></label>
//                 </div>
//               </div>
//               <div className="newsbox-heading">Lokarpan</div>
//               <div className="newsbox-content">
//                 Our flagship newsletter highlights the latest developments and
//                 insights from our kith programme, our research and learning
//                 initiatives and podcasts
//               </div>
//               <button className="newsbox-tag">Lokarpan</button>
//             </div>

//             {/* Add more newsletter sections as needed */}
//           </div>
//         </section>

//         <section className="newsletter-letters-1">
//           <div className="kith">Kith</div>
//           <div className="newsletter-letters-1-newsboxs">
//             <div className="daily">
//               <div className="daily-icon">
//                 <FontAwesomeIcon icon={faComputer} className="ic1" />
//                 <div
//                   className={`newsletter-icon-container ${
//                     selectedNewsletters.includes("NewYorker") ? "selected" : ""
//                   }`}
//                 >
//                   <input
//                     type="checkbox"
//                     id="newsletter-checkbox-newyorker"
//                     value="NewYorker"
//                     checked={selectedNewsletters.includes("NewYorker")}
//                     onChange={handleCheckboxChange}
//                   />
//                   <label
//                     htmlFor="newsletter-checkbox-newyorker"
//                     className="ihmHAQ"
//                   ></label>
//                 </div>
//               </div>
//               <div className="newsbox-heading">Quarterly newsletter</div>
//               <div className="newsbox-content">
//                 Latest updates, success stories, and impactful initiatives aimed
//                 at transforming education in rural communities.
//               </div>
//               <button className="newsbox-tag">Quarterly Newsletter</button>
//             </div>

//             {/* Add more newsletter sections as needed */}
//           </div>
//         </section>

//         <section className="email-section">
//           <input
//             type="text"
//             placeholder="Enter your email"
//             value={email}
//             onChange={onChangeEmail}
//           />
//         </section>

//         <section className="subs-newsletter">
//           <button type="submit" className="subscribe-button">
//             Subscribe
//           </button>
//         </section>
//       </form>

//       {selectedNewsletters.length > 0 && (
//         <Popup
//           className="newsletter-popup-container"
//           modal
//           trigger={
//             <div className="email">
//               <div className="counter">{selectedNewsletters.length}</div>
//               <div>E-mail address</div>
//             </div>
//           }
//         >
//           {(close) => (
//             <div className="modal">
//               <button className="btn-close" onClick={close}>
//                 <IoMdClose style={{ fontSize: "24px" }} />
//               </button>
//               <div className="n-header"> Email Address </div>
//               <div className="n-content">
//                 <input
//                   type="text"
//                   className="n-input"
//                   placeholder="E-mail Address"
//                   value={email}
//                   onChange={onChangeEmail}
//                 />
//                 <button className="n-email-box" onClick={handleSubmit}>
//                   <span className="span-c">{selectedNewsletters.length}</span>
//                   <p>complete sign-up</p>
//                 </button>
//                 <p className="n-para">
//                   By signing up, you agree to our User Agreement and Privacy
//                   Policy & Cookie Statement. This site is protected by
//                   reCAPTCHA and the Google Privacy Policy and Terms of Service
//                   apply.
//                 </p>
//               </div>
//             </div>
//           )}
//         </Popup>
//       )}
//       <Footer />
//     </div>
//   );
// };

// export default Newslettert;
