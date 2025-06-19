import { useState } from 'react';
import Navigation from '../HomePages/Navigation';
import '../index1.css';
import '../RefrigeratorPages/Refrigerator.css'
import { useNavigate } from 'react-router-dom';

export default function Refrigerator() {

  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/Ingredients');
  };

  const handleSubmit2 = () => {
    setShowModal(true);
  };
  
  const handleConfirm =() => {
    setShowModal(false);
    navigate('/Refrigerator');
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button
          onClick={handleSubmit}
          style={{
            border: '0px',
            width: '280px',
            height: '572px',
            backgroundColor: '#fefdf8',
            marginTop: '80px',
          }}
        >
          <img
            src='/images/RealRefrigerator.png'
            style={{
              cursor: 'pointer',
              width: '280px',
              height: '572px',
            }}
          />
        </button>
        <button
          className="question-button"
        >
          <img src="/images/question.png" alt="Add Recipe" onClick={handleSubmit2} />
        </button>
    </div>

    {showModal && (
    <div className="modal-overlay">
      <div className="modal">
        <p className="modal-text">냉장고를 터치하여<br/>유통기한과 재료를 확인해보세요.</p>
        <button className="modal-btn" onClick={handleConfirm}>
          확인
        </button>
      </div>
    </div>
  )}

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
