import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="preloader">
          <svg className="spinner" viewBox="0 0 50 50">
            <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
          </svg>
        </div>
        <div className="transition-overlay"></div>
        <aside className="hamburger-menu-box">
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
        <div className="search-box">
          <div className="inner">
            <h4>CODDLE SEARCH</h4>
            <form>
              <input type="text" placeholder="Type here to make search" />
                <button type="submit"><img src="assets/images/search-icon.svg" alt="Image1" /></button>
            </form>
          </div>
        </div>
        <header className="header">
          <div id="particles-bg"></div>
          <nav className="navbar">
            <div className="logo"> <a href="index.html" className="transition"> <img src="assets/images/logo-light.png" alt="Image1" className="logo-light" /> <img src="assets/images/logo-colored.png" alt="Image1" className="logo-colored" /></a> </div>

            <div className="hamburger-menu"> <span></span> <span></span> <span></span></div>

            <div className="search-btn"></div>

            <a href="google.com" className="custom-btn">DRIBBBLE</a>
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
          <div className="inner">
            <h2>IDEA FACTORY</h2>
            <p>Coddle is a commercial web and digital agency, known for unique conceptual images and ideas. His interest in satire and narrative influences his work behind the camera.</p>
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
              <span>Discover Now</span> </a> </div>

        </header>
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
        <section className="main-features">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="titles">
                  <span className="title-bg"></span>
                  <h3>MAIN FEATURES</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="feature-box">
                  <figure><img src="assets/images/icon01.png" alt="Image1" /></figure>
                  <span></span>
                  <h5>UI-UX DESIGN</h5>
                  <p>Interactive digital experiences are continually becoming more amazing and more complex to </p>
                  <ul>
                    <li><a href="google.com"><img src="assets/images/icon-check.svg" alt="Image1" />Web Design</a></li>
                    <li><a href="google.com"><img src="assets/images/icon-check.svg" alt="Image1" />Development</a></li>
                    <li><a href="google.com"><img src="assets/images/icon-check.svg" alt="Image1" />User Experience</a></li>
                    <li><a href="google.com"><img src="assets/images/icon-check.svg" alt="Image1" />Digital Ads</a></li>
                  </ul>
                  <a href="google.com" className="more-link">+</a> </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="feature-box">
                  <figure><img src="assets/images/icon02.png" alt="Image1" /></figure>
                  <span></span>
                  <h5>MARKETTING</h5>
                  <p>Interactive digital experiences are continually becoming more amazing and more complex to </p>
                  <ul>
                    <li><a href="google.com"><img src="assets/images/icon-check.svg" alt="Image1" />Web Design</a></li>
                    <li><a href="google.com"><img src="assets/images/icon-check.svg" alt="Image1" />Development</a></li>
                    <li><a href="google.com"><img src="assets/images/icon-check.svg" alt="Image1" />User Experience</a></li>
                    <li><a href="google.com"><img src="assets/images/icon-check.svg" alt="Image1" />Digital Ads</a></li>
                  </ul>
                  <a href="google.com" className="more-link">+</a> </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="feature-box">
                  <figure><img src="assets/images/icon03.png" alt="Image1" /></figure>
                  <span></span>
                  <h5>WEB STRATEGY</h5>
                  <p>Interactive digital experiences are continually becoming more amazing and more complex to </p>
                  <ul>
                    <li><a href="google.com"><img src="assets/images/icon-check.svg" alt="Image1" />Web Design</a></li>
                    <li><a href="google.com"><img src="assets/images/icon-check.svg" alt="Image1" />Development</a></li>
                    <li><a href="google.com"><img src="assets/images/icon-check.svg" alt="Image1" />User Experience</a></li>
                    <li><a href="google.com"><img src="assets/images/icon-check.svg" alt="Image1" />Digital Ads</a></li>
                  </ul>
                  <a href="google.com" className="more-link">+</a> </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="feature-box">
                  <figure><img src="assets/images/icon04.png" alt="Image1" /></figure>
                  <span></span>
                  <h5>DEVELOPMENT</h5>
                  <p>Interactive digital experiences are continually becoming more amazing and more complex to </p>
                  <ul>
                    <li><a href="google.com"><img src="assets/images/icon-check.svg" alt="Image1" />Web Design</a></li>
                    <li><a href="google.com"><img src="assets/images/icon-check.svg" alt="Image1" />Development</a></li>
                    <li><a href="google.com"><img src="assets/images/icon-check.svg" alt="Image1" />User Experience</a></li>
                    <li><a href="google.com"><img src="assets/images/icon-check.svg" alt="Image1" />Digital Ads</a></li>
                  </ul>
                  <a href="google.com" className="more-link">+</a> </div>
              </div>
            </div>

          </div>
        </section>
        <section className="recent-works">
          <div className="titles"> <span className="title-bg"></span>
            <h3>RECENT WORKS</h3>
          </div>
          <ul className="works-filter">
            <li><a href="google.com" data-filter="*" className="current">ALL</a> </li>
            <li><a href="google.com" data-filter=".webuiux">WEB UI-UX</a></li>
            <li><a href="google.com" data-filter=".mobileapps">MOBILE APPS</a> </li>
            <li><a href="google.com" data-filter=".development">DEVELOPMENT</a> </li>
          </ul>
          <ul className="works-grid">
            <li className="webuiux">
              <div className="coddle__box">
                <figure className="coddle__box__figure">
                  <div className="reveal-effect se2-white wow" data-aos="slide-effect"><img className="coddle__box__image" src="assets/images/isolayer1.jpg" alt="Image1"></img></div>
                  <div className="coddle__box__deco coddle__box__deco--shine">
                    <div></div>
                  </div>
                  <figcaption className="coddle__box__caption">
                    <h4 className="coddle__box__title"><a href="images/isolayer1.jpg" data-fancybox>IPHONE X</a></h4>
                    <p className="coddle__box__description">DIGITAL CREATION UI-UX</p>
                  </figcaption>
                </figure>
              </div></li>
            <li className="mobileapps">
              <div className="coddle__box">
                <figure className="coddle__box__figure">
                  <div className="reveal-effect se2-white wow" data-aos="slide-effect"> <img className="coddle__box__image" src="assets/images/isolayer2.jpg" alt="Image1" /></div>
                  <div className="coddle__box__deco coddle__box__deco--shine">
                    <div></div>
                  </div>
                  <figcaption className="coddle__box__caption">
                    <h4 className="coddle__box__title"><a href="images/isolayer2.jpg" data-fancybox>MOON WATCH</a></h4>
                    <p className="coddle__box__description">DIGITAL CREATION UI-UX</p>
                  </figcaption>
                </figure>
              </div>

            </li>
            <li className="development">
              <div className="coddle__box">
                <figure className="coddle__box__figure">
                  <div className="reveal-effect se2-white wow" data-aos="slide-effect"> <img className="coddle__box__image" src="assets/images/isolayer3.jpg" alt="Image1" /></div>
                  <div className="coddle__box__deco coddle__box__deco--shine">
                    <div></div>
                  </div>
                  <figcaption className="coddle__box__caption">
                    <h4 className="coddle__box__title"><a href="images/isolayer3.jpg" data-fancybox>THE DESIGN VALUE</a></h4>
                    <p className="coddle__box__description">DIGITAL CREATION UI-UX</p>
                  </figcaption>
                </figure>
              </div>
            </li>
            <li>
              <div className="coddle__box">
                <figure className="coddle__box__figure">
                  <div className="reveal-effect se2-white wow" data-aos="slide-effect"><img className="coddle__box__image" src="assets/images/isolayer4.jpg" alt="Image1" /></div>
                  <div className="coddle__box__deco coddle__box__deco--shine">
                    <div></div>
                  </div>
                  <figcaption className="coddle__box__caption">
                    <h4 className="coddle__box__title"><a href="images/isolayer4.jpg" data-fancybox>MISSING PUZZLE</a></h4>
                    <p className="coddle__box__description">DIGITAL CREATION UI-UX</p>
                  </figcaption>
                </figure>
              </div>
            </li>
            <li>
              <div className="coddle__box">
                <figure className="coddle__box__figure">
                  <div className="reveal-effect se2-white wow" data-aos="slide-effect"><img className="coddle__box__image" src="assets/images/isolayer5.jpg" alt="Image1" /></div>
                  <div className="coddle__box__deco coddle__box__deco--shine">
                    <div></div>
                  </div>
                  <figcaption className="coddle__box__caption">
                    <h4 className="coddle__box__title"><a href="images/isolayer5.jpg" data-fancybox>NEXT BEAT</a></h4>
                    <p className="coddle__box__description">DIGITAL CREATION UI-UX</p>
                  </figcaption>
                </figure>
              </div>
            </li>
            <li>
              <div className="coddle__box">
                <figure className="coddle__box__figure">
                  <div className="reveal-effect se2-white wow" data-aos="slide-effect"><img className="coddle__box__image" src="assets/images/isolayer6.jpg" alt="Image1" /></div>
                  <div className="coddle__box__deco coddle__box__deco--shine">
                    <div></div>
                  </div>
                  <figcaption className="coddle__box__caption">
                    <h4 className="coddle__box__title"><a href="images/isolayer6.jpg" data-fancybox>2 CARDS</a></h4>
                    <p className="coddle__box__description">DIGITAL CREATION UI-UX</p>
                  </figcaption>
                </figure>
              </div>
            </li>
            <li>
              <div className="coddle__box">
                <figure className="coddle__box__figure">
                  <div className="reveal-effect se2-white wow" data-aos="slide-effect"> <img className="coddle__box__image" src="assets/images/isolayer7.jpg" alt="Image1" /></div>
                  <div className="coddle__box__deco coddle__box__deco--shine">
                    <div></div>
                  </div>
                  <figcaption className="coddle__box__caption">
                    <h4 className="coddle__box__title"><a href="images/isolayer7.jpg" data-fancybox>REVIEW</a></h4>
                    <p className="coddle__box__description">DIGITAL CREATION UI-UX</p>
                  </figcaption>
                </figure>
              </div>
            </li>
            <li>
              <div className="coddle__box">
                <figure className="coddle__box__figure">
                  <div className="reveal-effect se2-white wow" data-aos="slide-effect"> <img className="coddle__box__image" src="assets/images/isolayer8.jpg" alt="Image1" /></div>
                  <div className="coddle__box__deco coddle__box__deco--shine">
                    <div></div>
                  </div>
                  <figcaption className="coddle__box__caption">
                    <h4 className="coddle__box__title"><a href="images/isolayer9.jpg" data-fancybox>HERDIUS</a></h4>
                    <p className="coddle__box__description">DIGITAL CREATION UI-UX</p>
                  </figcaption>
                </figure>
              </div></li>
          </ul>
        </section>
        <section className="clients">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="titles"> <span className="title-bg"></span>
                  <h3>OUR CLIENTS</h3>
                </div>
                <ul>
                  <li><img src="assets/images/logo01.jpg" alt="Image1" /></li>
                  <li><img src="assets/images/logo02.jpg" alt="Image1" /></li>
                  <li><img src="assets/images/logo03.jpg" alt="Image1" /></li>
                  <li><img src="assets/images/logo04.jpg" alt="Image1" /></li>
                  <li><img src="assets/images/logo05.jpg" alt="Image1" /></li>
                  <li><img src="assets/images/logo06.jpg" alt="Image1" /></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="recent-news">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="titles"> <span className="title-bg"></span>
                  <h3>RECENT NEWS</h3>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="news-box">
                  <figure><img src="assets/images/news01.jpg" alt="Image1" /></figure>
                  <div className="news-content"> <small>02 August 2018 | by Themezinho</small>
                    <h3>How to Choose the Right Digital Camera for You!</h3>
                    <p>Enjoy low rates when you ship online or at The Coddle Join thousands of businesses making the right shipping decisions with our all-in-one intelligent freight platform</p>
                    <a href="google.com">READ MORE</a> </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="news-box">
                  <figure><img src="assets/images/news02.jpg" alt="Image1" /></figure>
                  <div className="news-content"> <small>02 August 2018 | by Themezinho</small>
                    <h3>We care about empowering business</h3>
                    <p>Sometimes we are a coach and trainer helping a business get better and sometimes we are a matchmaker finding the right partner, investor or distributor.</p>
                    <a href="google.com">READ MORE</a> </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="news-box">
                  <figure><img src="assets/images/news03.jpg" alt="Image1" /></figure>
                  <div className="news-content"> <small>02 August 2018 | by Themezinho</small>
                    <h3>We create beautiful websites across hundreds</h3>
                    <p> Leveraging platforms it has enabled us to sell our video on demand globally to our loyal audience and build a profitable video on demand streaming service.</p>
                    <a href="google.com">READ MORE</a> </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="quote-bar">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h4>LET'S WORK TOGETHER ?</h4>
                <p>If you’re shuddering and thinking “Is this as good as it gets?” and wouldn’t even consider staying in the same job, company, or industry for the next decade, you’re not alone.</p>
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
                  <span>GET IN TOUCH</span> </a> </div>
            </div>
          </div>
        </section>
        <section className="footer-bar">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <figure><img src="assets/images/contact-icon01.png" alt="Image1" /></figure>
                <h4>E-MAILS</h4>
                <address>
                  info@coddle.com.br
                </address>
              </div>
              <div className="col-lg-3 col-md-6">
                <figure><img src="assets/images/contact-icon02.png" alt="Image1" /></figure>
                <h4>PHONES</h4>
                <address>
                  +380 (98) 294 80 86
                </address>
              </div>
              <div className="col-lg-3 col-md-6">
                <figure><img src="assets/images/contact-icon03.png" alt="Image1" /></figure>
                <h4>SUPPORT</h4>
                <address>
                  Mon to Fri 09:00h to 18:00h
                </address>
              </div>
              <div className="col-lg-3 col-md-6">
                <figure><img src="assets/images/contact-icon04.png" alt="Image1" /></figure>
                <h4>LOCATION</h4>
                <address>
                  Ring Central 796 A/3, Chicago
                </address>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <img src="assets/images/logo-light.png" alt="Image1" className="logo" />
                  <p>Interactive digital experiences are continually becoming more amazing and more complex to produce.<br />
                    Our team is specially designed to create successful, custom, inn</p>
                  <ul>
                    <li><a href="google.com">Facebook</a></li>
                    <li><a href="google.com">Twitter</a></li>
                    <li><a href="google.com">Behance</a></li>
                    <li><a href="google.com">Dribbble</a></li>
                  </ul>
                  <small>© 2018 Coddle | All Rights Reserved.</small> </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
