import React from "react";
import { NavbarMain } from "./components/NavbarMain.js";
import { WaveGenerate } from "./components/WaveGenerate.js";
import "./stylesheets/state.css";

function State() {
  return (
    <div>
      <NavbarMain />
      <WaveGenerate />
    </div>
  );
}

export { State };
