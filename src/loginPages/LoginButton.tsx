import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function LoginButton(props: { onClick?: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  return (
    <button
        onClick={() => {
            props.onClick?.();
            navigate("/login");   
        }}
      style={{
        width: "217px",
        height: "51px",
        margin: "8px",
        borderRadius: "10px",
        backgroundColor: isHovered ? "#AAAE32" : "#FFFFFF", // 버튼 색상
        border: "1px solid #AAAE32", 
        color: isHovered ? "#FFFFFF" : "#AAAE32", // 호버 시 글자색색
        fontSize: "15px",
        fontWeight: 600,
        cursor: "pointer",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      로그인
    </button>
  );
}
