import { useState } from 'react';
import Navigation from '../HomePages/Navigation';
import '../index1.css';
import '../NanumGothic_B.css';
import '../NSOTF_B.css';
import '../Pretend_M.css';
import '../Pretend_SB.css';
import '../Pretend_R.css';
import '../MyPages/Edit.css';
import { useNavigate } from 'react-router-dom';

export default function Edit() {
  const navigate = useNavigate();
  const selectedKeywords = ['#신중한', '#열정적인', '#쾌활한'];

  const [form, setForm] = useState({
    id: '',
    password: '',
    passwordConfirm: '',
    name: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isIdValid = /^[a-zA-Z0-9]{6,10}$/.test(form.id);
  const [isIdChecked, setIsIdChecked] = useState(true);
  const isPasswordEntered = form.password.trim() !== '';
  const isPasswordConfirmValid = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{6,10}$/.test(form.passwordConfirm);
  const isNameValid = form.name.trim() !== '';
  const isEmailValid = /\S+@\S+\.\S+/.test(form.email);
  const [, setIsSubmitClicked] = useState(false);
  const [, setShowModal] = useState(false);

  const isFormValid =
    isIdValid &&
    isPasswordEntered &&
    isPasswordConfirmValid &&
    isNameValid &&
    isEmailValid &&
    isIdChecked;

  const handleSubmit = () => {
    setIsSubmitClicked(true);
    if (isFormValid) {
      navigate('/MyPages');
    }
  };

  const handleConfirm = () => {
    setShowModal(false);
    navigate('/Gallerypages');
  };

  return (
    <div style={{ position: 'relative', marginTop: '58px' }}>
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
            style={{ width: '25px', height: '25px', marginBottom: '-33px' }}
          />
          <div
            style={{
              fontFamily: 'Pretend_R',
              fontSize: '20px',
              marginTop: '30px',
              marginLeft: '13px',
              alignItems: 'center',
              height: '76px',
              display: 'flex',
            }}
          >
            회원 정보 수정
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
        {/* 사진 */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            onClick={handleConfirm}
            style={{
              width: '97px',
              height: '97px',
              border: '0px',
              borderRadius: '50px',
              backgroundColor: '#D9D9D9',
              marginTop: '56px',
            }}
          >
            <img src='/images/camera.png' style={{ width: '31px', height: '31px' }} />
          </button>
        </div>

        {/* 닉네임 */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text"
            placeholder="닉네임"
            style={{
              display: 'flex',
              width: '42px',
              height: '19px',
              justifyContent: 'center',
              marginTop: '20px',
              border: 'none',
              marginLeft: '10px',
              fontSize: '16px',
              fontFamily: 'Pretend_SB',
            }}
          />
          <img
            src='/images/nameedit.png'
            style={{ width: '14px', height: '14px', marginLeft: '8px', marginTop: '25px' }}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              width: '70px',
              height: '2px',
              backgroundColor: '#B5C9E4',
              marginLeft: '10px',
              marginTop: '2px',
            }}
          />
        </div>

        {/* 키워드 */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="kw">
            {selectedKeywords.map((keyword) => (
              <div
                key={keyword}
                className="kw-btn"
                style={{ marginTop: '10px' }}
              >
                {keyword}
              </div>
            ))}
          </div>
        </div>

        {/* 입력 폼 */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="form" style={{ width: '280px' }}>
            <label className="label">아이디</label>
            <div className="inputWithButtonWrapper">
              <input
                name="id"
                value={form.id}
                onChange={(e) => {
                  setForm({ ...form, id: e.target.value });
                  setIsIdChecked(false);
                }}
                type="text"
                placeholder="아이디 입력 (문자, 숫자 포함 6~10자)"
                className={`inputWithButton ${form.id && (!isIdValid || !isIdChecked) ? 'input-error' : ''}`}
              />
              <button className="checkButtonInside">중복확인</button>
            </div>

            <label className="label" style={{ marginTop: '-5px' }}>기존 비밀번호</label>
            <div className="inputWithButtonWrapper">
              <input
                name="password"
                value={form.password}
                onChange={handleChange}
                type="password"
                placeholder="기존 비밀번호 입력"
                className={`input ${form.password && !isPasswordEntered ? 'input-error' : ''}`}
              />
            </div>

            <label className="label" style={{ marginTop: '-16px' }}>새 비밀번호</label>
            <div className="inputWithButtonWrapper">
              <input
                name="passwordConfirm"
                value={form.passwordConfirm}
                onChange={handleChange}
                type="password"
                placeholder="새 비밀번호 입력 (문자, 숫자, 특수문자 포함 6~10자)"
                className={`input ${form.passwordConfirm && !isPasswordConfirmValid ? 'input-error' : ''}`}
              />
            </div>

            <label className="label" style={{ marginTop: '-16px' }}>이메일 주소</label>
            <div className="inputWithButtonWrapper">
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="이메일 주소"
                className={`input ${form.email && !isEmailValid ? 'input-error' : ''}`}
              />
            </div>

            <button
              style={{
                backgroundColor: '#4B75AD',
                opacity: isFormValid ? 1 : 0.5,
                cursor: isFormValid ? 'pointer' : 'not-allowed',
              }}
              className="submitButton"
              onClick={handleSubmit}
              disabled={!isFormValid}
            >
              수정
            </button>
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