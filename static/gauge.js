document.addEventListener("DOMContentLoaded", function() {
    // Initialize and configure Tank Level Gauge
    var tankLevelGauge = new Gauge(document.getElementById("tank-level-gauge")).setOptions({
        // Gauge options here
        lines: 12, // Number of lines or segments
        angle: 0.15, // Angle of the gauge
        lineWidth: 0.4, // Thickness of the gauge
        pointer: {
            length: 0.6, // Length of the pointer
            strokeWidth: 0.035, // Width of the pointer
        },
        limitMax: false, // Whether to limit the maximum value
        colorStart: "#6FADCF", // Start color
        colorStop: "#8FC0DA", // Stop color
        strokeColor: "#E0E0E0", // Background color
        generateGradient: true,
        minValue: 0,
        maxValue: 100,
    });

    tankLevelGauge.animationSpeed = 32;
    tankLevelGauge.set(50); // Set an initial value, e.g., 50%

    // Initialize and configure Total Water Used Gauge
    var totalWaterGauge = new Gauge(document.getElementById("total-water-gauge")).setOptions({
        // Gauge options here
        lines: 12,
        angle: 0.15,
        lineWidth: 0.4,
        pointer: {
            length: 0.6,
            strokeWidth: 0.035,
        },
        limitMax: false,
        colorStart: "#6FADCF",
        colorStop: "#8FC0DA",
        strokeColor: "#E0E0E0",
        generateGradient: true,
        minValue: 0,
        maxValue: 1000, // Adjust the maximum value as needed
    });

    totalWaterGauge.animationSpeed = 32;
    totalWaterGauge.set(500); // Set an initial value, e.g., 500 (assuming it's in liters)

    // Initialize and configure Flow Rate Gauge
    var flowRateGauge = new Gauge(document.getElementById("flow-rate-gauge")).setOptions({
        // Gauge options here
        lines: 12,
        angle: 0.15,
        lineWidth: 0.4,
        pointer: {
            length: 0.6,
            strokeWidth: 0.035,
        },
        limitMax: false,
        colorStart: "#6FADCF",
        colorStop: "#8FC0DA",
        strokeColor: "#E0E0E0",
        generateGradient: true,
        minValue: 0,
        maxValue: 20, // Adjust the maximum value as needed
    });

    flowRateGauge.animationSpeed = 32;
    flowRateGauge.set(10); // Set an initial value, e.g., 10 (assuming it's in L/min)
});

//--------------------------------------------------------------

//document.addEventListener("DOMContentLoaded", function() {
//    // Initialize and configure Tank Level Gauge
//    var tankLevelGauge = new Gauge(document.getElementById("tank-level-gauge")).setOptions({
//        // Gauge options here
//    });
//    tankLevelGauge.minValue = 0;
//    tankLevelGauge.maxValue = 100;
//    tankLevelGauge.animationSpeed = 32;
//    tankLevelGauge.set(50); // Set an initial value, e.g., 50%
//
//    // Initialize and configure Total Water Used Gauge
//    var totalWaterGauge = new Gauge(document.getElementById("total-water-gauge")).setOptions({
//        // Gauge options here
//    });
//    totalWaterGauge.minValue = 0;
//    totalWaterGauge.maxValue = 1000; // Adjust the maximum value as needed
//    totalWaterGauge.animationSpeed = 32;
//    totalWaterGauge.set(500); // Set an initial value, e.g., 500 (assuming it's in liters)
//
//    // Initialize and configure Flow Rate Gauge
//    var flowRateGauge = new Gauge(document.getElementById("flow-rate-gauge")).setOptions({
//        // Gauge options here
//    });
//    flowRateGauge.minValue = 0;
//    flowRateGauge.maxValue = 20; // Adjust the maximum value as needed
//    flowRateGauge.animationSpeed = 32;
//    flowRateGauge.set(10); // Set an initial value, e.g., 10 (assuming it's in L/min)
//
//    // Add numbers and labels to the gauges
//    tankLevelGauge.setTextField(document.getElementById("tank-level-label"));
//    tankLevelGauge.setTextField(document.getElementById("tank-level-description"));
//
//    totalWaterGauge.setTextField(document.getElementById("total-water-label"));
//    totalWaterGauge.setTextField(document.getElementById("total-water-description"));
//
//    flowRateGauge.setTextField(document.getElementById("flow-rate-label"));
//    flowRateGauge.setTextField(document.getElementById("flow-rate-description"));
//});

