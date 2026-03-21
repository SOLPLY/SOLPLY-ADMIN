import * as S from "./CourseModal.styled";

const CourseModal = ({ onClose }) => {
  return (
    <S.Overlay>
      <S.Modal>
        <S.Header>
          <S.Title>장소 추가</S.Title>
          <button onClick={onClose}>x</button>
        </S.Header>
      </S.Modal>
    </S.Overlay>
  );
};

export default CourseModal;
