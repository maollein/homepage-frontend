import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeUser } from '../reducers/userReducer';
import loginService from '../services/loginService';
import { IUserInfo } from '../types/types';

const UserMenu: React.FC<{user: IUserInfo}> = ({ user }) => {

  const dispatch = useDispatch();

  const signOut = async () => {
    const res = await loginService.logout();
    if (res.status === 200) {
      sessionStorage.removeItem('user');
      dispatch(removeUser());
    } else {
      alert('Logout failed! Try again later or clear cookies.');
    }
  };

  return (
    <li className='nav-item dropdown'>
      <a className='nav-link dropdown-toggle' href='#' role='button' data-toggle='dropdown'>{user.name}</a>
      <div className='dropdown-menu dropdown-menu-right'>
        <Link className='dropdown-item' to='/profile'>Profile</Link>
        <a className='dropdown-item' href='#' onClick={signOut}>Sign out</a>
      </div>
    </li>
  );
};

export default UserMenu;