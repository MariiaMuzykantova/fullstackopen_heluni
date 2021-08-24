import React from "react";

const Button = ({ buttonDetails }) => (
  <button onClick={buttonDetails.onClick}>{buttonDetails.name}</button>
);

export default Button;
