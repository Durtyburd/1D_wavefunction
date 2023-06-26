import React from "react";
import { renderChart } from "../functions/renderChart.js";
import { getWaveVariables } from "../functions/getWaveVariables.js";
import { parameters } from "../functions/parameters.js";
import { defineArrays } from "../functions/defineArrays.js";
import { timeStep } from "../functions/timeStep.js";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";

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
      <Box sx={{ height: "50%" }}>
        <Typography
          variant="h2"
          sx={{
            padding: "5% 5% 3% 5%",
            textAlign: "center",
          }}
        >
          <strong>Wave Generator</strong>
        </Typography>
      </Box>
      <Box align="center" padding="0% 5% 5% 5%">
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
      </Box>
    </>
  );
}

export { WaveGenerate };
