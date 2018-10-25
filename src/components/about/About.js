import React, { Component } from 'react';
import './About.css';

class About extends Component {
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
            <div className="about">
                <section className="side-image-content">
                    <div className="side-image">
                        <div className="left">
                            <div className="reveal-effect se2-white wow" data-aos="slide-effect">
                                <img src="assets/images/image1.jpg" alt="Image1" />
                            </div>
                            <div className="reveal-effect se2-white wow small-image" data-aos="slide-effect">
                                <img src="assets/images/image2.jpg" alt="Image1" />
                            </div>
                        </div>
                        <div className="right">
                            <div className="reveal-effect se2-white wow" data-aos="slide-effect">
                                <img src="assets/images/image3.jpg" alt="Image1" />
                            </div>
                        </div>
                    </div>
                    <div className="side-content">
                        <div className="titles">
                            <span className="title-bg"></span>
                            <h3>SOY CRISTIAN MÁRQUEZ</h3>
                        </div>
                        <p><u>Ingeniero de Sistemas</u>, <u>Desarrollador Web</u> de la Universidad del Cauca y <u>Magíster</u> en Tecnologías de Información para el Negocio de la Universidad de lo Andes, Bogotá.</p>
                        <p>Con 28 años de edad soy un experto en el desarrollo de todo tipo de Aplicaciones Web, con fuertes habilidades en el <strong>UI/Front End</strong>, soy un profesional honesto, comprometido, responsable y dedicado.</p>
                    </div>
                </section>
                <section className="feeding-coddle">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-2 col-md-2 col-6">
                                <div className="icon-container">
                                    <i className="icon fab fa-angular"></i>
                                </div>
                                <h6>Angular</h6>
                            </div>
                            <div className="col-lg-2 col-md-2 col-6">
                                <div className="icon-container">
                                    <i className="icon fab fa-react"></i>
                                </div>
                                <h6>React</h6>
                            </div>
                            <div className="col-lg-2 col-md-2 col-6">
                                <div className="icon-container">
                                    <i className="icon fab fa-html5"></i>
                                </div>
                                <h6>HTML 5</h6>
                            </div>
                            <div className="col-lg-2 col-md-2 col-6">
                                <div className="icon-container">
                                    <i className="icon fab fa-js"></i>
                                </div>
                                <h6>Javascript</h6>
                            </div>
                            <div className="col-lg-2 col-md-2 col-6">
                                <div className="icon-container">
                                    <i className="icon fab fa-css3"></i>
                                </div>
                                <h6>CSS</h6>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default About;
