import "../stylesheets/about.css";
import { Grid } from "@mui/material";
import React from "react";

function About() {
  return (
    <Grid container>
      <Grid item xs>
        <h1 className="about-title">
          Welcome to the, <br />
          <span className="about-title-span">1D Wave Function Generator</span>!
        </h1>
      </Grid>
    </Grid>
  );
}

export default About;
