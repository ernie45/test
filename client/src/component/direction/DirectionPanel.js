import React from "react";
import Direction from "./Direction";
const DirectionPanel = props => (
    <div className="panel" data-x-pos={props.x} data-y-pos={props.y} {...props}>
        {props.children}
    </div>
);

export default DirectionPanel;