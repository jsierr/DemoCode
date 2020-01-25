// Tell the code inspection tool that we're writing ES6 compliant code:
// jshint esversion: 6
// Tell the code inspection tool that we're using "developer" classes (console, alert, etc)
// jshint devel:true
// See https://jshint.com/docs/ for more JSHint directives
// jshint unused:false

// When the document is ready, initialize the canvas and enable button handling
$(document).ready(() => {

    // this inner function draws a chart
    // Each time it is called (when the button is pressed),
    // it appends random data to the chart
    const drawChart = () => {
        Chart.defaults.global.responsive=true;
        if (chart === null) { // this if-statement executed on first call to drawChart
            chart = new Chart(context, chartData1);
        } else { // chart already exists; recreate and redraw
            // Note: The Chartjs chart object supposedly supports an update() method, but I've found that it
            // doesn't seem to work as documented. This hack is another way of rebuilding the chart whenever
            // it needs to be re-created.

            chart.destroy(); // you must do this if recreating a new chart!!!!

            // add a random number of data columns to the chart
            let cols = 1 + 10*Math.random(); // compute a value from 1.0 to 10.0
            cols = Math.trunc(cols); // truncate to an integer
            for(let i = 0; i < cols; i++) {
                chartData2.data.labels[i] = i;
                chartData2.data.datasets[0].data[i] = 100+i*100;
            }
            chart = new Chart(context, chartData2);
            chart.update();
        }
    }; // end drawChart()

    let jqCanvas = $("#canvas1"); // note: jqCanvas is a jQuery object "wrapping" the underlying DOM canvas element
    let canvas = jqCanvas.get(0); // get the DOM canvas element underlying the jQuery result
    // We get the underlying DOM canvas object because jQuery does not provide any
    // facade for the canvas element :< so we have to revert to 'raw' DOM methods.
    canvas.width = 1000; // specify width/height either here or in the <canvas> tag to avoid scaling of pixels
    canvas.height = 300;

    let context = canvas.getContext("2d"); // other contexts also available
    context.fillStyle = "green";
    //context.fillStyle="rgba(0, 0, 200, 0.5)"; // color via rgba
    context.fillRect(200, 20, 100, 200); // x, y, width, height

    // the below vars are used by the drawChart inner function below
    let chart = null; // be sure to init to null; otherwise it will be undefined (they are different!)

    drawChart();
    $("#redraw").click(drawChart); // connect the button-handler to the drawing function

}); // end ready