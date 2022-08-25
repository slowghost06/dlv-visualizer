import React from "react";
import { createRoot } from "react-dom/client";

import { LineC } from "./scripts/Line";
import { PieC } from "./scripts/Pie";

const pieElement = document.getElementById("Pie");
const lineElement = document.getElementById("Line");
createRoot(pieElement).render(<PieC />);
createRoot(lineElement).render(<LineC />);
