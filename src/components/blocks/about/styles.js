import styled from "styled-components";
import { Section } from "/src/components/styled";

export const StyledSection = styled(Section)`
  position: relative;
  box-sizing: border-box;
  padding: 183px 553px 183px 90px;
  background-color: #d8ecfe;

  /*&::before {
    position: absolute;

    bottom: 0;
    right: 90px;
    display: block;
    width: 446px;
    height: 563px;
    content: "";
    background-repeat: no-repeat;\
  }*/
`;

export const AboutWrapper = styled.div`
  z-index: 3;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  min-width: 538px;
`;

export const Text = styled.p`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  margin-top: 24px;
`;
