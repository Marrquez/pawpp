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
    render() {
        return (
            <div className="banner inner">
                <h2>JUAN CARLOS</h2>
                <p>Que mk tan pero tan care chimbin, y demorado para pagar, pero bueno, ahí vamos... Arriba R&S Solutions!!</p>
                <a href="google.com" className="ghost-btn">
                    <svg>
                        <defs>
                            <linearGradient>
                                <stop offset="0%" stopColor="#FF8282"/>
                                <stop offset="100%" stopColor="#E178ED" />
                            </linearGradient>
                        </defs>
                        <rect width="206" height="50" x="5" y="5" rx="25" fill="none" stroke="#ffffff"></rect>
                    </svg>
                    <span>Discover Now</span>
                </a>
            </div>
        );
    }
}

export default Banner;
