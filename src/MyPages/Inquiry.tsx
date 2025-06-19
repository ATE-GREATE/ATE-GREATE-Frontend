import { useNavigate } from 'react-router-dom';
import '../index1.css';
import '../MyPages/Inquity.css'
import { useState } from 'react';
import Navigation from '../HomePages/Navigation';

export default function Inquiry() {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = () => {
      // 제출 로직
      setShowModal(true);
    };
    const handleConfirm = () => {
      setShowModal(false);
      navigate('/Mypages'); // mypages 이동
    };

  return (
    <div>
      <div 
    style={{ 
      position: 'relative', 
      marginTop: '58px', }}>
      {/* 회원 정보 수정 */}
      <div
        style={{
          backgroundColor: '#B5C9E4',
          borderBottomLeftRadius: '30px',
          borderBottomRightRadius: '30px',
          height: '76px',
          width: '393px',
          marginLeft: 'auto',
          marginRight: 'auto',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginLeft: '30px',
              marginTop: '-30px',
            }}
          >
        <img
        src='/images/back1.png'
        alt="뒤로가기"
        onClick={() => navigate(-1)} 
        style={{
          width: '25px',
          height: '25px',
          marginBottom: '-33px',
        }}/>
        <div style={{
          fontFamily: 'Pretend_R',
          fontSize: '20px',
          marginTop: '30px',
          marginLeft: '13px',
          alignItems: 'center',
          height: '76px',
          display: 'flex',
        }}>
          고객 문의
        </div>
        </div>
      </div>
      {/* FFFFFF박스 */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          marginTop: '-26px',
          marginLeft: 'auto',
          marginRight: 'auto',
          height: '595px',
          width: '348px',
          justifyContent: 'center', 
          borderBottomLeftRadius: '16px',
          borderBottomRightRadius: '16px',
          border: '1px solid #B5C9E4',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
      <div style={{  display: 'flex', justifyContent: 'center' }}>
        <div>
        <div
          style={{
            fontFamily: 'Pretend_R',
            fontSize: '16px',
            color: '#000000',
            marginTop: '60px',
            marginRight: '210px',
            display: 'flex',
            alignItems: 'center',
           
          }}
        >
        문의 등록
        </div>
        <div
          style={{
            fontFamily: 'Pretend_R',
            fontSize: '12px',
            color: '#5A5A5A',
            marginTop: '22px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
        추가할 사항이나 궁금한 점을 남겨주시면<br/>개발자분들이 해결하겠습니다!
        </div>
        <div
          style={{
            fontFamily: 'Pretend_R',
            fontSize: '11px',
            color: '#4B75AD',
            marginTop: '39px',
            marginRight: '210px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
        제목
        </div>
        <textarea
          style={{
            fontFamily: 'Pretnd_SB',
            fontSize: '11px',
            marginTop: '14px',
            width: '269px',
            height: '38px',
            border: '1px solid #B5C9E4',
            borderRadius: '5px',
            backgroundColor: '#fff',
            resize: 'none', 
            lineHeight: '1.4',
            wordWrap: 'break-word', // 줄바꿈
          }}
          wrap="soft" // 입력 줄바꿈
          placeholder="내용을 입력하세요"
          maxLength={50} // 30자 제한
        />
        <div
          style={{
            fontFamily: 'Pretend_R',
            fontSize: '11px',
            color: '#4B75AD',
            marginTop: '14px',
            marginRight: '210px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
        내용
        </div>
        <textarea
          style={{
            fontFamily: 'Pretnd_SB',
            fontSize: '11px',
            marginTop: '14px',
            width: '269px',
            height: '150px',
            border: '1px solid #B5C9E4',
            borderRadius: '5px',
            backgroundColor: '#fff',
            resize: 'none', // 크기 조절 막기
            lineHeight: '1.4',
            wordWrap: 'break-word', // 단어 잘라 줄바꿈
          }}
          wrap="soft" // 입력 줄바꿈 가능
          placeholder="내용을 입력하세요"
          maxLength={500}
        />
        <div>
          <button
            onClick={handleSubmit}
            style={{
              backgroundColor: '#4B75AD',
              color: '#fff',
              width: '269px',
              height: '38px',
              borderRadius: '5px',
              border: 'none',
              marginTop: '58px',
          }}>
          <span>제출</span>
        </button>
        </div>
        {/* 안내 메세지 */}
        {showModal && (
          <div className="modalOverlay">
            <div className="modal">
              <p className="modalText">제작자에게 메일이<br/>발송 되었습니다<div className=""></div></p>
              <div className="modalLine"></div>
              <button className="modalBtn" onClick={handleConfirm}>
                확인
              </button>
            </div>
          </div>
        )}
      </div>
      </div>
    </div>
    </div>
    {/* 하단 고정 네비게이션 바 */}
      <div
        style={{
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
        }}
      >
        <Navigation />
      </div>
    </div>
  );
}