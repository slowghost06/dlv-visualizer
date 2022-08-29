import React from "react";

import InpC from "../components/Input";
import NavC from "../components/Navbar";
import ChaC from "../components/compound/Chart";

import { ProcessedData } from "../data/ProcessedData";
import { Chart } from "react-chartjs-2";


export default class AppC extends React.Component {
    constructor(props) {
        super(props);
        this.state =    {
                            dataLine: {},
                            dataPie: {},
                            lineOptions: {},
                            showChart: false,
                            months: this.props.months,
                            countries: this.props.countries,
                            metrics: this.props.metrics
                        };
    }
    
    handleClick = (e) => {
        // To prevent default reload function
        e.preventDefault();
        
        //Input options
        let metric = document.getElementById("metric").value; 
        let month = document.getElementById("month").value;
        let country = document.getElementById("country").value;
        
        //Get the specified data
        let selectedData = this.props.fetchedData[country][metric];
               
        //Get the data for the charts
        let data = new ProcessedData(this.state.months, month, selectedData, country, metric);
    
        //Setting state to reload
        this.setState(
            {
                dataLine: {},
                dataPie: {},
                lineOptions: {},
                showChart: false,
                months: this.props.months,
                countries: this.props.countries,
                metrics: this.props.metrics
            },
            () => this.setState({
                dataLine: data.dataLine,
                dataPie: data.dataPie,
                lineOptions: data.lineOptions,
                showChart: true,
                months: this.props.months,
                countries: this.props.countries,
                metrics: this.props.metrics
            })
        );
    };
    
    render() {     
        return (
                <div className="App">
                    <NavC />
                    <div className="content">
                        <h1>Configuration.</h1>
                        <InpC handleClick={this.handleClick} months={this.state.months} countries={this.state.countries} metrics={this.state.metrics} />
                        <h1>Charts.</h1>
                        {
                            (this.state.showChart && (<ChaC key={this.state.dataPie} dataLine={this.state.dataLine} dataPie={this.state.dataPie} lineOptions={this.state.lineOptions}/>))
                            ||(!this.state.showChart && (   
                                                            <div>
                                                                <h2>No charts to show.</h2>
                                                            </div>)
                                                        )
                        }
                    </div>
                </div>
              );
    }
}