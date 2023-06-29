import React from "react";
import { NavbarMain } from "./components/NavbarMain.js";
import { WaveGenerate } from "./components/WaveGenerate.js";
import Form from "./components/Form.js";
import "./stylesheets/state.css";

function App() {
  return (
    <div>
      <NavbarMain />
      <WaveGenerate />
      <Form />
    </div>
  );
}

export default App;
