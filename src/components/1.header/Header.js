import React from "react";
import UserMenu from "./1-1.user-menu/UserMenu";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header--color">
      <div className="header container">
        <Link to="/">
          <h1 className="logo">Hooli</h1>
        </Link>
        <UserMenu />
      </div>
    </header>
  );
};

export default Header;
