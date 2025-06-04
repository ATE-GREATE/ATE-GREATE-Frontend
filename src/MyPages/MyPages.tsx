import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index1.css';

export default function MyPages() {
  const [infoOpen, setInfoOpen] = useState<boolean>(false);
  const [serviceOpen, setServiceOpen] = useState<boolean>(false);
  const [showLogoutModal, setShowLogoutModal] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogout = (): void => {
    setShowLogoutModal(false);
    // 실제 로그아웃 처리 로직 여기에 추가
    navigate('/splash');
  };

  return (
    <div className="mypage-container">
      <div className="mypage-header">
        <h2>마이페이지</h2>
      </div>

      <div className="mypage-profile">
        <div className="profile-info">
          <div className="avatar-placeholder" />
          <div>
            <div className="username">박서영</div>
            <div className="badges">
              <span className="badge">보통회원</span>
              <span className="badge">냉장고회원</span>
              <span className="badge">레시피왕</span>
            </div>
          </div>
        </div>
        <button
          className="recipe-button"
          onClick={() => navigate('/my-recipe')}
        >
          <img src="/MyRecipe.png" alt="MyRecipe" />
        </button>
      </div>

      <div className="mypage-section">
        <button
          className="section-toggle"
          onClick={() => setInfoOpen(!infoOpen)}
        >
          내 정보 관리
          <span>{infoOpen ? '▲' : '▼'}</span>
        </button>
        {infoOpen && (
          <div className="section-content">
            <div
              className="section-item"
              onClick={() => navigate('/private')}
            >
              회원 정보 수정
            </div>
            <div
              className="section-item"
              onClick={() => navigate('/inquiry')}
            >
              개인정보 처리 방침
            </div>
          </div>
        )}
      </div>

      <div className="mypage-section">
        <button
          className="section-toggle"
          onClick={() => setServiceOpen(!serviceOpen)}
        >
          서비스 안내
          <span>{serviceOpen ? '▲' : '▼'}</span>
        </button>
        {serviceOpen && (
          <div className="section-content">
            <div className="section-item">고객문의</div>
          </div>
        )}
      </div>

      <div className="logout-section">
        <button className="logout-button" onClick={() => setShowLogoutModal(true)}>
          로그아웃
        </button>
      </div>

      {showLogoutModal && (
        <div className="modal-backdrop">
          <div className="logout-modal">
            <p>로그아웃 하시겠습니까?</p>
            <div className="modal-buttons">
              <button onClick={() => setShowLogoutModal(false)}>취소</button>
              <button onClick={handleLogout} className="confirm">
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
