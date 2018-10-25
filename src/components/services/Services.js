import React, { Component } from 'react';
import './Services.css';

class Services extends Component {
    constructor(props) {
        super();
        this.state = { }
    }
    componentWillMount(){ }
    componentDidMount(){ }
    componentWillUnmount() { }
    componentWillReceiveProps(nextProps){ }
    componentWillUpdate(nextProps, nextState){ }
    componentDidUpdate(prevProps, prevState){ }
    render() {
        return (
            <section className="services main-features">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="titles">
                                <span className="title-bg"></span>
                                <h3>CONOCIMIENTOS TÉCNICOS</h3>
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
                                <a href="google.com" className="more-link">+</a>
                            </div>
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
                                <a href="google.com" className="more-link">+</a>
                            </div>
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
                                <a href="google.com" className="more-link">+</a>
                            </div>
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
                                <a href="google.com" className="more-link">+</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Services;
