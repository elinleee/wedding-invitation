import styled from '@emotion/styled';
import data from 'data.json';
import Host from '../Contact/Host.tsx';
import { Paragraph } from '@/components/Text.tsx';

const Invitation = () => {
  const { greeting } = data;
  return (
    <InvitationWrapper>
      <Paragraph>{greeting.message}</Paragraph>
      <Host />
    </InvitationWrapper>
  );
};

export default Invitation;

const InvitationWrapper = styled.div`
  border: 1.5px solid rgba(241, 212, 200, 0.6);
  // border-radius: 30%  / 50%;
  border-radius: 15%;
  padding: 50px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
