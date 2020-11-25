import React, { useEffect } from 'react';
import Blog from './Blog/Blog';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './home/Home';
import MainNav from './navigation/MainNav';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogPostPage from './Blog/BlogPostPage';
import LoginForm from './UserPage/LoginForm';
import { hydrateUser } from './utils/hydrate';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './reducers/userReducer';
import { IAppState } from './store';
import Writer from './writer/Writer';

const App: React.FC = () => {

  const dispatch = useDispatch();
  const user = useSelector((state: IAppState) => state.user);

  useEffect(() => {
    const user = hydrateUser();
    if (user) dispatch(setUser(user));
  }, []);

  return (
    <Router>
      <MainNav />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-2'>
          </div>
          <div className='col-md-12 col-lg-8'>
            <Switch>
              <Route path='/home'>
                <Home />
              </Route>
              <Route path='/blog/:id'>
                <BlogPostPage />
              </Route>
              <Route path='/blog'>
                <Blog />
              </Route>
              <Route path='/login'>
                {user.user ? <Redirect to='/profile'/> : <LoginForm /> }
              </Route>
              <Route path='/profile'>
                {user.user 
                  ? <div>
                    <h3>{user.user.name}</h3> 
                  </div>
                  : <Redirect to='/login' />
                }
              </Route>
              <Route path='/writer'>
                <Writer />
              </Route>
            </Switch>
          </div>
          <div className='col-lg-2'>
          </div>
        </div>
      </div>
      <footer id='main-footer'>&copy; Matti Leinonen {new Date().getFullYear()}</footer>
    </Router>
  );
};

export default App;