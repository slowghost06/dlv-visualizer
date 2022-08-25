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

// Final dataset - hardcoded

export const options = {
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

export const dataLine = {
    labels: ["Dec-20","Jan-21","Feb-21","Mar-21","Apr-21","May-21","June-21","July-21","Aug-21","Sept-21","Oct-21","Nov-21","Dec-21"],
    datasets: [
        {
            label: "Gender 1",
            data: [0,0,0,0,0,47.29,0,47.02,0,0,0,0,0],
            backgroundColor: "#fff",
            borderColor: "rgba(255, 99, 132, 0.5)",
            yAxisID: "y",
        },
        {
            label: "Gender 2",
            data: [0,0,0,0,0,44.169,0,44.43,0,0,0,0,0],
            backgroundColor: "#fff",
            borderColor: "rgba(53, 162, 235, 0.5)",
            yAxisID: "y",
        },
        {
            label: "Gender 3",
            data: [0,0,0,0,0,8.541,0,8.55,0,0,0,0,0],
            backgroundColor: "#fff",
            borderColor: "rgba(42, 42, 42, 0.5)",
            yAxisID: "y",
        }
    ]
};