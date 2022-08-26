export var ProcessedData = class{
    constructor(months, month, fetchedData, country, metric){
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
        this.country = country;
        this.month = month;
        this.months = months;
        this.fetchedData = fetchedData;
        this.dataMetrics = Object.keys(this.fetchedData);
        
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
                        text: metric
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
        
        this.dataPie = {
            labels: this.dataMetrics,
            datasets: []
        };
        this.dtPie = [];

        this.dataLine = {
            labels: months,
            datasets: []
        }
        
        this.generateData = (item, index)=>{
            let dtLine = this.fetchedData[item];
            let clr = this.thirteenColors;
            let yA = 'y';
            
            this.dtPie.push(this.fetchedData[item][month])
            
            let dpLine = {
                label: item,
                data: dtLine,
                backgroundColor: "#fff",
                borderColor: clr[index],
                yAxisID: yA
            }
            
            this.dataLine['datasets'].push(dpLine);
        };
        
        this.dataMetrics.forEach(this.generateData);
        
        this.dataPie['datasets'].push({
            label: '',
            data : this.dtPie,
            backgroundColor: this.thirteenColors,
            borderColor: this.thirteenColors,
            borderWidth: 1
        });
    };
};