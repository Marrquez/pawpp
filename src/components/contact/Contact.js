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
                                    <h5>EN BOGOTÁ</h5>
                                    <address>
                                        <p>Agenda una reunión<br />
                                        Vía Whatsapp</p>
                                        <p>cel: +57 300 34 77 99 1</p>
                                    </address>
                                </div>
                                <div className="col-lg-6">
                                    <h5>VIDEO CONFERENCIA</h5>
                                    <address>
                                        <p>Escríbeme por Skype<br />
                                            o directamente a mi correo</p>
                                        <p>Skype: warrdnez</p>
                                        <span>warrdnez@gmail.com</span>
                                    </address>
                                </div>
                                <div className="form-group col-md-6">
                                    <input type="text" placeholder="Nombre" />
                                </div>
                                <div className="form-group col-md-6">
                                    <input type="text" placeholder="Correo Electrónico" />
                                </div>
                                <div className="form-group col-md-6">
                                    <input type="text" placeholder="Teléfono" />
                                </div>
                                <div className="form-group col-12">
                                    <input type="text" placeholder="Asunto" />
                                </div>
                                <div className="form-group  col-12">
                                    <textarea placeholder="Mensaje"></textarea>
                                </div>
                                <div className="form-group  col-12">
                                    <button type="submit" className="ghost-btn">
                                        <svg>
                                            <defs>
                                                <linearGradient id="grad1">
                                                    <stop offset="0%" stopColor="#FF8282"></stop>
                                                    <stop offset="100%" stopColor="#E178ED"></stop>
                                                </linearGradient>
                                            </defs>
                                            <rect width="206" height="50" x="5" y="5" rx="25" fill="none" stroke="url(#grad1)"></rect>
                                        </svg>
                                        <span>Enviar</span>
                                    </button>
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
