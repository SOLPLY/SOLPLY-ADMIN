import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${({ theme}) => theme.colors.white};
  width: 95vw;
  height: 95vh;
  margin-top: 5vh;
`;

export const AuthContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 5%;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
`;

export const Name = styled.div`
  font-size: 18px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 50vh;
  gap: 8px;
`;