/** Axios will be used as the api messenger/receiver */
import axios from "axios";
const companies = ["AAPL", "FB", "SBUX", "NKE", "VZ", "AMZN", "GOOG", "INTC", "NVDA"]

/** API Key to access the api */
const APIKEY = "hkv27C8yymw8ekmbFQas";
/** This function handles loading all the promises for axios */
/** This needs to be done to not limit the time when this will render */
/** In other words, to avoid using the timeout function */
/** Takes in functions to resolve */
function loadAllAPIFunctionsCalls(funcs) {
    /** Return a reduce(function) */
    /** This is to return values concisely */
    return funcs.reduce(function (accumulated, current) {
        /** Return the function promise */
        /** This promise returns vals that are accessed below */
        return accumulated.then(function (vals) {
            /** Return current function promise */
            return current().then((val) => {
                /** Which returns the concatination of values */
                return vals.concat(val);
            });
        });
    }, Promise.resolve([]));
}
function formatDataAsObject(company, data) {
    /** Return the format to be taken in by the state variable in the stock page */
    let todayPrice = data.data.dataset_data.data[0][4];
    let yesterdayPrice = data.data.dataset_data.data[1][4];
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
    return { 
        tickerSymbol: company, 
        price: data.data.dataset_data.data[0][4], 
        trend: trend.toFixed(2)
    };
}

/** Export to be able to use in the main app */
export default {
    /** Will retreive data for each stock in the default companies array */
    getDefaultStocksInfo: function (onLoad) {
        return loadAllAPIFunctionsCalls(companies.map(company => {
            return () =>
                axios.get("https://www.quandl.com/api/v3/datasets/WIKI/" + company + "/data.json?api_key=" + APIKEY)
                    .then(function (data) {
                        return formatDataAsObject(company, data);
                    })
                    .then((data) => {
                        if (typeof onLoad === 'function') onLoad(data)
                        return data;
                    })
        })).then(arr => console.log(arr));
    }
};