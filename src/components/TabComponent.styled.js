import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 25vw;
  padding: 5%;
  cursor: pointer;
  background-color: ${({ active }) =>
    active ? "#111827" : "transparent"};
  color: ${({ active }) => (active ? "#fff" : "#111")};
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
  color: ${({ active }) => (active ? "#fff" : "#111")};
`;

