import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Pretend_R.css';
import Navigation from './Navigation';

interface Notification {
  id: number;
  message: string;
  isRead: boolean;
}

export default function NotificationPage() {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, message: '초코님이 게시물에 좋아요를 눌렀습니다', isRead: false, },
    { id: 2, message: '단무지 님이 답글을 남겼습니다', isRead: false, },
  ]);

  return (
    <div style={styles.wrapper}>
      <div style={styles.header}>
        <img
          src="./images/back.png"
          alt="back"
          style={styles.backIcon}
          onClick={() => navigate(-1)}
        />
        <h2 style={styles.title}>알림</h2>
      </div>

      {/* 알림 목록 */}
      <div>
        {notifications.map(noti => (
          <div
            key={noti.id}
            style={{
              ...styles.notificationBox,
              borderColor: noti.isRead ? '#E8AFB6' : '#E8AFB6',
              backgroundColor: noti.isRead ? '#FFF6F7' : '#FFF6F7',
              position: 'relative',
            }}
            onClick={() =>
              setNotifications(prev =>
                prev.map(n =>
                  n.id === noti.id ? { ...n, isRead: true } : n
                )
              )
            }
          >
            <span style={styles.messageText}>{noti.message}</span>

            {!noti.isRead && <div style={styles.redDot} />}
          </div>
        ))}
      </div>

      {/* 하단 네비게이션 */}
      <div style={styles.navBar}>
        <Navigation />
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    maxWidth: '328px',
    margin: '0 auto',
    backgroundColor: '#FFFDF7',
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
    color: '#000000',
    flex: 1,
    marginRight: '36px',
  },
  notificationBox: {
    width: '328px',
    height: '60px',
    margin: '0 auto 12px',
    borderRadius: '12px',
    border: '1px solid #E8AFB6',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    textAlign: 'center',
    fontSize: '14px',
    boxSizing: 'border-box',
    cursor: 'pointer',
  },

  messageText: {
    lineHeight: '20px',
    whiteSpace: 'normal',
    wordBreak: 'keep-all',
    padding: '0 12px',
  },

  redDot: {
    width: '8px',
    height: '8px',
    backgroundColor: '#FF6767',
    borderRadius: '50%',
    position: 'absolute',
    bottom: '55px',
    left: '330px',
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
    zIndex: 1000,
  },
};
