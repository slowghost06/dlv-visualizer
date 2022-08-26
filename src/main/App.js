import React from "react";
import { createRoot } from "react-dom/client";

import LinC from "../components/Line";
import PieC from "../components/Pie";
import InpC from "../components/Input";
import NavC from "../components/Navbar";

//import { lineOptions, dataLine, dataPie } from "../data/Data";

import "../styles/stylesheet.scss";


export default class AppC extends React.Component {
    constructor(props) {
      super(props);
      this.state =  {
                        lineOptions: this.props.lineOptions, 
                        dataLine: this.props.dataLine, 
                        dataPie: this.props.dataPie,
                        months: this.props.months,
                        countries: this.props.countries,
                        metrics: this.props.metrics,
                    };
    }
    
    render() {
        if (Object.keys(this.state.dataPie).length===0){
            pie = <div></div>;
        }else{
            pie = <PieC dataPie={this.state.dataPie} />;
        }
        
        if (Object.keys(this.state.lineOptions).length===0 || Object.keys(this.state.dataLine).length===0){
            line = <div></div>;
        }else{
            line = <LinC lineOptions={this.state.lineOptions} dataLine={this.state.dataLine} />;
        }
        
        return (
                <div className="App">
                    <NavC />
                    <InpC months={this.state.months} countries={this.state.countries} metrics={this.state.metrics}/>
                    {pie}
                    {line}
                </div>
              );
    }
}