import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';

export default function AddRecipe() {
  const navigate = useNavigate();

  const [title, setTitle] = useState(''); // 제목 상태 추가
  const [, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState(['']);
  const [showModal, setShowModal] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleStepChange = (index: number, value: string) => {
    const newSteps = [...steps];
    newSteps[index] = value;
    setSteps(newSteps);
  };

  const handleSubmit = () => {
    // 실제 등록 처리 로직 위치
    setShowModal(true);
  };

  const handleConfirm = () => {
    setShowModal(false);
    navigate('/HomeKorea'); // 커뮤니티 페이지로 이동
  };

  return (
    <div style={styles.wrapper}>
      {/* 헤더 */}
      <div style={styles.header}>
        <img
          src="./images/back.png"
          alt="back"
          style={styles.backIcon}
          onClick={() => navigate(-1)}
        />
        <h2 style={styles.title}>나만의 레시피 등록하기</h2>
      </div>

      {/* 제목 input */}
       <>
        <style>
          {`
            input::placeholder {
              color: #000000;
            }
          `}
        </style>
        <input
          type="text"
          placeholder="제목"
          style={styles.titleInput}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </>
      <div style={styles.bar}></div>


      {/* 이미지 + 재료 */}
      <div style={{ marginBottom: '0px' }}>
        <div style={styles.imageBox}>
          {preview ? (
            <img src={preview} alt="preview" style={styles.image} />
          ) : (
            <label htmlFor="image-upload" style={styles.imageLabel}>
              사진첨부
            </label>
          )}
          <input
            type="file"
            id="image-upload"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleImageChange}
          />
        </div>
        <div style={styles.textBox}>
          <label style={styles.label}>재료</label>
          <div style={styles.line}></div>
          <textarea
            placeholder="재료 작성하기"
            style={styles.textarea}
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
        </div>
      </div>

      {/* 조리 순서 - 첫 페이지만 */}
      {steps.length > 0 && (
        <div style={styles.textBox}>
          <label style={styles.label}>조리순서</label>
          <div style={styles.line}></div>
          <textarea
            placeholder="1."
            style={styles.textarea}
            value={steps[0]}
            onChange={(e) => handleStepChange(0, e.target.value)}
          />
        </div>
      )}

      {/* 등록 버튼 */}
      <button style={styles.submitButton} onClick={handleSubmit}>
        등록
      </button>

      {/* 안내 메세지 */}
      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <p style={styles.modalText}>나만의 레시피가<br />등록되었습니다</p>
            <div style={styles.modalLine}></div>
            <button style={styles.modalBtn} onClick={handleConfirm}>
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

// 스타일
const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    maxWidth: '328px',
    margin: '0 auto',
    backgroundColor: '#FDF5E4',
    padding: '24px',
    fontFamily: 'Pretendard-Regular',
    minHeight: '100vh',
    position: 'relative',
  },
  header: {
    marginTop: '60px',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    fontSize: '15pt',
    fontFamily: 'Pretendard-Regular',
    fontWeight: '400', 
    color: '#000000',
    flex: 1,
    marginRight: '36px',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
  },
  sectionTitle: {
    fontSize: '15pt',
    marginTop: '16px',
    marginLeft: '5pt',
  },
  bar: {
    width: '60px',
    height: '7px',
    backgroundColor: '#DDB96D',
    margin: '8px 0',
  },
  imageBox: {
    width: '100%',
    height: '164px',
    border: '1px solid #C7C7C7',
    backgroundColor: '#fff',
    borderRadius: '6px 6px 0 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    marginBottom: '0px',
  },
  imageLabel: {
    fontSize: '15pt',
    fontFamily: 'Pretendard-Medium',
    color: '#888',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '6px',
  },
  textBox: {
    backgroundColor: '#fff',
    border: '1px solid rgba(135,139,40,0.53)',
    borderRadius: '6px',
    padding: '10px',
    marginBottom: '16px',
    position: 'relative',
  },
  label: {
    fontSize: '11.38pt',
    fontFamily: 'Pretendard-SemiBold',
    marginBottom: '4px',
    display: 'block',
  },
  line: {
    width: '100%',
    height: '0.5px',
    backgroundColor: '#878B28',
    marginBottom: '8px',
  },
  textarea: {
    width: '100%',
    height: '80px',
    border: 'none',
    outline: 'none',
    fontFamily: 'Pretendard-Regular',
    fontSize: '11.38pt',
    color: '#000',
    resize: 'none',
    overflow: 'hidden',
  },
  submitButton: {
    fontSize: '15pt',
    fontFamily: 'Pretendard-Regular',
    color: '#000',
    border: 'none',
    background: 'transparent',
    display: 'block',
    margin: '0 auto',
    marginBottom: '100px',
    marginLeft: '260px',
  },
  titleInput: {
    width: '100%',
    padding: '8px 0',
    fontSize: '15pt',
    border: 'none',
    borderBottom: '0px',
    backgroundColor: 'transparent',
    color: '#000000',
    outline: 'none',
  },
  
  modalOverlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
  },
  modal: {
    backgroundColor: '#fff',
    padding: '24px',
    borderRadius: '20px',
    border: '1.29px solid #AAAE32',
    width: '268px',
    textAlign: 'center',
  },
  modalText: {
    fontSize: '20.61pt',
    fontFamily: 'Pretendard-Regular',
    marginBottom: '12px',
    whiteSpace: 'pre-line',
  },
  modalLine: {
    height: '0.5px',
    backgroundColor: '#D4D4C3',
    margin: '12px 0',
  },
  modalBtn: {
    fontSize: '20.61pt',
    fontFamily: 'Pretendard-Regular',
    color: '#000',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
  navBar: {
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
  },
  stepNav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  backBtn: {
    backgroundColor: '#F5F5F5',
    border: 'none',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageIndicator: {
    fontSize: '12pt',
    fontFamily: 'Pretendard-SemiBold',
    color: '#666',
  },
};
