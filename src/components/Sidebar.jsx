import React from 'react';
import './sidebar.css';
import { useHistory } from 'react-router-dom';
function Sidebar() {
  const history = useHistory();
  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <img className="dashboard-logo" src="images/dashboard.png" alt="" />
          </li>
          <li onClick={() => history.push('/')}>
            <i className="fas fa-home"></i>
            <span>Home</span>
          </li>
          <li onClick={() => history.push('/teacher')}>
            <i className="fas fa-chalkboard-teacher"></i>
            <span>Teachers</span>
          </li>
          <li onClick={() => history.push('/student')}>
            <i className="fas fa-book-reader"></i>
            <span>Students</span>
          </li>
          <li onClick={() => history.push('/parents')}>
            <i class="fas fa-user-friends"></i>
            <span>Parents</span>
          </li>
          <li onClick={() => history.push('/assignment')}>
            <i className="fas fa-book home__icon" />
            <span>Assignment</span>
          </li>
          <li onClick={() => history.push('/messages')}>
            <i className="far fa-envelope home__icon" />
            <span>Messages</span>
          </li>
          <li onClick={() => history.push('/signup')}>
            <i className="far fa-user home__icon" />
            <span>SignUp</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
