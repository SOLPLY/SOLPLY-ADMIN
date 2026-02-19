import * as S from "./TabComponent.styled";

const TabComponent = ({ icon, text, active, onClick }) => {
  return (
    <S.Wrapper active={active} onClick={onClick}>
      <S.Icon>{icon}</S.Icon>
      <S.Text active={active}>{text}</S.Text>
    </S.Wrapper>
  );
};

export default TabComponent;
