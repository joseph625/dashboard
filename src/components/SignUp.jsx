import React from 'react';
import './signup.css';
import { useHistory } from 'react-router-dom';
function SignUp() {
  const history = useHistory();
  return (
    <div className="signup">
      <div className="left">
        <h1 style={{ color: '#193aba' }}>Sign Up to your dashboard</h1>

        <form action="">
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button onClick={() => history.push('/')} className="submit">
            SignUp
          </button>
        </form>
        <button onClick={() => history.push('/login')} className="login">
          Log in
        </button>
      </div>
      <div className="right">
        <img style={{ width: '600px' }} src="images/signup.png" alt="" />
      </div>
    </div>
  );
}

export default SignUp;
