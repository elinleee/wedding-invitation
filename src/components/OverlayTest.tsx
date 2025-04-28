import React from 'react';
import styled from '@emotion/styled';
import Snowfall from './Snowfall';

interface OverlayTextProps {
    backgroundImage: string;
    text: string;
}

const OverlayText: React.FC<OverlayTextProps> = ({ backgroundImage, text}) => {
    return (
        <div
            style={{
                width: '100%',
                maxWidth: '450px',
                position: 'relative',
                // overflow: 'hidden'
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
            {/* <Snowfall/> */}
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