import styled from "styled-components";

export const HeaderStyled = styled.div`
  position: relative;
  grid-area: header;
  width: 100%;
  height: ${props => props.height};
  background-color: var(--primary);
`;

export const Logo = styled.img`
  position: absolute;

  margin-left: 3.1rem;
  width: 4.4rem;
`;
