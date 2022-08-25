let ProcessedData = class{
    constructor(months, month, fetchedData){
        this.thirteenColors = ["rgba(255, 99, 132, 1)",
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
                                
        //Input configured
        //var country
        //this.month = 5;
        this.month = month;
        //this.months = ["Dec-20","Jan-21","Feb-21","Mar-21","Apr-21","May-21","June-21","July-21","Aug-21","Sept-21","Oct-21","Nov-21","Dec-21"];
        this.months = months;
        /*
        const fetchedData = {
            "Gender 1":[0,0,0,0,0,47.29,0,47.02,0,0,0,0,0],
            "Gender 2":[0,0,0,0,0,44.169,0,44.43,0,0,0,0,0],
            "Gender 3":[0,0,0,0,0,8.541,0,8.55,0,0,0,0,0]  
        };*/
        this.fetchedData = fetchedData;
        this.dataMetrics = Object.keys(fetchedData);
        
        this.lineOptions = {
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
        
        this.dummyDataPie = {
            labels: dataMetrics,
            datasets: []
        };
        this.dtPie = [];

        this.dataLine = {
            labels: months,
            datasets: []
        }
    };
    
    /*
    function generateData(item, index){
        let dtLine = this.fetchedData[item];
        let clr = this.thirteenColors;
        let yA = 'y';
        
        dtPie.push(this.fetchedData[item][month])
        
        let dpLine = {
            label: item,
            data: dtLine,
            backgroundColor: "#fff",
            borderColor: this.clr[index],
            yAxisID: yA
        }
        
        this.dataLine['datasets'].push(dpLine);
    };*/
    
    
    //Need to execute this in constructor
    this.dataPie['datasets'].push({
        label: '',
        data : this.dtPie,
        backgroundColor: this.thirteenColors,
        borderColor: this.thirteenColors,
        borderWidth: 1
    });

    this.dataMetrics.forEach(generateData);
};