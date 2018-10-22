import React, { Component } from 'react';
import './User.css';

class User extends Component {
  render() {
    return (
        <aside className="user hamburger-menu-box">
          <div className="menu">
            <ul className="navbar-nav">
              <li className="nav-item"><a href="index.html" className="nav-link transition">HOME</a></li>
              <li className="nav-item"><a href="coddle.html" className="nav-link transition">CODDLE</a></li>
              <li className="nav-item"><a href="services.html" className="nav-link transition">SERVICES</a></li>
              <li className="nav-item"><a href="http://google.com" className="nav-link">WORKS</a>
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
          </div>
          <div className="inner">
            <div className="swiper-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide"><img src="assets/images/office01.jpg" alt="Image1" /></div>
                <div className="swiper-slide"><img src="assets/images/office02.jpg" alt="Image1" /></div>
                <div className="swiper-slide"><img src="assets/images/office03.jpg" alt="Image1" /></div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
            <p className="lead">A design team building a curated marketplace for UI designers. We're also available for new projects, get in touch! info@themezinho.net</p>
            <a href="google.com" className="ghost-btn">
              <svg>
                <defs>
                  <linearGradient>
                    <stop offset="0%" stopColor="#FF8282"/>
                    <stop offset="100%" stopColor="#E178ED" />
                  </linearGradient>
                </defs>
                <rect width="206" height="50" x="5" y="5" rx="25" fill="none" stroke="#ffffff"></rect>
              </svg>
              <span>Work With Us</span> </a> </div>
        </aside>
    );
  }
}

export default User;
