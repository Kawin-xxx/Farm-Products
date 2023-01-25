import React from "react";
import logo from "assets/logo.svg";
import { Text, StyledLogo } from "components/ui/logo/styles.js";

function Logo() {
  return (
    <StyledLogo href="/">
      <img src={logo} alt="Логотип." />
      <Text>Фермерские продукты</Text>
    </StyledLogo>
  );
}

export default Logo;
