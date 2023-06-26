import React from "react";
import { renderChart } from "./functions/renderChart.js";
import { getWaveVariables } from "./functions/getWaveVariables.js";
import { parameters } from "./functions/parameters.js";
import { defineArrays } from "./functions/defineArrays.js";
import { timeStep } from "./functions/timeStep.js";
import { Navbar } from "./components/Navbar.js";
import About from "./components/About.js";
import "./stylesheets/state.css";

function State() {
  function handleClick(waveType) {
    // Declaring variables from function
    const imax = 800;
    const { c, cw, f0, amp, ibd } = getWaveVariables(waveType, imax); //good don't change
    const { dt, nmax, w, tau, t0, s1, s2 } = parameters(c, cw, f0, ibd, imax);
    const { array } = defineArrays(nmax, imax);
    const { frames } = timeStep(
      amp,
      ibd,
      imax,
      dt,
      nmax,
      w,
      tau,
      t0,
      s1,
      s2,
      array
    );
    renderChart(frames, ibd, imax);
  }
  return (
    <div>
      <Navbar />
      <About />
      <div>
        <h1>Do you want to simulate a light or a sound pulse?</h1>
        <button
          onClick={() => {
            handleClick("l");
          }}
        >
          Light
        </button>
        <button
          onClick={() => {
            handleClick("s");
          }}
        >
          Sound
        </button>
      </div>
    </div>
  );
}

export { State };
