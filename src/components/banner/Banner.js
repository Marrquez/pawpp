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
    shouldComponentUpdate(nextProps, nextState){ }
    componentWillUpdate(nextProps, nextState){ }
    componentDidUpdate(prevProps, prevState){ }
    render() {
        return (
            <div className="banner inner">
                <h2>IDEA FACTORY</h2>
                <p>Coddle is a commercial web and digital agency, known for unique conceptual images and ideas. His interest in satire and narrative influences his work behind the camera.</p>
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
