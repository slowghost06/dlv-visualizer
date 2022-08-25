import React from "react";
import { createRoot } from "react-dom/client";

import { LineC } from "./chartScripts/Line";
import { PieC } from "./chartScripts/Pie";

const pieElement = document.getElementById("Pie");
const lineElement = document.getElementById("Line");
createRoot(pieElement).render(<PieC />);
createRoot(lineElement).render(<LineC />);
