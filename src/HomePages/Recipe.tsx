import '../NSOTF_B.css';
import '../Pretend_M.css';
import '../Pretend_SB.css';
import Navigation from './Navigation';


export default function Recipe() {

    return(
        <div>
            

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
    )
}