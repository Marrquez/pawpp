import React, { Component } from 'react';
import './Quote.css';

class Quote extends Component {
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
            <section className="quote quote-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4>LET'S WORK TOGETHER ?</h4>
                            <p>If you’re shuddering and thinking “Is this as good as it gets?” and wouldn’t even consider staying in the same job, company, or industry for the next decade, you’re not alone.</p>
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
                                <span>GET IN TOUCH</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Quote;
