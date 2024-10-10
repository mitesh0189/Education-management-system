import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark mb-4 py-3"
      style={{
        background: 'linear-gradient(90deg, #00416A, #E4E5E6)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand text-light"
          to="/"
          style={{
            fontSize: '26px',
            fontWeight: 'bold',
            letterSpacing: '1px',
            transition: 'color 0.3s ease',
          }}
          onMouseEnter={(e) => (e.target.style.color = '#FFD700')}
          onMouseLeave={(e) => (e.target.style.color = 'white')}
        >
          Education Management System
        </Link>
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                style={{
                  color: 'white',
                  fontSize: '20px',
                  fontWeight: '500',
                  padding: '8px 20px',
                  borderRadius: '10px',
                  transition: 'background-color 0.3s ease, color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#FFD700';
                  e.target.style.color = '#00416A';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = 'white';
                }}
              >
                Admin Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/teacher"
                style={{
                  color: 'white',
                  fontSize: '20px',
                  fontWeight: '500',
                  padding: '8px 20px',
                  borderRadius: '10px',
                  transition: 'background-color 0.3s ease, color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#FFD700';
                  e.target.style.color = '#00416A';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = 'white';
                }}
              >
                Teacher Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/student"
                style={{
                  color: 'white',
                  fontSize: '20px',
                  fontWeight: '500',
                  padding: '8px 20px',
                  borderRadius: '10px',
                  transition: 'background-color 0.3s ease, color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#FFD700';
                  e.target.style.color = '#00416A';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = 'white';
                }}
              >
                Student Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
