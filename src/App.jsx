import styled from "styled-components";
import logo from "./assets/icons/logo.svg";

function App() {
  return (
    <>
      <Wrapper>
        <Container>
          <Title>관리자 로그인</Title>
          <Content>어드민 시스템에 로그인하세요</Content>
          <KaKaoContainer>
            <Icon src={logo} />
            <Text>카카오 로그인</Text>
          </KaKaoContainer>
          <GuideText>운영자 전용 페이지입니다</GuideText>
        </Container>
      </Wrapper>
    </>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: #f9fafb;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 45vw;
  height: 40vh;
  border-radius: 8.837px;
  border: 0.884px solid #d1d5dc;
  background: #fff;
  gap: 25px;
`;

const Title = styled.div`
  color: #0a0a0a;
  text-align: center;
  font-family: Inter;
  font-size: 21px;
  font-style: normal;
  font-weight: 500;
`;

const Content = styled.div`
  color: #4a5565;
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;

const KaKaoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30vw;
  height: 5vh;
  gap: 15px;
  background-color: #fee500;
`;

const Icon = styled.img`
  width: 17px;
  height: 17px;
`;

const Text = styled.div`
  color: #191919;
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;

const GuideText = styled.div`
  color: #6a7282;
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
`;
