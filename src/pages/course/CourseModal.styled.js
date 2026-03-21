import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 50%;
  background: #fff;
  border-radius: 8px;
  padding: 20px;
`