import Plotly from "plotly.js-dist-min";

function renderChart(frames, ibd, imax) {
  const trace1 = [
    {
      x: [],
      y: [],
      mode: "lines",
      line: {
        color: "black",
      },
    },
  ];
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
      title: "x",
      range: [1, imax],
      fixedrange: true,
    },
    yaxis: {
      title: "u",
      range: [-1, 1],
      fixedrange: true,
    },
    plot_bgcolor: "antiquewhite",
    paper_bgcolor: "antiquewhite",
  };

  // Create the initial graph
  Plotly.newPlot("chart", data, layout, { responsive: true }).then(function () {
    // Animate the graph
    Plotly.animate("chart", frames, {
      frame: { duration: 10 },
      transition: { duration: 1000 },
      mode: "immediate",
    });
  });
}

export { renderChart };
