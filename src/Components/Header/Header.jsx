import React from "react";
import PropTypes from "prop-types";
import "./Header.scss";

const Header = ({route}) => (
  <header className="header">
    {route}
  </header>
);

Header.propTypes = {
  route: PropTypes.string
};

export default Header;
