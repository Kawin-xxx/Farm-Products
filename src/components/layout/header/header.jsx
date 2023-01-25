import React from "react";
import Logo from "components/ui/logo/logo";
import Nav from "components/layout/nav/nav";
import {StyledSectionHeader} from "./styles.js";

function Header() {
  return (
    <StyledSectionHeader>
      <Logo />
      <Nav />
    </StyledSectionHeader>
  );
}

export default Header;
