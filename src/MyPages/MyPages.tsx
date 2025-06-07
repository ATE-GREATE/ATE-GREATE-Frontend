import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index1.css';
import '../MyPages/MyPages.css';
import '../NanumGothic_B.css'
import '../NSOTF_B.css';
import '../Pretend_M.css';
import '../Pretend_SB.css';
import '../Pretend_R.css';
import Navigation from '../HomePages/Navigation';

export default function MyPages() {

const navigate = useNavigate();

const [showMyInfo, setShowMyInfo] = useState(false);
const [showServiceInfo, setShowServiceInfo] = useState(false);

  return (
    <div
      style={{
        backgroundColor: '#F5E1E3',
        height: '100vh',
        margin: '0 auto',
        overflow: 'hidden',
        position: 'relative',
        paddingBottom: '100px',
      }}
    >
      <div style={{
        position: 'absolute',
        top: '266px',
        left: '0',
        right: '0',
        width: '393px',
        height: 'calc(1000vh - 400px)', 
        backgroundColor: '#FFFDF7',
        borderRadius: '40px',
        margin: '0 auto',
      }} />
      <div style={{
        position: 'absolute',
        top: '180px',
        left: '50px',
        fontSize: '40px',
        color: '#CC747E',
        fontFamily: 'NG_B',
      }}>
        마이페이지
        <div style={{ padding: '80px 14px', paddingTop: '70px',  }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginLeft: '-30px' }}>    
          <img 
          src="/profile/profile1.png"
          // 프로필 사진
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            marginRight: '12px'
          }} />
          <div style={{
            marginTop: '-15px',
            marginLeft: '10px',
          }}>
            {/* 닉네임 */}
            <span style={{
              color: '#000000',
              fontSize: '16px',
              fontFamily: 'Pretend_SB'
            }}>
              박서영
            </span>
            {/* #KeyWord */}
            <div className="tag-container">
              {['신중한', '열정적인', '쾌활한'].map((tag, idx) => (
                <div key={idx} className="tag-box">
                  #{tag}
                </div>
              ))}
            </div>
            {/* MyRecipe 페이지로 이동 버튼 */}
             <button
                onClick={() => navigate('/MyRecipe')}
                style={{
                  position: 'absolute',
                  top: '120px',
                  left: '260px',
                  backgroundColor: '#F5E1E3',
                  borderRadius: '10px',
                  border: 'none',
                  width: '48px',
                  height: '48px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 0,
                }}
              >
                <img
                  src="/images/RecipeBook.png"  
                  alt="레시피북"
                  style={{
                    width: '18px',
                    height: '20px',
                    objectFit: 'contain',
                  }}
                />
              </button>
          </div>
        </div>
        </div>
      </div>
      {/* ---- */}
      <div
        style={{
          position: 'absolute',
          top: '380px',
          width: '400px',
          height: '1.5px',
          backgroundColor: '#D9D9D9',
        }}
      />
      {/* 내 정보 관리 */}
      <div className="my-box box-top-1">
        <span className="my-text">내 정보 관리</span>
        <button 
          className="my-button"
          onClick={() => setShowMyInfo((prev) => !prev)}
        >
          <img src="/images/under.png" alt="내 정보 관리" />
        </button>
      </div>
      {/* 내 정보 관리 내용 (토글) */}
      {showMyInfo && (
        <div></div>
      )}

      {/* 서비스 안내 */}
       <div className="my-box box-top-2">
        <span className="my-text">서비스 안내</span>
        <button 
          className="my-button"
          onClick={() => setShowServiceInfo((prev) => !prev)}
        >
          <img src="/images/under.png" alt="내 정보 관리" />
        </button>
      </div>
      {/* 서비스 안내 내용 (토글) */}
      {showServiceInfo && (
        <div></div>
      )}


      {/* ---- */}
      <div
        style={{
          position: 'absolute',
          top: '580px',
          width: '400px',
          height: '1.5px',
          backgroundColor: '#D9D9D9',
        }}
      />
      {/* 로그아웃 버튼 */}
      <button style={{
        position: 'absolute',
        top: '600px',
        left: '160px',
        fontSize: '14px',
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        padding: 0,
      }}>
      <span style={{
        color: '#EC0000',
        fontSize: '15px',
        fontFamily: 'Pretend_M'
      }}>
      로그아웃
      </span>
      </button>
      {/* 하단 고정 네비게이션 바 */}
      <div style={{
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '348px',
        height: '69px',
        backgroundColor: '#fff',
        borderRadius: '34.5px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        boxShadow: '0 0 8px rgba(0,0,0,0.1)',
        zIndex: 1000,
      }}>
        <Navigation />
      </div>
    </div>
  );
}
