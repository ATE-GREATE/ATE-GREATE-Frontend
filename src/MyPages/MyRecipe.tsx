import Navigation from '../HomePages/Navigation';
import '../index1.css';
import { useEffect } from 'react';

export default function MyRecipe() {
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
      <div style={{
        position: 'absolute',
        top: '266px',
        left: '0',
        right: '0',
        width: '393px',
        height: 'calc(1000vh - 400px)', 
        backgroundColor: '#FFFDF7',
        borderRadius: '40px',
        margin: '0 auto',
      }} />
      <div style={{
        position: 'absolute',
        top: '190px',
        left: '50px',
        fontSize: '35px',
        alignItems: 'center',
        color: '#CC747E',
        fontFamily: 'NG_B',
      }}>
        나만의 레시피
        <div
        style={{
          marginLeft: '210px',
          marginTop: '-38px',
        }}>
        <img
          src='/images/RecipeBook.png'
          style={{
            width: '31px',       
            height: '34px',
            objectFit: 'contain',
            marginLeft: '13px',  
          }}
          alt="Recipe Book"
        />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginLeft: '-30px' }}/>
        </div>   
      {/* 하단 고정 네비게이션 바 */}
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
}