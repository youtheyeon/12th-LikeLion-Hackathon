import styled from "styled-components";

import ChatItem from "./ChatItem";

function ChatRoom() {
  return (
    <>
      <Hr />
      <Wrapper>
        <DayChat>
          <ChatDate>2024년 6월 20일 목요일</ChatDate>
          <ChatItem />
          <ChatItem isMy={true} />
        </DayChat>
      </Wrapper>
    </>
  );
}

export default ChatRoom;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Hr = styled.div`
  width: 100%;
  height: 1.241px;
  flex-shrink: 0;
  background: rgba(199, 198, 198, 0.2);
`;

const DayChat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 26px 13px;
`;

const ChatDate = styled.div`
  display: flex;
  width: fit-content;
  height: 27px;
  padding: 8px 14px;
  align-items: center;
  gap: 10px;
  border-radius: 30px;
  background: var(--gray03, #f3f3f3);

  color: var(--gray02, #c0c0c0);
  font-size: 12px;
  font-weight: 400;
`;
