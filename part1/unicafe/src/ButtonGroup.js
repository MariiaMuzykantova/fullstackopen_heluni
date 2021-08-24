import React from "react";
import Button from "./Button";

const ButtonGroup = ({ button }) => (
  <>
    <Button buttonDetails={button[0]} />
    <Button buttonDetails={button[1]} />
    <Button buttonDetails={button[2]} />
  </>
);

export default ButtonGroup;
