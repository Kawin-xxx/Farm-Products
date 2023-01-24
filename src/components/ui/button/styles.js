import styled from "styled-components";

export const StyledButton = styled.a`
  display: block;
  box-sizing: border-box;
  min-width: ${(props) => `${props.$minWidth}px`};
  max-width: 700px;
  min-height: 60px;
  background-color: ${(props) => props.theme.ColorOrangeForButton};
  color: ${(props) => props.theme.ColorWhite};
  padding: 17px 98px;
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  text-decoration: none;

  &:hover,
  :active {
    background-color: #fc7427;
    box-shadow: inset 0 4px 0 rgba(0, 0, 0, 0.14);
  }

  &:active {
    box-shadow: none;
  }
`;
