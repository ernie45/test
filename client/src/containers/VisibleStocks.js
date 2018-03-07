/** Bring in ability to connect to a component */
import {connect} from "react-redux";
/** Import Stocks table */
import {Table} from "../component/stocks/stockTable";

/** Define a function to handle viewing Stocks */
const getStockInfo = stocks => {
    return stocks;
}

/** Relate state to the props in the stock table component */
const mapStateToProps = state => {
    return {
        stocks: getStockInfo(state.stocks)
    }
}

/** Connect to table component */
const VisibleStocks = connect(mapStateToProps)(Table);

export default VisibleStocks;