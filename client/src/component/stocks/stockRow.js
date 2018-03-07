import React from "react";
import PropTypes from "prop-types";

/** A custom Row will be added to the table */
export const Row = ({tickerSymbol, price, trend}) =>
    /** Allow addition of other properties */
    /** Add column with name and one with price */
    <tr>
        <th className="col-md-6">{tickerSymbol}</th>
        <th className="col-md-6">{price}</th>
        <th className="col-md-6">{trend}</th>
    </tr>