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
      color: "#1a5f7a",
    },
  };

  // Chart data
  const data = [trace1, trace2];

  // Chart layout
  const layout = {
    title: "Wave rendered...",
    xaxis: {
      title: "t",
      range: [1, imax],
      fixedrange: true,
      tickcolor: "black",
      color: "black",
      automargin: true,
    },
    yaxis: {
      title: "u",
      range: [-1, 1],
      fixedrange: true,
      tickcolor: "black",
      zerolinecolor: "#ededeb",
      color: "black",
      automargin: true,
    },
    plot_bgcolor: "#ededeb",
    paper_bgcolor: "#ededeb",
  };

  // Create the initial graph
  Plotly.newPlot("chart", data, layout, {
    // responsive: true,
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
