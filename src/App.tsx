import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import "@arco-design/web-react/dist/css/arco.css";
import 'animate.css';

import Home from './views/Home'
import About from './views/About'
import NotFound from './views/NotFound'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
