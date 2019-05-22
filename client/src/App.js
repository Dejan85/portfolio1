import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "../src/sass/main.scss";

// components
import MainRouter from "./MainRouter";

function App() {
  return (
    <Router>
      <MainRouter />
    </Router>
  );
}

export default App;
