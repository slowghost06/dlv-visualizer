import React from "react";
import PieC from "../Pie";
import LinC from "../Line";


export default class ChaC extends React.Component {
    constructor(props) {
      super(props);
      this.state =  {
                        lineOptions: this.props.lineOptions, 
                        dataLine: this.props.dataLine,
                        dataPie: this.props.dataPie
                    };
    }
    
    render() {
      return    (
                    <div className="chartBox">
                        <PieC dataPie={this.state.dataPie} />
                        <LinC lineOptions={this.state.lineOptions} dataLine={this.state.dataLine} />
                    </div>
                );
    }
}