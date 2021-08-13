import React from 'react';
import './head&foot.css';

function Header() {
  return (
    <>
      <div className="header">
        <div className="header-search">
          <i className="fas fa-search" style={{ cursor: 'pointer' }}></i>
          <input type="text" placeholder="Search here.." />
        </div>
        <i className="fas fa-bell">
          <span className="notification">a</span>
        </i>
        <i className="fas fa-user"></i>
        <span>Username</span>
      </div>
    </>
  );
}

export default Header;
