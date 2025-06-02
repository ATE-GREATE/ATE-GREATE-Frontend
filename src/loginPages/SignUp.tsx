import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index1.css';

export default function SignUp() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    id: '',
    password: '',
    passwordConfirm: '',
    name: '',
    email: '',
    year: '',
    month: '',
    day: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isIdValid = /^[a-zA-Z0-9]{6,10}$/.test(form.id);
  const [isIdChecked, setIsIdChecked] = useState(true);
  const isPasswordValid = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{6,10}$/.test(form.password);
  const isPasswordMatch = form.password === form.passwordConfirm;
  const isNameValid = form.name.trim() !== '';
  const isEmailValid = /\S+@\S+\.\S+/.test(form.email);
  const isBirthValid = form.year && form.month && form.day;
  const isFormValid =
    isIdValid &&
    isPasswordValid &&
    isPasswordMatch &&
    isNameValid &&
    isEmailValid &&
    isBirthValid &&
    isIdChecked;


  const handleSubmit = () => {
    if (isFormValid) {
      navigate('/keyword');
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.header}>
        <img
          src="./images/back.png"
          alt="back"
          style={styles.backIcon}
          onClick={() => navigate(-1)}
        />
        <h2 style={styles.title}>회원가입</h2>
      </div>

      <div style={styles.form}>
        {/* 아이디 */}
        <label style={styles.label}>아이디</label>
        <div style={styles.inputWithButtonWrapper}>
          <input
            name="id"
            value={form.id}
            onChange={(e) => {
              setForm({ ...form, id: e.target.value });
              setIsIdChecked(false);
            }}
            type="text"
            placeholder="아이디 입력 (문자, 숫자 포함 6~10자)"
            style={{
              ...styles.inputWithButton,
              borderColor: form.id && (!isIdValid || !isIdChecked) ? 'red' : '#d1cc9c',
            }}
          />
          <button style={styles.checkButtonInside}>
            중복확인
          </button>
        </div>

        {/* 비밀번호 */}
        <label style={styles.label}>비밀번호</label>
        <input
          name="password"
          value={form.password}
          onChange={handleChange}
          type="password"
          placeholder="비밀번호 입력 (문자, 숫자, 특수문자 포함 6~10자)"
          style={{
            ...styles.input,
            borderColor: form.password && !isPasswordValid ? 'red' : '#d1cc9c',
          }}
        />

        <label style={styles.label}>비밀번호 확인</label>
        <input
          name="passwordConfirm"
          value={form.passwordConfirm}
          onChange={handleChange}
          type="password"
          placeholder="비밀번호 재입력"
          style={{
            ...styles.input,
            borderColor: form.passwordConfirm && !isPasswordMatch ? 'red' : '#d1cc9c',
          }}
        />

        {/* 이름 */}
        <label style={styles.label}>이름</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          type="text"
          placeholder="이름을 입력해주세요"
          style={styles.input}
        />

        {/* 이메일 */}
        <label style={styles.label}>이메일 주소</label>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          type="email"
          placeholder="이메일주소"
          style={{
            ...styles.input,
            borderColor: form.email && !isEmailValid ? 'red' : '#d1cc9c',
          }}
        />

        {/* 생년월일 */}
        <label style={styles.label}>생년월일</label>
        <div style={styles.row}>
          {['year', 'month', 'day'].map((field, idx) => (
            <select
              key={field}
              name={field}
              value={form[field as 'year' | 'month' | 'day']}
              onChange={handleChange}
              style={{
                ...styles.select,
                borderColor: form[field as 'year' | 'month' | 'day'] === '' ? 'red' : '#d1cc9c',
              }}
            >
              <option value="">{['년도', '월', '일'][idx]}</option>
              {Array.from(
                {
                  length: field === 'year' ? 100 : field === 'month' ? 12 : 31,
                },
                (_, i) => {
                  const value = field === 'year' ? 2025 - i : i + 1;
                  return (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  );
                }
              )}
            </select>
          ))}
        </div>

        <button
          style={{
            ...styles.submitButton,
            backgroundColor: '#AAAE32',
            opacity: isFormValid ? 1 : 0.5,
            cursor: isFormValid ? 'pointer' : 'not-allowed',
          }}
          onClick={handleSubmit}
          disabled={!isFormValid}
        >
          회원가입
        </button>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    maxWidth: '328px',
    margin: '0 auto',
    backgroundColor: '#fefdf8',
    padding: '24px',
    fontFamily: 'sans-serif',
    minHeight: '100vh',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '36px',
    marginTop: '76px',
  },
  backIcon: {
    height: '25px',
    width: '25px',
    marginRight: '16px',
    cursor: 'pointer',
  },
  title: {
    fontSize: '16px',
    color: '#757530',
    flex: 1,
    textAlign: 'center',
    marginRight: '40px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontSize: '11px',
    fontWeight: 'bold',
    color: '#757530',
    marginBottom: '4px',
    marginTop: '1px',
  },
  input: {
    width: '328px',
    height: '51px',
    fontSize: '11px',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #d1cc9c',
    boxSizing: 'border-box',
    marginBottom: '11px',
  },
  inputWithButtonWrapper: {
    position: 'relative',
    marginBottom: '11px',
  },
  inputWithButton: {
    width: '328px',
    height: '51px',
    fontSize: '11px',
    padding: '12px',
    paddingRight: '90px',
    borderRadius: '8px',
    border: '1px solid #d1cc9c',
    boxSizing: 'border-box',
  },
  checkButtonInside: {
    position: 'absolute',
    right: '8px',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '85px',
    height: '33px',
    backgroundColor: '#b6a93f',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '12px',
    cursor: 'pointer',
  },
  select: {
    flex: 1,
    height: '51px',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #d1cc9c',
    fontSize: '11px',
    boxSizing: 'border-box',
  },
  row: {
    display: 'flex',
    gap: '22px',
    marginBottom: '92px',
  },
  submitButton: {
    width: '328px',
    height: '51px',
    color: 'white',
    fontSize: '14px',
    border: 'none',
    borderRadius: '10px',
    backgroundColor: '#AAAE32',
  },
};
