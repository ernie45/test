import React, { Component } from "react";
import "../App.css";
import {Clock} from "../component/clock";
import {Greeting} from "../component/Greeting";
import Calculator from "../component/calculator";
import {Stocks} from "../component/stocks";
import { YouTubeSearch } from "../component/VideoSearch";
import { Links1, Links2, Links3 } from "../component/Links";
// import { Weather } from "../component/static";
import {SettingsPage} from "../component/Settings";
import {Weather} from "../component/Weather/Weather";



export class All extends Component {
    constructor(props){
        super(props);
        /** The current x and y coordintes for the pages */
        this.state = {
            /** Declare the x positioning on the coordinte */
            x: "0",
            /** Declare the y positioning on the coordinte */
            y: "0",
            /** Declare the styling for that will handle transforming and translating the css */
            styles: "",
            all: ""
        };
    }
    componentDidMount() {

    };
    moveUp() {
        /** Increment the y value and set the transform style to translate */
        /** Remember, setState is asynchronous and thus the following syntax */
        this.setState({ y: (parseInt(this.state.y, 10) + 1).toString() }, () => this.setState({ styles: `translateX(${this.state.x}00%) translateY(${this.state.y}00%)` }));
    };
    moveDown() {
        /** Decrement the y value and set the transform style to translate */
        /** Remember, setState is asynchronous and thus the following syntax */
        this.setState({ y: (parseInt(this.state.y, 10) - 1).toString() }, () => this.setState({ styles: `translateX(${this.state.x}00%) translateY(${this.state.y}00%)` }));

    };
    moveDownTwice(){
        this.setState({y: (parseInt(this.state.y, 10) - 2).toString()}, () => this.setState(({styles: `translateX(${this.state.x}00%) translateY(${this.state.y}00%)`})))
    };
    moveLeft() {
        /** Icrement the x value and set the transform style to translate */
        /** Remember, setState is asynchronous and thus the following syntax */
        this.setState({ x: (parseInt(this.state.x, 10) + 1).toString() }, () => this.setState({ styles: `translateX(${this.state.x}00%) translateY(${this.state.y}00%)` }));
    };
    moveRight() {
        /** Decrement the x value and set the transform style to translate */
        /** Remember, setState is asynchronous and thus the following syntax */
        this.setState({ x: (parseInt(this.state.x, 10) - 1).toString() }, () => this.setState({ styles: `translateX(${this.state.x}00%) translateY(${this.state.y}00%)` }));
    };
    moveUpRight() {
        this.moveUp();
        this.moveRight();
    };
    moveUpLeft() {
        this.moveUp();
        this.moveLeft();
    };
    moveDownRight() {
        this.moveDown();
        this.moveRight();
    };
    moveDownLeft() {
        this.moveDown();
        this.moveLeft();
    };
    zoomOut(e, site, panel) {
        /** To the site element, add the show-all class */
        this.setState({all: "show-all"});
    };
    setPanelAndZoom(e) {
        /** If the state is set to view-all */
        if (this.state.all.length){
            /** Grab the corresponding x and y values from the panel chosen */
            var xVal = e.target.getAttribute("data-x-pos");
            var yVal = e.target.getAttribute("data-y-pos");

            /** Zoom into the chosen panel */
            this.zoomIn(xVal, yVal);
        }
    };
    zoomIn(xVal, yVal) {
        /** From the site element, remove the show-all function */

        /** Move to the top panel */
        if (xVal === "0" && yVal === "1"){
            this.setState({all: ""}, () => this.moveUp());
        }
        /** Move to the bottom component */
        else if(xVal === "0" && yVal === "-1"){
            this.setState({all: ""}, () => this.moveDown());
        }
        /** Move to left panel */
        else if(xVal === "-1" && yVal === "0"){
            this.setState({all: ""}, () => this.moveLeft());
        }
        /** Move to right panel */
        else if(xVal === "1" && yVal === "0"){
            this.setState({all: ""}, () => this.moveRight());
        }
        /** Move to Left/Left panel */
        else if(xVal === "-1" && yVal === "1"){
            this.setState({all: ""}, () => this.moveUpLeft());
        }
        /** Move to UP/Right panel */
        else if(xVal === "1" && yVal === "1"){
            this.setState({all: ""}, () => this.moveUpRight());
        }
        /** Move to the Left/Bottom panel */
        else if(xVal === "-1" && yVal === "-1"){
            this.setState({all: ""}, () => this.moveDownLeft());
        }
        /** Move to Bottom/Right panel */
        else if(xVal === "1" && yVal === "-1"){
            this.setState({all: ""}, () => this.moveDownRight());
        }
        /** Move to second Down Panel */
        else if(xVal === "0" && yVal === "-2") {
            this.setState({all: ""}, () => this.moveDownTwice());
        }
        /** Other wise just go to the main page */
        else {
            this.setState({all: ""});
        }
    };
    render() {
        return (
            <div className={`site-wrap ${this.state.all}`}>
                <div className="panel-wrap animate--none" style={{ transform: this.state.styles }}>
                    <div className="panel" data-x-pos="0" data-y-pos="0" onClick={this.setPanelAndZoom.bind(this)}>
                        <span className="panel__nav panel__nav--up js-up" onClick={this.moveUp.bind(this)}>Videos</span>
                        <span className="panel__nav panel__nav--right-top js-up js-right" onClick={this.moveUpRight.bind(this)}>settings</span>
                        <span className="panel__nav panel__nav--left-top js-up js-left" onClick={this.moveUpLeft.bind(this)}>weather</span>
                        <span className="panel__nav panel__nav--left js-left" onClick={this.moveLeft.bind(this)}>stocks</span>
                        <span className="panel__nav panel__nav--right js-right" onClick={this.moveRight.bind(this)}>calculator</span>
                        <span className="panel__nav panel__nav--right-down js-down js-right" onClick={this.moveDownRight.bind(this)}>links</span>
                        <span className="panel__nav panel__nav--left-down js-down js-left" onClick={this.moveDownLeft.bind(this)}>links</span>
                        <span className="panel__nav panel__nav--down js-down" onClick={this.moveDown.bind(this)}>links</span>
                        <span className="panel__zoom js-zoom" onClick={this.zoomOut.bind(this)}>View All</span>
                        <Clock/>
                        <div className="panel__animation-list">
                            <Greeting/>
                        </div>
                    </div>
                    <div className="panel" data-x-pos="0" data-y-pos="1" onClick={this.setPanelAndZoom.bind(this)}>
                        <span className="panel__nav panel__nav--down js-down" onClick={this.moveDown.bind(this)}>Home</span>
                        <YouTubeSearch/>
                    </div>
                    <div className="panel" data-x-pos="-1" data-y-pos="1" onClick={this.setPanelAndZoom.bind(this)}>
                        <span className="panel__nav panel__nav--right-down js-down js-right" onClick={this.moveDownRight.bind(this)}>Home</span>
                        {/* <h1>Weather</h1>  */}
                        <Weather />
                    </div>
                    <div className="panel" data-x-pos="1" data-y-pos="1" onClick={this.setPanelAndZoom.bind(this)}>
                        <span className="panel__nav panel__nav--left-down js-down js-left" onClick={this.moveDownLeft.bind(this)}>Home</span>
                        <SettingsPage/>
                    </div>
                    <div className="panel" data-x-pos="-1" data-y-pos="0" onClick={this.setPanelAndZoom.bind(this)}>
                        <span className="panel__nav panel__nav--right js-right" onClick={this.moveRight.bind(this)}>Home</span>
                        <Stocks/>
                    </div>
                    <div className="panel" data-x-pos="-1" data-y-pos="-1" onClick={this.setPanelAndZoom.bind(this)}>
                        <span className="panel__nav panel__nav--right-top js-up js-right" onClick={this.moveUpRight.bind(this)}>Home</span>
                        <span className="panel__nav panel__nav--right js-right" onClick={this.moveRight.bind(this)}>right</span>
                        <Links1/>
                    </div>
                    <div className="panel" data-x-pos="1" data-y-pos="-1" onClick={this.setPanelAndZoom.bind(this)}>
                        <span className="panel__nav panel__nav--left-top js-up js-left" onClick={this.moveUpLeft.bind(this)}>Home</span>
                        <span className="panel__nav panel__nav--left js-left" onClick={this.moveLeft.bind(this)}>left</span>
                        <Links2/>
                    </div>
                    <div className="panel" data-x-pos="1" data-y-pos="0" onClick={this.setPanelAndZoom.bind(this)}>
                        <span className="panel__nav panel__nav--left js-left" onClick={this.moveLeft.bind(this)}>Home</span>
                        <Calculator/>
                    </div>
                    <div className="panel" data-x-pos="0" data-y-pos="-1" onClick={this.setPanelAndZoom.bind(this)}>
                        <span className="panel__nav panel__nav--up js-up" onClick={this.moveUp.bind(this)}>Home</span>
                        <span className="panel__nav panel__nav--left js-left" onClick={this.moveLeft.bind(this)}>left</span>
                        <span className="panel__nav panel__nav--right js-right" onClick={this.moveRight.bind(this)}>right</span>
                        <Links3/>
                    </div>
                </div>
            </div>
        );
    };
};

