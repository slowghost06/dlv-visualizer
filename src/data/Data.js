import { ProcessedData } from "./ProcessedData";

//Input options
let metric = "Gender";
let month = 5;
let country = 'AUS';

//Read uploaded data - now, hardcoded
let months = ["Dec-20","Jan-21","Feb-21","Mar-21","Apr-21","May-21","June-21","July-21","Aug-21","Sept-21","Oct-21","Nov-21","Dec-21"];
let fetchedData =   {
                            'Gender':   {
                                            "Gender 1":[0,0,0,0,0,47.29,0,47.02,0,0,0,0,0],
                                            "Gender 2":[0,0,0,0,0,44.169,0,44.43,0,0,0,0,0],
                                            "Gender 3":[0,0,0,0,0,8.541,0,8.55,0,0,0,0,0]  
                                        }
                    };
let selectedData = fetchedData[metric];
                    
let data = new ProcessedData(months, month, selectedData, country, metric);

// Line Chart Options
export const lineOptions = data.lineOptions;
export const dataLine = data.dataLine;
export const dataPie = data.dataPie;