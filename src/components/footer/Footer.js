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
                                <address>warrdnez@gmail.com</address>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <figure><img src="assets/images/contact-icon02.png" alt="Image1" /></figure>
                                <h4>TELEFONOS</h4>
                                <address>+57 300 34 77 99 1</address>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <figure><img src="assets/images/contact-icon03.png" alt="Image1" /></figure>
                                <h4>SOPORTE</h4>
                                <address>Lun a Sáb 09:00h a 18:00h</address>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <figure><img src="assets/images/contact-icon04.png" alt="Image1" /></figure>
                                <h4>UBICACIÓN</h4>
                                <address>Bogotá, Colombia</address>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="footer">
                    <div id="particles-bg"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <img src="assets/images/logo-light.png" alt="Image1" className="logo" />
                                <p>Interactive digital experiences are continually becoming more amazing and more complex to produce.<br />
                                Our team is specially designed to create successful, custom, inn</p>
                                <ul>
                                    <li><a href="http://www.linkedin.com/in/cristian-márquez-1bb55025" rel="noopener noreferrer" target="_blank">Linked In</a></li>
                                    <li><a href="http://www.twitter.com/warrdnez" rel="noopener noreferrer" target="_blank">Twitter</a></li>
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
