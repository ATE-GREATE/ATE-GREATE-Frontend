import { useNavigate } from 'react-router-dom';
import Navigation from '../HomePages/Navigation';
import '../index1.css';
import { useEffect, useState } from 'react';

export default function Ingredients() {

  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isbuttonModalOpen, setIsModalbuttonOpen] = useState(false);

  
  useEffect(() => {
    setIsModalbuttonOpen(true);
  }, []);

  return (

    <div style={{  display: 'flex', justifyContent: 'center' }}>
      <div>

      {/* 재료추가 창 */}
      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 2000,
          }}
        >
          <div
            style={{
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '12px',
              width: '314px',
              height: '481px', 
              overflowY: 'auto', // 내부 스크롤 허용
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                fontFamily: 'NanumSOTF_R',
                fontSize: '26.36px',
                color: '#000',
                marginTop: '45px',
                marginRight: '180px',
              }}
            >
              <span>재료추가</span>
            </div>
              <img
                src="images/dack_ingre.png"
                onClick={() => navigate(0)}
                style={{
                  width: '30px',
                  height: '30px',
                  marginTop: '-80px',
                  marginLeft: '280px',
                }}
                >
              </img>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '6px',
                width: '100%',
                marginTop: '84px',
                marginLeft: '-115px',
                padding: '0 20px',
              }}
            >
              <button
                style={{
                  width: '78px',
                  height: '30px',
                  borderRadius: '51px',
                  border: 'none',
                  color: '#fff',
                  backgroundColor: '#A6CEDB',
                }}
              >
                <span>야채/과일</span>
              </button>
              <button
                style={{
                  width: '82px',
                  height: '30px',
                  borderRadius: '51px',
                  border: '1px solid #A6CEDB',
                  color: '#A6CEDB',
                  backgroundColor: '#fff',
                }}
              >
                <span>고기/해산물</span>
              </button>
            </div>
            {/* 여기에 추가적인 스크롤 가능한 콘텐츠를 넣으면 됨 */}
            <div style={{
              height: '1181px',
              overflowY: 'scroll',
            }}>
            </div>
          </div>
        </div>
      )}


        {/* 기본 화면(냉장고) */}
        <button
          style={{
            margin: '0 auto',
            padding: '24px',
            marginTop: '89px',
            marginLeft:'-8px',
            border: '0px',
            backgroundColor: '#fefdf8',
          }}>
         <img
          src="./images/back_blue.png"
          alt="back"
          className="backIcon"
          onClick={() => navigate(-1)}
          style={{
            width: "24.81px",
            height: "25.81px",
          }}
        />
        </button>
      <div style={{  display: 'flex', justifyContent: 'center' }}>
        <div
        style={{
          marginTop: "10px",
          marginLeft: "-25px",
          fontSize: "24px",
          fontFamily: "NanumSOTF_R", // 폰트 아직 안함
          color: "#000000",
        }}>
        <span>현재 보유 식재료 목록입니다</span>
      </div>
      </div>
      <div style={{  display: 'flex', justifyContent: 'center' }}>
        <div
        style={{
          marginTop: "14px",
          marginLeft: "-90px",
          fontSize: "16px",
          fontFamily: "NanumSOTF_R", // 폰트 아직 안함
          color: "#000000",
        }}>
        <span>냉장고 재료를 더 추가해보세요!</span>
      </div>
      </div>
      {/* 냉장고 */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{
          margin: '40px',
          backgroundColor: '#D1E3E8',
          width: '280px',
          borderRadius: '8px',
          padding: '16px 0',
          position: 'relative',
        }}>
        {/* 상단 고정 바 (편집 버튼 + 정렬) */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          padding: '0 14px',
          position: 'sticky',
          top: 0,
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
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
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
        {/* 스크롤 되는 영역 */}
        <div style={{
          height: '370px',
          overflowY: 'scroll',
          marginTop: '16px',
        }}>
          <div style={{ height: '1320px', position: 'relative' }}>
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  top: `${110 * (i + 1)}px`,
                  left: '37px',
                  width: '202px',
                  height: '1px',
                  borderTop: '1px solid #478B9E',
                }}
              />
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
              <img
                src="/images/addition.png"
                style={{
                  marginTop: "5px",
                  marginLeft: "2px",
                }}>
                </img>
          </button>
          </div>

          {/* 기본 안내 버튼 */}
          {isbuttonModalOpen && (
            <div
              style={{
              }}>
              <img
                src="images/Union.png"
                style={{
                  width: '117px',
                  height: '71px',
                }}></img>
                <button
                  style={{
                    border: 'none',
                  }}>
                  <img
                    src="images/Ingredients_button.png"
                    style={{
                      width: '9.49px',
                      height: '9.49px',
                      borderRadius: '1.97px',
                    }}>
                  </img>
                </button>
            </div>
          )}
           
        </div>
      </div>
    </div>
    </div>

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
}