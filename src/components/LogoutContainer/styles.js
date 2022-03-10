import styled from "styled-components";

export const Wrapper = styled.div`
  flex: .7;
  max-width: 34rem;
  max-height: 25rem;
  background: #fffaef;
  border-radius: 3.1rem;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  padding: 63px 45px;
  margin: 1rem;
  @media (max-width: 960px){
    flex:1;
  }
`;

export const Title = styled.h2`
  font-family: "Bona Nova", serif;
  font-weight: 400;
  font-size: 2.2rem;
  text-align: center;
  margin-bottom: 3rem;
  @media (max-width: 960px){
    font-size: 1.7rem;
  }
`;
