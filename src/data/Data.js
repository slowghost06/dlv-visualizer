import React from "react";
import faker from "faker";

//Pie
export const dataPie = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
        {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
        }
    ]
};


// Line
export const dataLine = {
    labels : ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "Dataset 1",
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            yAxisID: "y"
        },
        {
            label: "Dataset 2",
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(53, 162, 235, 0.5)",
            yAxisID: "y1"
        }
    ]
};

// Final dataset - hardcoded
export const data = {
    labels: [],
    datasets: [
        {
            label: "",
            data: [],
            backgroundColor: "",
            borderColor: "",
            yAxisID: "",
        },
        {
            
        }
    ]
};