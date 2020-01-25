// Tell the code inspection tool that we're writing ES6 compliant code:
// jshint esversion: 6
// Tell the code inspection tool that we're using "developer" classes (console, alert, etc)
// jshint devel:true
// See https://jshint.com/docs/ for more JSHint directives
// jshint unused:false

const chartData1 = { // sample data - "hardcoded" values
    type: "bar",
    data: {
        labels: ["1", "2", "3", "4"],
        datasets: [
            {
                label: "Sample Chart",
                backgroundColor: [`rgba(100,0,0,0.25)`, `rgba(0,100,0,0.25)`, `rgba(0,0,100,0.25)`, `rgba(100,100,0,0.25)`],
                borderColor: ["black", "red", "orange", "yellow"], // you can supply a single value here as well (e.g. "black")
                borderWidth: 5,
                data: [100, 300, 200, 1000] // these are the values for the data
            }
        ]
    },
    options: {
        scales: {
            yAxes: [
                {
                    scaleLabel: {
                        display: true,
                        labelString: "Time (ms)"
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }
            ],
            xAxes: [
                {
                    scaleLabel: {
                        display: true,
                        labelString: "Entries"
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }
            ]
        }
    }
};

const chartData2 = { // data object
    type: "bar",
    data: {
        labels: [], // to be added below
        datasets: [
            {
                label: "Updated Chart",
                backgroundColor: "green", // you can also supply an array af colors
                borderColor: "red", // you can supply an array here as well
                borderWidth: 3,
                data: [] // to be added below
            }
        ]
    },
    options: {
        scales: {
            yAxes: [
                {
                    scaleLabel: {
                        display: true,
                        labelString: "Time (ms)"
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }
            ],
            xAxes: [
                {
                    scaleLabel: {
                        display: true,
                        labelString: "Entries"
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }
            ]
        }
    }
};