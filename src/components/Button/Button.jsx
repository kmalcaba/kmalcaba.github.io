import "./Button.scss";
import React from "react";

function Button({ className = "", Icon = React.Fragment, onClick, children }) {
  return (
    <button className={className} onClick={onClick}>
      <Icon /> {children}
    </button>
  );
}
export default Button;
