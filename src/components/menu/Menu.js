import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
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
    navigate(view, header){
        this.props.navigate(view, header);
    }
    render() {
        return (
            <nav className="menu navbar">
                <div className="logo">
                    <a href="index.html" className="transition">
                        <img src="assets/images/logo-light.png" alt="Image1" className="logo-light" /> <img src="assets/images/logo-colored.png" alt="Image1" className="logo-colored" />
                    </a>
                </div>
                <div className="hamburger-menu">
                    <i className="icon fa fa-bars"></i>
                </div>
                <ul className="navbar-nav">
                    <li className="nav-item"><span onClick={() => this.navigate("home", "header")} className="nav-link transition">HOME</span></li>
                    <li className="nav-item"><span onClick={() => this.navigate("knowledge", "header int-header")} className="nav-link transition">CONOCIMIENTOS</span></li>
                    <li className="nav-item"><span onClick={() => this.navigate("portfolio", "header int-header")} className="nav-link transition">PORTAFOLIO</span></li>
                    <li className="nav-item"><span onClick={() => this.navigate("news", "header int-header")} className="nav-link transition">NOTICIAS</span></li>
                    <li className="nav-item"><span onClick={() => this.navigate("contact", "header int-header")} className="nav-link transition">CONTACT</span></li>
                </ul>
            </nav>
        );
    }
}

export default Menu;
