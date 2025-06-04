import React from 'react';

interface RecipeCardProps {
  name: string;
  image: string;
  bookmarked: boolean;
  onToggleBookmark: () => void;
  onClick?: () => void;
  wide?: boolean;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ name, image, bookmarked, onToggleBookmark, onClick, wide }) => {
  return (
    <button
      onClick={onClick}
      style={{
        width: wide ? '335px' : '156px',
        height: '146px',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '16px',
        position: 'relative',
        border: 'none',
        cursor: 'pointer',
        marginTop: wide ? '10px' : '0',
      }}
    >
      <span
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          color: '#fff',
          fontSize: '16px',
          fontFamily: 'Pretend_M',
          textShadow: '0 0 4px rgba(0,0,0,0.5)',
        }}
      >
        <img
          src={bookmarked ? "/images/BookMarkClick.png" : "/images/BookMark.png"}
          alt="bookmark"
          onClick={(e) => {
            e.stopPropagation();
            onToggleBookmark();
          }}
          style={{
            position: 'absolute',
            top: '0px',
            left: wide ? '290px' : '110px',
            width: '24px',
            height: '24px',
          }}
        />
        {name}
      </span>
    </button>
  );
};

export default RecipeCard;
