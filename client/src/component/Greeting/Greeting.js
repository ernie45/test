import React, { Component } from "react";
import axios from "axios";

export class Greeting extends Component {
    constructor(props){
        super(props);
        this.state = {
            time: "",
            greeting: "",
            hours: ""
        };
    }
    componentDidMount() {
        this.updateUsername();
        // Sets state as soon as component mounts 
        this.setState({ time: new Date() }, () => this.updateGreeting());
        /** Every second that passes, update the greeting*/
        setInterval(() => {
            this.setState({ time: new Date() }, () => this.updateGreeting());
        }, 1000);
    };

    updateUsername(){
        this.setState({username: this.props.username});
    }

    updateGreeting() {

        var greeting = "";
        // TODO: make this dynamic
        let username = localStorage.getItem("username"); 

        let hours = (this.state.time.getHours());

        /** Updates greeting based on time of day */
        if (hours < 12) {
            greeting = 'Good Morning, ' + username + '.';
        } else if ( hours < 17) {
            greeting = 'Good Afternoon, ' + username + '.';
        } else if (hours > 17) {
            greeting = 'Good Evening, ' + username + '.';
        }

        // Call updateGreeting function
        this.setGreeting(greeting);
    };
    setGreeting(greeting) {
        /** Assign greeting message */
        this.setState({ greeting: greeting });
    };
    render() {
        return (
            <h2 className="greeting">
                {`${this.state.greeting}`}
            </h2>
        );
    };
};