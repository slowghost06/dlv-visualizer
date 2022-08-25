//Pie

const thirteenColors = ["rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        ];
                        
const months = ["Dec-20","Jan-21","Feb-21","Mar-21","Apr-21","May-21","June-21","July-21","Aug-21","Sept-21","Oct-21","Nov-21","Dec-21"];
           
const fetchedData = {
    "Gender 1":[0,0,0,0,0,47.29,0,47.02,0,0,0,0,0],
    "Gender 2":[0,0,0,0,0,44.169,0,44.43,0,0,0,0,0],
    "Gender 3":[0,0,0,0,0,8.541,0,8.55,0,0,0,0,0]  
};

const dataMetrics = Object.keys(fetchedData);

export const dummyDataPie = {
    labels: months,
    datasets: []
};

export const dataLine = {
    labels: months,
    datasets: []
}

function generateData(item, index){
    let lbl = item;
    let dt = fetchedData[lbl];
    let clr = thirteenColors;
    
    let bW = 1;
    
    let yA = 'y';
    
    let dpPie = {
        label: lbl,
        data: dt,
        backgroundColor: clr,
        borderColor: clr,
        borderWidth: bW
    }
    
    let dpLine = {
        label: lbl,
        data: dt,
        backgroundColor: "#fff",
        borderColor: clr[index],
        yAxisID: yA
    }
    
    //dummyDataPie['datasets'].push(dpPie);
    dataLine['datasets'].push(dpLine);
};

dataMetrics.forEach(generateData);

export const dataPie = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
        {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            /*backgroundColor: [
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
            ],*/
            borderWidth: 1
        }
    ]
};

// Final dataset - hardcoded
export const lineOptions = {
    responsive: true,
    interaction: {
        mode: "index",
        intersect: false
    },
    stacked: false,
    plugins: {
            title: {
                display: true,
                text: "Gender"
            }
    },
    scales: {
        y: {
            type: "linear",
            display: true,
            position: "left",
            grid: {
                drawOnChartArea: false
            }
        }
    }
};