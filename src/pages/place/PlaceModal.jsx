import * as S from "./PlaceModal.styled";

const PlaceModal = ({ onClose }) => {
  return (
    <S.Overlay>
      <S.Modal>
        <S.Header>
          <S.Title>장소 추가</S.Title>
          <button onClick={onClose}>x</button>
        </S.Header>
        <S.Field>
          <S.BasicInfo>
            <S.Title>기본 정보</S.Title>
            <label>장소명 *</label>
            <input type="text" name="placeName" />
            <label>장소 타입 *</label>
            <S.Select>
              <option value="place">장소</option>
            </S.Select>
          </S.BasicInfo>

          <S.LocationInfo>
            <S.Title>위치 정보</S.Title>
            <S.LocationContainer>
              <S.Latitude>
                <label>위도 (Latitude) *</label>
                <input type="text" name="latitude" />
              </S.Latitude>
              <S.Longitude>
                <label>경도 (Longitude) *</label>
                <input type="text" name="longitude" />
              </S.Longitude>
            </S.LocationContainer>
            <label>도로명 주소 *</label>
            <input type="text" name="street" />
          </S.LocationInfo>

          <S.AffiliationInfo>
            <S.Title>소속 정보</S.Title>
            <label>동네 선택 *</label>
            <S.Select>
              <option value="1">망원</option>
              <option value="2">연희</option>
            </S.Select>
          </S.AffiliationInfo>

          <S.CommunicationInfo>
            <S.Title>연락 / 운영 정보</S.Title>
            <label>전화번호</label>
            <input type="text" name="call" />
            <label>오픈 시간</label>
            <input type="text" name="opentime" />
          </S.CommunicationInfo>

          <S.IntroInfo>
            <S.Title>소개</S.Title>
            <label>한 줄 소개 (20자 이내)</label>
            <input type="text" name="introduction" />
          </S.IntroInfo>

          <S.TagSetting>
            <S.Title>태그 설정</S.Title>
            <label>메인 태그 (MAIN) - 1개 필수 *</label>
            <S.Select>
              <option value="tag1">tag1</option>
              <option value="tag2">tag2</option>
            </S.Select>
            <S.TagText>
              메인 태그를 변경하면 하위 태그 선택이 초기화됩니다
            </S.TagText>
          </S.TagSetting>

          <S.ImageContainer>
            <S.Title>이미지 업로드 (최대 3장)</S.Title>
            <S.ImageUpload>
              <span>이미지 업로드 영역</span>
              <span>클릭하여 파일 선택</span>
            </S.ImageUpload>
          </S.ImageContainer>
          <S.SNSLink>
            <S.Title>SNS 링크</S.Title>
            <S.SNSContainer>
              <S.SNSSelect>
                <option value="insta">Instagram</option>
                <option value="naver">NAVER</option>
              </S.SNSSelect>
              <input type="text" name="link" />
            </S.SNSContainer>
          </S.SNSLink>
          <S.ButtonContainer>
            <S.Cancel onClick={onClose}>취소</S.Cancel>
            <S.Save>저장</S.Save>
          </S.ButtonContainer>
        </S.Field>
      </S.Modal>
    </S.Overlay>
  );
};

export default PlaceModal;
