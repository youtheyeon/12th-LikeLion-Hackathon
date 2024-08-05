import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <Form>
        <label for="username">아이디</label>
        <input id="username" name="username" placeholder="아이디 입력" />
        <label for="password">비밀번호</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="비밀번호 입력"
        />
        <button onClick={() => navigate("/main")}>로그인</button>
        <span onClick={() => navigate("/signup")}>회원가입</span>
      </Form>
    </>
  );
};

export default Login;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 45% 20px 0;

  label {
    width: 100%;
    margin-bottom: 8px;

    color: var(--gray_02, #b5b5b5);
    font-size: 12px;
    font-weight: 400;
  }

  input {
    width: 100%;
    height: 47px;
    flex-shrink: 0;
    margin-bottom: 21px;
    padding: 14px 22px;

    border-radius: 11px;
    border: 0.997px solid var(--background_01, rgba(199, 198, 198, 0.2));
    background: var(--white, #fff);
    box-shadow: 0px 0px 6.978px 0.997px rgba(0, 0, 0, 0.03);

    font-size: 15px;
    font-weight: 500;

    &::placeholder {
      color: var(--gray_02, #b5b5b5);
    }
  }

  button {
    width: 100%;
    height: 47px;
    flex-shrink: 0;
    margin-top: 100px;
    border-radius: 12px;
    background: var(--bk, #191919);
    box-shadow: 0px 0px 6.978px 0.997px rgba(0, 0, 0, 0.03);

    color: var(--white, #fff);
    font-size: 15px;
    font-weight: 700;
  }

  span {
    margin-top: 43px;
    color: var(--gray_02, #b5b5b5);
    font-size: 14px;
    font-weight: 500;
  }
`;
