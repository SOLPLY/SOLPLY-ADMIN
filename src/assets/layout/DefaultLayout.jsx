import { Outlet } from "react-router-fom";
export const DefaultLayout = () => {
  return (
    <>
      <Wrapper>
        <header />
        <Outlet />
        <footer />
      </Wrapper>
    </>
  );
};

// outlet안에 필요한 요소들 들어가짐..
