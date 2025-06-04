import '../index1.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ id: '', password: '' });
  const [isIdValid, setIsIdValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const isFormValid =
    form.id && form.password && isIdValid && isPasswordValid;

  useEffect(() => {
    setIsIdValid(/^[a-zA-Z0-9]{6,10}$/.test(form.id));
    setIsPasswordValid(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{6,10}$/.test(form.password));
  }, [form]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
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
        <h2 style={styles.title}>로그인</h2>
      </div>

      <div style={styles.form}>
        {/* 아이디 */}
        <div style={styles.inputWithButtonWrapper}>
          <input
            name="id"
            value={form.id}
            onChange={handleChange}
            type="text"
            placeholder="아이디"
            style={{
              ...styles.inputWithButton,
              borderColor: form.id && !isIdValid ? 'red' : '#d1cc9c',
            }}
          />
        </div>

        {/* 비밀번호 */}
        <input
          name="password"
          value={form.password}
          onChange={handleChange}
          type="password"
          placeholder="비밀번호"
          style={{
            ...styles.input,
            borderColor: form.password && !isPasswordValid ? 'red' : '#d1cc9c',
          }}
        />

        <button
          onClick={() => navigate('/HomeKorea')}
          style={{
            ...styles.submitButton,
            backgroundColor: '#AAAE32',
            opacity: isFormValid ? 1 : 0.5,
            cursor: isFormValid ? 'pointer' : 'not-allowed',
          }}
          disabled={!isFormValid}
        >
          로그인
        </button>
      </div>

      {/* 아이디/비밀번호 찾기 */}
      <div
        style={{
          position: 'absolute',
          left: '116px',
          width: '170px',
          top: '762px',
          textAlign: 'center',
          fontSize: '10px',
          color: '#999',
        }}
      >
        <span style={{ marginRight: '8px', cursor: 'pointer' }}>아이디 찾기</span>|
        <span style={{ marginLeft: '8px', cursor: 'pointer' }}>비밀번호 찾기</span>
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
  submitButton: {
    width: '328px',
    height: '51px',
    color: 'white',
    fontSize: '14px',
    border: 'none',
    borderRadius: '10px',
    backgroundColor: '#AAAE32',
    position: 'absolute',
    left: '32px',
    top: '688.84px',
  },
};
