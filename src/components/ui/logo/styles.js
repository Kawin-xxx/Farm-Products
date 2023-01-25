import styled, { ThemeConsumer } from "styled-components";

export const StyledLogo = styled.a`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  align-items: center;
  height: 44px;
  color: #333333;

  &::hover {
    text-decoration: none;
  }
`

export const Text = styled.span`
  display: flex;
  height: 32px;
  margin-left: 24px;
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  color: ${(props) => props.theme.ColorBlackForText};
`