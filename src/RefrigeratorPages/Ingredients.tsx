import { useNavigate } from 'react-router-dom';
import Navigation from '../HomePages/Navigation';
import '../index1.css';
import { useEffect, useState } from 'react';
import { useMemo } from 'react';

export default function Ingredients() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [, setIsModalbuttonOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('vegetable');

  
  useEffect(() => {
    setIsModalbuttonOpen(true);
  }, []);

  const vegetableImages = [
    'https://i.postimg.cc/z3QRXHsZ/cabbage.png',
    'https://i.postimg.cc/mPfz7fZm/pumpkin.png',
    'https://i.postimg.cc/Mv5XjCQJ/image.png',
    'https://i.postimg.cc/NK6y4J5B/image.png',
    'https://i.postimg.cc/XZnrDfCF/image.png',
    'https://i.postimg.cc/DW5SVSrN/image.png',
    'https://i.postimg.cc/ygdk77n8/image.png',
    'https://i.postimg.cc/FdB1Rwng/image.png',
    'https://i.postimg.cc/231VJ8VH/image.png',
    'https://i.postimg.cc/Lgg5Zvcd/image.png',
    'https://i.postimg.cc/YjThwKFt/image.png',
    'https://i.postimg.cc/6yRTWjVn/image.png',
    'https://i.postimg.cc/PCQxZCRq/image.png',
    'https://i.postimg.cc/ZWSnC8jg/image.png',
    'https://i.postimg.cc/Y4XCnJkK/image.png',
    'https://i.postimg.cc/4K431XDQ/image.png',
    'https://i.postimg.cc/mzt2082c/image.png',
    'https://i.postimg.cc/mzJ2RCtm/image.png',
    'https://i.postimg.cc/tn6RgJ6p/image.png',
    'https://i.postimg.cc/Wtq18WHC/image.png',
    'https://i.postimg.cc/VdyLV9y6/image.png',
    'https://i.postimg.cc/fJxTn3Zv/image.png',
    'https://i.postimg.cc/68t699px/image.png',
    'https://i.postimg.cc/5YYbPynL/egg-plant.png',
    'https://i.postimg.cc/rdYqCxCq/pepper.png',
    'https://i.postimg.cc/mzvRK45q/image.png',
    'https://i.postimg.cc/Mf1xS4kG/image.png',
    'https://i.postimg.cc/c63dwKKN/image.png',
    'https://i.postimg.cc/Jyh1kPXT/image.png',
    'https://i.postimg.cc/K37XVMLk/pea.png',
    'https://i.postimg.cc/K4ty4dVG/image.png',
    'https://i.postimg.cc/hfrW1VcN/egg.png',
    'https://i.postimg.cc/87z8KsCc/image.png'
  ];

  const meatSeafoodImages = [
    'https://i.postimg.cc/fVLF7FH0/image.png',
    'https://i.postimg.cc/McnCw4V8/image.png',
    'https://i.postimg.cc/bG4KwT9S/image.png',
    'https://i.postimg.cc/nj7NjD3R/image.png',
    'https://i.postimg.cc/n9Jgvh5H/image.png',
    'https://i.postimg.cc/gLH54PF3/image.png',
    'https://i.postimg.cc/XXfTn9GX/image.png',
    'https://i.postimg.cc/xc9B8qM5/image.png',
    'https://i.postimg.cc/56pTC1mV/image.png',
    'https://i.postimg.cc/w34bqFxq/image.png',
    'https://i.postimg.cc/8jFXjWsh/image.png',
    'https://i.postimg.cc/RWdtmp9G/image.png',
    'https://i.postimg.cc/68tZDxsy/image.png',
    'https://i.postimg.cc/cK58gKvn/image.png',
    'https://i.postimg.cc/Kkk3nZTs/image.png',
    'https://i.postimg.cc/4HpKSBB6/image.png',
  ];

  const columns = 3;
  const rowHeight = 110;

  const imageUrls = useMemo(() => {
    return selectedCategory === 'vegetable' ? vegetableImages : meatSeafoodImages;
  }, [selectedCategory]);

  const rowCount = useMemo(() => {
    return Math.ceil(imageUrls.length / columns);
  }, [imageUrls]);

  const containerHeight = useMemo(() => {
    return rowHeight * rowCount;
  }, [rowCount]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div>
        {/* 재료 추가 모달 */}
        {isModalOpen && (
          <div style={{
            position: 'fixed',
            top: 0, left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 2000,
          }}>
            <div style={{
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '12px',
              width: '314px',
              height: '481px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
              <div style={{
                fontFamily: 'NanumSOTF_R',
                fontSize: '26.36px',
                color: '#000',
                marginTop: '45px',
                marginRight: '180px',
              }}>
                <span>재료추가</span>
              </div>
              <img
                src="images/dack_ingre.png"
                onClick={() => navigate(-1)}
                style={{
                  width: '30px',
                  height: '30px',
                  marginTop: '-80px',
                  marginLeft: '280px',
                }}
              />
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '6px',
                width: '100%',
                marginTop: '84px',
                marginLeft: '-115px',
                padding: '0 20px',
              }}>
                <button 
                  onClick={() => setSelectedCategory('vegetable')}
                  style={{
                    width: '78px',
                    height: '30px',
                    borderRadius: '51px',
                    border: selectedCategory === 'vegetable' ? 'none' : '1px solid #A6CEDB',
                    color: selectedCategory === 'vegetable' ? '#fff' : '#A6CEDB',
                    backgroundColor: selectedCategory === 'vegetable' ? '#A6CEDB' : '#fff',
                  }}
                >
                  야채/과일
                </button>

                <button 
                  onClick={() => setSelectedCategory('meat')}
                  style={{
                    width: '82px',
                    height: '30px',
                    borderRadius: '51px',
                    border: selectedCategory === 'meat' ? 'none' : '1px solid #A6CEDB',
                    color: selectedCategory === 'meat' ? '#fff' : '#A6CEDB',
                    backgroundColor: selectedCategory === 'meat' ? '#A6CEDB' : '#fff',
                  }}
                >
                  고기/해산물
                </button>

              </div>
              <div style={{
                marginTop: '10px',
                width: '100%',
                height: '1181px',
                overflowY: 'scroll',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px 16px',
                padding: '32px 0 0 15px',
                boxSizing: 'border-box',
              }}>
                {imageUrls.map((url, i) => (
                  <button
                    key={i}
                    style={{
                      borderRadius: '12.58px',
                      border: '1px solid #A6CEDB',
                      width: '74.68px',
                      height: '75.78px',
                      backgroundColor: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      padding: 0,
                    }}
                    onClick={() => console.log(`Clicked on image index ${i}`)}
                  >
                    <img src={url} alt={`재료-${i}`} style={{
                      width: '52px',
                      height: '60px',
                      objectFit: 'contain',
                    }} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 상단 안내문 */}
        <button style={{
          margin: '0 auto',
          padding: '24px',
          marginTop: '10px',
          marginLeft: '-8px',
          border: '0px',
          backgroundColor: '#fefdf8',
        }}>
          <img
            src="./images/back_blue.png"
            alt="back"
            className="backIcon"
            onClick={() => navigate(-1)}
            style={{ width: "24.81px", height: "25.81px" }}
          />
        </button>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{
            marginTop: "10px",
            marginLeft: "-25px",
            fontSize: "24px",
            fontFamily: "NanumSOTF_R",
            color: "#000000",
          }}>
            현재 보유 식재료 목록입니다
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{
            marginTop: "14px",
            marginLeft: "-90px",
            fontSize: "16px",
            fontFamily: "NanumSOTF_R",
            color: "#000000",
          }}>
            냉장고 재료를 더 추가해보세요!
          </div>
        </div>

        {/* 냉장고 박스 */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{
            margin: '40px',
            backgroundColor: '#D1E3E8',
            width: '280px',
            borderRadius: '8px',
            padding: '16px 0',
            position: 'relative',
          }}>
            {/* 상단 고정 버튼 */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '0 14px',
              position: 'sticky',
              backgroundColor: '#D1E3E8',
              zIndex: 10
            }}>
              <button style={{
                fontFamily: 'Inter_R',
                fontSize: '15px',
                border: 'none',
                backgroundColor: '#ACBBC0',
                color: '#fff',
                borderRadius: '14.5px',
                width: '63px',
                height: '29px',
              }}>
                편집
              </button>
              <div style={{
                borderRadius: '14.5px',
                backgroundColor: '#ACBBC0',
                width: '108px',
                height: '29px',
                color: '#fff',
                fontSize: '15px',
                fontFamily: 'Inter_R',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                유통기한 순
              </div>
            </div>

            {/* 동적 높이의 이미지 박스 */}
            <div style={{
              height: '400px',
              overflowY: 'scroll',
              marginTop: '16px',
              position: 'relative',
            }}>
              <div style={{
                height: `${containerHeight}px`,
                position: 'relative'
              }}>
                {Array.from({ length: rowCount }).map((_, i) => (
                  <div key={i} style={{
                    position: 'absolute',
                    top: `${rowHeight * (i + 1)}px`,
                    left: '37px',
                    width: '202px',
                    height: '1px',
                    borderTop: '1px solid #478B9E',
                  }} />
                ))}
                <button
                  onClick={() => setIsModalOpen(true)}
                  style={{
                    width: "45px",
                    height: "45px",
                    borderRadius: "100px",
                    backgroundColor: "#ACBBC0",
                    marginLeft: "50px",
                    marginTop: "40px",
                    border: "none",
                  }}>
                  <img src="/images/addition.png" style={{ marginTop: "5px", marginLeft: "2px" }} />
                </button>
              </div>
            </div>
          </div>
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
    </div>
  );
}
