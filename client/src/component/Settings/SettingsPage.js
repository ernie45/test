import React, {Component} from "react";
import {LogoutButton} from "./LogoutButton";
import {Layout} from "./Layout";
import Row from "./Row";
import "./Row.css";

export class SettingsPage extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    logout(event){
        localStorage.setItem("persist", false);
        window.location.reload();
    }
    render(){
        return(
            <div className="wrapper">
                <div className="container">
                    <LogoutButton onClick={this.logout}/>
                    <Row>ABOUT US</Row>
                    <Row>HOW TO USE THIS APPLICATION</Row>
                    <Row>SEND A SUGGESTION</Row>
                    <Row>Test</Row>
                </div>
            </div>
        )
    }
}