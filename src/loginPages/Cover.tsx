import '../index1.css';
import LoginButton from './LoginButton';
import SignUpButton from './SignUpButton';
import { motion } from "framer-motion";
import { useEffect } from 'react';

export default function Cover() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
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
          flexDirection: "column",         // 세로 정렬
          alignItems: "center",            // 수평 가운데 정렬
          fontFamily: "SNC-M",
        }}
      >
        {/* 로고 + 텍스트 가로 정렬 */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="/images/logo.png"
            style={{ width: "65px", height: "65px", marginRight: "8px" }}
          />
          <span style={{ fontSize: "18px", lineHeight: "1.2" }}>
            오늘도<br />
            잘먹었습니다
          </span>
        </div>

        {/* 로고와 버튼 사이 간격 */}
        <div style={{ height: "87px" }} />

        {/* 버튼 두 개 세로 정렬 */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <SignUpButton onClick={() => console.log("회원가입 클릭")} />
          <LoginButton onClick={() => console.log("로그인 클릭")} />
        </div>
      </div>
    </motion.div>
  );
}
