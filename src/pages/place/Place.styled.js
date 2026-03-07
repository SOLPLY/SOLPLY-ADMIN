import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100vw;
  height: 95vh;
  margin-top: 5vh;
  background-color: ${({ theme}) => theme.colors.white};
`;

export const Title = styled.span`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 3%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 80%;
  padding: 2%;
  border: 3px solid gray;
  border-radius: 10px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FilterArea = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 200px;
  padding: 10px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #111827;
  }
`;

export const Select = styled.select`
  width: 100px;
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

export const AddBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;

  padding: 10px 20px;
  font-size: 20px;
  font-weight: 500;
  color: #fff;

  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 6px;
  border: none;
  cursor: pointer;
`;

export const Table = styled.div`
  width: 100%;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
`;

export const TableHeader = styled.div`
  display: grid;
  align-items: center;     
  justify-items: center;  
  grid-template-columns: 10% 25% 25% 15% 15% 10%;
  padding: 12px;
  font-weight: 600;
  background-color: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
`;

export const TableRow = styled.div`
  display: grid;
  align-items: center;      
  justify-items: center; 
  grid-template-columns: 10% 25% 25% 15% 15% 10%;

  padding: 12px;
  align-items: center;
  border-bottom: 1px solid #e5e7eb;

  &:last-child {
    border-bottom: none;
  }
`;

export const Toggle = styled.div`
  width: 36px;
  height: 20px;
  border-radius: 10px;
  background-color: #111827;
  position: relative;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 18px;
    width: 16px;
    height: 16px;
    background-color: white;
    border-radius: 50%;
  }
`;

export const EditBtn = styled.button`
  display: flex;
  justify-content: left;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
`;