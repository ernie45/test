import React, {Component} from "react";
import axios from "axios";
import bcrypt from "bcrypt-nodejs";

export class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {email: '', password: '', newEmail: '', newUsername: '', newPassword: ''}
        this.handleChange = this.handleChange.bind(this)
    };

    handleChange(event, field) {
        event.preventDefault()
        this.setState({[field]: event.target.value}, () => {
            console.log(this.state[field])
        })
    };

    registerPersistence(event, email, password) {
        event.preventDefault()
        if (localStorage.getItem('persist') === 'true') {
            let salt = bcrypt.genSaltSync(5)
            let hash = bcrypt.hashSync(password, salt)
            localStorage.setItem("email", email);
            localStorage.setItem('token', hash)
            console.log(hash)
            axios.post('/api/persist', {email: email, persistToken: hash})
        }
    };

    updateLoginPersist(event) {
        if (localStorage.getItem('persist') !== 'false' || !localStorage.getItem('persist')) {
            localStorage.setItem("persist", false)
        } else {
            localStorage.setItem("persist", true)
        }
    };

    render () {
        return (
            <div>
                <div className="logoContainer">
                    <img id="logoImage" src="HomeSuite.png" height="200px" width="300px"></img>
                </div>
                <div className="allLoginContainer">
                    <div className="user-modal">
                        <div className="user-modal-container">
                            <div id="login">
                                <div id="loginTitle">
                                    Existing User
                                </div>
                                <form onSubmit={ (event) => {this.props.checkAuth(event, this.state.email, this.state.password); this.registerPersistence(event, this.state.email, this.state.password)}}>
                                    <div id="signInEmailLabel">
                                        <label className="image-replace email" htmlFor="signin-email">E-mail</label>
                                    </div>
                                    <div id="signInEmailWrap">
                                        <input className="full-width has-padding has-border" id="signin-email" type="email" name="email" placeholder="E-mail" value={this.state.email} onChange={(event) => {this.handleChange(event, 'email')}}></input>
                                    </div>

                                    <div id="signInPassLabel">
                                        <label className="image-replace password" htmlFor="signin-password">Password</label>
                                    </div>
                                    <div id="signInPassWrap">
                                        <input className="full-width has-padding has-border" id="signin-password" type="password" name="password" placeholder="Password" value={this.state.password} onChange={(event) => {this.handleChange(event, 'password')}}></input>
                                    </div>

                                    <div id="rememberContainer">
                                        <div id="rememberLabel">
                                        <label className="image-replace password" htmlFor="rememberCheckBox">Remember Me</label>
                                        </div>
                                        <div id="rememberBox">
                                        <input className="full-width has-padding has-border" id="rememberCheckBox" type="checkbox" name="remember" onClick={(event) => {this.updateLoginPersist(event)}}></input>
                                        </div>
                                    </div>

                                    <div id="signInButtonContainer">
                                        <input className="full-width button" type="submit" value="Login"></input>
                                    </div>
                                </form>

                            </div>

                            <div id="signup">
                                <div id="createTitle">
                                    New User
                                </div>
                                <form className="form" onSubmit={ (event) => {this.props.newUser(event, this.state.newEmail, this.state.newUsername, this.state.newPassword)}}>
                                    <div id="signUpUsernameLabel">
                                        <label className="image-replace username" htmlFor="signup-username">Username</label>
                                    </div>
                                    <div id="signUpUsernameWrap">   
                                        <input className="full-width has-padding has-border" id="signup-username" type="text" name='username' placeholder="Username" value={this.state.newUsername} onChange={(event) => {this.handleChange(event, 'newUsername')}}></input>
                                    </div>

                                    <div id="signUpEmailLabel">
                                        <label className="image-replace email" htmlFor="signup-email">E-mail</label>
                                    </div>    
                                    <div id="signUpEmailWrap">
                                        <input className="full-width has-padding has-border" id="signup-email" type="email" name="email" placeholder="E-mail" value={this.state.newEmail} onChange={(event) => {this.handleChange(event, 'newEmail')}}></input>
                                    </div>

                                    <div id="signUpPasswordLabel">
                                        <label className="image-replace password" htmlFor="signup-password">Password</label>
                                    </div>
                                    <div id="signUpPasswordWrap">    
                                        <input className="full-width has-padding has-border" id="signup-password" type="password" name="password" placeholder="Password" value={this.state.newPassword} onChange={(event) => {this.handleChange(event, 'newPassword')}}></input>
                                    </div>

                                    <div id="signUpButtonContainer">
                                        <input className="full-width has-padding button" type="submit" value="Create account"></input>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}