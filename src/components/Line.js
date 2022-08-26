import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default class LinC extends React.Component {
    constructor(props) {
      super(props);
      this.state = {lineOptions: this.props.lineOptions, dataLine: this.props.dataLine};
    }
    
    render() {
      return (
                <div className="line">
                  <Line options={this.state.lineOptions} data={this.state.dataLine} />;
                </div>
              );
    }
}