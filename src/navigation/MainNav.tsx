import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IAppState } from '../store';
import UserMenu from './UserMenu';

const MainNav: React.FC = () => {

  const user = useSelector((state: IAppState) => state.user);

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className="container-fluid">
        <Link className='navbar-brand' to='/home'>Matti</Link>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#mainNavLinks'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='mainNavLinks'>
          <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link' id="main-nav-home-link" to='/home'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' id="main-nav-blog-link" to='/blog'>Blog</Link>
            </li>
            {user.user
              ? <li className='nav-item'>
                <Link className='nav-link' id="main-nav-writer-link" to='/writer'>Writer</Link>
              </li>
              : null
            }
          </ul>
          <ul className='navbar-nav ms-auto mt-2 mt-lg-0'>
            {user.user
              ? <UserMenu user={user.user} />
              : <li className='nav-item'>
                <Link className='nav-link' to='/login'>Sign in</Link>
              </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;