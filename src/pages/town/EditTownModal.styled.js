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
  width: 420px;
  background: #fff;
  border-radius: 8px;
  padding: 20px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  margin-bottom: 20px;

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 16px;

  label {
    font-size: 14px;
    font-weight: 500;
  }

  input,
  select {
    height: 36px;
    padding: 0 10px;
    border: 1px solid #d1d5db;
    border-radius: 4px;
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Radio = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`;

export const Cancel = styled.button`
  padding: 8px 14px;
  background: #fff;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  cursor: pointer;
`;

export const Save = styled.button`
  padding: 8px 14px;
  background: #111827;
  color: #fff;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;

export const Delete = styled.button`
  padding: 8px 14px;
  background: #ef4444;
  color: #fff;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;