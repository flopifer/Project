window.onload = function () {
  //Total Cases
  var chart1 = new CanvasJS.Chart("chartContainer1", {
    title: {
    text: "Total Cases",
    },
    data: [
    {
    type: "line",
    
    dataPoints: [
    { x: new Date(2020, 06, 12), y: 3803 },
    { x: new Date(2020, 06, 13), y: 3826 },
    { x: new Date(2020, 06, 14), y: 3883 },
    { x: new Date(2020, 06, 15), y: 3910 },
    { x: new Date(2020, 06, 16), y: 3939 },
    { x: new Date(2020, 06, 17), y: 3964 },
    { x: new Date(2020, 06, 18), y: 3983 },
    { x: new Date(2020, 06, 19), y: 4007 },
    { x: new Date(2020, 06, 20), y: 4012 },
    { x: new Date(2020, 06, 21), y: 4048 },
    { x: new Date(2020, 06, 22), y: 4077 },
    { x: new Date(2020, 06, 23), y: 4110 },
    ],
    },
    ],
    });

chart1.render();

//Daily Cases
var chart2 = new CanvasJS.Chart("chartContainer2", {
  title: {
    text: "Daily Cases",
  },
  data: [
    {
      type: "line",

      dataPoints: [
        { x: new Date(2020, 06, 12), y: 31 },
        { x: new Date(2020, 06, 13), y: 23 },
        { x: new Date(2020, 06, 14), y: 57 },
        { x: new Date(2020, 06, 15), y: 27 },
        { x: new Date(2020, 06, 16), y: 29 },
        { x: new Date(2020, 06, 17), y: 25 },
        { x: new Date(2020, 06, 18), y: 19 },
        { x: new Date(2020, 06, 19), y: 24 },
        { x: new Date(2020, 06, 20), y: 5 },
        { x: new Date(2020, 06, 21), y: 36 },
        { x: new Date(2020, 06, 22), y: 29 },
        { x: new Date(2020, 06, 23), y: 33 },
      ],
    },
  ],
});

chart2.render();

//Total Deaths
var chart3 = new CanvasJS.Chart("chartContainer3", {
  title: {
    text: "Total Deaths",
  },
  data: [
    {
      type: "line",

      dataPoints: [
        { x: new Date(2020, 06, 12), y: 193 },
        { x: new Date(2020, 06, 13), y: 193 },
        { x: new Date(2020, 06, 14), y: 193 },
        { x: new Date(2020, 06, 15), y: 193 },
        { x: new Date(2020, 06, 16), y: 193 },
        { x: new Date(2020, 06, 17), y: 194 },
        { x: new Date(2020, 06, 18), y: 194 },
        { x: new Date(2020, 06, 19), y: 194 },
        { x: new Date(2020, 06, 20), y: 195 },
        { x: new Date(2020, 06, 21), y: 197 },
        { x: new Date(2020, 06, 22), y: 200 },
        { x: new Date(2020, 06, 23), y: 201 },
      ],
    },
  ],
});

chart3.render();

//Daily Deaths
var chart4 = new CanvasJS.Chart("chartContainer4", {
  title: {
    text: "Daily Deaths",
  },
  data: [
    {
      type: "line",

      dataPoints: [
        { x: new Date(2020, 06, 12), y: 0 },
        { x: new Date(2020, 06, 13), y: 0 },
        { x: new Date(2020, 06, 14), y: 0 },
        { x: new Date(2020, 06, 15), y: 0 },
        { x: new Date(2020, 06, 16), y: 0 },
        { x: new Date(2020, 06, 17), y: 1 },
        { x: new Date(2020, 06, 18), y: 0 },
        { x: new Date(2020, 06, 19), y: 0 },
        { x: new Date(2020, 06, 20), y: 1 },
        { x: new Date(2020, 06, 21), y: 2 },
        { x: new Date(2020, 06, 22), y: 3 },
        { x: new Date(2020, 06, 23), y: 1 },
      ],
    },
  ],
});

chart4.render();
};
