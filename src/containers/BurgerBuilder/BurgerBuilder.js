import React, { Component } from "react";

import Burger from "../../components/Burger/Burger";

export class BurgerBuilder extends Component {
  render() {
    return (
      <React.Fragment>
        <Burger />
        <div>Built Controls</div>
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
