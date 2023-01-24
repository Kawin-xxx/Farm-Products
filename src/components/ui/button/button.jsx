import React from "react";
import { StyledButton } from "./styles";

function Button({ children, minWidth, link }) {
  return (
    <StyledButton
      $minWidth={minWidth}
      {...(link ? { href: link } : { as: "button", type: "button" })}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
