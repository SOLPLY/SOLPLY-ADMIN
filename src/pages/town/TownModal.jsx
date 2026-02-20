import { useState } from "react";
import * as S from "./TownModal.styled";

const TownModal = ({ onClose }) => {
  const [type, setType] = useState("area");

  return (
    <S.Overlay>
      <S.Modal>
        <S.Header>
          <span>동네 추가</span>
          <button onClick={onClose}>✕</button>
        </S.Header>

        <S.Field>
          <label>동네 유형 *</label>
          <S.RadioGroup>
            <S.Radio>
              <input
                type="radio"
                name="type"
                value="area"
                checked={type === "area"}
                onChange={() => setType("area")}
              />
              <span>지역</span>
            </S.Radio>
            <S.Radio>
              <input
                type="radio"
                name="type"
                value="town"
                checked={type === "town"}
                onChange={() => setType("town")}
              />
              <span>동네</span>
            </S.Radio>
          </S.RadioGroup>
        </S.Field>

        <S.Field>
          <label>지역 *</label>
          <select>
            <option>지역 선택</option>
          </select>
        </S.Field>

        {type === "town" && (
          <S.Field>
            <label>동네 이름 *</label>
            <input placeholder="망원" />
          </S.Field>
        )}

        <S.Footer>
          <S.Cancel onClick={onClose}>취소</S.Cancel>
          <S.Save>저장</S.Save>
        </S.Footer>
      </S.Modal>
    </S.Overlay>
  );
};

export default TownModal;
