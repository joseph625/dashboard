import React from 'react';
import './signup.css';
import { useHistory } from 'react-router-dom';
function Login() {
  const history = useHistory();
  return (
    <div className="signup">
      <div className="left">
        <h1 style={{ color: '#193aba' }}>Log In to your dashboard</h1>

        <form action="">
          <input type="text" placeholder="Username or Email" />
          <input type="password" placeholder="Password" />
        </form>
        <button onClick={() => history.push('/')} className="login">
          Log in
        </button>
        <br />
        <button className="recovery" onClick={() => history.push('/recovery')}>
          Forgot passwrod?
        </button>
      </div>
      <div className="right">
        <img style={{ width: '600px' }} src="images/login.png" alt="" />
      </div>
    </div>
  );
}

export default Login;
