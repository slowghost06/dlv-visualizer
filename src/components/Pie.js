import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default class PieC extends React.Component {
    constructor(props) {
      super(props);
      this.state = {dataPie: this.props.dataPie};
    }
    
    render() {
      return (
                <div className="pie">
                  <Pie data={this.state.dataPie} />
                </div>
              );
    }
}