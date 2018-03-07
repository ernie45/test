import React, { Component } from "react";
import { All } from "../pages"
// import { Login } from "../component/Login"
import LoginWatch from "../containers/LoginWatch";
import axios from "axios"

export class RouteLogin extends Component {
    // state = {
    //     username: ""
    // }

    /** Check the validity of the info passed by user in the login */
    // checkAuth (event, email, password, toRemember) {
    //     event.preventDefault()
    //     console.log(email)
    //     /** Send post request with the data input by user */
    //     axios.post('/api/auth', {email: email, password: password})
    //     /** After evaluation by apiRoutes.js in routing */
    //     .then((res) => {
    //         localStorage.setItem("username", res.data.username);
    //         /** Logged in will be either true or false */
    //     	this.setState({loggedIn: res.data.loggedIn, username: res.data.username})
    //     })
    // };

    // newUser (event, email, username, password) {
    //     event.preventDefault()
    //     axios.post('/api/create', {email: email, username: username, password: password})
    //     .then((res) => {
    //         this.setState({loggedIn: res.data})
    //     })
    // };

    // routeApp(bool) {
    //     if (localStorage.getItem("persist") === "true"){
    //         return (<All/>);
    //     }
    //     else{
    //         return (<LoginWatch/>);
    //     }
        // /** If localStorage has item "persist" and if not already logged in */
    	// if (localStorage.getItem('persist') === "true" && !bool) {
        //     /** Send post request with the localStorage item: token */
        //     /** To allow user to sign in and change loggedIn state to true */
        //     axios.post('/api/auth/persist', {persistToken: localStorage.getItem('token')})
        //     .then((res) => {
        //         /** If data is returned after the request */
        //         if (res.data) {
        //             /** Set loggedIn state to true */
        //             this.setState({loggedIn: true})
        //         }
        //     })
        //     /** Return null by default */
        //     return null
        //     /** If the user happens to be loggedIn already */
    	// } else if (bool) {
        //     /** Simply return the main app */
        //     return (<All/>)
        // }
        /** If user doesn't already have a saved password */
        /** And is not logged in, send him/her to login page */
        // else {
    	// 	return (
        //         // <Login 
        //         //     checkAuth={this.checkAuth.bind(this)}
        //         //     newUser={this.newUser.bind(this)}
        //         // />
        //         <LoginWatch/>
        //     )
    	// }
    // };
	render() {
		if (localStorage.getItem("persist") === "true"){
            return (<All/>);
        }
        else{
            return (<LoginWatch/>);
        }
	}

}