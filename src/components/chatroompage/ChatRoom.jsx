import styled from "styled-components";
import { useParams } from "react-router-dom";
import ChatItem from "./ChatItem";
import chatData from "../../store/chatData.json";

function ChatRoom() {
  let { id } = useParams();

  return (
    <>
      <Hr />
      <Wrapper>
        <DayChat>
          <ChatDate>2024년 8월 6일 화요일</ChatDate>
          {chatData[id].map((c) => (
            <ChatItem key={c.chatId} c={c} roomId={id} />
          ))}
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
