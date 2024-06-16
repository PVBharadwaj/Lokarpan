import { Component } from "react";

import { IoMdClose, IoMdExpand } from "react-icons/io";
import Popup from "reactjs-popup";

import KithNavbar from "../../../Navbar/KithNavbar/index";
import KithInfoSubNavbar from "../../../Navbar/KithInfoSubNavbar";
import KithFooter from "../../../KithFooter/index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./careerk.css";

class OurRole extends Component {
  constructor(props) {
    super(props);
    this.updatePopUpOpen = this.updatePopUpOpen.bind(this);
  }
  state = { active: "administration", showContainer: true, isPopUpOpen: false };

  onChangeActive = (ele) => {
    this.setState({ active: ele, showContainer: true });
  };

  scrollBar = () => {
    const { isPopUpOpen } = this.state;
    if (isPopUpOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  updatePopUpOpen = () => {
    console.log("Entered");
    this.setState(
      (prevState) => ({
        isPopUpOpen: !prevState.isPopUpOpen,
      }),
      () => this.scrollBar()
    );
  };

  onKeyDown = (event, close) => {
    if (event.key === "Escape") {
      close();
    }
  };

  render() {
    const { active, showContainer, isPopUpOpen } = this.state;

    const containerClass = `our-role-each-container ${
      showContainer ? "show" : ""
    }`;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      arrows: false,
      centerMode: true,
    };

    return (
      <>
        <KithNavbar />
        <KithInfoSubNavbar />
       
        <div className="career-container">
          <div className="career-top-section">
            <h1>
            We are thrilled to extend a warm welcome to you as part of the Lokarpan family.
            </h1>
          </div>
          <div className="menu-items2">
            <div className="items2">
              <div
                className={
                  active === "administration" ? "element2 btn2-active" : "element2"
                }
                onClick={() => this.onChangeActive("administration")}
              >
                Administration
              </div>
              <div
                className={
                  active === "faculty" ? "element2 btn2-active" : "element2"
                }
                onClick={() => this.onChangeActive("faculty")}
              >
                Faculty 
              </div>
              <div
                className={
                  active === "fellowship" ? "element2 btn2-active" : "element2"
                }
                onClick={() => this.onChangeActive("fellowship")}
              >
                Fellowship
              </div>

            </div>
          </div>
          {active === "administration" && (
            <>
            <div className="kith-career-cont">
                <div className="k-job-head">Search Jobs</div>
                <div className="k-job-subhead">Looking for a job at Harvard? Whether you’re a current employee or interested in a position at Harvard, everything you need to start your job search is on Harvard Careers, our job application portal. 
                    You can access Harvard Careers on your desktop, laptop or mobile device, where you’ll be able to:
                    </div>
                    
                      <ul className="job-k-unlist">
                      <li className="job-k-list">View all job opportunities,</li>
                      <li className="job-k-list">Search on specific criteria to find jobs that interest you,</li>
                      <li className="job-k-list">Set up a search agent that will notify you when positions are posted that match your qualifications,</li>
                      <li className="job-k-list">Create a personal profile to gain visibility with Human Resources professionals and recruiters across every School, Unit and Department at Harvard, 
                      without having to apply for a specific job.</li>
                      </ul>
                         
                        
                    
                    <div className="k-job-section">
                        <h1 className="k-job-h1">Administrative/Staff Jobs - External Candidates</h1>
                        <p className="k-job-p">If you are an external candidate, click here or on the "Administrative/Staff Jobs - External Candidates" button above to see our job listings.</p>
                    </div>
                    <div className="k-job-section">
                        <h1 className="k-job-h1">Administrative/Staff Jobs - Internal Candidates</h1>
                        <p className="k-job-p">If you are an external candidate, click here or on the "Administrative/Staff Jobs - External Candidates" button above to see our job listings.</p>
                    </div>
                    <div className="k-job-section">
                        <h1 className="k-job-h1">Faculty and Other Academic Positions</h1>
                        <p className="k-job-p">Hiring for faculty positions, post-doctoral fellowships, and other academic appointments at Harvard is typically conducted by academic deans and department chairs, and administered by offices for academic or faculty affairs at each school. Faculty and academic positions are posted at academicpositions.harvard.edu, 
                            or you can click the "Faculty and Other Academic Positions" button above to access the related job listings.</p>   </div>
                           
                           
                            <div className="k-job-footer">
                            <div className="k-joinus">Join Us</div>
                <div className="k-acc">Accelerate the world's transition to sustainable energy</div>
                <div className="k-job-btn"><button>View Job</button></div>
                <div className="k-job-btn"><button>View Internship</button></div>
                </div>
                
                </div>
            
            </>
          )}
          {active === "faculty" && (
          
          <>
            <div className="kith-career-cont">
                <div className="k-job-head">Faculty</div>
                <div className="k-job-subhead">Looking for a job at Harvard? Whether you’re a current employee or interested in a position at Harvard, everything you need to start your job search is on Harvard Careers, our job application portal. 
                    You can access Harvard Careers on your desktop, laptop or mobile device, where you’ll be able to:
                    </div>
                    
                      <ul className="job-k-unlist">
                      <li className="job-k-list">View all job opportunities,</li>
                      <li className="job-k-list">Search on specific criteria to find jobs that interest you,</li>
                      <li className="job-k-list">Set up a search agent that will notify you when positions are posted that match your qualifications,</li>
                      <li className="job-k-list">Create a personal profile to gain visibility with Human Resources professionals and recruiters across every School, Unit and Department at Harvard, 
                      without having to apply for a specific job.</li>
                      </ul>
                         
                        
                    
                    <div className="k-job-section">
                        <h1 className="k-job-h1">Administrative/Staff Jobs - External Candidates</h1>
                        <p className="k-job-p">If you are an external candidate, click here or on the "Administrative/Staff Jobs - External Candidates" button above to see our job listings.</p>
                    </div>
                    <div className="k-job-section">
                        <h1 className="k-job-h1">Administrative/Staff Jobs - Internal Candidates</h1>
                        <p className="k-job-p">If you are an external candidate, click here or on the "Administrative/Staff Jobs - External Candidates" button above to see our job listings.</p>
                    </div>
                    <div className="k-job-section">
                        <h1 className="k-job-h1">Faculty and Other Academic Positions</h1>
                        <p className="k-job-p">Hiring for faculty positions, post-doctoral fellowships, and other academic appointments at Harvard is typically conducted by academic deans and department chairs, and administered by offices for academic or faculty affairs at each school. Faculty and academic positions are posted at academicpositions.harvard.edu, 
                            or you can click the "Faculty and Other Academic Positions" button above to access the related job listings.</p>   </div>
                           
                           
                            <div className="k-job-footer">
                            <div className="k-joinus">Join Us</div>
                <div className="k-acc">Accelerate the world's transition to sustainable energy</div>
                <div className="k-job-btn"><button>View Job</button></div>
                <div className="k-job-btn"><button>View Internship</button></div>
                </div>
                
                </div>
            
            </>
          )}
          {active === "fellowship" && (
            <>
            <div className="kith-career-cont">
                <div className="k-job-head">Search Fellowships</div>
                <div className="k-job-subhead">Looking for a job at Harvard? Whether you’re a current employee or interested in a position at Harvard, everything you need to start your job search is on Harvard Careers, our job application portal. 
                    You can access Harvard Careers on your desktop, laptop or mobile device, where you’ll be able to:
                    </div>
                    
                      <ul className="job-k-unlist">
                      <li className="job-k-list">View all job opportunities,</li>
                      <li className="job-k-list">Search on specific criteria to find jobs that interest you,</li>
                      <li className="job-k-list">Set up a search agent that will notify you when positions are posted that match your qualifications,</li>
                      <li className="job-k-list">Create a personal profile to gain visibility with Human Resources professionals and recruiters across every School, Unit and Department at Harvard, 
                      without having to apply for a specific job.</li>
                      </ul>
                         
                        
                    
                    <div className="k-job-section">
                        <h1 className="k-job-h1">Administrative/Staff Jobs - External Candidates</h1>
                        <p className="k-job-p">If you are an external candidate, click here or on the "Administrative/Staff Jobs - External Candidates" button above to see our job listings.</p>
                    </div>
                    <div className="k-job-section">
                        <h1 className="k-job-h1">Administrative/Staff Jobs - Internal Candidates</h1>
                        <p className="k-job-p">If you are an external candidate, click here or on the "Administrative/Staff Jobs - External Candidates" button above to see our job listings.</p>
                    </div>
                    <div className="k-job-section">
                        <h1 className="k-job-h1">Faculty and Other Academic Positions</h1>
                        <p className="k-job-p">Hiring for faculty positions, post-doctoral fellowships, and other academic appointments at Harvard is typically conducted by academic deans and department chairs, and administered by offices for academic or faculty affairs at each school. Faculty and academic positions are posted at academicpositions.harvard.edu, 
                            or you can click the "Faculty and Other Academic Positions" button above to access the related job listings.</p>   </div>
                           
                           
                            <div className="k-job-footer">
                            <div className="k-joinus">Join Us</div>
                <div className="k-acc">Accelerate the world's transition to sustainable energy</div>
                <div className="k-job-btn"><button>View Job</button></div>
                <div className="k-job-btn"><button>View Internship</button></div>
                </div>
                
                </div>
            
            </>
          )}
         
         
        </div>
        <KithFooter />
      </>
    );
  }
}

export default OurRole;
