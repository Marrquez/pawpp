import React, { Component } from 'react';
import './News.css';

class News extends Component {
  render() {
    return (
        <section className="news recent-news">
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
    );
  }
}

export default News;
