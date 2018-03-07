import React, { Component } from "react";

export class Clock extends Component {
    state = {
        time: "",
        hours: "",
        minutes: "",
        seconds: ""
    };
    componentDidMount() {
        // Sets state as soon as component mounts 
        this.setState({ time: new Date() }, () => this.getTime());
        /** Every second that passes, update the time */
        /** Perform the getTime function, which defines hours, minutes, seconds */
        setInterval(() => {
            this.setState({ time: new Date() }, () => this.getTime());
        }, 1000);
    };
    getTime() {
        /** Grab the hours from the date object */
        let hours = (this.state.time.getHours() % 12).toString();
        /** Grab the minutes from the date object */
        let minutes = this.state.time.getMinutes().toString();
        /** Grab the seconds from the date object */
        let seconds = this.state.time.getSeconds().toString();

        /** If hours are a single digit */
        if (hours.length < 2) {
            /** If hours are zero */
            if (hours === "0") {
                /** Redefine hours to display 12*/
                hours = "12";
            }
            /** If hours aren't zero, tag a zero befor the single-digit hour */
            else {
                hours = "0" + hours;
            }
        }
        /** If minutes are single digit, add a zero before the minute */
        if (minutes.length < 2) {
            minutes = '0' + minutes;
        }
        /** If seconds are single digit, add a zero before the second */
        if (seconds.length < 2) {
            seconds = '0' + seconds;
        }
        /** Call on the setTime function */
        /** Which will assign the hours minutes and seconds necessary to display to the user */
        this.setTime(hours, minutes, seconds);
        // this.setTime(hours, minutes, seconds);
    };
    setTime(hours, minutes, seconds) {
        /** Assign the hours */
        this.setState({ hours: hours });
        this.setState({ minutes: minutes });
        this.setState({ seconds: seconds });
    };
    render() {
        return (
            <h1 id="clock">
                {`${this.state.hours} : ${this.state.minutes} : ${this.state.seconds}`}
            </h1>
        );
    };
};