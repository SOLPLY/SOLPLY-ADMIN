import * as S from "./TabBar.styled";
import TabComponent from "./TabComponent";
import logo from "../assets/icons/logo.svg";

const TabBar = () => {
  return (
    <S.Wrapper>
      <S.AuthContainer>
        <S.Profile>{<img src={logo} alt="프로필" />}</S.Profile>
        <S.Name>Admin</S.Name>
      </S.AuthContainer>
      <S.CategoryContainer>
        <TabComponent
          icon={<img src={logo} alt="동네관리" />}
          text="동네 관리"
        />
        <TabComponent
          icon={<img src={logo} alt="장소관리" />}
          text="장소 관리"
        />
        <TabComponent
          icon={<img src={logo} alt="코스관리" />}
          text="코스 관리"
        />
        <TabComponent
          icon={<img src={logo} alt="태그관리" />}
          text="태그 관리"
        />
        <TabComponent
          icon={<img src={logo} alt="등록장소승인" />}
          text="등록 장소 승인"
        />
        <TabComponent
          icon={<img src={logo} alt="장소제보확인" />}
          text="장소 제보 확인"
        />
      </S.CategoryContainer>
    </S.Wrapper>
  );
};

export default TabBar;
