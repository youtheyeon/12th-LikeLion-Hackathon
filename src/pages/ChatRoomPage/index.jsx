import Nav from "../../components/_common/Nav";
import ChatRoom from "../../components/chatroompage/ChatRoom";
import ChatUpload from "../../components/chatroompage/ChatUpload";

function ChatRoomPage() {
  return (
    <>
      <Nav text="식단방" />
      <ChatRoom />
      <ChatUpload />
    </>
  );
}

export default ChatRoomPage;
