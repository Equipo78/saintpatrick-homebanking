import styled from "styled-components";

export const NavBarContainer = styled.nav`
  grid-area: navbar;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 3rem 0;
  background-color: rgba(0, 87, 88, 0.03);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  font-weight: 400;
`;

export const NavBarUl = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
`;

export const NavBarLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`;

const NavBarImg = styled.img`
  width: 23px;
  height: 23px;
`;

export const NavBarIcon = styled(NavBarImg)``;

export const SpaceBreak = styled.div`
  height: 3rem;
`;