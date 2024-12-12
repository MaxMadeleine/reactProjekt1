import styled from "styled-components";

export const StyledNavComponent = styled.nav`
  background-color: ${(props) => props.bgColor || 'whitesmoke'};
  ul {
    color: ${(props) => props.ulColor || 'red'};
  }
`;
