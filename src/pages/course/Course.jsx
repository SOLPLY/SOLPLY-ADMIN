import * as S from "./Course.styled";

const Course = () => {
  return (
    <>
      <S.Wrapper>
        <S.Title>코스 관리</S.Title>
        <S.Container>
          <S.Header>
            <S.AddBtn>
              <span>+</span>
              코스 추가
            </S.AddBtn>
            <S.FilterArea>
              <S.Select>
                <option value="all">전체</option>
                <option value="mangwon">망원</option>
                <option value="hongdae">홍대</option>
              </S.Select>
            </S.FilterArea>
          </S.Header>
          <S.Table>
            <S.TableHeader>
              <span>번호</span>
              <span>동네 이름</span>
              <span>코스명</span>
              <span>생성자</span>
              <span>활성화</span>
              <span>수정</span>
            </S.TableHeader>
            <S.TableRow>
              <span>1</span>
              <span>서울</span>
              <span>-</span>
              <span>태그</span>
              <S.Toggle />
              <S.EditBtn>✎</S.EditBtn>
            </S.TableRow>
            <S.TableRow>
              <span>2</span>
              <span>망원</span>
              <span>서울</span>
              <span>태그</span>
              <S.Toggle />
              <S.EditBtn>✎</S.EditBtn>
            </S.TableRow>
          </S.Table>
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default Course;
