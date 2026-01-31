const fontGenerator = (
  fontFamily,
  fontSize = "1rem", //기본폰트크기
  fontWeight = "400", //기본두께
  lineHeight = "1.5", // 행간140% 원래기본은 1.5
  letterSpacing = "normal" //자간-2.5% 원래기본은 normal
) => ({
  "font-family": fontFamily,
  "font-size": fontSize,
  "font-weight": fontWeight,
  "line-height": lineHeight,
  "letter-spacing": letterSpacing,
});

export const theme = {
  colors: {
    // 아래와같이 사용가능
    // color: ${({ theme }) => theme.colors.색상};

    //나중에 필요시 추가하기
    bg: "#FFFFFF", //배경색
    black: "#000000",
    white: "#FFFFFF",

    // 디자인 시스템 컬러등록 (추후 피그마 확인 ex) 이름:"컬러")
  },
  fonts: {
    // 기본 프리텐다드로 필요시 수정~~
    default: fontGenerator(
      "Pretendard-SemiBold",
      "1rem",
      "400",
      "1.5",
      "normal"
    ),
    // 폰트 설정 (아래처럼사용가능)
    // font-family: ${({ theme }) => theme.fonts.head["font-family"]};
    // font-size: ${({ theme }) => theme.fonts.head["font-size"]};

    // 추후 피그마 보고 미리 설정
    // ex) head: fontGenerator("Pretendard-ExtraBold", "2rem"), //32px
    //
  },
};
