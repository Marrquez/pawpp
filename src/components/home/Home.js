import React, { Component } from 'react';
import './Home.css';
import Menu from '../menu/Menu';
import Footer from '../footer/Footer';
import User from '../user/User';
import About from '../about/About';
import Services from '../services/Services';
import Portfolio from '../portfolio/Portfolio';
import News from '../news/News';
import Quote from '../quote-bar/Quote';
import Contact from '../contact/Contact';
import Banner from '../banner/Banner';

class Home extends Component {
  render() {
    return (
        <div className="home">
            <div className="preloader">
                <svg className="spinner" viewBox="0 0 50 50">
                    <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                </svg>
            </div>
            <div className="transition-overlay"></div>
            <User></User>
            <header className="header">
                <div id="particles-bg"></div>
                <Menu></Menu>
                <Banner></Banner>
            </header>
            <About></About>
            <Contact></Contact>
            <Services></Services>
            <Portfolio></Portfolio>
            <News></News>
            <Quote></Quote>
            <Footer></Footer>
        </div>
    );
  }
}

export default Home;
