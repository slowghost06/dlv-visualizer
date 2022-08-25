import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { dataPie } from "../data/Data"

ChartJS.register(ArcElement, Tooltip, Legend);

export function PieC() {
  return <Pie data={dataPie} />;
}
