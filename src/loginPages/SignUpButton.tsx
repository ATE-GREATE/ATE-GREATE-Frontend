import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../index1.css';

export default function SignUpButton(props: { onClick?: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        props.onClick?.();
        navigate("/signup");  
      }}
      style={{
        width: "217px",
        height: "51px",
        margin: "8px",
        borderRadius: "10px",
        backgroundColor: isHovered ? "#FFFFFF" : "#AAAE32", // 버튼 색상
        border: "1px solid #AAAE32",
        color: isHovered ? "#AAAE32" : "#FFFFFF", // 호버 시 글씨색상
        fontSize: "15px",
        fontWeight: 600,
        cursor: "pointer",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      회원가입
    </button>
  );
}
