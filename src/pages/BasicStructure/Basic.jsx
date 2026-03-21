import { useState } from "react";
import * as S from "./Basic.styled";
import TabBar from "../../components/TabBar";

import Town from "../town/Town";
import Place from "../place/Place";
import Course from "../course/Course";

const Basic = () => {
  const [activeTab, setActiveTab] = useState("TOWN");

  return (
    <S.Wrapper>
      <TabBar activeTab={activeTab} onChangeTab={setActiveTab} />
      <S.Content>
        {activeTab === "TOWN" && <Town />}
        {activeTab === "PLACE" && <Place />}
        {activeTab === "COURSE" && <Course />}
        {activeTab === "TAG" && <div>태그 관리</div>}
        {activeTab === "PLACE_APPROVAL" && <div>등록 장소 승인</div>}
        {activeTab === "PLACE_REPORT" && <div>장소 제보 확인</div>}
      </S.Content>
    </S.Wrapper>
  );
};

export default Basic;
