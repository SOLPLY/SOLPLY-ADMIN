import axios from "axios";

export const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem("refresh");

  if (!refreshToken) {
    console.warn(
      "리프레시 토큰이 없습니다. 로그인 상태를 유지할 수 없습니다."
    );
    return null; // 토큰이 없으면 즉시 null 반환
  }

  try {
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_API}/api/accounts/auth/refresh`,
      {
        refresh_token: refreshToken,
      }
    );

    const { access_token, refresh_token: newRefreshToken } =
      response.data;

    // 새로운 토큰 저장
    if (access_token) localStorage.setItem("access", access_token);
    if (newRefreshToken)
      localStorage.setItem("refresh", newRefreshToken);

    return access_token; // 새로운 액세스 토큰 반환
  } catch (error) {
    console.error(
      "리프레시 토큰 갱신 실패:",
      error.response?.data || error.message
    );

    // 리프레시 토큰이 유효하지 않으면 로그아웃 처리
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");

    return null;
  }
};
