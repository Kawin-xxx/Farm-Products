import React from "react";
import Logo from "components/ui/logo/logo";
import Copyright from "components/ui/сopyright/сopyright";
import {StyledSectionFooter} from "./styles.js";

function Footer() {
  return (
    <>
      <StyledSectionFooter>
        <Logo />
        <Copyright />
      </StyledSectionFooter>
    </>
  );
}

export default Footer;
