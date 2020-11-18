import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IAppState } from '../store';

const MainNav: React.FC = () => {

  const user = useSelector((state: IAppState) => state.user);

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <Link className='navbar-brand' to='/home'>Matti</Link>
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#mainNavLinks'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='mainNavLinks'>
        <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
          <li className='nav-item'>
            <Link className='nav-link' to='/home'>Home</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/blog'>Blog</Link>
          </li>
        </ul>
        <ul className='navbar-nav ml-auto mt-2 mt-lg-0'>
          <li className='nav-item'>
            {user.user ? <Link className='nav-link' to='/profile'>{user.user.name}</Link> : <Link className='nav-link' to='/login'>Sign in</Link>}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainNav;