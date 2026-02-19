import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme}) => theme.colors.white};
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
`