import "./Button.scss";
import React from "react";

function Button({ className = "", Icon = React.Fragment, children }) {
  return (
    <button className={className}>
      <Icon /> {children}
    </button>
  );
}
export default Button;
