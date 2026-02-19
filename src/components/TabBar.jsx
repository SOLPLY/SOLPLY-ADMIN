import * as S from "./TabBar.styled";
import TabComponent from "./TabComponent";
import logo from "../assets/icons/logo.svg";

const TabBar = ({ activeTab, onChangeTab }) => {
  return (
    <S.Wrapper>
      <S.AuthContainer>
        <S.Profile>{<img src={logo} alt="프로필" />}</S.Profile>
        <S.Name>Admin</S.Name>
      </S.AuthContainer>
      <S.CategoryContainer>
        <TabComponent
          active={activeTab === "TOWN"}
          icon={<img src={logo} alt="동네관리" />}
          text="동네 관리"
          onClick={() => onChangeTab("TOWN")}
        />
        <TabComponent
          active={activeTab === "PLACE"}
          icon={<img src={logo} alt="장소관리" />}
          text="장소 관리"
          onClick={() => onChangeTab("PLACE")}
        />
        <TabComponent
          active={activeTab === "COURSE"}
          icon={<img src={logo} alt="코스관리" />}
          text="코스 관리"
          onClick={() => onChangeTab("COURSE")}
        />
        <TabComponent
          active={activeTab === "TAG"}
          icon={<img src={logo} alt="태그관리" />}
          text="태그 관리"
          onClick={() => onChangeTab("TAG")}
        />
        <TabComponent
          active={activeTab === "PLACE_APPROVAL"}
          icon={<img src={logo} alt="등록장소승인" />}
          text="등록 장소 승인"
          onClick={() => onChangeTab("PLACE_APPROVAL")}
        />
        <TabComponent
          active={activeTab === "PLACE_REPORT"}
          icon={<img src={logo} alt="장소제보확인" />}
          text="장소 제보 확인"
          onClick={() => onChangeTab("PLACE_REPORT")}
        />
      </S.CategoryContainer>
    </S.Wrapper>
  );
};

export default TabBar;
