import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { removeUser } from '../reducers/userReducer';
import loginService from '../services/loginService';
import { IUserInfo } from '../types/types';

const UserMenu: React.FC<{ user: IUserInfo }> = ({ user }) => {

  const dispatch = useDispatch();
  const history = useHistory();

  const signOut = async () => {
    try {
      await loginService.logout();
      sessionStorage.removeItem('user');
      dispatch(removeUser());
      history.push('/login');
    } catch (e) {
      alert('Logout failed! Try again later or clear cookies and session storage.');
    }
  };

  return (
    <li className='nav-item dropdown'>
      <a className='nav-link dropdown-toggle' id="user-menu" href='#' role='button' data-bs-toggle='dropdown'>{user.name}</a>
      <ul className='dropdown-menu dropdown-menu-end'>
          <li><Link className='dropdown-item' to='/profile'>Profile</Link></li>
          <li><a className='dropdown-item' id="user-menu-logout-btn" href='#' onClick={signOut}>Sign out</a></li>
      </ul>
    </li>
  );
};

export default UserMenu;