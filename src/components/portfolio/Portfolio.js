import React, { Component } from 'react';
import './Portfolio.css';

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
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
      </div>
    );
  }
}

export default Portfolio;
