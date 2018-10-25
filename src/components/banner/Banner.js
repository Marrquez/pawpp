import React, { Component } from 'react';
import './Banner.css';

class Banner extends Component {
    constructor(props) {
        super();
        this.state = {
            title: "APLICACIONES WEB",
            description: "Experto en el desarrollo de todo tipo de Aplicaciones Web, todo a tu medida, con las últimas tecnologías."
        }
    }
    componentWillMount(){}
    componentDidMount(){}
    componentWillUnmount() {}
    componentWillReceiveProps(nextProps){
        this.setHeaderData(nextProps.view);
    }
    componentWillUpdate(nextProps, nextState){}
    componentDidUpdate(prevProps, prevState){}
    navigate(view, header){
        this.props.navigate(view, header);
        this.setHeaderData(view);
    }
    setHeaderData(view){
        switch(view){
            case 'contact':
                this.setState({title: 'Escríbeme', description: 'Puedes contactarme a través del siguiente Formulario de contacto o través de mis Redes Sociales'});
                break;

            case 'knowledge':
                this.setState({title: 'Conocimientos Técnicos', description: 'Durante toda mi vida como profesional he trabajado en el desarrollo de Aplicaciones Web, con distintas tecnologías en diferentes versiones.'});
                break;

            default:
                this.setState({title: 'APLICACIONES WEB', description: 'Experto en el desarrollo de todo tipo de Aplicaciones Web, todo a tu medida, con las últimas tecnologías.'});
                break;
        }
    }
    render() {
        return (
            <div className="banner inner">
                <h2>{this.state.title}</h2>
                <p>{this.state.description}</p>
                <button onClick={() => this.navigate("contact", "header int-header")} className="ghost-btn" >
                    <svg>
                        <defs>
                            <linearGradient>
                                <stop offset="0%" stopColor="#FF8282"/>
                                <stop offset="100%" stopColor="#E178ED" />
                            </linearGradient>
                        </defs>
                        <rect width="206" height="50" x="5" y="5" rx="25" fill="none" stroke="#ffffff"></rect>
                    </svg>
                    <span>¡Escríbeme!</span>
                </button>
            </div>
        );
    }
}

export default Banner;
