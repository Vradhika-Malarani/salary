import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Assests/Nav.css';
import Logo from '../Images/logo.png';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <div className="main-nav-container">
        <div className="logo-container">
          <img src={Logo} alt="Logo" />
        </div>
        <div className={`menu-container ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/home" className={isActive('/home') ? 'active' : ''}>
            Home
          </Link>
          <div
            className="dropdown"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <Link
              className={`dropdown-link ${isActive('/about') ? 'active' : ''}`}
            >
              About <span className="dropdown-symbol">▼</span>
            </Link>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/about/team">Our Team</Link>
                <Link to="/about/mission">Our Mission</Link>
                <Link to="/about/history">Our History</Link>
              </div>
            )}
          </div>
          <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>
            Contact Us
          </Link>
          <Link to="/manage" className={isActive('/manage') ? 'active' : ''}>
            Manage
          </Link>
        </div>
        <div className="profile-container dropdown"
         onMouseEnter={() => setIsDropdownOpen(true)}
         onMouseLeave={() => setIsDropdownOpen(false)}
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
        </svg>
        {isDropdownOpen && (
              <div className="dropdown-menu profile">
                <Link >Logout</Link>
              </div>
            )}
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
};

export default Nav;
