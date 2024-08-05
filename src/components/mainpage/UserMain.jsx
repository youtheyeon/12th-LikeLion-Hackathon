import styled from "styled-components";
import { ReactComponent as Setting } from "../../assets/icons/setting.svg";
import userData from "../../store/userData.json";

function UserMain() {
  return (
    <Wrapper>
      <Header>
        <div>To Eat</div>
        <Setting />
      </Header>
      <Hr />
      <MyInfoBox>
        <div>
          <b>{userData.users[0].userName}</b>님
          <br />
          오늘은 식단샷을
          <br />
          <b>0번</b> 올려주셨네요
        </div>
        <img src={userData.users[0].img} alt="Sample" />
      </MyInfoBox>
      <MyPhotoSlide>
        <span>내가 올린 식단샷 3개</span>
        <Slide>
          <img
            src="https://recipe1.ezmember.co.kr/cache/recipe/2022/11/22/534dee38b3fe0bc9b982c946a8324f151.jpg"
            alt="meal"
          />
          <img
            src="https://recipe1.ezmember.co.kr/cache/recipe/2018/05/12/95410f1f00232d6fbaf170646b386d961.jpg"
            alt="meal"
          />
          <img
            src="https://ssproxy.ucloudbiz.olleh.com/v1/AUTH_e59809eb-bdc9-44d7-9d8f-2e7f0e47ba91/post_card/73871_1606976485_tnDl2yAo.png"
            alt="meal"
          />
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

  color: var(--bk, #191919);
  font-family: transducer, sans-serif;
  font-size: 20px;
  font-weight: 500;
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

  img {
    width: 67px;
    height: 67px;
    flex-shrink: 0;
    object-fit: cover;
    border-radius: 5.403px;
  }
`;
