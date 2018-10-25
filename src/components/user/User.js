import React, { Component } from 'react';
import './User.css';

/**
 * Show the current user info
 * */
class Profile extends Component {
    constructor(props) {
        super();
        this.state = {
            email: ''
        };
    }
    componentWillMount(){
        this.setState({email: this.props.user.email});
    }
    render(){
        return <div className="info-user">
            Bienvenido {this.state.email}
            <br />
            <br />
            <button onClick={this.props.signOutUser} className="ghost-btn">
                <svg>
                    <defs>
                        <linearGradient>
                            <stop offset="0%" stopColor="#FF8282"/>
                            <stop offset="100%" stopColor="#E178ED" />
                        </linearGradient>
                    </defs>
                    <rect width="206" height="50" x="5" y="5" rx="25" fill="none" stroke="#ffffff"></rect>
                </svg>
                <span>Salir</span>
            </button>
            <div><br/></div>
        </div>;
    }
}

/**
 * Log the user in
 * */
class LoginForm extends Component {
    constructor(props) {
        super();
        this.state = {
            email: '',
            pswd: ''
        };
    }
    logInUser(e){
        e.preventDefault();
        this.props.logInUser({email:this.state.email, pswd:this.state.pswd});
    }
    setEmail(e){
        this.setState({email:e.target.value});
    }
    setPswd(e){
        this.setState({pswd:e.target.value});
    }
    render(){
        return <form className="form-style validate-form clearfix" onSubmit={this.logInUser.bind(this)}>
            <div className="col-md-12">
                <div className="form-group">
                    <input type="email"
                           className="text-field form-control validate-field required"
                           data-validation-type="email"
                           id="form-email2"
                           name="email"
                           placeholder="Correo"
                           value={this.state.email}
                           onChange={this.setEmail.bind(this)}/>
                </div>
                <div className="form-group">
                    <input type="password"
                           className="text-field form-control validate-field required"
                           data-validation-type="password"
                           id="form-password"
                           placeholder="Contraseña"
                           name="password"
                           value={this.state.pswd}
                           onChange={this.setPswd.bind(this)} />
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <button type="submit" className="ghost-btn">
                            <svg>
                                <defs>
                                    <linearGradient>
                                        <stop offset="0%" stopColor="#FF8282"/>
                                        <stop offset="100%" stopColor="#E178ED" />
                                    </linearGradient>
                                </defs>
                                <rect width="206" height="50" x="5" y="5" rx="25" fill="none" stroke="#ffffff"></rect>
                            </svg>
                            <span>Ingresar</span>
                        </button>
                    </div>
                </div>
            </div>
        </form>;
    }
}

class RecoverForm extends Component {
    constructor(props) {
        super();
        this.state = {
            email: ''
        };
    }
    recoverPswd(e){
        e.preventDefault();
        this.props.recoverByEmail(this.state.email);
    }
    setEmail(e){
        this.setState({email:e.target.value});
    }
    render(){
        return <form className="form-style validate-form clearfix" onSubmit={this.recoverPswd.bind(this)}>
            <div className="form-group">
                <label className="sr-only" htmlFor="exampleInputEmail2">Email address</label>
                <input type="email"
                       className="text-field form-control validate-field required"
                       id="exampleInputEmail2"
                       placeholder="Email address"
                       required
                       value={this.state.email}
                       onChange={this.setEmail.bind(this)}
                />
            </div>
            <div className="form-group">
                <button type="submit" className="ghost-btn">
                    <svg>
                        <defs>
                            <linearGradient>
                                <stop offset="0%" stopColor="#FF8282"/>
                                <stop offset="100%" stopColor="#E178ED" />
                            </linearGradient>
                        </defs>
                        <rect width="206" height="50" x="5" y="5" rx="25" fill="none" stroke="#ffffff"></rect>
                    </svg>
                    <span>Recuperar</span>
                </button>
                <button className="secundary-button" onClick={this.props.goBack}>Cancelar</button>
            </div>
        </form>;
    }
}

class RegisterForm extends Component {
    constructor(props) {
        super();
        this.state = {
            email: '',
            pswd: ''
        };
    }
    signInUser(e){
        e.preventDefault();
        this.props.signInUser({email:this.state.email, pswd:this.state.pswd});
    }
    setEmail(e){
        this.setState({email:e.target.value});
    }
    setPswd(e){
        this.setState({pswd:e.target.value});
    }
    render(){
        return <form className="form-style validate-form clearfix" onSubmit={this.signInUser.bind(this)}>
            <div className="form-group">
                <label className="sr-only" htmlFor="exampleInputEmail2">Email address</label>
                <input type="email"
                       className="text-field form-control validate-field required"
                       id="exampleInputEmail2"
                       placeholder="Email address"
                       required
                       value={this.state.email}
                       onChange={this.setEmail.bind(this)}
                />
            </div>
            <div className="form-group">
                <label className="sr-only" htmlFor="exampleInputPassword2">Password</label>
                <input type="password"
                       className="text-field form-control validate-field required"
                       id="exampleInputPassword2"
                       placeholder="Password"
                       required
                       value={this.state.pswd}
                       onChange={this.setPswd.bind(this)}
                />
            </div>
            <div className="form-group">
                <button type="submit" className="ghost-btn">
                    <svg>
                        <defs>
                            <linearGradient>
                                <stop offset="0%" stopColor="#FF8282"/>
                                <stop offset="100%" stopColor="#E178ED" />
                            </linearGradient>
                        </defs>
                        <rect width="206" height="50" x="5" y="5" rx="25" fill="none" stroke="#ffffff"></rect>
                    </svg>
                    <span>Registrarme</span>
                </button>
                <button className="secundary-button" onClick={this.props.goBack}>Cancelar</button>
            </div>
        </form>;
    }
}

class User extends Component {
    constructor(props) {
        super();
        this.state = {
            view: 'login'
        }
        this.asideRef = React.createRef();
    }
    componentWillMount(){ }
    componentDidMount(){ }
    componentWillUnmount() { }
    componentWillReceiveProps(nextProps){ }
    componentWillUpdate(nextProps, nextState){ }
    componentDidUpdate(prevProps, prevState){ }
    navigate(view){
        this.setState({view:view});
    }
    signInUser(user){
        this.props.signInUser(user);
        this.navigate('login');
    }
    signOutUser(){
        this.props.signOutUser();
        this.navigate('login');
    }
    navigate(view, header){
        //this.asideRef.current.className = "user hamburger-menu-box";
        this.props.navigate(view, header);
    }
    render() {
        var currentForm = null;

        if(this.props.user.logged){
            currentForm = <Profile user={this.props.user} signOutUser={this.signOutUser.bind(this)}></Profile>;
        }else if(this.state.view === 'login'){
            currentForm = <div>
                <LoginForm logInUser={this.props.logInUser}></LoginForm>
                <div className="col-sm-12">
                    <button className="secundary-button" onClick={() => this.navigate("recover")} >Recuperar contraseña</button><br />
                    <button className="secundary-button"  onClick={() => this.navigate("signin")} >Registrarme</button>
                </div>
                <div className="col-sm-12"><br /></div>
            </div>;
        }else if(this.state.view === 'signin'){
            currentForm = <RegisterForm goBack={() => this.navigate("login")} signInUser={this.signInUser.bind(this)}></RegisterForm>;
        }else if(this.state.view === 'recover'){
            currentForm = <RecoverForm goBack={() => this.navigate("login")} recoverByEmail={this.props.recoverByEmail.bind(this)}></RecoverForm>;
        }
        return (
            <aside className="user hamburger-menu-box" ref={this.asideRef} >
                <div className="menu">
                    <ul className="navbar-nav">
                        <li className="nav-item"><span onClick={() => this.navigate("home", "header")} className="nav-link transition">HOME</span></li>
                        <li className="nav-item"><a href="coddle.html" className="nav-link transition">CODDLE</a></li>
                        <li className="nav-item"><a href="services.html" className="nav-link transition">SERVICES</a></li>
                        <li className="nav-item"><a href="http://google.com" className="nav-link">WORKS</a>
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
                </div>
                <div className="inner">
                    {currentForm}
                    <p className="lead">Al ingresar a este sitio se compromete a usarlo de manera responsable. para mayor información escribir a: warrdnez@gmail.com</p>
                </div>
            </aside>
        );
    }
}

export default User;
