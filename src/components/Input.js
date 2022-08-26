import React from "react";

export default class InpC extends React.Component {
    constructor(props) {
      super(props);
    }
    
    render() {
      return (
                <div className="configForm">
                    <form action="#">
                        <label for="country">Select a country</label>
                        <select name="country" id="country">
                            {this.props.countries.map(item => {
                                                    return (
                                                        <option value={item}>{item}</option>
                                                    );
                                                }
                                        )
                            }
                        </select>
                        <label for="month">Select a month</label>
                        <select name="month" id="month">
                            {this.props.months.map(item => {
                                                    return (
                                                        <option value={item}>{item}</option>
                                                    );
                                                }
                                        )
                            }
                        </select>
                        <label for="metric">Select a country</label>
                        <select name="metric" id="metric">
                            {this.props.metrics.map(item => {
                                                    return (
                                                        <option value={item}>{item}</option>
                                                    );
                                                }
                                        )
                            }
                        </select>
                        <input id="submitButton" className="primaryButton" type="submit" value="Submit" />
                    </form>
                </div>
              );
    }
}