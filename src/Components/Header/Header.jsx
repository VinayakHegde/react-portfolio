import React from "react";
import PropTypes from "prop-types";
import DiscMenu from "Components/DiscMenu";
import "./Header.scss";

const Header = ({ route, setRoute }) => (
  <header className="header-bar">
    {route}
    <DiscMenu onItemClick={setRoute} />
  </header>
);

Header.propTypes = {
  setRoute: PropTypes.func,
  route: PropTypes.string
};

export default Header;
