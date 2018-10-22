import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="about">
        <section className="side-image-content">
          <div className="side-image">
            <div className="left">
              <div className="reveal-effect se2-white wow" data-aos="slide-effect"> <img src="assets/images/image1.jpg" alt="Image1" /> </div>

              <div className="reveal-effect se2-white wow small-image" data-aos="slide-effect"> <img src="assets/images/image2.jpg" alt="Image1" /> </div>

            </div>
            <div className="right">
              <div className="reveal-effect se2-white wow" data-aos="slide-effect"> <img src="assets/images/image3.jpg" alt="Image1" /> </div>

            </div>
          </div>
          <div className="side-content">
            <div className="titles"> <span className="title-bg"></span>
              <h3>ABOUT CODDLE</h3>
            </div>
            <p>Interactive digital experiences are continually becoming <u>more amazing</u> and <u>more complex</u> to produce. Our team is specially designed to create successful, custom, innovative digital products from the initial concept through full product launch.</p>
            <p>Strategists, researchers, product managers, <strong>UX/UI designers</strong>, technologists, web and mobile developers all working together, dedicated to your brand and your product. Talk To Our Team.</p>
            <a href="google.com" className="ghost-btn">
              <svg>
                <defs>
                  <linearGradient id="grad1">
                    <stop offset="0%" stopColor="#FF8282"/>
                    <stop offset="100%" stopColor="#E178ED" />
                  </linearGradient>
                </defs>
                <rect width="206" height="50" x="5" y="5" rx="25" fill="none" stroke="url(#grad1)"></rect>
              </svg>
              <span>Learn More +</span> </a> </div>
        </section>
        <section className="feeding-coddle">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-2 col-md-2 col-6">
                <figure><img src="assets/images/icon-food01.jpg" alt="Image1" /></figure>
                <h6>Slices of Pizza</h6>
                <span className="odometer" id="1"></span>
              </div>
              <div className="col-lg-2 col-md-2 col-6">
                <figure><img src="assets/images/icon-food02.jpg" alt="Image1" /></figure>
                <h6>Box of Donuts</h6>
                <span className="odometer" id="2"></span>
              </div>
              <div className="col-lg-2 col-md-2 col-6">
                <figure><img src="assets/images/icon-food03.jpg" alt="Image1" /></figure>
                <h6>Roll of Tacos</h6>
                <span className="odometer" id="3"></span>
              </div>
              <div className="col-lg-2 col-md-2 col-6">
                <figure><img src="assets/images/icon-food04.jpg" alt="Image1" /></figure>
                <h6>Piece of Hotdog</h6>
                <span className="odometer" id="4"></span>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
