import React, { Component } from "react";

import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import classes from "./Layout.module.css";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerHandler = () => {
    this.setState((prevState) => ({
      showSideDrawer: !prevState.showSideDrawer,
    }));
  };

  render() {
    return (
      <React.Fragment>
        <SideDrawer
          show={this.state.showSideDrawer}
          closed={this.sideDrawerHandler}
        />
        <Toolbar show={this.sideDrawerHandler} />
        <main className={classes.Content}>{this.props.children}</main>
      </React.Fragment>
    );
  }
}

export default Layout;
