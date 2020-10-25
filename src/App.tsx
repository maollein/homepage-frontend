import React from 'react';
import Blog from './Blog/Blog';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './home/Home';

const App: React.FC = () => {
  return (
    <Router>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/blog">blog</Link></li>
      </ul>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;