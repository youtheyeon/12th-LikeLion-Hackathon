import styled from "styled-components";

import ChatPhoto from "./ChatPhoto";
import CommentItem from "./CommentItem";

function CommentRoom() {
  return (
    <>
      <Hr />
      <Wrapper>
        <ChatPhoto />
        <CommentItem nextChat={false} />
        <CommentItem isPrevSame={true} nextChat={false} />
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
  margin: 26px 13px;
`;

const Hr = styled.div`
  width: 100%;
  height: 1.241px;
  flex-shrink: 0;
  background: rgba(199, 198, 198, 0.2);
`;
