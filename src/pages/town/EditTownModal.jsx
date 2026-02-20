import { useState } from "react";
import * as S from "./EditTownModal.styled";

const EditTownModal = ({ onClose }) => {
  const [type] = useState("town");

  return (
    <S.Overlay>
      <S.Modal>
        <S.Header>
          <span>동네 수정</span>
          <button onClick={onClose}>✕</button>
        </S.Header>

        {type === "area" && (
          <S.Field>
            <label>지역 이름 *</label>
            <input defaultValue="서울" />
          </S.Field>
        )}

        {type === "town" && (
          <>
            <S.Field>
              <label>동네 이름 *</label>
              <input defaultValue="망원" />
            </S.Field>

            <S.Field>
              <label>지역 *</label>
              <select defaultValue="서울">
                <option>서울</option>
              </select>
            </S.Field>
          </>
        )}

        <S.Footer>
          <S.Cancel onClick={onClose}>취소</S.Cancel>
          <S.Delete>삭제</S.Delete>
          <S.Save>저장</S.Save>
        </S.Footer>
      </S.Modal>
    </S.Overlay>
  );
};

export default EditTownModal;
