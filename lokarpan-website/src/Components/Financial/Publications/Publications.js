import React, { useState, useEffect } from "react";
import FinancialNav from "../../Navbar/FinancialSubNav/FinancialNav";
import { DataGrid } from "@mui/x-data-grid";
import "./Publications.css";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import axios from "axios";
import { debounce } from "lodash";

const Columns = [
  {
    field: "id", 
    headerClassName: "custom-header", 
    headerName: "ID", 
    width: 250, 
    sortable: false,
    // headerAlign: "left", 
    // align: "left",
  },
  {
    field: "year", 
    headerClassName: "custom-header", 
    headerName: "Code", 
    width: 250, 
    sortable: false,
    // headerAlign: "left", 
    // align: "left",
  },
  {
    field: "reportTitle",
    headerClassName: "custom-header", 
    headerName: "Description", 
    width: 250, 
    sortable: false,
    // headerAlign: "left", 
    // align: "left",
  },
  {
    field: "addedDate", 
    headerClassName: "custom-header", 
    headerName: "Date", 
    width: 250, 
    sortable: false,
    // headerAlign: "left", 
    // align: "left",
  },
  {
    field: "file", 
    headerClassName: "custom-header", 
    headerName: "File", 
    width: 250, 
    sortable: false,
    // headerAlign: "center", 
    // align: "center",
    renderCell: (params) => (
      <button
        className="download-btn"
        onClick={() => handleDownload(params.row.reportname)}
      >
        Download
      </button>
    ),
  },
];

// const Rows = [
//   {
//     id: 1,
//     year: "AR1",
//     reporttitle1: "test",
//     addedDate: "Jan 13, 2024",
//   },
//   {
//     id: 2,
//     year: "AR1",
//     reporttitle1: "test",
//     addedDate: "Jan 13, 2024",
//   },
//   {
//     id: 3,
//     year: "AR1",
//     reporttitle1: "test",
//     addedDate: "Jan 13, 2024",
//   },
//   {
//     id: 4,
//     year: "AR1",
//     reporttitle1: "test",
//     addedDate: "Jan 13, 2024",
//   },
//   {
//     id: 5,
//     year: "AR1",
//     reporttitle1: "test",
//     addedDate: "Jan 13, 2024",
//   },
//   {
//     id: 6,
//     year: "AR1",
//     reporttitle1: "test",
//     addedDate: "Jan 13, 2024",
//   },
//   {
//     id: 7,
//     year: "AR1",
//     reporttitle1: "test",
//     addedDate: "Jan 13, 2024",
//   },
//   {
//     id: 8,
//     year: "AR1",
//     reporttitle1: "test",
//     addedDate: "Jan 13, 2024",
//   },
//   {
//     id: 9,
//     year: "AR1",
//     reporttitle1: "test",
//     addedDate: "Jan 13, 2024",
//   },
//   {
//     id: 10,
//     year: "AR1",
//     reporttitle1: "test",
//     addedDate: "Jan 13, 2024",
//   },
//   {
//     id: 11,
//     year: "AR1",
//     reporttitle1: "test",
//     addedDate: "Jan 13, 2024",
//   },
// ];

// const handleDownload = (id) => {
//   alert(`Downloading file for ID: ${id}`);
// };
const handleDownload = (reportURL) => {
  const downloadLink = document.createElement('a');
  downloadLink.href = reportURL;
  downloadLink.download = 'downlload.pdf'; 
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
};

const Publications = () => {
  const customHeader = {
    backgroundColor: "lightblue",
    fontSize: "16px",
    fontWeight: "bold",
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [searchInputAvailable, setSearchInputAvailable] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  
  // data fetching from backend
  const [Rows, setReportData] = useState([]);
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/annualreports/')
      // .then(response => {
      //   alert("fetched");
      //   setReportData(response.data);
      // })
      .then(response => {
        const flattenedRows = response.data.flatMap(report => {
          const flattenedReport = [];
          for (let i = 1; i <= 5; i++) {
            const reportTitle = report[`reporttitle${i}`];
            const reportfile = report[`report${i}`]
            if (reportTitle) {
              flattenedReport.push({
                id: `${report.year}_${i}`,
                year: report.year,
                reportname: reportfile,
                reportTitle: reportTitle,
                addedDate: report.addedDate,
              });
            }
          }
          return flattenedReport;
        });
        setReportData(flattenedRows);
      })
      .catch(error => {
        alert("error");
        console.error('Error fetching Annual Report data:', error);
      });
  }, []);
// search functionality
  const filteredRows = Rows.filter(row => {
    const year = String(row.year).toLowerCase();
    return (
      year.includes(searchQuery.toLowerCase()) ||
      row.reporttitle1.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.addedDate.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });  
  // Ctrl + K key press for search
  const handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'k' && searchInputAvailable) {
      event.preventDefault();
      document.getElementById('searchInput').focus();
    }
  };
  useEffect(() => {
    setSearchInputAvailable(true);
  }, []);

  useEffect(() => {
    document.body.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.removeEventListener('keydown', handleKeyDown);
    };
  }, [searchInputAvailable]);


  return (
    <>
      <Navbar />
      <FinancialNav navbarTitle="Financials" navitem1="Overview" navitem2="Publications" link1="/financials" link2="/publications" />
      <div className="public-top">
        {/* <h1 className="public-title">
          Let's accelerate sustainable and inclusive growth together.
        </h1>
        <p className="public-desp">
          Lokarpan is a non-profit organization registered under the Societies
          Registration Act 1860 Lokarpan is registered u/s 12A of the Income Tax
          Act, 1961. Lokarpan is registered under the Foreign Contributions
          (Regulation) Act FCRA 136550133, and renewed dated 01.11.2016 for the
          receipt of foreign donations. Lokarpan assumes no obligation to update
          any forward looking statement or information, which speak as of their
          respective dates.
        </p> */}
      </div>

      {/* below section used in moonshots also */}
      <div className="public-text"> 
        <h1 className="public-title">
          Let's accelerate sustainable and inclusive growth together.
        </h1>
        <p className="public-desp">
          Lokarpan is a non-profit organization registered under the Societies
          Registration Act 1860 Lokarpan is registered u/s 12A of the Income Tax
          Act, 1961. Lokarpan is registered under the Foreign Contributions
          (Regulation) Act FCRA 136550133, and renewed dated 01.11.2016 for the
          receipt of foreign donations. Lokarpan assumes no obligation to update
          any forward looking statement or information, which speak as of their
          respective dates.
        </p>
      </div>
      
      <div className="publication-page">      
        <div >
          <h1 className="public-archives">Archives</h1>
        </div>
        <div className="column">
          <div className="row">
              <div className="row-inner">
                <label htmlFor="">
                  <input
                    id="searchInput"
                    type="search"
                    className="publication-form-control text-input with-icon"
                    placeholder="Press Ctrl+K to start Search..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                </label>
              </div>
          </div>
          <div className="responsive-data-grid">
            <DataGrid
              rows={filteredRows}
              headerClassName="customHeader"
              columns={Columns.filter((column) => column.field !== "id")}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              sx={{
                borderColor: "#fff",
                // "& .MuiDataGrid-cell:hover": {
                //   color: "primary.main",
                // },
              }}
              pageSizeOptions={[5, 10, 15]}
              rowsPerPageOptions={[5, 10, 25, 50, 100]}
              // checkboxSelection
              disableColumnMenu
              disableRowSelectionOnClick
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Publications;
