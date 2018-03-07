import React from "react";
/** Allows to link to components */
import {connect} from "react-redux";
import {addStock, fetchStocks} from "../actions";

/** Define the AddStock component */
/** Add stock is both a component and a dispatcher */
/** Which means it performs actions within itself */
let AddStock = ({dispatch}) => {

    /** Refers to the form input */
    let tickerSymbol;

    return(
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    /** If a ticker symbol is not provided */
                    if (!tickerSymbol.value.trim()){
                        /** Do nothing */
                        return;
                    }
                    /** If ticker symbol is defined */
                    /** call the addStock action creator with the ticker symbol provided */
                    dispatch(fetchStocks(tickerSymbol.value));
                    /** Clear the text in the input */
                    tickerSymbol.value = "";
                }}
                className="form-group"
            >
                <input
                    ref={node => {
                        /** Refer ticker symbol to the input field text */
                        tickerSymbol = node
                    }}
                    placeholder="NASDAQ ticker symbol"
                />
                <button type="submit">
                    Add Stock
                </button>
            </form>
        </div>
    );
}

/** Connect dispatch to itself because this component handles its own function */
AddStock = connect()(AddStock);

export default AddStock;