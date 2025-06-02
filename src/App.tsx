import { useState } from 'react'
import { Routes,Route } from 'react-router-dom';
import Splash from './loginPages/Splash';
import Cover from './loginPages/Cover';
import Login from './loginPages/Login';
import SignUp from './loginPages/SignUp';
import Keyword from './loginPages/Keyword';
import HomeKorea from './HomePages/HomeKorea';
import Notification from './HomePages/Notification';
import HomeJapan from './HomePages/HomeJapan';
import HomeWestern from './HomePages/HomeWestern';
import HomeChina from './HomePages/HomeChina';
import SaveRecipe from './HomePages/SaveRecipe';
import { BookmarkProvider } from './HomePages/BookmarkContext';
import AddRecipe from './HomePages/AddRecipe';
import BibimbapRecipe  from './HomePages/BibimbapRecipe';
import Community from './CommunityPages/Community';
import Writing from './CommunityPages/Writing';
import MyPages from './MyPages/MyPages';
import MyRecipe from './MyPages/MyRecipe';
import Private from './MyPages/Private';
import Edit from './MyPages/Edit';
import Inquiry from './MyPages/Inquiry';



const App = () => {
   return (
      <BookmarkProvider>
        <Routes>
          <Route path="/" element={<Splash/>} /> {/* 스플래시 */}
          <Route path="/Cover" element={<Cover/>} /> {/* 회원가입/로그인페이지 */}
          <Route path="/Login" element={<Login/>} /> {/* 로그인페이지 */}
          <Route path="/signup" element={<SignUp/>} /> {/* 회원가입페이지 */}
          <Route path="/Keyword" element={<Keyword />} /> {/* 키워드드페이지 */}
          <Route path="/Notification" element={<Notification />} /> {/* 알림페이지 */}
          <Route path="/HomeKorea" element={<HomeKorea />} /> {/* home한식페이지 */}
          <Route path="/HomeChina" element={<HomeChina />} /> {/* 중식페이지 */}
          <Route path="/HomeJapan" element={<HomeJapan />} /> {/* 일식페이지 */}
          <Route path="/HomeWestern" element={<HomeWestern />} /> {/* 양식페이지 */}
          <Route path="/SaveRecipe" element={<SaveRecipe />} /> {/* 저장한레시피 페이지 */}
          <Route path="/AddRecipe" element={<AddRecipe />} /> {/* 레시피 추가 페이지 */}
          <Route path="/Notification" element={<Notification />} /> {/* 알림 페이지 */}
          <Route path="/BibimbapRecipe" element={<BibimbapRecipe  />} /> {/* 비빔밥레시피 페이지 */}
          <Route path="/Community" element={<Community />} /> {/* 커뮤니티 페이지 */}
          <Route path="/Writing" element={<Writing />} /> {/* 커뮤니티 읽기 페이지 */}
          <Route path="/MyPage" element={<MyPages />} /> {/* 마이페이지 */}
          <Route path="/MyRecipe" element={<MyRecipe />} /> {/* 마이레시피 페이지 */}
          <Route path="/Private" element={<Private />} /> {/* 마이페이지 */}
          <Route path="/Edit" element={<Edit />} /> {/* 계정수정 페이지 */}
          <Route path="/Inquiry" element={<Inquiry />} /> {/* 문의페이지 */}
        </Routes>
      </BookmarkProvider>
  );
};

export default App;
