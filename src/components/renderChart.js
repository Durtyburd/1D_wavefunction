import Plotly from "plotly.js-dist-min";

function renderChart(frames, ibd, imax) {
  const trace1 = [
    {
      x: [],
      y: [],
    },
  ];
  let trace2 = {
    y: [-1, 1],
    x: [ibd, ibd],
  };
  const data = [trace1, trace2];

  const layout = {
    title: "Real-time Wave Function",
    xaxis: {
      title: "x",
      range: [1, imax],
    },
    yaxis: {
      title: "u",
      range: [-1, 1],
    },
    height: 1000,
    // width: "100vw",
  };

  // Create the initial graph
  Plotly.newPlot("chart", data, layout).then(function () {
    // Animate the graph
    Plotly.animate("chart", frames, {
      frame: { duration: 50 },
      transition: { duration: 1000 },
    });
  });
}

export { renderChart };
