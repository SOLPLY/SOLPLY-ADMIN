import { Outlet } from "react-router-dom";
import styled from "styled-components";

export const DefaultLayout = () => {
  return (
    <>
      <Wrapper>
        <Outlet />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.bg};
  min-height: calc(var(--vh, 1vh) * 100);
`;
