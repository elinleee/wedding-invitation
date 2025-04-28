import React from 'react';
import styled from '@emotion/styled';

interface OverlayTextProps {
    backgroundImage: string;
    text: string;
}

const OverlayText: React.FC<OverlayTextProps> = ({ backgroundImage, text }) => {
    return (
        <div
            style={{
                width: '100%',
                maxWidth: '450px',
                // paddingTop: '20px',
                position: 'relative',
                // marginBottom: '20px',
                // width: '100%',
                // height: '100%',
                // height: '400px', // 원하는 높이로 조정
                // backgroundImage: `url(${backgroundImage})`,
                // backgroundSize: 'cover',
                // backgroundPosition: 'center',
                // backgroundRepeat: 'no-repeat',
            }}
        >
            <MainImg src={backgroundImage} />
            <div
                style={{
                    position: 'absolute',
                    top: '75%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: 'white',
                    lineHeight: '1em',
                    //   fontFamily: 'InkLipquid',
                    // fontFamily: 'iceJaram-Rg',
                    fontFamily: 'Arita-buri-SemiBold',
                    fontSize: '3rem',
                    //   fontWeight: 'bold',
                    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)', // 글자 가독성 높이기
                }}
            >
                {text}
            </div>
        </div>
    );
};

export default OverlayText;

const MainImg = styled.img`
  border-radius: 200px 200px 0 0;
  width: 100%;
  max-width: 450px;
  padding-top: 20px;
`;