import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../apis/axiosInstance";

const KakaoCallbackPage = () => {
  const navigate = useNavigate();
  const executedRef = useRef(false);

  useEffect(() => {
    if (executedRef.current) return;
    executedRef.current = true;

    const handleAuthCode = async () => {
      try {
        // URL에서 서버가 준 authCode 가져오기
        const queryParams = new URLSearchParams(window.location.search);
        const authCode = queryParams.get("authCode");
        if (!authCode) throw new Error("authCode가 없습니다.");

        const response = await axiosInstance.post(
          "/api/admin/auth/kakao/token",
          { authCode },
        );

        const { accessToken, refreshToken } = response.data.data;

        localStorage.setItem("access", accessToken);
        localStorage.setItem("refresh", refreshToken);
        axiosInstance.defaults.headers.common["Authorization"] =
          `Bearer ${accessToken}`;

        navigate("/basic"); // 로그인 성공 후 기본 페이지 이동
      } catch (error) {
        console.error(
          "카카오 로그인 실패:",
          error.response?.data || error.message,
        );
        navigate("/"); // 실패 시 로그인 페이지
      }
    };

    handleAuthCode();
  }, [navigate]);

  return <div>카카오 로그인 처리 중...</div>;
};

export default KakaoCallbackPage;
