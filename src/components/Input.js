import React from "react";

export default class InpC extends React.Component {
    constructor(props) {
      super(props);
      this.state =  {
                        countries: this.props.countries, 
                        months: this.props.months, 
                        metrics: this.props.metrics
                    };
    }
    
    render() {
      return (
                <div className="configForm">
                    <form className="form">
                        <div className="options">
                            <div className="option">
                                <label className="label" htmlFor="country">Select a country</label>
                                <select name="country" id="country" className="dropdown">
                                    {
                                        this.props.countries.map((item,index)=>{
                                            return(
                                                <option key={index} value={item}>{item}</option>
                                            );
                                        })
                                    }
                                </select>
                            </div>
                            <div className="option">
                                <label className="label" htmlFor="month">Select a month</label>
                                <select name="month" id="month" className="dropdown">
                                    {
                                        this.state.months.map((item,index)=>{
                                            return(
                                                <option key={index} value={index}>{item}</option>
                                            );
                                        })
                                    }
                                </select>
                            </div>
                            <div className="option">
                                <label className="label" htmlFor="metric">Select a country</label>
                                <select name="metric" id="metric" className="dropdown">
                                    {
                                        this.state.metrics.map((item, index)=>{
                                            return(
                                                <option key={index} value={item}>{item}</option>
                                            );
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <button id="submitButton" className="primaryButton" onClick={this.props.handleClick}>Submit</button>
                    </form>
                </div>
              );
    }
}