import React from "react";
import { Route } from "react-router-dom";

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

const Router = () => {
  return (
    <>
      <Route exact to="/" component={Header} />
      <Route exact to="/" component={Home} />
      <Route exact to="/" component={About} />
      <Route exact to="/" component={Services} />
      <Route exact to="/" component={Works} />
      {/* <Route exact to="/" component={Skills} /> */}
      <Route exact to="/" component={Portfolio} />
      <Route exact to="/" component={Social} />
      <Route exact to="/" component={Blog} />
      <Route exact to="/" component={Contact} />
      <Route exact to="/" component={Footer} />
    </>
  );
};

export default Router;
