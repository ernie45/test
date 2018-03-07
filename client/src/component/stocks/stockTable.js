import React, { Component } from "react";
import { Row } from "./stockRow";
import API from "../../utils/stocksAPI";

/** Table will display stocks in an orderly fashion */
export class Table extends Component {
    constructor(props){
        super(props);
        this.state = {
            stocks: []
        }
    };
    componentDidMount(){
        /** Collect the default companies data to display onload */
        /** This is a promise based function */
        /** It is so that the asynchronous axios call can loop through the companies array in the stocksAPI file */
        // API.getDefaultStocksInfo().then(temp => this.setState({stockInfo: temp}));
        API.getDefaultStocksInfo(data => {
            /** Concatenate the data into the state variable stocks */
            this.setState({stocks: this.state.stocks.concat(data)});
        });
    };
    render() {
        return (
            <table style={{ width: "75%" }}>
                <tbody>
                    <tr>
                        <th className="col-md-4">Company Ticker Symbol</th>
                        <th className="col-md-4">Current Selling Price</th>
                        <th className="col-md-4">Trend</th>
                    </tr>
                    {this.props.stocks.reverse().map((stock, index) => (
                        <Row key={index} {...stock}/>
                    ))}
                    {this.state.stocks.map((stock, index) => (
                        <Row key={index} {...stock}/>
                    ))}
                </tbody>
            </table>
        )
    }
}