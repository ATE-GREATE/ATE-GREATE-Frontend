import React, { useState } from 'react';
import Navigation from '../HomePages/Navigation';
import '../index1.css';

const Writing: React.FC = () => {
  const [comments, setComments] = useState([
    { id: 1, author: '식혜', content: '그 브랜드 괜찮았는데 아 어디지..', time: '15시간 전' },
    { id: 2, author: '탕후루', content: '오뚜기 조음', time: '15시간 전' },
  ]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim() === '') return;
    setComments([
      ...comments,
      { id: comments.length + 1, author: '이명', content: newComment, time: '방금 전' },
    ]);
    setNewComment('');
  };

  return (
    <div style={{
      backgroundColor: '#F5E1E3',
      height: '55vh',
      fontFamily: 'Pretendard-Regular',
      position: 'relative',
      paddingBottom: '100px'
    }}>
      {/* 상단 유저 정보 + 제목 */}
      <div style={{ padding: '20px 24px', paddingTop: '100px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <div style={{
            width: '49px',
            height: '49px',
            borderRadius: '50%',
            backgroundColor: '#D9D9D9',
            marginRight: '12px'
          }} />
          <span style={{
            color: '#CC747E',
            fontSize: '17.73px',
            fontFamily: 'Pretendard-Medium'
          }}>
            초코
          </span>
        </div>
        <div style={{
          fontSize: '18px',
          fontFamily: 'Pretendard-SemiBold',
          color: '#333',
        }}>
          국간장 추천해주세요~
        </div>
      </div>

      {/* 댓글 영역 (y=221부터) */}
      <div style={{
        backgroundColor: '#fff',
        borderTopLeftRadius: '32px',
        borderTopRightRadius: '32px',
        position: 'absolute',
        top: '221px',
        left: 0,
        right: 0,
        padding: '20px 24px',
        paddingBottom: '100px',
      }}>
        {/* 댓글 상단 info */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px',
        }}>
          <div style={{
            color: '#CC747E',
            fontSize: '13px',
            fontFamily: 'Pretendard-SemiBold',
          }}>
            댓글 {comments.length}
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', fontSize: '13px', color: '#CC747E' }}>
              <img src="/images/goodClick.png" alt="좋아요" style={{ width: '14px', marginRight: '4px' }} />
              3
            </div>
            <div style={{ display: 'flex', alignItems: 'center', fontSize: '13px', color: '#CC747E' }}>
              <img src="/images/comment.png" alt="댓글" style={{ width: '14px', marginRight: '4px' }} />
              {comments.length}
            </div>
          </div>
        </div>

        {/* 댓글 리스트 */}
        <div>
          {comments.map(comment => (
            <div key={comment.id} style={{ borderTop: '1px solid #eee', padding: '16px 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '6px' }}>
                <img src="/images/Reply.png" alt="대댓글" style={{ width: '12px', marginRight: '6px' }} />
                <div style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  backgroundColor: '#D9D9D9',
                  marginRight: '10px'
                }} />
                <span style={{ fontSize: '13px', color: '#777', marginRight: '10px' }}>{comment.author}</span>
                <span style={{
                  fontSize: '11px',
                  color: '#CC747E',
                  border: '1px solid #CC747E',
                  padding: '1px 6px',
                  borderRadius: '12px',
                  marginRight: '10px',
                }}>답글</span>
              </div>
              <div style={{ fontSize: '14px', color: '#333', marginBottom: '6px' }}>{comment.content}</div>
              <div style={{ fontSize: '11px', color: '#999' }}>{comment.time}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 댓글 입력창 */}
      <div style={{
        position: 'fixed',
        bottom: '110px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '300px',
        height: '38.9px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: '20px',
        border: '1px solid #E5B2B8',
        padding: '0 12px',
      }}>
        <input
          type="text"
          placeholder="댓글추가"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          style={{
            flex: 1,
            border: 'none',
            outline: 'none',
            fontSize: '14px',
            fontFamily: 'Pretendard-Regular',
            color: '#CC747E',
            backgroundColor: 'transparent',
            marginLeft: '11px'
          }}
        />
        <img
          src="/images/commentbutton.png"
          alt="댓글 전송"
          onClick={handleAddComment}
          style={{ width: '30px', height: '30px', cursor: 'pointer' }}
        />
      </div>

      {/* 하단 네비게이션 */}
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
};

export default Writing;
