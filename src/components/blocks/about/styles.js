import styled from "styled-components";
import { Section } from "components/styled";
import  aboutImage from "assets/about.svg";

export const StyledSection = styled(Section)`
  position: relative;
  box-sizing: border-box;
  padding: 183px 553px 183px 90px;
  background-color: ${(props) => props.theme.ColorForBlockAbout};

  &::before {
    z-index: 2;
    position: absolute;

    bottom: 0;
    right: 0;
    display: block;
    width: 446px;
    height: 563px;
    content: "";
    background-repeat: no-repeat;
    background-image: url(${aboutImage});
  }
  
  &::after {


    z-index: 1;
    width: 446px;
    height: 446px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.ColorBlue};
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    right: 90px;
    bottom: 70px;
  }
`;

export const AboutWrapper = styled.div`
  z-index: 3;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  min-width: 538px;
`;

export const Text = styled.p`
  width: 538px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  margin-top: 24px;
`;
