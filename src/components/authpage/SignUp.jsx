import React, { useState } from "react";
import styled from "styled-components";

const SignUp = () => {
  const [isNextClicked, setNextClicked] = useState(false);
  const [imgURL, setImgURL] = useState("");
  const [selectedImg, setSelectedImg] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    nickname: "",
  });

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];

    if (imageFile) {
      try {
        const imageUrl = URL.createObjectURL(imageFile);
        setSelectedImg(imageFile);
        setImgURL(imageUrl);
        console.log("Selected Image content:", imageFile);
      } catch (error) {
        console.error("Error creating object URL:", error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNextClick = () => {
    setNextClicked(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToSubmit = {
      ...formData,
      profileImage: selectedImg,
    };

    console.log(dataToSubmit);
  };

  return (
    <>
      {isNextClicked ? (
        <Form onSubmit={handleSubmit}>
          <Profile style={{ width: "140px", margin: "-10% auto 64px" }}>
            <input
              type="file"
              accept="image/jpg, image/jpeg, image/png"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
            {imgURL && <ProfileImg src={imgURL} alt="Preview" />}
          </Profile>

          <label htmlFor="nickname">닉네임</label>
          <div>
            <input
              id="nickname"
              name="nickname"
              placeholder="닉네임 입력"
              value={formData.nickname}
              onChange={handleChange}
            />
            <span>중복 확인</span>
          </div>

          <button type="submit">회원가입 하기</button>
        </Form>
      ) : (
        <Form>
          <label htmlFor="username">아이디</label>
          <div style={{ marginBottom: "43px" }}>
            <input
              id="username"
              name="username"
              placeholder="아이디 입력"
              value={formData.username}
              onChange={handleChange}
            />
            <span>중복 확인</span>
          </div>

          <label htmlFor="password">비밀번호</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="비밀번호 입력"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="비밀번호 재확인"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <button onClick={handleNextClick}>다음</button>
        </Form>
      )}
    </>
  );
};

export default SignUp;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30% 20px 0;

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
    margin-bottom: 5px;
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

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;

    input {
      width: calc(100% - 85px);
    }

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 79px;
      height: 47px;
      flex-shrink: 0;
      border-radius: 11px;
      border: 0.997px solid var(--background_01, rgba(199, 198, 198, 0.2));
      background: var(--gray_02, #b5b5b5);
      box-shadow: 0px 0px 6.978px 0.997px rgba(0, 0, 0, 0.03);

      color: var(--white, #fff);
      font-size: 14px;
      font-weight: 500;
    }
  }
`;

const Profile = styled.label`
  width: 140px;
  height: 140px;
  flex-shrink: 0;
  border-radius: 50%;
  border: 1.346px solid var(--gray01, #d6d6d6);
  background: #f3f3f3;
`;

const ProfileImg = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 140px;
  flex-shrink: 0;
  border-radius: 50%;
  border: 1.346px solid var(--gray01, #d6d6d6);
  object-fit: cover;
`;
