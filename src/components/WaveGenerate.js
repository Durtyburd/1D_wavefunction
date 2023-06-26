import React from "react";
import { renderChart } from "../functions/renderChart.js";
import { getWaveVariables } from "../functions/getWaveVariables.js";
import { parameters } from "../functions/parameters.js";
import { defineArrays } from "../functions/defineArrays.js";
import { timeStep } from "../functions/timeStep.js";
import { Box, Typography } from "@mui/material";

function WaveGenerate() {
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
    <>
      <Box align="center" padding="5% 5% 5% 5%" backgroundColor="#ededeb">
        <Typography variant="h4" padding="0% 0% 5% 0%">
          Do you want to simulate a light or a sound pulse?
        </Typography>
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
      </Box>
    </>
  );
}

export { WaveGenerate };
