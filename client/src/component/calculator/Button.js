import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

/** Button class component */
class Button extends React.Component {
  handleClick = () => {
    /** Call on clickHandler function */
    /** Takes in a name as argument */
    this.props.clickHandler(this.props.name);
  }

  render() {
    
    const className = [
      "component-button",
      this.props.orange ? "orange" : "",
      this.props.wide ? "wide" : "",
    ];

    return (
      <div
        className={className.join(" ").trim()}
      >
        <button
          onClick={this.handleClick}
        >
          {this.props.name}
        </button>
      </div>
    );
  }
}
/** propTypes handle proper passing of props */
/** Assure component doesn't break down due to faulty parameters */
Button.propTypes = {
  name: PropTypes.string,
  orange: PropTypes.bool,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func,
};
export default Button;
