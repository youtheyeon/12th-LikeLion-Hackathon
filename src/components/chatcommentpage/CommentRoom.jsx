import styled from "styled-components";
import { useParams } from "react-router-dom";
import ChatPhoto from "./ChatPhoto";
import CommentItem from "./CommentItem";
import commentData from "../../store/commentData.json";

function CommentRoom() {
  let { id, cId } = useParams();
  const comments = commentData[id]?.[cId] || [];

  return (
    <>
      <Hr />
      <Wrapper>
        <ChatPhoto />
        {comments.map((c, index) => {
          const isPrevSame =
            index > 0 ? comments[index - 1].userId === c.userId : false;
          const nextChat = index < comments.length - 1;
          const isNextSame =
            comments[index + 1] && comments[index + 1].userId === c.userId;

          console.log(isNextSame);
          return (
            <CommentItem
              key={c.id}
              c={c}
              isPrevSame={isPrevSame}
              nextChat={nextChat}
              isNextSame={isNextSame}
            />
          );
        })}
      </Wrapper>
      <Hr />
    </>
  );
}

export default CommentRoom;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  margin: 26px 13px 98px;
`;

const Hr = styled.div`
  width: 100%;
  height: 1.241px;
  flex-shrink: 0;
  background: rgba(199, 198, 198, 0.2);
`;
