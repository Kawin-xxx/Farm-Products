import styled from "styled-components";

export const StyledComparisonCard = styled.section`
  box-sizing: border-box;
  width: 540px;
  min-height: 197px;
  padding: 20px;
  background-color: ${(props) => (props.isNegative ? props.theme.ColorNeganive : props.theme.ColorPositive)}
`

export const ComparisonHeader = styled.header`
  display: flex;
  margin-bottom: 20px;
  text-align: left;
`

export const Image = styled.img`
  float: left;
  width: 52px;
  height: 52px;
  margin-right: 20px;
`

export const Owner = styled.span`
  display: inline-block;
  min-height: 25px;
  margin-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 14px;
  line-height: 25px;
  color: #ffffff;
  background-color: ${(props) => (props.isNegative ? props.theme.ColorRed : props.theme.ColorGreen)};
`

export const Text = styled.p`
  margin: 0;
  text-align: left;
`