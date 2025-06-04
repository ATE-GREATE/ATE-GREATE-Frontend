import { useNavigate } from 'react-router-dom';
import '../index1.css';
import { useEffect } from 'react';

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/cover"); // 초 후 /cover 페이지로 이동
    }, 1);

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, [navigate]);

    return (
    <div
      style={{
        width: "393px",
        height: "852px",
        display: "flex",
        justifyContent: "center", 
        alignItems: "center",     
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row", // 이미지와 텍스트 나열
          alignItems: "center", // 세로 정렬 
          gap: "0px",           // 이미지와 텍스트 사이 간격 
          fontFamily: "SNC-M"  // 폰트 적용
        }}
      >
        <img
          src="/images/logo.png"
          style={{ width: "65px", height: "65px", marginRight: "0" }}
        />
        <span style={{ fontSize: "18px", lineHeight: "1.2" }}>
          오늘도<br />
          잘먹었습니다
        </span>
      </div>
    </div>
  );
}
