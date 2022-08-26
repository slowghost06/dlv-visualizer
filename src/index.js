import React from "react";
import { createRoot } from "react-dom/client";

import AppC from "./main/App";

import { metrics, countries, months, fetchedData } from "./scripts/UploadDLV";
import { ProcessedData } from "./data/ProcessedData";

let dataLine = {};
let dataPie = {};
let lineOptions = {};

document.addEventListener("DOMContentLoaded", ()=>{
    const submitButtonElement = document.getElementById("submitButton");

    submitButtonElement.addEventListener("click",()=>{
        //Input options
        let metric = document.getElementById("metric");
        let month = document.getElementById("month");
        let country = document.getElementById("country");

        //Getting the selected data to be represented
        let selectedData = fetchedData[country][metric];
                            
        let data = new ProcessedData(months, month, selectedData, country, metric);
        
        dataLine = data.dataLine;
        dataPie = data.dataPie;
        lineOptions = data.lineOptions;
        
        const appElement = document.getElementById("App");
        createRoot(appElement).render(<AppC metrics={metrics} countries={countries} months={months} dataLine={dataLine} dataPie={dataPie} lineOptions={lineOptions}/>);
    });
});

const appElement = document.getElementById("App");
createRoot(appElement).render(<AppC metrics={metrics} countries={countries} months={months} dataLine={dataLine} dataPie={dataPie} lineOptions={lineOptions}/>);