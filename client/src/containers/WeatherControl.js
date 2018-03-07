/** Bring in ability to connect to a component */
import {connect} from "react-redux";
/** Import Weather Widget */
import {WeatherWidget} from "../component/Weather/Weather";

/** Define a function to handle viewing Weather for a given city */
const getStockInfo = city => {
    return city;
}

/** Relate state to the props in the Weather Widget component */
const mapStateToProps = city => {
    return {
        stocks: getStockInfo(state.stocks)
    }
}

/** Connect to Weather Widget component */
const WeatherControl = connect(mapStateToProps)(WeatherControl);

export default WeatherControl;