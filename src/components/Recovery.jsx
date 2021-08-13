import React from 'react';
import './signup.css';
import { useHistory } from 'react-router-dom';
function Recovery() {
  const history = useHistory();
  return (
    <div className="signup">
      <div className="left">
        <h1 style={{ color: '#193aba' }}>Recovery </h1>

        <form action="">
          <input type="password" placeholder="New Password" />
          <input type="password" placeholder="Confirm Password" />
        </form>
        <button onClick={() => history.push('/')} className="login">
          Save Password
        </button>
      </div>
      <div className="right">
        <img style={{ width: '600px' }} src="images/recovery.png" alt="" />
      </div>
    </div>
  );
}

export default Recovery;
