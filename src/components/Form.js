import React, { useState } from "react";
import { TextField, Box } from "@mui/material";
import "../stylesheets/form.css";

import { handleClick } from "./WaveGenerate.js";

function Form() {
  const [stateC, setStateC] = useState(0);
  const [stateCW, setStateCW] = useState(0);
  const [statef0, setStatef0] = useState(0);
  const [stateAmp, setStateAmp] = useState(0);

  return (
    <div style={{ marginTop: "3%" }}>
      <h2 align="center">Create your own wave</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleClick("cyo", stateC, stateCW, statef0, stateAmp);
        }}
        align="center"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TextField
            type="text"
            variant="outlined"
            color="primary"
            label="Speed in air - m/s"
            onChange={(e) => setStateC(e.target.value)}
            required
          />
          <TextField
            type="text"
            variant="outlined"
            color="primary"
            label="Speed in water - m/s"
            onChange={(e) => setStateCW(e.target.value)}
            required
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TextField
            type="text"
            variant="outlined"
            color="primary"
            label="Frequency of source - Hz"
            onChange={(e) => setStatef0(e.target.value)}
            required
          />
          <TextField
            type="text"
            variant="outlined"
            color="primary"
            label="Source amplitude"
            onChange={(e) => {
              if (
                (e.target.value >= -1 && e.target.value <= 1) ||
                e.target.value === "."
              ) {
                setStateAmp(e.target.value);
              } else {
                alert("Please input a value between -1 and 1.");
              }
            }}
            required
          />
        </Box>
        <button
          color="primary"
          type="submit"
          style={{ marginTop: "2%", marginBottom: "2%" }}
        >
          Generate
        </button>
        <p style={{ marginBottom: "8%" }}>
          *NOTE: When inputting your amplitude values. Please, keep the input
          between -1 and 1.
        </p>
      </form>
    </div>
  );
}

export default Form;
