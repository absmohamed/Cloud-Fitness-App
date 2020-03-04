import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from '..'
import Home from '/Home'
import About from './About';
import Projects from './Projects';
import Blog from './Design';
import Contact from './Contact';


const Pages = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About  />
        </Route>
        <Route path="/project">
          <Projects  />
        </Route>
        <Route path="/design">
          <Design />
        </Route>
        <Route path="/contact">
        <Contact />
      </Route>
        
      </Switch>
    </Router>
  );

};

export default Pages;