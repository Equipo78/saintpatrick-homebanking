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
  bottom: -1.3rem;
  margin-left: 3.1rem;
  width: 4.4rem;
`;
