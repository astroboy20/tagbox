import styled from "styled-components";

export const OptionItem = styled.div`
  cursor: pointer;
  text-decoration: ${(props) => (props.selected ? "underline" : "none")};
  color: #000;
`;
