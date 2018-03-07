import React from "react";

const Row = props =>
    <div className="row text-center" {...props}>
        {props.children}
    </div>

export default Row;