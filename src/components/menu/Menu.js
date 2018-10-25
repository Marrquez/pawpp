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
                    <li className="nav-item"><a href="coddle.html" className="nav-link transition">CODDLE</a></li>
                    <li className="nav-item"><a href="services.html" className="nav-link transition">SERVICES</a></li>
                    <li className="nav-item"><a href="google.com" className="nav-link">WORKS</a>
                    <ul>
                        <li><a href="works-spaced-grid.html" className="transition">SPACED GRID</a></li>
                        <li><a href="works-nonspaced-grid.html" className="transition">NONSPACED GRID</a></li>
                        <li><a href="works-masonry-grid.html" className="transition">MASONRY GRID</a></li>
                        <li><a href="works-retro-grid.html" className="transition">RETRO GRID</a></li>
                    </ul>
                    </li>
                    <li className="nav-item"><a href="news.html" className="nav-link transition">NEWS</a></li>
                    <li className="nav-item"><span onClick={() => this.navigate("contact", "header int-header")} className="nav-link transition">CONTACT</span></li>
                </ul>
            </nav>
        );
    }
}

export default Menu;
