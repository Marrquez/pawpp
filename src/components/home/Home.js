import React, { Component } from 'react';
import store from '../../store';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
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

var config = {
    apiKey: "AIzaSyAD39gNSpD7ka5R8guPVeCvLoNfO_8DSMY",
    authDomain: "booo-745d1.firebaseapp.com",
    databaseURL: "https://booo-745d1.firebaseio.com",
    projectId: "booo-745d1",
    storageBucket: "booo-745d1.appspot.com",
    messagingSenderId: "357600474405"
};

firebase.initializeApp(config);

class Home extends Component {
    constructor(props) {
        super();
        this.state = {
            user: {
                email: '',
                logged:false
            },
            view: 'home',
            header: 'header',
            banner: {}
        }
    }
    componentWillMount(){
        var self = this;
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                let newData ={
                    email: user.email,
                    logged: true,
                    pageData: {},
                    userData: user
                };
                firebase.database().ref('users/' + user.uid).on('value', function(snapshot){
                    self.setState({user:newData});
                });
            } else {
                firebase.database().ref('users/0cVTLf8n3dTO45jDz9n47EYcY5G3').on('value', function(snapshot) {
                    let newData = {
                        email: '',
                        logged: false
                    };
                    self.setState({user:newData});
                });
            }
        });
    }
    componentDidMount(){ }
    componentWillUnmount() { }
    componentWillReceiveProps(nextProps){ }
    componentWillUpdate(nextProps, nextState){ }
    componentDidUpdate(prevProps, prevState){ }
    signInUser(params){
        firebase.auth().createUserWithEmailAndPassword(params.email, params.pswd).then(function(){
            console.log("El usuario se registró");
        }).catch(function(error) {
            // Handle Errors here.
            //var errorCode = error.code;
            //var errorMessage = error.message;
            // ...
            console.log("El usuario NO se registró");
        });
    }
    signOutUser(params){
        firebase.auth().signOut().then(function() {

        }).catch(function(error) {
            // An error happened.
        });
    }
    logInUser(params){
        var self = this;
        firebase.auth().signInWithEmailAndPassword(params.email, params.pswd).then(function(){

        }).catch(function(error) {
            // Handle Errors here.
            //var errorCode = error.code;
            //var errorMessage = error.message;
            // ...
            //self.notify("Usuario y/o contraseña inválidos");
        });
    }
    logUser(provider, providerType){
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
            // You can use these server side with your app's credentials to access the Twitter API.
            //var token = result.credential.accessToken;
            //var secret = result.credential.secret;
            // The signed-in user info.
            //var user = result.user;
            // ...
        }).catch(function(error) {
            // Handle Errors here.
            //var errorCode = error.code;
            //var errorMessage = error.message;
            // The email of the user's account used.
            //var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            //var credential = error.credential;
            // ...
        });
    }
    recoverByEmail(email){
        var self = this;
        var auth = firebase.auth();

        auth.sendPasswordResetEmail(email).then(function() {
            //self.notify("Ha sido enviado un email a: " + email + " con instrucciones para la recuperación de tu contraseña");
        }).catch(function(error) {
            //self.notify("Ha ocurrido un error al tratar de recuperar tu contraseña");
            // An error happened.
        });
    }
    navigate(view, header){
        this.setState({view: view, header: header});
    }
    render() {
        var currentView = null;

        switch(this.state.view){
            case 'home':
                currentView = <div><About></About>
                    <Quote navigate={this.navigate.bind(this)}></Quote>
                    <Footer></Footer></div>;
                break;

            case 'contact':
                currentView = <Contact></Contact>;
                break;

            case 'knowledge':
                currentView = <Services></Services>;
                break;

            case 'portfolio':
                currentView = <Portfolio></Portfolio>;
                break;

            case 'news':
                currentView = <News></News>;
                break;

            default:
                break;
        }
        return (
            <div className="home">
                <div className="preloader">
                    <svg className="spinner" viewBox="0 0 50 50">
                        <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                    </svg>
                </div>
                <div className="transition-overlay"></div>
                <User
                    user={this.state.user}
                    logInUser={this.logInUser.bind(this)}
                    signInUser={this.signInUser.bind(this)}
                    signOutUser={this.signOutUser.bind(this)}
                    recoverByEmail={this.recoverByEmail.bind(this)}
                    navigate={this.navigate.bind(this)}>
                </User>
                <header className={this.state.header}>
                    <Menu
                        navigate={this.navigate.bind(this)}>
                    </Menu>
                    <Banner
                        navigate={this.navigate.bind(this)}
                        view={this.state.view}>
                    </Banner>
                </header>
                {currentView}
            </div>
        );
    }
}

export default Home;
