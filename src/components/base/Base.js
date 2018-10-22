import React, { Component } from 'react';
import './Base.css';

class Base extends Component {
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
            <div className="base">
            </div>
        );
    }
}

export default Base;
