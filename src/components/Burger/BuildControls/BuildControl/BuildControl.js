import React from "react";

import classes from "./BuildControl.module.css";

function BuildControl() {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}> {props.label} </div>
      <button className={classes.Less}>Less</button>
      <button className={classes.More}>Less</button>
    </div>
  );
}

export default BuildControl;
