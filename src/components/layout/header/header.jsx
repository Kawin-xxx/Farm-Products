import React from "react";
import Logo from "components/ui/logo/logo";
import Nav from "components/layout/nav/nav";
import "./style.css";

function Header() {
  return (
    <header className="header">
      <Logo />
      <Nav />
    </header>
  );
}

export default Header;
