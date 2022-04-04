import React from "react";

const Button = (props) => {
  return (
    <button onClick={props.click} className={props.style}>
      {props.text}
    </button>
  );
};

export default Button;
