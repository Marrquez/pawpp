import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
  render() {
    return (
      <nav className="menu navbar">
        <div className="logo"> <a href="index.html" className="transition"> <img src="assets/images/logo-light.png" alt="Image1" className="logo-light" /> <img src="assets/images/logo-colored.png" alt="Image1" className="logo-colored" /></a> </div>
        <div className="hamburger-menu"> <span></span> <span></span> <span></span></div>
        <div className="search-btn"></div>
        <ul className="navbar-nav">
          <li className="nav-item"><a href="index.html" className="nav-link transition">HOME</a></li>
          <li className="nav-item"><a href="coddle.html" className="nav-link transition">CODDLE</a></li>
          <li className="nav-item"><a href="services.html" className="nav-link transition">SERVICES</a></li>
          <li className="nav-item"><a href="google.com" className="nav-link">WORKS</a>
            <ul>
              <li><a href="works-spaced-grid.html" className="transition">SPACED GRID</a></li>
              <li><a href="works-nonspaced-grid.html" className="transition">NONSPACED GRID</a></li>
              <li><a href="works-masonry-grid.html" className="transition">MASONRY GRID</a></li>
              <li><a href="works-retro-grid.html" className="transition">RETRO GRID</a></li>
            </ul>
          </li>
          <li className="nav-item"><a href="news.html" className="nav-link transition">NEWS</a></li>
          <li className="nav-item"><a href="contact.html" className="nav-link transition">CONTACT</a></li>
        </ul>
      </nav>
    );
  }
}

export default Menu;
