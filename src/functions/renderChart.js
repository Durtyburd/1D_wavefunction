import Plotly from "plotly.js-dist-min";

function renderChart(frames, ibd, imax) {
  const trace1 = {
    x: [ibd, ibd],
    y: [-1, 1],
    line: {
      color: "black",
    },
  };

  let trace2 = {
    y: [-1, 1],
    x: [ibd, ibd],
    line: {
      color: "black",
    },
  };

  const data = [trace1, trace2];

  const layout = {
    xaxis: {
      title: "t",
      range: [1, imax],
      fixedrange: true,
      tickcolor: "black",
      color: "black",
    },
    yaxis: {
      title: "u",
      range: [-1, 1],
      fixedrange: true,
      tickcolor: "black",
      zerolinecolor: "#ededeb",
      color: "black",
    },
    plot_bgcolor: "#ededeb",
    paper_bgcolor: "#ededeb",
  };

  // Create the initial graph
  Plotly.newPlot("chart", data, layout, {
    responsive: true,
  }).then(function () {
    // Animate the graph
    Plotly.animate("chart", frames, {
      color: "white",
      frame: { duration: 10 },
      transition: { duration: 1000 },
      mode: "immediate",
    });
  });
}

export { renderChart };
