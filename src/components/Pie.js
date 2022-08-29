import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default class PieC extends React.Component {
    constructor(props) {
      super(props);
      this.state =  {
                      dataPie: this.props.dataPie,
                      showPie: (this.props.dataPie.datasets[0].data.reduce((partialSum, a) => partialSum + a, 0)===0)?false:true
                    };
    }
    
    render() {
      return (
                <div className="pie">
                  {
                    this.state.showPie && (<Pie data={this.state.dataPie} />)
                  }
                </div>
              );
    }
}