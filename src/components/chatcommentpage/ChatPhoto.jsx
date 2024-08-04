import styled from "styled-components";

import sample from "../../assets/images/sample-photo.png";

function ChatPhoto() {
  return (
    <Item>
      <Profile>
        <img src={sample} alt="profile" />
        <div>
          <span>배기진</span>
          <p style={{ color: "#c0c0c0" }}>오늘 1번째 인증샷이에요</p>
        </div>
      </Profile>
      <img src={sample} alt="sample" />
      <Line />
    </Item>
  );
}

export default ChatPhoto;

const Item = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;

  img {
    z-index: 1;
    width: calc(100% - 14px);
    flex-shrink: 0;
    border-radius: 10px;
  }
`;

const Profile = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;

  color: var(--bk, #191919);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.408px;

  img {
    z-index: 1;
    width: 37px;
    height: 37px;
    flex-shrink: 0;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const Line = styled.div`
  position: absolute;
  left: 18px;
  width: 2px;
  height: calc(100% + 20px);
  background: #f3f3f3;
`;