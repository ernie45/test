import React from "react";
/** Allows to link to components */
import {connect} from "react-redux";
import {addCity} from "../actions";

/** Define the AddWeather component */
/** Add weather is both a component and a dispatcher */
/** Which means it performs actions within itself */
let AddWeather = ({dispatch}) => {

    /** Refers to the form input */
    let city;

    return(
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    /** If a city is not provided */
                    if (!city.value.trim()){
                        /** Do nothing */
                        return;
                    }
                    /** If city is defined */
                    /** Call the addCity action creator with the city provided */
                    dispatch(addCity(city.value));
                    /** Clear the text in the input */
                    city.value = "";
                }}
                className="form-group"
            >
                <input
                    ref={node => {
                        /** Refer city to the input field text */
                        city = node
                    }}
                    placeholder="Closest Single-Word City"
                />
                <button type="submit">
                    Add City
                </button>
            </form>
        </div>
    );
}

/** Connect dispatch to itself because this component handles its own function */
AddWeather = connect()(AddWeather);

export default AddWeather;