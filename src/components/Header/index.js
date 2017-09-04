import React from 'react';
import Logo from '../Logo';

const Header = () =>
  <header className="header d-flex flex-row justify-content-between align-items-center">
    <div className="logo d-flex flex-row align-items-center">
      <Logo />
      <h1>ATOM</h1>
    </div>
    <div className="secondary-pannel d-flex flex-row align-items-center">
      <div className="search">
        <form>
          <input
            type="text"
            placeholder="search bot"
            className="form-control"
          />
        </form>
      </div>
      <div className="meta-links">
        <a href="#">Developer Portal</a>
        <a className="login-btn" href="#">
          Sign In
        </a>
      </div>
    </div>
  </header>;

export default Header;
