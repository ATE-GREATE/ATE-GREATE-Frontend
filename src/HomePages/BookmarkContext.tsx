// src/contexts/BookmarkContext.tsx
import React, { createContext, useContext, useState } from 'react';

type BookmarkState = {
  galbijjim: boolean;
  kimbap: boolean;
  bibimbap: boolean;
  [key: string]: boolean;
};

type BookmarkContextType = {
  bookmarks: BookmarkState;
  toggleBookmark: (name: string) => void;
};

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

export const BookmarkProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bookmarks, setBookmarks] = useState<BookmarkState>({
    // 한식
    galbijjim: false,
    kimbap: false,
    bibimbap: false,
    kimchi: false,
    kimchi_stew: false,
    bulgogi: false,
    // 양식
    Bouillabaisse: false,
    Gambas: false,
    Gnocchi: false,
    Gratin: false,
    Hamburger: false,
    Lasagna: false,
    // 일식
    Eel_rice: false,
    Egg_sandwich: false,
    Gyudon: false,
    karaage: false,
    pork_cutlet: false,
    Ramen: false,
    // 중식
    bukgyeong_ori: false,
    gyeran_bokkeumbap: false,
    jjajangmyeon: false,
    jjampong: false,
    kkanpunggi: false,
    kkweobarou: false,
  });

  const toggleBookmark = (name: string) => {
    setBookmarks(prev => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <BookmarkContext.Provider value={{ bookmarks, toggleBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarks = () => {
  const context = useContext(BookmarkContext);
  if (!context) throw new Error('useBookmarks must be used within BookmarkProvider');
  return context;
};
