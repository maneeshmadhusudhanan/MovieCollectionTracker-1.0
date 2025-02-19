import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../header/header.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-bg shadow-lg p-3">
      <div className="container">
        {/* Animated Text */}
        <a className="navbar-brand fw-bold fs-2 text-dark animated-text" href="#">
          <span className="d-inline-block">MOVIE</span> 
          <span className="d-inline-block ms-2">COLLECTION</span> 
          <span className="d-inline-block ms-2">TRACKER</span>
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-dark fw-bold btn btn-outline-dark px-4 py-2 rounded-pill" href="sign">
                Signup
              </a>
            </li>
            <li className="nav-item ms-3">
              <a className="nav-link text-dark fw-bold btn btn-outline-dark px-4 py-2 rounded-pill" href="userdash">
                User Dashboard
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
