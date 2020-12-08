import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { setUser } from '../reducers/userReducer';
import loginService from '../services/loginService';

const LoginForm: React.FC = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const login = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    try {
      const user = await loginService.login(username, password);
      sessionStorage.setItem('user', JSON.stringify(user));
      dispatch(setUser(user));
      history.push('/home');
    } catch (e) {
      alert(e.response.data.error);
    }

  };

  return (
    <div className="card mx-auto w-75 mt-4 border-dark">
      <form className="card-body w-75 mx-auto" onSubmit={login}>
        <h3>Sign in</h3>
        <div className="form-group mt-3">
          <input className="form-control border-dark"
            id="login-username-input"
            type="text"
            placeholder="username"
            value={username}
            onChange={(event) => setUsername(event?.target.value)}
          />
        </div>
        <div className="form-group">
          <input className="form-control border-dark"
            id="login-password-input"
            type="password"
            placeholder="password"
            value={password}
            onChange={(event) => setPassword(event?.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-outline-dark" id="login-btn" type="submit">Sign in</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;