import styled from '@emotion/styled';
import data from 'data.json';
import QnA from './QnA';

const Interview = () => {
  return (
    <InterviewWrapper>
     <QnA />
    </InterviewWrapper>
  );
};

export default Interview;

const InterviewWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;
