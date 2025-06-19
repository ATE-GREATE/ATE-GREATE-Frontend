import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface LocationState {
  addedImage?: string;
}

export default function Gallerypages() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState;

  const defaultImages = [
    '/profile/people1.png',
    '/profile/people2.png',
    '/profile/people3.png',
    '/profile/people4.png',
    '/profile/people5.png',
    '/profile/people6.png',
    '/profile/people7.png',
    '/profile/people8.png',
  ];

  const [images, setImages] = useState<string[]>(defaultImages);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImages((prev) => [...prev, imageUrl]);
    }
  };

  const handleCameraClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageClick = (img: string) => {
    if (img) {
      navigate('/edit', { state: { selectedImage: img } });
    }
  };

  useEffect(() => {
    if (state && typeof state.addedImage === 'string') {
      setImages((prev) => [...prev, state.addedImage as string]);
    }
  }, [state?.addedImage]);

  return (
    
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ marginTop: '58px' }}>
        {/* 헤더 */}
        <div
          style={{
            backgroundColor: '#B5C9E4',
            borderTopLeftRadius: '30px',
            borderTopRightRadius: '30px',
            height: '76px',
            width: '390px',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', marginLeft: '30px', marginTop: '-30px' }}>
            <img
              src="/images/back1.png"
              alt="뒤로가기"
              onClick={() => navigate(-1)}
              style={{ width: '25px', height: '25px', marginBottom: '-33px', cursor: 'pointer' }}
            />
            <div
              style={{
                fontFamily: 'Pretend_R',
                fontSize: '20px',
                marginTop: '30px',
                marginLeft: '13px',
                height: '76px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              앨범
            </div>
          </div>
        </div>
        <div style={{ marginTop: '5px', display: 'flex', flexWrap: 'wrap', gap: '5px', width: '390px' }}>
          {/* 카메라 버튼 칸 */}
          <button
            onClick={handleCameraClick}
            style={{
              backgroundColor: '#D9D9D9',
              border: 'none',
              width: '126px',
              height: '124px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <img src="/images/camera.png" alt="추가" style={{ width: '35px', height: '35px' }} />
          </button>

          {/* 기본 이미지 */}
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => handleImageClick(img)}
              style={{
                backgroundColor: '#D9D9D9',
                border: 'none',
                width: '126px',
                height: '124px',
                padding: 0,
              }}
            >
              {img && (
                <img
                  src={img}
                  alt={`img-${index}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              )}
            </button>
          ))}
        </div>
        {/* 갤러리에서 사진 가져오기 */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
      </div>
    </div>
  );
}
