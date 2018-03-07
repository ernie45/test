import React, {Component} from "react";
/** Allows link between component and redux */
import {connect} from "react-redux";
/** Import actions this component can dispatch */
import {fetchLogin, fetchCreateUser, fetchPersist} from "../actions";
import axios from "axios";
import bcrypt from "bcrypt-nodejs";

let LoginWatch = ({dispatch}) => {

        /** Existing user variables */
        let username;
        let email;
        let password;
        let persist;

        /** New user variables */
        let newUsername;
        let newEmail;
        let newPassword;
        let newPersist;

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
                                <form onSubmit={event => {
                                    event.preventDefault();
                                    if (!email.value.trim() || !password.value.trim()){
                                        return; 
                                    }
                                    dispatch(fetchLogin(email.value, password.value));
                                }}>
                                    <div id="signInEmailLabel">
                                        <label className="image-replace email" htmlFor="signin-email">E-mail</label>
                                    </div>
                                    <div id="signInEmailWrap">
                                        <input 
                                            className="full-width has-padding has-border" 
                                            id="signin-email" 
                                            type="email" 
                                            name="email" 
                                            placeholder="E-mail" 
                                            value={email} 
                                            ref={node => {email = node}}
                                        />
                                    </div>

                                    <div id="signInPassLabel">
                                        <label className="image-replace password" htmlFor="signin-password">Password</label>
                                    </div>
                                    <div id="signInPassWrap">
                                        <input 
                                            className="full-width has-padding has-border" 
                                            id="signin-password" 
                                            type="password" 
                                            name="password" 
                                            placeholder="Password" 
                                            value={password} 
                                            ref = {node => {password = node}}
                                        />
                                    </div>

                                    <div id="rememberContainer">
                                        <div id="rememberLabel">
                                        <label className="image-replace password" htmlFor="rememberCheckBox">Remember Me</label>
                                        </div>
                                        <div id="rememberBox">
                                        <input className="full-width has-padding has-border" id="rememberCheckBox" type="checkbox" name="remember" onClick={(event) => {dispatch(fetchPersist())}}/>
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
                                <form className="form" onSubmit={event => {
                                    event.preventDefault();
                                    if (!newUsername.value.trim() || !newEmail.value.trim() || !newPassword.value.trim()){
                                        return;
                                    }
                                    dispatch(fetchCreateUser(newUsername.value, newEmail.value, newPassword.value));
                                }}>
                                    <div id="signUpUsernameLabel">
                                        <label className="image-replace username" htmlFor="signup-username">Username</label>
                                    </div>
                                    <div id="signUpUsernameWrap">   
                                        <input 
                                        className="full-width has-padding has-border" 
                                        id="signup-username" 
                                        type="text" 
                                        name='username' 
                                        placeholder="Username" 
                                        value={newUsername} 
                                        ref = {node => {newUsername = node}}
                                    />
                                    </div>

                                    <div id="signUpEmailLabel">
                                        <label className="image-replace email" htmlFor="signup-email">E-mail</label>
                                    </div>    
                                    <div id="signUpEmailWrap">
                                        <input 
                                            className="full-width has-padding has-border" 
                                            id="signup-email" 
                                            type="email" 
                                            name="email" 
                                            placeholder="E-mail" 
                                            value={newEmail} 
                                            ref = {node => {newEmail = node}}
                                        />
                                    </div>

                                    <div id="signUpPasswordLabel">
                                        <label className="image-replace password" htmlFor="signup-password">Password</label>
                                    </div>
                                    <div id="signUpPasswordWrap">    
                                        <input 
                                            className="full-width has-padding has-border" 
                                            id="signup-password" 
                                            type="password" 
                                            name="password" 
                                            placeholder="Password" 
                                            value={newPassword} 
                                            ref = {node => {newPassword = node}}
                                        />
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

/** Connect dispatch to itself because this component dispatches actions */
LoginWatch = connect()(LoginWatch);

export default LoginWatch;