import styled from "styled-components";

import sample from "../../assets/images/sample-photo.png";
import { ReactComponent as Setting } from "../../assets/icons/setting.svg";

function UserMain() {
  return (
    <Wrapper>
      <Header>
        <div>서비스명</div>
        <Setting />
      </Header>
      <Hr />
      <MyInfoBox>
        <div>
          <b>한번사는인생두렵지않아</b>님
          <br />
          오늘은 식단샷을
          <br />
          <b>3번</b> 올려주셨네요
        </div>
        <img src={sample} alt="Sample" />
      </MyInfoBox>
      <MyPhotoSlide>
        <span>내가 올린 식단샷 23개</span>
        <Slide>
          <img src={sample} alt="Sample" />
        </Slide>
      </MyPhotoSlide>
    </Wrapper>
  );
}

export default UserMain;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px 9px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 63px 0 17px;
`;

const Hr = styled.div`
  width: 100%;
  height: 1.241px;
  background: rgba(199, 198, 198, 0.2);
`;

const MyInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  margin: 17px 0;

  div {
    color: var(--bk, #191919);
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.408px;

    b {
      font-weight: 600;
    }
  }

  img {
    width: 78px;
    height: 78px;
    flex-shrink: 0;
    border-radius: 50%;
  }
`;

const MyPhotoSlide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 18px 0 18px 16px;
  border-radius: 14px;
  border: 1px solid var(--background_01, rgba(199, 198, 198, 0.2));
  background: var(--white, #fff);

  span {
    color: var(--black, #303030);
    font-size: 11px;
    font-weight: 500;
  }
`;

const Slide = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7.565px;
  overflow-x: scroll;

  :last-child {
    margin-right: 16px;
  }

  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
