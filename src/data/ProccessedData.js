let ProcessedData = class{
    constructor(){
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

        //Input configured
        //var country
        var month = 5
        
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

        const fetchedData = {
            "Gender 1":[0,0,0,0,0,47.29,0,47.02,0,0,0,0,0],
            "Gender 2":[0,0,0,0,0,44.169,0,44.43,0,0,0,0,0],
            "Gender 3":[0,0,0,0,0,8.541,0,8.55,0,0,0,0,0]  
        };

        const dataMetrics = Object.keys(fetchedData);

        const dummyDataPie = {
            labels: dataMetrics,
            datasets: []
        };
        let dtPie = [];

        const dataLine = {
            labels: months,
            datasets: []
        }
    };
    
    /*
    function generateData(item, index){
        let dtLine = fetchedData[item];
        let clr = thirteenColors;
        let yA = 'y';
        
        dtPie.push(fetchedData[item][month])
        
        let dpLine = {
            label: item,
            data: dtLine,
            backgroundColor: "#fff",
            borderColor: clr[index],
            yAxisID: yA
        }
        
        dataLine['datasets'].push(dpLine);
    };*/
    
    dataPie['datasets'].push({
        label: '',
        data :dtPie,
        backgroundColor: thirteenColors,
        borderColor: thirteenColors,
        borderWidth: 1
    });

    dataMetrics.forEach(generateData);
    
};