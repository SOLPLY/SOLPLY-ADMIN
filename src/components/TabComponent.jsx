import * as S from "./TabComponent.styled";

const TabComponent = ({ icon, text }) => {
  return (
    <S.Wrapper>
      <S.Icon>{icon}</S.Icon>
      <S.Text>{text}</S.Text>
    </S.Wrapper>
  );
};

export default TabComponent;
