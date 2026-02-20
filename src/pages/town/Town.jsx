import { useState } from "react";
import * as S from "./Town.styled";
import TownModal from "./TownModal";
import EditTownModal from "./EditTownModal";

const Town = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  return (
    <>
      <S.Wrapper>
        <S.Title>동네 관리</S.Title>
        <S.Container>
          <S.Header>
            <S.AddBtn onClick={() => setIsOpen(true)}>
              <span>+</span>
              동네 추가
            </S.AddBtn>
          </S.Header>
          <S.Table>
            <S.TableHeader>
              <span>번호</span>
              <span>동네 이름</span>
              <span>지역</span>
              <span>활성화</span>
              <span>수정</span>
            </S.TableHeader>
            <S.TableRow>
              <span>1</span>
              <span>서울</span>
              <span>-</span>
              <S.Toggle />
              <S.EditBtn onClick={() => setIsEditOpen(true)}>✎</S.EditBtn>
            </S.TableRow>
            <S.TableRow>
              <span>2</span>
              <span>망원</span>
              <span>서울</span>
              <S.Toggle />
              <S.EditBtn onClick={() => setIsEditOpen(true)}>✎</S.EditBtn>
            </S.TableRow>
          </S.Table>
        </S.Container>
      </S.Wrapper>
      {isOpen && <TownModal onClose={() => setIsOpen(false)} />}
      {isEditOpen && <EditTownModal onClose={() => setIsEditOpen(false)} />}
    </>
  );
};

export default Town;
