import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "../src/sass/main.scss";

// ─── COMPONENTS ─────────────────────────────────────────────────────────────────
//

import MainRouter from "./MainRouter";

//
// ─── REUDX ──────────────────────────────────────────────────────────────────────
//

import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <MainRouter />
      </Router>
    </Provider>
  );
}

export default App;
