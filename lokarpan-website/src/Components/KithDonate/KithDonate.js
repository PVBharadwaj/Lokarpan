import React, { useState, useEffect } from "react";
import "./KithDonate.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/KithNavbar";
import Footer from "../KithFooter";
const KithDonate = () => {
  const [donationFrequency, setDonationFrequency] = useState("---");
  const [donationAmount, setDonationAmount] = useState("---");
  const [donationArea, setDonationArea] = useState("---");
  const [processingFee, setProcessingFee] = useState("---");
  const [dropdownState, setDropdown] = useState(false);
  const [pan, setPAN] = useState('');
  const [error, setError] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [selectedAmount, setSelectedAmount] = useState(null);

  // For PAN validation
  const validatePAN = () => {
      if (pan === '') {
        setError('');
        return;
      }
      const alphanumericRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
      if (!alphanumericRegex.test(pan)) {
          setError("Please enter valid PAN number.");
      } else {
          setError('');
      }
  };

  // For country dropdown list
  useEffect(() => {
    const selectCountry = document.getElementById('form-donate-country');
    const countries = [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
        "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
        "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica",
        "Croatia", "Cuba", "Cyprus", "Czech Republic", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica",
        "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini",
        "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala",
        "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland",
        "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
        "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi",
        "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova",
        "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands",
        "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau",
        "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania",
        "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino",
        "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia",
        "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan",
        "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago",
        "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom",
        "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
    ];

    countries.forEach(country => {
        const option = document.createElement('option');
        option.text = country;
        option.value = country;
        selectCountry.add(option);
    });
  }, []);

  const handleFrequencyChange = (event) => {
    setDonationFrequency(event.target.value);
  };

  const handleAmountChange = (event) => {
    const check = document.getElementById("form-3-percent");
    if (check.checked) {
      check.checked = false;
    }
    const newAmount = event.target.value;
    setDonationAmount(newAmount);
    setProcessingFee(0);
    setSelectedAmount(event.target.value);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (event) => {
    const check = document.getElementById("form-3-percent");
    if (check.checked) {
      check.checked = false;
    }
    const newAmount = event.target.value;
    setDonationAmount(newAmount);
    setProcessingFee(0);
    setSelectedAmount(null);
    setCustomAmount(event.target.value);
  };

  const handleAreaChange = (event) => {
    setDonationArea(event.target.value);
  };

  const handleDropdownOn = () => {
    setDropdown(true);
  };

  const handleDropdownOff = () => {
    setDropdown(false);
  };

  const handleProcessingFee = (event) => {
    if (event.target.checked) {
      const temp = (3 * parseFloat(donationAmount)) / 100;
      setProcessingFee(temp);
    } else {
      setProcessingFee(0);
    }
  };

  const donamt = { donationAmount };
  const profee = { processingFee };
  const donateAmount = parseFloat(donamt.donationAmount);
  const processFee = parseFloat(profee.processingFee);

  const totalAmount = isNaN(donateAmount + processFee) ? 0  : donateAmount + processFee;

  return (
    <>
    <Navbar />
      <div className="donate-head kith-donate">
          <h1>
            Through the Stronger Together campaign, our goal is to bridge the
            learning loss and strengthen our core program in Akanksha schools
            and communities.
          </h1>
          <div className="citizen-dropdown">
            <div className="citizen-dropdown-inner">
              <input
                type="checkbox"
                id="donate-hyperlink"
                name="donate-hyperlink"
                className="input"
              />
              <label htmlFor="donate-hyperlink" className="drop-content">
                Non-Indian Citizens
              </label>
              <div className="ans-sec donate-ans-sec">
                <p className="answer">test text</p>
                <p className="answer">test text</p>
              </div>
            </div>
          </div>
        </div>
      <div className="donate-page">
        <div className="donate-form">
          <form action="" method="get">
            <div className="donate-form-inner">
              <div id="donate-section-1" className="donate-part">
                <div className="page-marker">01/06</div>
                <fieldset>
                  <legend className="donate-form-sec-title">
                    How frequently would you like to give?
                  </legend>
                  <div role="radiogroup" className="grid">
                    <input
                      type="radio"
                      name="form-donate-frequency"
                      id="form-donate-frequency-once"
                      className="radio-hidden"
                      value={"Once"}
                      onClick={handleFrequencyChange}
                    />
                    <label
                      className="radio-label frequency"
                      htmlFor="form-donate-frequency-once"
                    >
                      Once
                    </label>
                    <input
                      type="radio"
                      name="form-donate-frequency"
                      id="form-donate-frequency-monthly"
                      className="radio-hidden"
                      value={"Monthly"}
                      onClick={handleFrequencyChange}
                    />
                    <label
                      className="radio-label  frequency"
                      htmlFor="form-donate-frequency-monthly"
                    >
                      Monthly
                    </label>
                  </div>
                </fieldset>
              </div>
              <div id="donate-section-2" className="donate-part">
                <div className="page-marker">02/06</div>
                <fieldset>
                  <legend className="donate-form-sec-title">
                    How much would you like to donate?
                  </legend>
                  <div role="radiogroup" className="grid">
                    <input
                      type="radio"
                      name="form-donate-amount"
                      id="form-donate-amount-10"
                      className="radio-hidden"
                      value={10}
                      checked={selectedAmount === '10'}
                      onClick={handleAmountChange}
                    />
                    <label
                      className="radio-label  amount"
                      htmlFor="form-donate-amount-10"
                    >
                      ₹10
                    </label>
                    <input
                      type="radio"
                      name="form-donate-amount"
                      id="form-donate-amount-25"
                      className="radio-hidden"
                      value={25}checked={selectedAmount === '25'}
                      onClick={handleAmountChange}
                    />
                    <label
                      className="radio-label amount"
                      htmlFor="form-donate-amount-25"
                    >
                      ₹25
                    </label>
                    <input
                      type="radio"
                      name="form-donate-amount"
                      id="form-donate-amount-50"
                      className="radio-hidden"
                      value={50}
                      checked={selectedAmount === '50'}
                      onClick={handleAmountChange}
                    />
                    <label
                      className="radio-label amount"
                      htmlFor="form-donate-amount-50"
                    >
                      ₹50
                    </label>
                    <input
                      type="radio"
                      name="form-donate-amount"
                      id="form-donate-amount-100"
                      className="radio-hidden"
                      value={100}
                      checked={selectedAmount === '100'}
                      onClick={handleAmountChange}
                    />
                    <label
                      className="radio-label amount"
                      htmlFor="form-donate-amount-100"
                    >
                      ₹100
                    </label>
                    <input
                      type="radio"
                      name="form-donate-amount"
                      id="form-donate-amount-500"
                      className="radio-hidden"
                      value={500}
                      checked={selectedAmount === '500'}
                      onClick={handleAmountChange}
                    />
                    <label
                      className="radio-label amount"
                      htmlFor="form-donate-amount-500"
                    >
                      ₹500
                    </label>
                    <input
                      className="labelless-input text-input radio-label amount"
                      placeholder="Enter Amount"
                      type="number"
                      name="form-donate-amount"
                      value={customAmount}
                      id="form-donate-amount-custom"
                      onChange={handleCustomAmountChange}
                    />
                  </div>
                </fieldset>
              </div>
              <div id="donate-section-3" className="donate-part">
                <div className="page-marker">03/06</div>
                <fieldset>
                  <legend className="donate-form-sec-title">
                    What fund would you like your donation to go towards?
                  </legend>
                  <div role="radiogroup" className="grid">
                    <input
                      type="radio"
                      name="form-donate-towards"
                      id="form-donate-towards-problems"
                      className="radio-hidden"
                      value="Must Solve problems"
                      onClick={handleAreaChange}
                    />
                    <label
                      className="radio-label-with-img"
                      htmlFor="form-donate-towards-problems"
                    >
                      <img
                        className="radio-label-with-img-img"
                        src="https://www.colorhexa.com/ebebeb.png"
                        alt=""
                      />
                      <span className="radio-label-with-img-text">
                        Must Solve <br /> problems
                      </span>
                    </label>
                    <input
                      type="radio"
                      name="form-donate-towards"
                      id="form-donate-towards-frontiers"
                      className="radio-hidden"
                      value="Frontiers: HIV & Sickle Cell Disease"
                      onClick={handleAreaChange}
                    />
                    <label
                      className="radio-label-with-img"
                      htmlFor="form-donate-towards-frontiers"
                    >
                      <img
                        className="radio-label-with-img-img"
                        src="https://www.colorhexa.com/ebebeb.png"
                        alt=""
                      />
                      <span className="radio-label-with-img-text">
                        Frontiers: HIV & Sickle Cell
                      </span>
                    </label>
                    <input
                      type="radio"
                      name="form-donate-towards"
                      id="form-donate-towards-empower"
                      className="radio-hidden"
                      value="Empowerment & Opportunity"
                      onClick={handleAreaChange}
                    />
                    <label
                      className="radio-label-with-img"
                      htmlFor="form-donate-towards-empower"
                    >
                      <img
                        className="radio-label-with-img-img"
                        src="https://www.colorhexa.com/ebebeb.png"
                        alt=""
                      />
                      <span className="radio-label-with-img-text">
                        Empowerment & <br /> Opportunity
                      </span>
                    </label>
                  </div>
                </fieldset>
              </div>
              <div className="donate-part">
                <div className="page-marker">04/06</div>
                <fieldset>
                  <legend className="donate-form-sec-title">
                    Your Personal Details
                  </legend>
                  <div className="grid">
                    <label
                      className="input-label long"
                      htmlFor="form-donate-first-name"
                    >
                      First Name <br />
                      <input
                        className="text-input"
                        type="text"
                        name="donate-form-first-name"
                        id="form-donate-first-name"
                      />
                    </label>
                    <label
                      className="input-label long"
                      htmlFor="form-donate-last-name"
                    >
                      Last Name <br />
                      <input
                        className="text-input"
                        type="text"
                        name="donate-form-last-name"
                        id="form-donate-last-name"
                      />
                    </label>
                    <label
                      className="input-label long"
                      htmlFor="form-donate-email"
                    >
                      Email Address <br />
                      <input
                        className="text-input"
                        type="text"
                        name="donate-form-email"
                        id="form-donate-email"
                      />
                    </label>
                    <label
                      className="input-label long"
                      htmlFor="form-donate-country"
                    >
                      Country of Residence <br />
                      {/* <input
                        type="text"
                        name="donate-form-country"
                        id="form-donate-country"
                      /> */}
                      <select id="form-donate-country" name="donate-form-country">
                        <option value="">Select Country</option>
                      </select>
                    </label>
                  </div>
                </fieldset>
              </div>
              <div className="donate-part">
                <div className="page-marker">05/06</div>
                <fieldset>
                  <legend className="donate-form-sec-title">
                    Your Billing address
                  </legend>
                  <div className="grid">
                    <label
                      className="input-label long"
                      htmlFor="form-donate-state"
                    >
                      State <br />
                      <input
                        className="text-input"
                        type="text"
                        name="donate-form-state"
                        id="form-donate-state"
                        placeholder="State"
                      />
                    </label>
                    <label
                      className="input-label long"
                      htmlFor="form-donate-city"
                    >
                      City/Town <br />
                      <input
                        className="text-input"
                        type="text"
                        name="donate-form-city"
                        id="form-donate-city"
                        placeholder="City"
                      />
                    </label>
                    <label
                      className="input-label long"
                      htmlFor="form-donate-address"
                    >
                      Address <br />
                      <input
                        className="text-input"
                        type="text"
                        name="donate-form-address"
                        id="form-donate-address"
                        placeholder="Address"
                      />
                    </label>
                    <label
                      className="input-label long"
                      htmlFor="form-donate-pin"
                    >
                      Postal/ Zip Code
                      <br />
                      <input
                        className="text-input"
                        type="text"
                        name="donate-form-pin"
                        id="form-donate-pin"
                        placeholder="Pin-Code"
                      />
                    </label>
                    <label
                      className="input-label long"
                      htmlFor="form-donate-mobile"
                    >
                      Mobile <br />
                      <input
                        className="text-input"
                        type="text"
                        name="donate-form-mobile"
                        id="form-donate-mobile"
                        placeholder="+xx xxxxxxxxxx"
                      />
                    </label>
                    <label
                      className="input-label long"
                      htmlFor="form-donate-pan"
                    >
                      PAN Number <br />
                      <input
                        className="text-input"
                        type="text"
                        name="donate-form-pan"
                        id="form-donate-pan"
                        value={pan}
                        placeholder="000 000 0000"
                        onChange={(e) => setPAN(e.target.value)}
                        onBlur={validatePAN}
                        // maxLength={10}
                      />
                      <div style={{ position: 'absolute', color: 'red', paddingLeft: '10px', fontSize: '16px' }}>{error}</div>
                    </label>
                  </div>
                </fieldset>
              </div>
              <div className="donate-part">
                <div className="page-marker">06/06</div>
                <fieldset>
                    <div className="donate-form-sec-title">
                      <p className="recap">Donation Recap</p>
                    </div>
                    <hr />
                    <div className="donate-recap-sections">
                      <div className="donate-recap-section">
                        <div>
                          <p className="recap">Donation Type </p>
                          <a href="#donate-section-1">Edit</a>
                        </div>
                        <div>{donationFrequency}</div>
                      </div>
                      <div className="donate-recap-section">
                        <div>
                          <p className="recap">Donation Area</p>
                          <a href="#donate-section-3">Edit</a>
                        </div>
                        <div>{donationArea}</div>
                      </div>
                    </div>
                    <hr />
                    <div className="donate-recap-sections">
                      <div className="donate-recap-section">
                        <div>
                          <p className="recap">Donation Amount</p>
                          <a href="#donate-section-2">Edit</a>
                        </div>
                        <div>{`₹ ${donationAmount}`}</div>
                      </div>
                      <div className="donate-recap-section">
                        <label htmlFor="form-3-percent">
                          <input
                            type="checkbox"
                            onClick={handleProcessingFee}
                            name=""
                            id="form-3-percent"
                          />
                          Add 3% to cover the credit card processing fee
                        </label>
                        <label htmlFor="newsletter-subscription">
                          <input
                            type="checkbox"
                            name=""
                            id="newsletter-subscription"
                          />
                          Subscribe to our newsletter?
                        </label>
                      </div>
                    </div>
                    <hr />
                    <div className="donate-recap-sections">
                      <div className="donate-recap-section">
                        <p className="recap">Credit Card Processing fee</p>
                        <p>{`₹ ${processingFee}`}</p>
                        <p className="recap">Total payment amount</p>
                        <p>{`₹ ${totalAmount}`}</p>
                      </div>
                    </div>
                    <hr />
                </fieldset>
                <div>
                  <div className="donate-submit-section">
                    <div className="apply-btn transparent">
                      <Link to="/donate" className="apply-btn-text-black body-btn">Submit & Enter Payment Details</Link>
                    </div>
                    <p>
                      By submitting your information and making your gift, you
                      agree to the Lokarpan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default KithDonate;
