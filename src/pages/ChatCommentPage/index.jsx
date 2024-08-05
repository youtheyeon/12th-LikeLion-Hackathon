import Nav from "../../components/_common/Nav";
import CommentRoom from "../../components/chatcommentpage/CommentRoom";
import CommentUpload from "../../components/chatcommentpage/CommentUpload";

function ChatCommentPage() {
  return (
    <>
      <Nav text="인증샷" />
      <CommentRoom />
      <CommentUpload />
    </>
  );
}

export default ChatCommentPage;
