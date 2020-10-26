import React from 'react';
import Blog from './Blog/Blog';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './home/Home';
import MainNav from './navigation/MainNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';

const App: React.FC = () => {
  return (
    <Router>
        <MainNav />
          <Container>
          <Row>
            <Col lg='2'>
            </Col>
            <Col md='12' lg='8'>
              <Switch>
                <Route path='/home'>
                  <Home />
                </Route>
                <Route path='/blog'>
                  <Blog />
                </Route>
              </Switch>
            </Col>
            <Col lg='2'>
            </Col>
          </Row>
          </Container>
        <footer id='main-footer'>&copy; Matti Leinonen {new Date().getFullYear()}</footer>
    </Router>
  );
};

export default App;