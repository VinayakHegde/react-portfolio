import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Header.css";
import DiscMenu from "../DiscMenu/DiscMenu";

class Header extends Component {
  onItemClick(item) {
    this.props.setRoute(item);
  }
  render() {
    return (
      <header className="header-bar">
        {this.props.route}
        <DiscMenu onItemClick={this.onItemClick.bind(this)}></DiscMenu>
      </header>
    );
  }
}

Header.propTypes = {
  setRoute: PropTypes.func,
  route: PropTypes.string
};

export default Header;
