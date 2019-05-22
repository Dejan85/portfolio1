import React from "react";
import { Route } from "react-router-dom";

// components
import Home from "./components/layout/home/Home";

const Router = () => {
  return <Route exact to="/" component={Home} />;
};

export default Router;
