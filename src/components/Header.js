import React from "react";
import classes from "./Header.module.css";

export const Header = (props) => {
  return (
    <header className={classes.Header}>
      <h1>Animals</h1>
      <p>Amount of animals in database: {props.animalcount}</p>
      <form>
        <input
          placeholder="Search for an animal"
          onChange={props.change}
          type="text"
        />
      </form>
      <p>test for rebasing</p>
    </header>
  );
};
