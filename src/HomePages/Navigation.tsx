import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

 const navItems = [
  {
    icon: 'HomeKorea.png',
    iconActive: 'HomeKoreaClick.png',
    label: '홈',
    path: '/HomeKorea',
    folder: 'HomePages',
  },
  {
    icon: 'Community.png',
    iconActive: 'CommunityClick.png',
    label: '커뮤니티',
    path: '/Community',
    folder: 'CommunityPages',
  },
  {
    icon: 'Refrigerator.png',
    iconActive: 'RefrigeratorClick.png',
    label: '냉장고',
    path: '/Fridge',
    folder: 'Refrigerator',
  },
  {
    icon: 'MyPages.png',
    iconActive: 'MyPagesClick.png',
    label: '마이페이지',
    path: '/MyPages',
    folder: 'MyPages',
  },
];

  return (
    <div className="Navigation">
      {navItems.map(({ icon, iconActive, label, path }) => {
  let isActive = false;

  if (label === '홈') {
    isActive = ['/HomeKorea', '/HomeJapan', '/HomeChina', '/HomeWestern', '/bibimbapRcipe', '/AddRecipe', '/SaveRecipe', '/Notification', ].some(prefix =>
      location.pathname.startsWith(prefix)
    );
  } else {
    isActive = location.pathname.startsWith(path);
  }

  if (label === '커뮤니티') {
    isActive = ['/Community', '/Writing' ].some(prefix =>
      location.pathname.startsWith(prefix)
    );
  } else {
    isActive = location.pathname.startsWith(path);
  }

  if (label === '마이페이지') {
    isActive = ['/MyPages', '/MyRecipe', '/Edit', '/Inquiry', 'Private' ].some(prefix =>
      location.pathname.startsWith(prefix)
    );
  } else {
    isActive = location.pathname.startsWith(path);
  }


  return (
    <div
      key={label}
      className="nav-item"
      onClick={() => navigate(path)}
    >
      <img
        src={`/images/${isActive ? iconActive : icon}`}
        alt={label}
      />
      <div>{label}</div>
    </div>
  );
})}

    </div>
  );
};

export default Navigation;
