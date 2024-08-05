import styled from "styled-components";

import Story from "./Story";
import storyData from "../../store/storyData.json";

function UserStory() {
  return (
    <Wrapper>
      <HeaderText>
        <span>친구들의 식단 스토리</span>
        {/* <button>친구 편집</button> */}
      </HeaderText>
      <StorySlide>
        {storyData[0].map((s) => (
          <Story key={s.id} s={s} />
        ))}
      </StorySlide>
    </Wrapper>
  );
}

export default UserStory;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 16px 34.67px;
`;

const HeaderText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0;

  span {
    color: var(--bk, #191919);
    font-size: 12px;
    font-weight: 400;
  }

  button {
    padding: 0 10px;
    border-radius: 50px;
    border: 1px solid var(--gray02, #c0c0c0);
    background: var(--gray02, #c0c0c0);

    color: #fff;
    font-size: 10px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: -0.408px;
  }
`;

const StorySlide = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7.565px;
  overflow-x: scroll;
  margin-right: -16px;

  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
