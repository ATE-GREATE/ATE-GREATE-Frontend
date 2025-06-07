import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index1.css';
import '../NSOTF_B.css';
import '../Pretend_M.css';
import '../Pretend_SB.css';
import '../Pretend_R.css';
import '../HomePages/AddRecipeButton.css';
import Navigation from '../HomePages/Navigation';

const Community: React.FC = () => {
  const navigate = useNavigate();

  const initialPosts = [
    { id: 1, title: '국간장 추천해주세요~', author: '초코', time: '15시간 전', views: 156, likes: 2, comments: 2 },
    { id: 2, title: '저메추', author: '달갈', time: '15시간 전', views: 58, likes: 2, comments: 6 },
    { id: 3, title: '다이어트 식단 추천해주셈', author: '꾸안꾸', time: '23시간 전', views: 66, likes: 2, comments: 1 },
    { id: 4, title: '즐거운 명절되세요!!', author: '전전', time: '1일 전', views: 209, likes: 10, comments: 5 },
    { id: 5, title: '요즘따라 한식 땡기는데 뭐 만들지', author: '수박', time: '1일 전', views: 99, likes: 1, comments: 3 },
    { id: 6, title: '먹을게 없다', author: '레몬', time: '3일 전', views: 52, likes: 2, comments: 2 },
    { id: 7, title: '국간장 추천해주세요~', author: '초코', time: '15시간 전', views: 156, likes: 2, comments: 2 },
    { id: 8, title: '저메추', author: '달갈', time: '15시간 전', views: 58, likes: 2, comments: 6 },
    { id: 9, title: '다이어트 식단 추천해주셈', author: '꾸안꾸', time: '23시간 전', views: 66, likes: 2, comments: 1 },
    { id: 10, title: '즐거운 명절되세요!!', author: '전전', time: '1일 전', views: 209, likes: 10, comments: 5 },
    { id: 11, title: '요즘따라 한식 땡기는데 뭐 만들지', author: '수박', time: '1일 전', views: 99, likes: 1, comments: 3 },
    { id: 12, title: '먹을게 없다', author: '레몬', time: '3일 전', views: 52, likes: 2, comments: 2 },
  ];

  const [postsState, setPostsState] = useState(initialPosts);
  const [openComments, setOpenComments] = useState<number | null>(null);
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  const handleLike = (id: number) => {
    setPostsState(prev =>
      prev.map(post =>
        post.id === id
          ? {
              ...post,
              likes: likedPosts.includes(id) ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );

    setLikedPosts(prev =>
      prev.includes(id) ? prev.filter(postId => postId !== id) : [...prev, id]
    );
  };

  const toggleComments = (id: number) => {
    setOpenComments(prev => (prev === id ? null : id));
  };

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
      {/* ffffff 배경 */}
      <div style={{
        position: 'absolute',
        top: '266px',
        left: '0',
        right: '0',
        width: '393px',
        height: 'calc(1000vh - 400px)', 
        backgroundColor: '#ffffff',
        borderRadius: '40px',
        margin: '0 auto',
      }} />

      {/* 상단 메뉴 */}
      <div style={{
        position: 'absolute',
        top: '180px',
        left: '40px',
        fontSize: '40px',
        color: '#913636',
        fontFamily: 'NSOTF_B',
      }}>
        커뮤니티
      </div>

      {/* 글쓰기 버튼 */}
      <button
        onClick={() => navigate('/community/write')}
        style={{
          position: 'absolute',
          top: '195px',
          right: '30px',
          backgroundColor: '#9F5A62',
          color: '#FFFFFF',
          borderRadius: '20px',
          border: 'none',
          width: '90px',
          height: '34px',
          fontSize: '14px',
          fontFamily: 'Pretend_R',
          cursor: 'pointer',
        }}
      >
        + 글쓰기
      </button>

      {/* 자유게시판 탭 */}
      <div style={{
        position: 'absolute',
        top: '293px',
        left: '30px',
        fontSize: '15px',
        fontWeight: 'bold',
        color: '#CC747E',
      }}>
        자유게시판
      </div>

      <div style={{
        position: 'absolute',
        top: '323px',
        left: '30px',
        width: '100px',
        height: '7px',
        backgroundColor: '#E8AFB6',
      }} />

      <div style={{
        position: 'absolute',
        top: '330px',
        left: '30px',
        width: '331px',
        height: '1px',
        backgroundColor: '#A4A4A4',
      }} />

      {/* 게시글 목록 */}
      <div style={{
        position: 'absolute',
        top: '335px',
        left: '30px',
        width: '330px',
        height: '570px',
        overflowY: 'auto',
        paddingRight: '10px',
      }}>
        {postsState.map((post) => (
          <div
            key={post.id}
            onClick={() => post.title === '국간장 추천해주세요~' && navigate('/writing')}
            style={{
              borderBottom: '1px solid #eee',
              padding: '12px 0',
              cursor: post.title === '국간장 추천해주세요~' ? 'pointer' : 'default',
            }}
          >
            {/* 게시글 제목 */}
            <div style={{
              fontWeight: '500',
              fontSize: '20px',
              fontFamily: 'Pretendard-Medium',
              marginBottom: '6px',
            }}>
              {post.title}
            </div>

            {/* 하단 정보 */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '12px',
              color: '#777',
            }}>
              <div style={{
                width: '22px',
                height: '22px',
                backgroundColor: '#D9D9D9',
                borderRadius: '50%',
                marginRight: '6px',
              }} />
              <span style={{ fontSize: '15px', color: '#CC747E', marginRight: '23px' }}>{post.author}</span>
              <span style={{ marginRight: '16px' }}>{post.time}</span>
              <span style={{ marginRight: '75px' }}>조회 {post.views}</span>

              {/* 좋아요 */}
              <span
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  marginRight: '5px'
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleLike(post.id);
                }}
              >
                <img
                  src={likedPosts.includes(post.id)
                    ? "/images/goodClick.png"
                    : "/images/good.png"}
                  alt="좋아요"
                  style={{ width: '14px', marginRight: '4px' }}
                />
                {post.likes}
              </span>

              {/* 댓글 */}
              <span
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleComments(post.id);
                }}
              >
                <img src="/images/comment.png" alt="댓글" style={{ width: '14px', marginRight: '4px' }} />
                {post.comments}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* 하단 네비게이션 바 */}
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

export default Community;
