import styled from "styled-components";
import sample from "../../assets/images/sample-photo.png";

function Story({ isMyStory = false }) {
  return (
    <Slide isMyStory={isMyStory}>
      {isMyStory || <img src={sample} alt="Sample" />}
      <Profile isMyStory={isMyStory}>
        <div>
          <img src={sample} alt="sample" />
        </div>
        <span>{isMyStory ? "내 스토리" : "이름"}</span>
      </Profile>
    </Slide>
  );
}

export default Story;

const Slide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  position: relative;
  width: 130px;
  height: 173.333px;
  flex-shrink: 0;
  border-radius: 2.955px;
  border: ${({ isMyStory }) => isMyStory && "1px solid #d6d6d6"};
  background: var(--gray03, #f3f3f3);

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  &:last-child {
    margin-right: 16px;
  }
`;

const Profile = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 7.92px;
  margin-bottom: 13.76px;

  color: ${({ isMyStory }) => (isMyStory ? "#C0C0C0" : "white")};
  text-align: center;
  font-size: 15.847px;
  font-weight: 600;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64.972px;
    height: 64.972px;
    flex-shrink: 0;
    border: 2.377px solid
      ${({ isMyStory }) => (isMyStory ? "#C0C0C0" : "white")};
    border-radius: 50%;

    img {
      width: 55.464px;
      height: 55.464px;
      flex-shrink: 0;
      border-radius: 50%;
    }
  }
`;
