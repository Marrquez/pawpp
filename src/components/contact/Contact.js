import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
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
            <section className="contact">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-10">
                            <form className="row">
                                <div className="col-lg-6">
                                    <h5>HEAD OFFICE</h5>
                                    <address>
                                        <p>Borissa Hymri Central 12B Pozniaky<br />
                                        Istanbul - TURKEY</p>
                                        <p>p: +1 (312)/ 564-0034</p>
                                        <a href="google.com">head [at] coddle.com</a>
                                    </address>
                                </div>
                                <div className="col-lg-6">
                                    <h5>KIEV OFFICE</h5>
                                    <address>
                                        <p>Borissa Hymri Central 12B Pozniaky<br />
                                        Kiev - UKRAINE</p>
                                        <p>p: +1 (312)/ 564-0034</p>
                                        <a href="google.com">kiev [at] coddle.com</a>
                                    </address>
                                </div>
                                <div className="form-group col-md-6">
                                    <input type="text" placeholder="Your name" />
                                </div>
                                <div className="form-group col-md-6">
                                    <input type="text" placeholder="Your surname" />
                                </div>
                                <div className="form-group col-md-6">
                                    <input type="text" placeholder="Your e-mail" />
                                </div>
                                <div className="form-group col-md-6">
                                    <input type="text" placeholder="Your phone" />
                                </div>
                                <div className="form-group col-12">
                                    <input type="text" placeholder="Subject" />
                                </div>
                                <div className="form-group  col-12">
                                    <textarea placeholder="Your Message"></textarea>
                                </div>
                                <div className="form-group  col-12">
                                    <button type="submit">SUBMIT</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;
