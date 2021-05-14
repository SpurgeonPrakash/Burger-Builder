import React from "react";
import Aux from "../Auxilary/Auxilary";
import classes from "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends React.Component {
  state = {
    showSideDrawer: false,
  };
  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  sideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false });
  };
  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClick={this.sideDrawerToggleHandler} />
        <SideDrawer
          closed={this.sideDrawerCloseHandler}
          open={this.state.showSideDrawer}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
