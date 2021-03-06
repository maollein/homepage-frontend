import React, { useEffect } from 'react';
import Blog from './Blog/Blog';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './home/Home';
import MainNav from './navigation/MainNav';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogPostPage from './Blog/BlogPostPage';
import LoginForm from './UserPage/LoginForm';
import { hydrateUser } from './utils/utils';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './reducers/userReducer';
import { IAppState } from './store';
import WriterPage from './writer/WriterPage';

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
      <div className='container-fluid main-container'>
        <div className='row h-100'>
          <div className='d-none d-lg-block col-lg-2'>
          </div>
          <div className='col-md-12 col-lg-8 px-0'>
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
                {user.user ? <Redirect to='/profile' /> : <LoginForm />}
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
                <WriterPage />
              </Route>
              <Route path='/'>
                <Home />
              </Route>
            </Switch>
          </div>
          <div className='d-none d-lg-block col-lg-2'>
          </div>
        </div>
      </div>
      <footer id='main-footer'>&copy; Matti Leinonen {new Date().getFullYear()}</footer>
    </Router>
  );
};

export default App;