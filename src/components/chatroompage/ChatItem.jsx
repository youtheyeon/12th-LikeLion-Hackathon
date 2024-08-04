import styled from "styled-components";
import sample from "../../assets/images/sample-photo.png";

function ChatItem({ isMy = false }) {
  return (
    <Item isMy={isMy}>
      {isMy || <img src={sample} alt="profile" />}
      <div className="content">
        {isMy || <span>배기진</span>}
        <p>오늘 1번째 인증샷을 올렸어요</p>
        <img src={sample} alt="sample" />
        <div>
          댓글 <b style={{ fontWeight: "600" }}>4</b>
        </div>
      </div>
    </Item>
  );
}

export default ChatItem;

const Item = styled.div`
  display: flex;
  gap: 8px;
  margin: ${({ isMy }) => (isMy ? "0 0 0 auto" : "0 auto 0 0")};

  img {
    width: 37px;
    height: 37px;
    flex-shrink: 0;
    border-radius: 50%;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 7px;

    color: var(--bk, #191919);
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.408px;

    p {
      width: fit-content;
      padding: 8px 10px;
      border-radius: 10px;
      background: var(--gray03, #f3f3f3);
      font-size: 14px;
      margin-left: ${({ isMy }) => isMy && "auto"};
    }

    img {
      width: 260px;
      height: 270px;
      border-radius: 10px;
    }

    div {
      margin-left: auto;
      width: fit-content;
      padding: 8px 10px;
      border-radius: 10px;
      background: var(--bk, #191919);
      color: var(--gray03, #f3f3f3);
      cursor: pointer;
    }
  }
`;
