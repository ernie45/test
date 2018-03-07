import fetch from "cross-fetch";

/** API Key to access the api */
const APIKEY = "hkv27C8yymw8ekmbFQas";

/** STOCKS ACTIONS *////////////////////////////////////////////////////////////////////////

export const REQUEST_STOCKS = "REQUEST_STOCKS";
export const RECEIVE_STOCKS = "RECEIVE_STOCKS";

/** It returns type for reducers to read along with the stock ticker */
export function requestStockInfo(tickerSymbol) {
    return { type: REQUEST_STOCKS, tickerSymbol }
}

/** Returns type for reducers to evaluate */
export function receiveStockInfo(tickerSymbol, json) {
    let todayPrice = json.dataset_data.data[0][4];
    let yesterdayPrice = json.dataset_data.data[1][4];
    let trend;
    if (Number(todayPrice) > Number(yesterdayPrice)){
        trend = Number(todayPrice) - Number(yesterdayPrice);
    }
    else if (Number(todayPrice) < Number(yesterdayPrice)){
        trend = Number(todayPrice) - Number(yesterdayPrice);
    }
    else {
        trend = 0;
    }
    return { type: RECEIVE_STOCKS, tickerSymbol, price: json.dataset_data.data[0][4], trend: trend.toFixed(2)};
}

/** Using what's known as thunk middleware: below */
/** Export an action that triggers another action */
/** This handles asynchronous data calls */
export function fetchStocks(tickerSymbol) {
    /** Returns a dispatch function just like the store would do */
    return function (dispatch) {
        /** Perform the dispatch function */
        /** In other words, perform the action in the arguments */

        /** Note that requestStocks returns a type REQUEST_STOCKS and the ticker for reducers to read */
        dispatch(requestStockInfo(tickerSymbol));

        /** Return the fetch, in other words the API call */
        return fetch(`https://www.quandl.com/api/v3/datasets/WIKI/${tickerSymbol}/data.json?api_key=${APIKEY}`)
            .then(response => response.json(), error => console.log("error"))
            .then(data => dispatch(receiveStockInfo(tickerSymbol, data)));
    }
}