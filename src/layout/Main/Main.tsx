import styled from '@emotion/styled';
import data from 'data.json';
import mainImg from '@/assets/images/05.jpg'
import OverlayText from '@/components/OverlayTest';
import Snowfall from '@/components/Snowfall';

const Main = () => {
  const { greeting } = data;
  return (
    <div>
      <div style={{
        position: 'relative',
        overflow: 'hidden'
      }}>
        <OverlayText
          backgroundImage={mainImg}
          text="Our Wedding Day"
        />
        <Snowfall/>
      </div>
      <NameContainer>
        <NameBox>
          <GroomBride>GROOM</GroomBride>
          <Name>이다솔</Name>
        </NameBox>
        <NameBox>
          <GroomBride>BRIDE</GroomBride>
          <Name>이영지</Name>
        </NameBox>
      </NameContainer>
      {/* <MainTitle>{greeting.title}</MainTitle> */}
      <SubTitle>{greeting.eventDetail}</SubTitle>
    </div>
  );
};

export default Main;

const MainImg = styled.img`
  // border-radius: 200px 200px 0 0;
  width: 100%;
  max-width: 450px;
  padding-top: 20px;
`;

const NameContainer = styled.div`
  display: flex;
  // width: 80vw;
  margin: 20px auto;
  // height: 100vh;
`

const NameBox = styled.div`
  flex: 1;
  // display: flex;
  justify-content: center;
  align-items: center;
`

const GroomBride = styled.div`
  // color: rgb(176, 188, 175);
  color:rgb(216, 209, 78)
`

const Name = styled.div`
  // color:rgb(187, 220, 184);
  font-size: 1.8rem;
  letter-spacing: 10px;
`

// const AndTitle = styled.p`
//   // font-family: HSSanTokki20-Regular, serif;
//   font-size: 1.2rem;
//   color: #2F2120;
//   line-height: 120%;
//   white-space: pre-line;
// `;

// const MainTitle = styled.p`
//   // font-family: HSSanTokki20-Regular, serif;
//   font-size: 1.7rem;
//   color: #2F2120;
//   line-height: 120%;
//   white-space: pre-line;
// `;

const SubTitle = styled.p`
  // font-size: 1.1rem;
  color: #2F2120;
  line-height: 140%;
  white-space: pre-line;
`;
