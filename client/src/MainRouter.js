import React from "react";
import { Route, Switch } from "react-router-dom";

// components
import Header from "./components/layout/header/Header";
import Home from "./components/layout/home/Home";
import About from "./components/layout/about/About";
import Services from "./components/layout/services/Services";
import Works from "./components/layout/works/Works";
// import Skills from "./components/layout/skills/Skills";
import Portfolio from "./components/layout/portfolio/Portfolio";
import Blog from "./components/layout/blog/Blog";
import Social from "./components/layout/social/Social";
import Contact from "./components/layout/contact/Contact";
import Footer from "./components/layout/footer/Footer";

import Login from "./components/layout/auth/Login";
import Dashboard from "./components/layout/dashboard/Dashboard";

const Router = () => {
  return (
    <>
      {/* main page */}
      <Route exact path="/" component={Header} />
      <Route exact path="/" component={Home} />
      <Route exact path="/" component={About} />
      <Route exact path="/" component={Services} />
      <Route exact path="/" component={Works} />
      {/* <Route exact path="/" component={Skills} /> */}
      <Route exact path="/" component={Portfolio} />
      <Route exact path="/" component={Social} />
      <Route exact path="/" component={Blog} />
      <Route exact path="/" component={Contact} />
      <Route exact path="/" component={Footer} />

      {/* dashboard */}
      <Route exact path="/login" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
    </>
  );
};

export default Router;
