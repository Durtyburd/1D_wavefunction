import React from "react";
import { NavbarMain } from "./components/NavbarMain.js";
import { About } from "./components/About.js";
import { WaveGenerate } from "./components/WaveGenerate.js";
import "./stylesheets/state.css";

function State() {
  return (
    <div className="state-div1">
      <NavbarMain />
      <About />
      <WaveGenerate />
    </div>
  );
}

export { State };
