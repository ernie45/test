import React, { Component } from "react";
import VisibleStocks from "../../containers/VisibleStocks";
import "./Stocks.css";
import AddStock from "../../containers/AddStock";
// import Graph from "./Graph";

/** Stocks component returns AddStock and VisibleStocks */
/** Which are both controlled by the redux store */
export const Stocks = () => (
    <div className="container">
        <div className="row">
            <AddStock />
            <VisibleStocks />
            {/* <Graph/> */}
        </div>
    </div>
)