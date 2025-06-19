import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';
import '../NSOTF_B.css';
import '../Pretend_M.css';
import '../Pretend_SB.css';
import RecipeCard from './RecipeCard';
import Navigation from './Navigation';
import '../HomePages/AddRecipeButton.css';

const HomeKorea: React.FC = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState('한식'); // 현재 선택된 음식 종류

  // 페이지 이동 함수들
  const HomeClick = () => {
    navigate('/HomeKorea');
  };

  const NotificationClick = () => {
    navigate('/Notification');
  };

  const SavedRecipeClick = () => {
    navigate('/SaveRecipe');
  };


  const [bookmarks, setBookmarks] = useState({
    galbijjim: false,
    kimbap: false,
    bibimbap: false,
    kimchi: false,
    kimchi_stew: false,
    bulgogi: false,
  });

  return (
    
    <div
      style={{
        backgroundColor: '#EDEFBF',
        height: '100vh',
        margin: '0 auto',
        overflow: 'hidden',
        position: 'relative',
        paddingBottom: '100px',
      }}
    >
    <div style = {{display: 'flex', justifyContent: 'center' }} >
      {/* 좌측 상단 홈 버튼 */}
      <button
        onClick={HomeClick}
        style={{
          position: 'absolute',
          top: '67px',
          left: '30px',
          background: 'none',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
        }}
      >
        <img
          src="/images/Home.png"
          alt="Home"
          style={{
            width: '30px',
            height: '30px',
          }}
        />
      </button>
      </div>

      {/* 우측 상단 알림 버튼 */}
      <button
        onClick={NotificationClick}
        style={{
          position: 'absolute',
          top: '67px',
          right: '30px',
          background: 'none',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
        }}
      >
        <img
          src="/images/Notification.png"
          alt="Notification"
          style={{
            width: '30px',
            height: '30px',
          }}
        />
      </button>

      {/* 메인 문구 */}
      <div
        style={{
          position: 'absolute',
          top: '123px',
          left: '30px',
          fontSize: '24px',
          fontWeight: 'normal',
          fontFamily: 'NSOTF_B',
        }}
      >
        냉장고 재료로 어떤 음식을<br />
        만들지 고민인가요?
      </div>

      {/* 검색창 */}
      <div
        style={{
          position: 'absolute',
          top: '210px',
          left: '20px',
          right: '36px',
          width: '340px',
          height: '40px',
          borderRadius: '500px',
          backgroundColor: '#ffffff',
          border: '1px solid #000000',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '12px',
          paddingRight: '12px',
          boxSizing: 'border-box',
        }}
      >
        <img
          src="/images/search.png"
          alt="Search"
          style={{
            width: '18px',
            height: '18px',
            marginRight: '8px',
          }}
        />
        <input
          type="text"
          placeholder="재료 검색"
          style={{
            border: 'none',
            outline: 'none',
            flex: 1,
            fontSize: '16px',
            backgroundColor: 'transparent',
          }}
        />
      </div>

      {/* 하얀색 컨테이너 (카드 영역 배경) */}
      <div
        style={{
          position: 'absolute',
          top: '266px',
          left: '0',
          right: '0',
          width: '393px',
          height: '1030px',
          backgroundColor: '#ffffff',
          borderRadius: '40px',
          margin: '0 auto',
        }}
      />

      {/* 상단 메뉴 탭 (추천 레시피, 저장한 레시피) */}
      <div
        style={{
          position: 'absolute',
          top: '293px',
          left: '30px',
          display: 'flex',
          gap: '12px',
        }}
      >
        <button
          onClick={() => { navigate('/HomeKorea'); }}
          style={{
            fontSize: '13pt',
            color: '#818181',
            fontFamily: 'Pretend_M',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          추천 레시피
        </button>
        <button
          onClick={SavedRecipeClick}
          style={{
            fontSize: '13pt',
            color: '#818181',
            fontFamily: 'Pretend_M',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          저장한 레시피
        </button>
      </div>

      {/* 선택된 메뉴 밑줄 */}
      <div
        style={{
          position: 'absolute',
          top: '323px',
          left: '30px',
          width: '100px',
          height: '7px',
          backgroundColor: '#AAAE32',
        }}
      />

      {/* 메뉴 하단 회색 선 */}
      <div
        style={{
          position: 'absolute',
          top: '330px',
          left: '30px',
          width: '331px',
          height: '0.1px',
          backgroundColor: '#A4A4A4',
        }}
      />

      {/* 음식 종류 선택 버튼들 (한식, 양식, 일식, 기타) */}
      <div
        style={{
          position: 'absolute',
          top: '350px',
          left: '30px',
          display: 'flex',
          gap: '8px',
        }}
      >
        {['한식', '양식', '일식', '중식'].map((label, idx) => (
          <button
            key={label}
            onClick={() => {
              setCurrent(label);
              navigate(`/Home${['Korea', 'Western', 'Japan', 'China'][idx]}`);
            }}
            style={{
              fontFamily: 'Pretend_M',
              fontSize: '13pt',
              backgroundColor: current === label ? '#AAAE32' : '#fff',
              border: '1px solid #AAAE32',
              color: current === label ? '#fff' : '#AAAE32',
              borderRadius: '20px',
              padding: '4px 22px',
              cursor: 'pointer',
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* 레시피 카드 목록 */}
      <div
        style={{
          position: 'absolute',
          top: '410px',
          left: '0',
          right: '0',
          bottom: '100px',
          overflowY: 'auto',
          padding: '0 30px 20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '15px',
            justifyContent: 'space-between',
          }}
        >
          <RecipeCard
            name="갈비찜"
            image="/food/korea/galbijjim.jpg"
            bookmarked={bookmarks.galbijjim}
            onToggleBookmark={() =>
              setBookmarks((prev) => ({ ...prev, galbijjim: !prev.galbijjim }))
            }
          />

          <RecipeCard
            name="김밥"
            image="/food/korea/kimbap.jpg"
            bookmarked={bookmarks.kimbap}
            onToggleBookmark={() =>
              setBookmarks((prev) => ({ ...prev, kimbap: !prev.kimbap }))
            }
          />

          <RecipeCard
            name="비빔밥"
            image="/food/korea/bibimbap.jpg"
            bookmarked={bookmarks.bibimbap}
            onToggleBookmark={() =>
              setBookmarks((prev) => ({ ...prev, bibimbap: !prev.bibimbap }))
            }
            onClick={() => navigate('/bibimbapRcipe')}
            wide
          />

           <RecipeCard
            name="김치"
            image="/food/korea/kimchi.jpg"
            bookmarked={bookmarks.kimchi}
            onToggleBookmark={() =>
              setBookmarks((prev) => ({ ...prev, kimchi: !prev.kimchi }))
            }
            wide
          />
          <RecipeCard
            name="김치찌개"
            image="/food/korea/kimchi_stew.jpg"
            bookmarked={bookmarks.kimchi_stew}
            onToggleBookmark={() =>
              setBookmarks((prev) => ({ ...prev, kimchi_stew: !prev.kimchi_stew }))
            }
          />
          <RecipeCard
            name="불고기"
            image="/food/korea/bulgogi.jpg"
            bookmarked={bookmarks.bulgogi}
            onToggleBookmark={() =>
              setBookmarks((prev) => ({ ...prev, bulgogi: !prev.bulgogi }))
            }
          />
          </div>
        </div>

        <button
          className="add-recipe-button"
          onClick={() => navigate('/AddRecipe')}
        >
          <img src="/images/AddRecipe.png" alt="Add Recipe" />
        </button>

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
};

export default HomeKorea;


