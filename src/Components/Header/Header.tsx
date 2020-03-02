import React from "react";
import "./Header.scss";

interface IHeaderProps {
  route: string
};

const Header: React.FC<IHeaderProps> = ({route}) => (
  <header className="header">
    {route}
  </header>
);

export default Header;
