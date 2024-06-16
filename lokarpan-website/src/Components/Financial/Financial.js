import FinCarousel from "../Carousals/FinancialCaousal/FinCarousal";
import Footer from "../Footer/Footer";
import FinancialNav from "../Navbar/FinancialSubNav/FinancialNav";
import Navbar from "../Navbar/Navbar";
import "./Financial.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Financials = () => {

  
  const [reports, setAdditionalReportData] = useState([]);
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/additionalreports/')
      .then(response => {
        // alert("fetched");
        setAdditionalReportData(response.data);
      })
      .catch(error => {
        alert("error");
        console.error('Error fetching Additional Report data:', error);
      });
  }, []);
  const handleDownload = (reportURL) => {
    const downloadLink = document.createElement('a');
    downloadLink.href = reportURL;
    downloadLink.download = 'download.pdf'; // Set the default file name
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <>
    <Navbar />
      <FinancialNav navbarTitle="Financials" navitem1="Overview" navitem2="Publications" link1="/financials" link2="/publications" />
      <div className="fin-desp-head">
          <h1>Let’s accelerate sustainable and inclusive growth together.</h1>
          <p style={{maxWidth: "900px"}}>
            Lokarpan is a non-profit organization registered under the Societies
            Registration Act 1860. Lokarpan is registered u/s 12A of the Income
            Tax Act, 1961. Lokarpan is registered under the Foreign
            Contributions (Regulation) Act FCRA 136550133, and renewed dated
            01.11.2016 for the receipt of foreign donations. Lokarpan assumes no
            obligation to update any forward looking statement or information,
            which speak as of their respective dates.
          </p>
        </div>
      <div className="financial-page">
        <div className="fin-annual-repo">
          <h2 className="fin-title">Annual Reports</h2>

          <div className="report-container">
            <FinCarousel />
          </div>
        </div>
        <hr />
        <div className="add-repo">
          <h1 className="fin-title">Additional Reports</h1>
          {reports.map((report, index) => (
            <div key={index} report={report} className="desp-cards">
              {/* <div className="desp-cards-col"> */}
              <div className="add-repo-text">
                <h3>FCRA</h3>
                <button onClick={()=>{handleDownload(report.FCRAreportFile)}} className="add-repo-link">
                  View Documentation and date{" "}
                  <i class="bi bi-arrow-down-circle"></i>
                </button>
              </div>
              <div className="add-repo-text">
                <h3>Section 12A certificate</h3>
                <button onClick={()=>{handleDownload(report.LegalreportFile)}} className="add-repo-link">
                  View Documentation and date{" "}
                  <i class="bi bi-arrow-down-circle"></i>
                </button>
              </div>
              <div className="add-repo-text">
                <h3>80 G certificate</h3>
                <button onClick={()=>{handleDownload(report.PlanningCommisionreportFile)}} className="add-repo-link">
                  View Documentation and date{" "}
                  <i class="bi bi-arrow-down-circle"></i>
                </button>
              </div>
              <div className="add-repo-text">
                <h3>PAN Card</h3>
                <button onClick={()=>{handleDownload(report.PANcardFile)}} className="add-repo-link">
                  View Documentation and date{" "}
                  <i class="bi bi-arrow-down-circle"></i>
                </button>
              </div>
              <div className="add-repo-text">
                <h3>Memorandum of Association</h3>
                <button onClick={()=>{handleDownload(report.MemorandumofAssociation)}} className="add-repo-link">
                  View Documentation and date{" "}
                  <i class="bi bi-arrow-down-circle"></i>
                </button>
              </div>
              <div className="add-repo-text">
                <h3>CSR certification letter</h3>
                <button onClick={()=>{handleDownload(report.CSRcertificationletter)}} className="add-repo-link">
                  View Documentation and date{" "}
                  <i class="bi bi-arrow-down-circle"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="dummy"></div>
      </div>
      <Footer />
    </>
  );
};

export default Financials;
