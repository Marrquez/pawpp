import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    constructor(props) {
        super();
        this.state = { }
    }
    componentWillMount(){ }
    componentDidMount(){ }
    componentWillUnmount() { }
    componentWillReceiveProps(nextProps){ }
    shouldComponentUpdate(nextProps, nextState){ }
    componentWillUpdate(nextProps, nextState){ }
    componentDidUpdate(prevProps, prevState){ }
    render() {
        return (
            <div>
                <section className="footer-bar">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <figure><img src="assets/images/contact-icon01.png" alt="Image1" /></figure>
                                <h4>E-MAILS</h4>
                                <address>info@coddle.com.br</address>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <figure><img src="assets/images/contact-icon02.png" alt="Image1" /></figure>
                                <h4>PHONES</h4>
                                <address>+380 (98) 294 80 86</address>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <figure><img src="assets/images/contact-icon03.png" alt="Image1" /></figure>
                                <h4>SUPPORT</h4>
                                <address>Mon to Fri 09:00h to 18:00h</address>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <figure><img src="assets/images/contact-icon04.png" alt="Image1" /></figure>
                                <h4>LOCATION</h4>
                                <address>Ring Central 796 A/3, Chicago</address>
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
                                <small>© 2018 Warrdnez | All Rights Reserved.</small>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;
