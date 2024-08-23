import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import KithNavbar from "../Navbar/KithNavbar/index";
import KithAdmissionSubNavbar from "../Navbar/KithAdmissionSubNavbar";
import KithFooter from "../KithFooter";

const KithFinancials = () => {
const schoolFee = {
  kg: 7200,
  nursery: 7200,
  first: 7800,
  second: 7800,
  third: 7800,
  fourth: 7800,
  fifth: 9000,
  sixth: 10200,
  seventh: 16800,
  eighth: 18000,
  ninth: 19200,
  tenth: 19200,
};

const stationaryFee = 1000;

const mealFee = 1000;

const villageFees = {
  Aneson: 7150,
  Badanpur: 13640,
  Baderahar: 7150,
  Balidadpur: 6050,
  Bandariyapur: 7150,
  Bandhmau: 11330,
  Barauli: 6050,
  Barhadevi: 6050,
  Barkasi: 6050,
  BarruCulasar: 7150,
  Bela: 6050,
  BelaBasti: 6050,
  BelaBastiAC: 7150,
  BelaAC: 7150,
  Bhadoura: 9900,
  Bhawanipur: 6050,
  Bhawaniyapur: 7150,
  BheekhaPurwa: 13640,
  Bholapur: 8470,
  Bholpurwa: 0,
  Biharipur: 6050,
  Bunchpur: 7975,
  ChatruaPur: 15950,
  Chirauli: 6050,
  Dabhari: 9900,
  Damarpur: 10560,
  Daulatpur: 4950,
  Dharampur: 6050,
  DharampurGyani: 7150,
  Dhipara: 8470,
  FakeerePurwa: 6050,
  Fariha: 0,
  Fatehpur: 6050,
  GadarianPurwa: 9900,
  Ganjwa: 3300,
  Gonda: 10560,
  Hardu: 7150,
  HirdayPurwa: 6050,
  Jalalpur: 6050,
  Jaohar: 7150,
  JeetaPurwa: 0,
  Jhabra: 9900,
  Jindpur: 0,
  Kakrahiya: 6050,
  Kandhiya: 6050,
  Karauli: 0,
  Khanpur: 13640,
  Korahi: 8470,
  Kuwarpur: 14300,
  Lakshirampurwa: 11330,
  Lidhoura: 7150,
  Lunjipur: 6050,
  Madhavnagar: 7150,
  Mahu: 9900,
  Malhausi: 2200,
  MalhausiAC: 2200,
  Manuapurwa: 12650,
  Maujampur: 8250,
  Nandpur: 7150,
  Nausara: 6050,
  Nawada: 6050,
  NayaPurva: 6820,
  Neemhar: 4950,
  NiwadaSindha: 7425,
  Niwajpur: 6050,
  Nunari: 7150,
  Oroun: 13640,
  PalNagar: 12210,
  Panikpurwa: 0,
  Patna: 7150,
  Patti: 13640,
  PiprauliShiv: 6050,
  Prithvipur: 6710,
  PurwaBhagga: 11880,
  PurwaBhavan: 0,
  PurwaGanna: 6820,
  PurwaRanna: 7150,
  PurwaRawat: 0,
  RajjaPurwa: 6050,
  Rakhbariya: 7425,
  Rampura: 0,
  Rehmatpur: 0,
  Sahar: 9900,
  ShahNagar: 13640,
  Shivpuri: 7150,
  Shivra: 9900,
  Shreyawa: 11330,
  SimraPurwa: 11660,
  Sujanpurwa: 7150,
  Tidua: 6050,
  Tiknapur: 7425,
  Umarda: 9900,
  Yakoobpur: 6050,
};

const scholarshipRed = {
  "Common Aptitude Analysis1": 1000,
  "Common Aptitude Analysis2": 500,
  "Common Aptitude Analysis3": 250,
};

const classMapping = {
  Nursery: "nursery",
  KG: "kg",
  1: "first",
  2: "second",
  3: "third",
  4: "fourth",
  5: "fifth",
  6: "sixth",
  7: "seventh",
  8: "eighth",
  9: "ninth",
  10: "tenth",
};

  const [isNewToInstitute, setIsNewToInstitute] = useState(true);
  const [isLocal, setIsLocal] = useState(true);
  const [selectedClass, setSelectedClass] = useState("Nursery");
  const [busFacility, setBusFacility] = useState(false);
  const [stationary, setStationary] = useState(true);
  const [selectedVillage, setSelectedVillage] = useState("Aneson");
  const [mealPlan, setMealPlan] = useState(true);
  const [scholarShip, setScholarShip] = useState(false);
  const [scholarShipName, setScholarShipName] = useState("");
  const [scholarshipDeduction, setScholarShipDeduction] = useState("");
  const [costs, setCosts] = useState({
    admissionCost: 1000,
    tuitionCost: 7200,
    examCost: 600,
    busFee: 0,
    stationaryCost: 1000,
    mealCost: 1000,
    totalCostwithoutscholar: 9800,
    totalCost: 9800,
  });



  useEffect(() => {
    calculateFee();
  }, [
    isNewToInstitute,
    selectedClass,
    busFacility,
    selectedVillage,
    stationary,
    mealPlan,
    scholarShip,
    scholarShipName,
    scholarshipDeduction,
  ]);


  const calculateFee = () => {
    const admissionCost = isNewToInstitute ? 1000 : 200;
    const selectedClassKey = classMapping[selectedClass];
    const tuitionCost = schoolFee[selectedClassKey];
    const examCost = 600;
    const busFee = busFacility ? villageFees[selectedVillage] : 0;
    const stationaryCost = stationary ? stationaryFee : 0;
    const mealCost = mealPlan ? mealFee : 0;


    let totalCostwithoutscholar =
    admissionCost +
    tuitionCost +
    examCost +
    busFee +
    stationaryCost +
    mealCost;


    let totalCost =
      admissionCost +
      tuitionCost +
      examCost +
      busFee +
      stationaryCost +
      mealCost;

    if (scholarShip) {
      totalCost -= scholarshipRed[scholarShipName] || 0;
    }

    setCosts({
      admissionCost,
      tuitionCost,
      examCost,
      busFee,
      stationaryCost,
      mealCost,
      totalCostwithoutscholar,
      totalCost,
    });
  };


  const handleNewToInstituteToggle = (value) => {
    setIsNewToInstitute(value)
  };

  const handleLocalToggle = (value) => {
    setIsLocal(value)
  };

  const handlescholarChange = (value) => {
    setScholarShip(value)
  };

  const handleClassChange = (event) => {
    setSelectedClass(event.target.value)
  };

  const handleBusChange = (value) => {
    setBusFacility(value)
  };

  const handleStationoryChange = (value) => {
    setStationary(value)
  };

  const handleMealPlanChange = (value) => {
    setMealPlan(value)
  };

  const handleVillageChange = (event) => { 
    setSelectedVillage(event.target.value)
  };


  const handlescholarShipChange = (event) => {
    const selectedScholarship = event.target.value;
    const scholarshipDeduction = scholarshipRed[selectedScholarship] || 0;
  
    setScholarShipName(selectedScholarship);
    setScholarShipDeduction(scholarshipDeduction);
  };


    return (
      <>
        <KithNavbar />
        <KithAdmissionSubNavbar />
        <div className="kith-financials-container">


          <div className="kith-overview-div kith-overview-second-div">
        <h1 className="kith-life-head">Cost of attendance</h1>
        <p className="kith-life-para">
        The standard cost of attendance tool below gives you the average
              amount students can expect to pay for tuition and fees, housing
              and food, books, course materials, supplies, and equipment,
              transportation, and personal expenses. These are averages and vary
              depending on factors like personal expenses, but they can help you
              estimate your costs for the year.
        </p>
      </div>
          <div style={{height: "60px"}}></div>
          <h1 className="kith-est-head">Tuition Estimator</h1>
    
          <div className="kith-estimator-container">
            <div className="kith-est-left-cont">


              
<div>
            <label className="kith-est-label">Are you new to this institute?</label>
           <div className="kith-est-label-sec">
           <div 
                className={`kith-est-left-each-cont switch-box ${isNewToInstitute === true ? 'active' : ''}`} 
                onClick={() => handleNewToInstituteToggle(true)}
            >
              <label className="kith-est-label">Yes</label>
            </div>
            <div 
                className={`kith-est-left-each-cont switch-box ${isNewToInstitute === false ? 'active' : ''}`} 
                onClick={() => handleNewToInstituteToggle(false)}
            >
              <label className="kith-est-label">No</label>
            </div> 
           </div>
            
        </div>


              <div className="kith-est-left-multi-cont">
                <label className="kith-est-label">Class</label>
                <select value={selectedClass} onChange={handleClassChange} className="kith-select-list">
                  <option>Nursery</option>
                  <option>KG</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </select>
              </div>
          

              <div>
            <label className="kith-est-label">Are you local?</label>
           <div className="kith-est-label-sec">
           <div 
                className={`kith-est-left-each-cont switch-box ${isLocal === true ? 'active' : ''}`} 
                onClick={() => handleLocalToggle(true)}
            >
              <label className="kith-est-label">Yes</label>
            </div>
            <div 
                className={`kith-est-left-each-cont switch-box ${isLocal === false ? 'active' : ''}`} 
                onClick={() => handleLocalToggle(false)}
            >
              <label className="kith-est-label">No</label>
            </div>
           </div>
              
        </div>
              <div className="kith-est-left-multi-cont">
                <label className={`kith-est-label ${isLocal ? 'disabledColor' : ''}`}>Village</label>
                <select value={selectedVillage} onChange={handleVillageChange} className={`kith-select-list ${isLocal ? 'disabledColor' : ''}`} disabled={isLocal}>
                  {Object.keys(villageFees).map((village) => (
                    <option key={village} value={village}>
                      {village}
                    </option>
                  ))}
                </select>
              </div>

<div>
            <label className="kith-est-label">Do you want to avail bus facilities?</label>
           <div className="kith-est-label-sec">
           <div 
                className={`kith-est-left-each-cont switch-box ${busFacility === true ? 'active' : ''}`} 
                onClick={() => handleBusChange(true)}
            >
              <label className="kith-est-label">Yes</label>
            </div>
            <div 
                className={`kith-est-left-each-cont switch-box ${busFacility === false ? 'active' : ''}`} 
                onClick={() => handleBusChange(false)}
            >
              <label className="kith-est-label">No</label>
            </div>
           </div>
             
        </div>
              
<div>
            <label className="kith-est-label">Do you want to avail stationary?</label>
           <div className="kith-est-label-sec">
           <div 
                className={`kith-est-left-each-cont switch-box ${stationary === true ? 'active' : ''}`} 
                onClick={() => handleStationoryChange(true)}
            >
              <label className="kith-est-label">Yes</label>
            </div>
            <div 
                className={`kith-est-left-each-cont switch-box ${stationary === false ? 'active' : ''}`} 
                onClick={() => handleStationoryChange(false)}
            >
              <label className="kith-est-label">No</label>
            </div> 
            </div> 
 
        </div>

                            
<div>
            <label className="kith-est-label">Do you want to avail meal plan?</label>
           <div className="kith-est-label-sec">
           <div 
                className={`kith-est-left-each-cont switch-box ${mealPlan === true ? 'active' : ''}`} 
                onClick={() => handleMealPlanChange(true)}
            >
              <label className="kith-est-label">Yes</label>
            </div>
            <div 
                className={`kith-est-left-each-cont switch-box ${mealPlan === false ? 'active' : ''}`} 
                onClick={() => handleMealPlanChange(false)}
            >
              <label className="kith-est-label">No</label>
            </div> 
           </div>
            
        </div>

                            
<div>
            <label className="kith-est-label">Do you have any Scholarship?</label>
           <div className="kith-est-label-sec">
           <div 
                className={`kith-est-left-each-cont switch-box ${scholarShip === true ? 'active' : ''}`} 
                onClick={() => handlescholarChange(true)}
            >
              <label className="kith-est-label">Yes</label>
            </div>
            <div 
                className={`kith-est-left-each-cont switch-box ${scholarShip === false ? 'active' : ''}`} 
                onClick={() => handlescholarChange(false)}
            >
              <label className="kith-est-label">No</label>
            </div>
           </div>
              
        </div>


              {scholarShip && (
                <div className="kith-est-left-multi-cont">
                  <label className="kith-est-label">Scholarship</label>
                  <select value={scholarShipName} onChange={handlescholarShipChange} className="kith-select-list">
                    {Object.keys(scholarshipRed).map((scholarship) => (
                      <option key={scholarship} value={scholarship}>
                        {scholarship}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              <button onClick={calculateFee} className="financials-calc-btn">Calculate the Fee</button>
            </div>
            <div className="kith-est-right-cont">
              <h1 style={{textAlign: "center"}}>Your calculated fee</h1>
              <div className="kith-est-left-each-cont">
                <label>Admission Fee: </label>
                <p>{costs.admissionCost}</p>
              </div>
              <div className="kith-est-left-each-cont">
                <label>Exam Fee : </label>
                <p>{costs.examCost}</p>
              </div>
              <div className="kith-est-left-each-cont">
                <label>Tuition : </label>
                <p>{costs.tuitionCost}</p>
              </div>
              <div className="kith-est-left-each-cont">
                <label>Bus Fee : </label>
                <p>{costs.busFee}</p>
              </div>
              <div className="kith-est-left-each-cont">
                <label>Stationary Fee : </label>
                <p>{costs.stationaryCost}</p>
              </div>
              <div className="kith-est-left-each-cont">
                <label>Meal Fee : </label>
                <p>{costs.mealCost}</p>
              </div>

              <div className="kith-est-left-each-cont" style={{fontSize:"22px", fontWeight:"500"}}>
                <label>Estimated total Fee : </label>
                <p>{costs.totalCostwithoutscholar}</p>
              </div>
              <hr/>
              {scholarShip && (
                  <div className="kith-est-left-each-cont">
                    <label>Scholarship Deduction : </label>
                    <p>-{scholarshipDeduction}</p>
                  </div>
              )}
              <div className="kith-est-left-each-cont" style={{fontSize:"24px", fontWeight:"600"}}>
                <label>Estimated final Fee : </label>
                <p>{costs.totalCost}</p>
              </div>
            </div>
          </div> 

          <div style={{paddingTop: "20px"}} className="kith-overview-div kith-overview-second-div">
        <h1 className="kith-life-head" style={{fontSize: "40px !important"}}>Disclaimer</h1>
        <p className="kith-life-para">
        This is not a bill. This is only an estimate. All amounts shown
              here or in other publications or webpages represent tuition and
              fees as currently approved. However, the Kith n Kin School
              reserves right to increase or modify tuition and fees without
              prior notice, upon approval by management or as otherwise
              consistent with Board policy, and to make such modifications
              applicable to students enrolled at Kith at that time as well as to
              incoming students. In addition, all tuition amounts and fees are
              subject to change at any time for correction of errors. Finally,
              please note that fee amounts billed for any period may be adjusted
              at a future date.
        </p>
        <p className="kith-life-para">
              <b>Note:</b> Tuition values are based on full-time enrollment for
              the 2024-2025 academic year.
            </p>
      </div>

          <div className="kith-financials-each-sub-container">
            <h1 className="kith-financials-head">Scholarships and Bursaries</h1>
            <p className="kith-financials-para">
              The School believes that investment in education is of the utmost
              importance. The School strives to recognise outstanding, talented
              and ambitious students. Hence, regardless of your financial
              circumstances, if you have the drive to study and excel, you are
              welcome to apply.
            </p>
            <p className="kith-financials-para">
              The School welcomes those students who will not only reap benefits
              from attending the school, but will also learn to be a leader and
              make a difference in society and in life at large.
            </p>
            <p className="kith-financials-para">
              There is an annual allocation of scholarships for this purpose.
              The School offers three kinds of scholarships to enable and
              encourage meritorious students.
            </p>
            <div className="k-f-sub-each-cat">
              <h2 className="kith-financials-head2">CATEGORY – A</h2>
              <p className="kith-financials-para">
                Merit-cum-Means Scholarship for new admissions in a given
                academic year based on grades achieved in the Aptitude
                Assessment and need for financial assistance. The Scholarships
                offered to the students at the time of admission on a merit cum
                means basis are as per the following criteria:
              </p>
              <ul>
                <li>Student must enroll for the assessment.</li>
                <li>
                  Clearing the entrance assessment with 80% or higher accuracy
                </li>
              </ul>
            </div>
            <div className="k-f-sub-each-cat">
              <h2 className="kith-financials-head2">CATEGORY – B</h2>
              <p className="kith-financials-para">
                Merit-cum-Means Scholarship for existing students in a given
                academic year based on student’s performance scores in
                Academics, Sports and Co-curricular activities and need for
                financial assistance.
              </p>
              <ul>
                <li>Top 10% rankholder in their batch</li>
                <li>Minimum GPA of 3.5</li>
                <li>
                  Student belongs to a minority community or the EWS
                  category(Economically weaker section)
                </li>
              </ul>
            </div>
            <div className="k-f-sub-each-cat">
              <h2 className="kith-financials-head2">CATEGORY – C</h2>
              <p className="kith-financials-para">
                Purely Merit Based Scholarship for new admissions in a given
                academic year to recognise the meritorious students for their
                excellent performance irrespective of their financial needs.
              </p>
              <ul>
                <li>Top 5% rankholder in their batch</li>
                <li>Minimum GPA of 3.5</li>
              </ul>
            </div>
          </div>
          <p className="kith-financials-para">
            All rights to scholarships are reserved with the School Management.
          </p>
          <p className="kith-financials-para">
            The scholarship categories include full or partial fee waiver for
            the full-time course, an arrival allowance, and allowance for school
            stationary.
          </p>
        </div>
        <KithFooter />
      </>
    );
  // }
};

export default KithFinancials;
