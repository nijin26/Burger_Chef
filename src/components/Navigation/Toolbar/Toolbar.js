import React from "react";

import NavigationItems from "../NagationItems/NavigationItems";
import Logo from "../../Logo/Logo";
import classes from "./Toolbar.module.css";

const Toolbar = (props) => (
  <header className={classes.Toolbar}>
    {" "}
    <div>MENU</div>
    <Logo />
    <nav>
      {" "}
      <NavigationItems />{" "}
    </nav>
  </header>
);

export default Toolbar;
