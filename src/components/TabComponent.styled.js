import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 25vw;
  background-color: ${({ theme}) => theme.colors.white};
`;

export const Icon = styled.div`
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.span`
  font-size: 18px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
`;

