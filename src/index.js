import React from "react";
import { createRoot } from "react-dom/client";

import LineC from "./components/Line";
import PieC from "./components/Pie";
import { lineOptions, dataLine, dataPie } from "./data/Data";

const pieElement = document.getElementById("Pie");
const lineElement = document.getElementById("Line");

const month = document.getElementById("Pie");
const country = document.getElementById("Pie");
const metric = document.getElementById("Pie");

createRoot(pieElement).render(<PieC dataPie={dataPie}/>);
createRoot(lineElement).render(<LineC lineOptions={lineOptions} dataLine={dataLine}/>);