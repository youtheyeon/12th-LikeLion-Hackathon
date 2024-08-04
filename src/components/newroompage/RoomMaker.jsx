import React, { useState } from "react";
import styled from "styled-components";

const RoomMaker = ({ setIsComplete }) => {
  const [imgURL, setImgURL] = useState("");
  const [isImgChanged, setIsImgChanged] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const [roomName, setRoomName] = useState("");

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];

    if (imageFile) {
      try {
        const imageUrl = URL.createObjectURL(imageFile);
        setSelectedImg(imageFile);
        setImgURL(imageUrl);
        setIsImgChanged(true);
        console.log("Selected Image content:", imageFile);
      } catch (error) {
        console.error("Error creating object URL:", error);
      }
    }
  };

  const handleRoomNameChange = (e) => {
    setRoomName(e.target.value);
    e.target.value.length > 0 ? setIsComplete(true) : setIsComplete(false);
  };

  return (
    <>
      <Hr />
      <Profile>
        <input
          type="file"
          accept="image/jpg, image/jpeg, image/png"
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
        {imgURL && <ProfileImg src={imgURL} alt="Preview" />}
      </Profile>
      <NameInput>
        <div>
          <input
            type="text"
            placeholder="채팅방 이름을 입력해주세요"
            maxLength={20}
            value={roomName}
            onChange={handleRoomNameChange}
          />
          <span>{roomName.length}/20</span>
        </div>
        <hr />
      </NameInput>
    </>
  );
};

export default RoomMaker;

const Hr = styled.div`
  width: 100%;
  height: 1.241px;
  background: rgba(199, 198, 198, 0.2);
`;

const Profile = styled.label`
  margin: 18px auto 51px;
  width: 140px;
  height: 140px;
  border-radius: 53.846px;
  border: 1.346px solid var(--gray01, #d6d6d6);
  background: #fff;
`;

const ProfileImg = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 140px;
  border-radius: 53.846px;
  border: 1.346px solid var(--gray01, #d6d6d6);
  object-fit: cover;
`;

const NameInput = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 30px;

  div {
    display: flex;
    justify-content: space-between;

    font-size: 12px;
    font-weight: 400;

    input {
      width: 100%;

      &::placeholder {
        color: var(--gray02, #c0c0c0);
        font-size: 16px;
      }
    }

    span {
      color: var(--gray02, #c0c0c0);
    }
  }

  hr {
    width: 100%;
    height: 1.5px;
    background: #d6d6d6;
  }
`;
