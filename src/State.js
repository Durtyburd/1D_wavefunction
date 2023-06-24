import React from "react";
import { renderChart } from "./components/renderChart.js";
import { getWaveVariables } from "./components/getWaveVariables.js";
import { parameters } from "./components/parameters.js";
import { defineArrays } from "./components/defineArrays.js";
import { timeStep } from "./components/timeStep.js";

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
