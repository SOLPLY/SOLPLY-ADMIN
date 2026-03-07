import { useState } from "react";
import * as S from "./Place.styled";
import PlaceModal from "./PlaceModal";

const Place = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <S.Wrapper>
        <S.Title>장소 관리</S.Title>
        <S.Container>
          <S.Header>
            <S.AddBtn onClick={() => setIsOpen(true)}>
              <span>+</span>
              장소 추가
            </S.AddBtn>
            <S.FilterArea>
              <S.SearchInput placeholder="장소명 검색" />
              <S.Select>
                <option value="all">전체</option>
                <option value="active">활성화</option>
                <option value="inactive">비활성화</option>
              </S.Select>
            </S.FilterArea>
          </S.Header>
          <S.Table>
            <S.TableHeader>
              <span>번호</span>
              <span>장소 이름</span>
              <span>동네 이름</span>
              <span>메인 태그</span>
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
      {isOpen && <PlaceModal onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default Place;
