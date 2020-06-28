import React from "react";

import NavigationItems from "../NagationItems/NavigationItems";
import Logo from "../../Logo/Logo";
import classes from "./Toolbar.module.css";

const Toolbar = (props) => (
  <header className={classes.Toolbar}>
    {" "}
    <div
      onClick={props.show}
      className={(classes.Toggle, classes.DrawerToggle)}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DektopOnly}>
      {" "}
      <NavigationItems />{" "}
    </nav>
  </header>
);

export default Toolbar;
