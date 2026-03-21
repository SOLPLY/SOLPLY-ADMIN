import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../apis/axiosInstance";

const KakaoCallbackPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKakaoLogin = async () => {
      try {
        const queryParams = new URLSearchParams(window.location.search);
        const code = queryParams.get("code");

        if (!code) {
          throw new Error("인가 코드가 없습니다.");
        }

        const response = await axiosInstance.post(
          "/api/auth/social/kakao/login",
          {
            token: code,
          },
        );

        const { accessToken, refreshToken, isNewUser } = response.data.data;

        // ✅ 토큰 저장
        localStorage.setItem("access", accessToken);
        localStorage.setItem("refresh", refreshToken);

        // ✅ axios 헤더 업데이트
        axiosInstance.defaults.headers.common["Authorization"] =
          `Bearer ${accessToken}`;

        // ✅ 분기 처리
        if (isNewUser) {
          navigate("/signup"); // 회원가입 페이지
        } else {
          navigate("/basic");
        }
      } catch (error) {
        console.error(
          "카카오 로그인 실패:",
          error.response?.data || error.message,
        );
        navigate("/");
      }
    };

    handleKakaoLogin();
  }, [navigate]);

  return <div>카카오 로그인 처리 중...</div>;
};

export default KakaoCallbackPage;
