import styled, { css } from "styled-components";

const gridList = css`
  margin-bottom: ${(props) =>
    props.$indent ? `-${props.$indent}px` : `-${props.theme.indent}`};
  margin-top: ${(props) =>
    props.$indent ? `${props.$indent}px` : `-${props.theme.indent}`};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  text-align: ${(props) => props.$align || "center"};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  ${(props) => (props.$isGridList ? gridList : "")}
`;

export default Ul;
