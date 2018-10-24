import React, { Component } from 'react';
import './Banner.css';

class Banner extends Component {
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
    navigate(view){
        this.props.navigate({view:view});
    }
    render() {
        return (
            <div className="banner inner">
                <h2>APLICACIONES WEB</h2> 
                <p>Experto en el desarrollo de todo tipo de Aplicaciones Web, todo a tu medida, con las últimas tecnologías.</p>
                <button onClick={() => this.navigate("contact")}  className="ghost-btn" >
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
