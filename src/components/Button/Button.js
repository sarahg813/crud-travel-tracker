import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";

const Button = ({ className, onClick, value, disabled, type }) => (
  <button
    className={className}
    disabled={disabled}
    type={type}
    onClick={onClick}
  >
    {value}
  </button>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.string
};

Button.defaultProps = {
  type: "button",
  disabled: false
};

export default Button;
