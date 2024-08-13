import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import KithNavbar from "../Navbar/KithNavbar/index";
import KithAdmissionSubNavbar from "../Navbar/KithAdmissionSubNavbar";
import KithFooter from "../KithFooter";

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

class KithFinancials extends Component {
  state = {
    isNewToInstitute: true,
    isLocal: true,
    selectedClass: "Nursery",
    busFacility: false,
    stationary: true,
    selectedVillage: "Aneson",
    admissionCost: 1000,
    tuitionCost: 7200,
    examCost: 600,
    busFee: 0,
    totalCost: 1000 + 7200 + 600 + 1000,
    stationaryCost: 1000,
    mealPlan: true,
    mealCost: 1000,
    scholorShip: false,
    scholorShipName: "",
    scholarshipDeduction: 1000,
  };

  handleNewToInstituteToggle = () => {
    this.setState(
      (prevState) => ({
        isNewToInstitute: !prevState.isNewToInstitute,
      }),
      this.calculateFee
    );
  };

  handleLocalToggle = () => {
    this.setState(
      (prevState) => ({
        isLocal: !prevState.isLocal,
      }),
      this.calculateFee
    );
  };

  handleScholorChange = () => {
    this.setState(
      (prevState) => ({ scholorShip: !prevState.scholorShip }),
      this.calculateFee
    );
  };

  handleClassChange = (event) => {
    this.setState({ selectedClass: event.target.value }, this.calculateFee);
  };

  handleBusChange = () => {
    this.setState(
      (prevState) => ({ busFacility: !prevState.busFacility }),
      this.calculateFee
    );
  };

  handleStationoryChange = () => {
    this.setState(
      (prevState) => ({ stationary: !prevState.stationary }),
      this.calculateFee
    );
  };

  handleMealPlanChange = () => {
    this.setState(
      (prevState) => ({ mealPlan: !prevState.mealPlan }),
      this.calculateFee
    );
  };

  handleVillageChange = (event) => {
    this.setState({ selectedVillage: event.target.value }, this.calculateFee);
  };

  handleScholorShipChange = (event) => {
    const selectedScholarship = event.target.value;
    const scholarshipDeduction = scholarshipRed[selectedScholarship] || 0;

    this.setState(
      {
        scholorShipName: selectedScholarship,
        scholarshipDeduction: scholarshipDeduction,
      },
      this.calculateFee
    ); // Ensure you call calculateCosts to update the total cost
  };

  calculateFee = () => {
    const {
      isNewToInstitute,
      busFacility,
      selectedClass,
      selectedVillage,
      stationary,
      mealPlan,
      scholorShip,
      scholorShipName,
    } = this.state;

    const admissionCost = isNewToInstitute ? 1000 : 200;
    const selectedClassKey = classMapping[selectedClass];
    const tuitionCost = schoolFee[selectedClassKey];
    const examCost = 600;
    const busFee = busFacility ? villageFees[selectedVillage] : 0;
    const stationaryCost = stationary ? stationaryFee : 0;
    const mealCost = mealPlan ? mealFee : 0;

    let totalCost =
      admissionCost +
      tuitionCost +
      examCost +
      busFee +
      stationaryCost +
      mealCost;

    if (scholorShip) {
      totalCost -= scholarshipRed[scholorShipName] || 0;
    }

    this.setState({
      admissionCost,
      tuitionCost,
      examCost,
      busFee,
      totalCost,
      stationaryCost,
      mealCost,
    });
  };

  render() {
    const {
      isNewToInstitute,
      isLocal,
      busFacility,
      stationary,
      selectedClass,
      selectedVillage,
      admissionCost,
      tuitionCost,
      examCost,
      busFee,
      totalCost,
      stationaryCost,
      mealPlan,
      mealCost,
      scholorShip,
      scholorShipName,
      scholarshipDeduction,
    } = this.state;

    return (
      <>
        <KithNavbar />
        <KithAdmissionSubNavbar />
        <div className="kith-financials-container">
          <div className="kith-cost-est-div">
            <h1 className="kith-cost-at-head">Cost of attendance</h1>
            <p className="kith-cost-at-para">
              The standard cost of attendance tool below gives you the average
              amount students can expect to pay for tuition and fees, housing
              and food, books, course materials, supplies, and equipment,
              transportation, and personal expenses. These are averages and vary
              depending on factors like personal expenses, but they can help you
              estimate your costs for the year.
            </p>
          </div>

          <h1 className="kith-est-head">Tuition Estimator</h1>
          <div className="kith-estimator-container">
            <div className="kith-est-left-cont">
              {/* <div className="kith-est-left-each-cont">
                <label className="kith-est-label">
                  Are you new to this institute?
                </label>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={isNewToInstitute}
                    onChange={this.handleNewToInstituteToggle}
                  />
                  <span className="slider round"></span>
                </label>
              </div> */}
              <div className="kith-est-left-each-cont-ch">
                <label className="kith-est-label">
                  Are you new to this institute?
                </label>
                <select
                  value={isNewToInstitute ? "Yes" : "No"}
                  onChange={this.handleNewToInstituteToggle}
                  className="kith-select-list"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="kith-est-left-each-cont-ch">
                <label className="kith-est-label">
                  Will you need transportation services?
                </label>
                <select
                  value={busFacility ? "Yes" : "No"}
                  onChange={this.handleBusChange}
                  className="kith-select-list"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              <div className="kith-est-left-multi-cont">
                <label
                  className={`kith-est-label ${
                    busFacility ? "" : "disabledColor"
                  }`}
                >
                  Village
                </label>
                <select
                  value={selectedVillage}
                  onChange={this.handleVillageChange}
                  className={`kith-select-list ${
                    busFacility ? "" : "disabledColor"
                  }`}
                  disabled={!busFacility}
                >
                  {Object.keys(villageFees).map((village) => (
                    <option key={village} value={village}>
                      {village}
                    </option>
                  ))}
                </select>
              </div>
              <div className="kith-est-left-each-cont-ch">
                <label className="kith-est-label">
                  Will you need stationery supplies?
                </label>
                <select
                  value={stationary ? "Yes" : "No"}
                  onChange={this.handleStationoryChange}
                  className="kith-select-list"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="kith-est-left-each-cont-ch">
                <label className="kith-est-label">
                  Will you need a meal plan?
                </label>
                <select
                  value={mealPlan ? "Yes" : "No"}
                  onChange={this.handleMealPlanChange}
                  className="kith-select-list"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="kith-est-left-each-cont-ch">
                <label className="kith-est-label">
                  Are you seeking a scholarship?
                </label>
                <select
                  value={scholorShip ? "Yes" : "No"}
                  onChange={this.handleScholorChange}
                  className="kith-select-list"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              {scholorShip && (
                <div className="kith-est-left-multi-cont">
                  <label className="kith-est-label">Scholarship</label>
                  <select
                    value={scholorShipName}
                    onChange={this.handleScholorShipChange}
                    className="kith-select-list"
                  >
                    {Object.keys(scholarshipRed).map((scholarship) => (
                      <option key={scholarship} value={scholarship}>
                        {scholarship}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              <div className="kith-est-left-multi-cont">
                <label className="kith-est-label">Class</label>
                <select
                  value={this.state.selectedClass}
                  onChange={this.handleClassChange}
                  className="kith-select-list"
                >
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

              {/* <button
                onClick={this.calculateFee}
                className="financials-calc-btn"
              >
                Calculate the Fee
              </button> */}
            </div>

            <div className="kith-est-right-cont">
              <div className="kith-est-left-each-cont">
                <label className="kith-est-label">Admission Fee: </label>
                <p className="kith-est-label">{admissionCost}</p>
              </div>
              <div className="kith-est-left-each-cont">
                <label className="kith-est-label">Exam Fee : </label>
                <p className="kith-est-label">{examCost}</p>
              </div>
              <div className="kith-est-left-each-cont">
                <label className="kith-est-label">Tuition : </label>
                <p className="kith-est-label">{tuitionCost}</p>
              </div>
              <div className="kith-est-left-each-cont">
                <label className="kith-est-label">Bus Fee : </label>
                <p className="kith-est-label">{busFee}</p>
              </div>
              <div className="kith-est-left-each-cont">
                <label className="kith-est-label">Stationary Fee : </label>
                <p className="kith-est-label">{stationaryCost}</p>
              </div>
              <div className="kith-est-left-each-cont">
                <label className="kith-est-label">Meal Fee : </label>
                <p className="kith-est-label">{mealCost}</p>
              </div>
              {scholorShip && (
                <div className="kith-est-left-each-cont">
                  <label className="kith-est-label">
                    Scholarship Deduction :{" "}
                  </label>
                  <p className="kith-est-label">-{scholarshipDeduction}</p>
                </div>
              )}
              <div className="kith-est-left-each-cont">
                <label className="kith-est-label total">Total Fee : </label>
                <p className="kith-est-label total">{totalCost}</p>
              </div>
            </div>
          </div>
          <div className="kith-cost-est-div">
            <h1 className="kith-cost-at-head">Disclaimer</h1>
            <p className="kith-cost-at-para">
              This is not a bill. This is only an estimate. All amounts shown
              here or in other publications or webpages represent tuition and
              fees as currently approved. However, the Kith n Kin School
              reserves the right to increase or modify tuition and fees without
              prior notice, upon approval by management or as otherwise
              consistent with Board policy, and to make such modifications
              applicable to students enrolled at Kith at that time as well as to
              incoming students. In addition, all tuition amounts and fees are
              subject to change at any time for correction of errors. Finally,
              please note that fee amounts billed for any period may be adjusted
              at a future date.
            </p>
            <p className="kith-cost-at-para">
              <b>Note:</b> Tuition values are based on full-time enrollment for
              the 2024-2025 academic year.
            </p>
          </div>
        </div>
        <KithFooter />
      </>
    );
  }
}

export default KithFinancials;
