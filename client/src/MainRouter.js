import React from 'react';
import { Route } from 'react-router-dom';

// components
import Home from './components/layout/home/Home';
import About from './components/layout/about/About';
import Services from './components/layout/services/Services';

const Router = () => {
  return (
    <>
      <Route exact to='/' component={Home} />
      <Route exact to='/' component={About} />
      <Route exact to='/' component={Services} />
    </>
  );
};

export default Router;
