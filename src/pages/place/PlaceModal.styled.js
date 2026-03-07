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
  height: 90%;
  background: #fff;
  border-radius: 8px;
  padding: 20px;
`
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
  flex: 1;
  overflow-y: auto;
  gap: 30px;

  -ms-overflow-style: none;  /* IE, Edge */
  scrollbar-width: none;     /* Firefox */

  &::-webkit-scrollbar {
    display: none;           /* Chrome, Safari */
  }

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
`
export const BasicInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LocationInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Latitude = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 50%;
`;

export const Longitude = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 50%;
`;

export const AffiliationInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CommunicationInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const IntroInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TagSetting = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TagText = styled.div`
  color: #9CA3AF;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ImageUpload = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const SNSLink = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SNSContainer = styled.div`
  display: flex;
  gap: 10px;
  
  input {
    width: 70%;
  }
`;

export const SNSSelect = styled.select`
  width: 30%;
  padding: 4px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  font-size: 14px;
  background-color: white;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #111827;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
  margin-right: 10px;
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

export const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  font-size: 14px;
  background-color: white;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #111827;
  }
`;