import React, {Component} from "react";

export const Layout = props => 
    <div classname="container">
        <h1>Settings</h1>
        <div classname="container">
            {props.children}
        </div>
    </div>