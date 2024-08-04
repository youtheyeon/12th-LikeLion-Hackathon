import styled from "styled-components";

import sample from "../../assets/images/sample-photo.png";
import { ReactComponent as Delete } from "../../assets/icons/delete.svg";

function CommentItem({ isPrevSame = false, nextChat = true }) {
  return (
    <Item isPrevSame={isPrevSame}>
      <div className="profile">
        {isPrevSame || <img src={sample} alt="profile" />}
      </div>
      <div className="content">
        {isPrevSame || <span>배기진</span>}
        <div>
          <p>
            회원님? 이것 뭐에요??🧐 회원님? 이것 뭐에요??🧐회원님? 이것
            뭐에요??🧐회원님? 이것 뭐에요??🧐
          </p>
          <Delete />
        </div>
        {/* <div>
          <img src={sample} alt="sample" />
          <Delete />
        </div> */}
      </div>
      {nextChat && <Line />}
    </Item>
  );
}

export default CommentItem;

const Item = styled.div`
  position: relative;
  display: flex;
  gap: 8px;
  margin-top: ${({ isPrevSame }) => isPrevSame && "-14px"};

  .profile {
    z-index: 1;
    width: 37px;
    height: 37px;
    flex-shrink: 0;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
    }
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
      max-width: 260px;
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
      display: flex;
      gap: 7px;
    }
  }
`;

const Line = styled.div`
  position: absolute;
  left: 18px;
  width: 2px;
  height: calc(100% + 20px);
  background: #f3f3f3;
`;
