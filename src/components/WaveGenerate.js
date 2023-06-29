import React from "react";
import { renderChart } from "../functions/renderChart.js";
import { getWaveVariables } from "../functions/getWaveVariables.js";
import { parameters } from "../functions/parameters.js";
import { defineArrays } from "../functions/defineArrays.js";
import { timeStep } from "../functions/timeStep.js";
import { Box, Typography } from "@mui/material";

function handleClick(waveType, passedC, passedCW, passedf0, passedAmp) {
  // Declaring variables from function
  const imax = 800;
  const { c, cw, f0, amp, ibd } = getWaveVariables(
    waveType,
    imax,
    passedC,
    passedCW,
    passedf0,
    passedAmp
  ); //good don't change
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

function WaveGenerate() {
  return (
    <>
      <Box
        align="center"
        padding="10% 5% 2% 5%"
        backgroundColor="#ededeb"
        z-index="99"
      >
        <Typography variant="h2" padding="0% 0% 5% 0%">
          <strong>Wave Generator</strong>
        </Typography>
        <Typography variant="h4" padding="0% 0% 5% 0%">
          Please choose a wave that you would like to see simulated.
        </Typography>
        <Typography sx={{ paddingBottom: "5%" }}>
          *NOTE: The area on the left side of the vertical line represents air
          and the area on the right side represents water.*
        </Typography>
        <br />
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

export { WaveGenerate, handleClick };
