import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/stylesheet.scss";

import AppC from "./main/App";

import { metrics, countries, months, fetchedData } from "./scripts/UploadDLV";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AppC metrics={metrics} countries={countries} months={months} fetchedData={fetchedData}/>
  </React.StrictMode>
);