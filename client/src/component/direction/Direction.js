import React from "react";
/** Export the span component */
const Direction = props => {
    <span className={`panel__nav panel__nav--${props.direction}`} {...props}>
        {props.children}
    </span> 
};
/** Export the Direction component */
export default Direction;