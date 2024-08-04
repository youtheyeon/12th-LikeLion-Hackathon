import styled from "styled-components";
import { ReactComponent as Upload } from "../../assets/icons/upload.svg";
import React, { useRef } from "react";

function ChatUpload() {
  const fileInputRef = useRef(null);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("File selected:", file);
    }
  };

  return (
    <Wrapper>
      <div>
        <span>인증샷을 업로드해주세요</span>
        <Upload onClick={handleIconClick} />
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </div>
    </Wrapper>
  );
}

export default ChatUpload;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 85px;
  padding: 9px 10px 34px;
  flex-direction: column;
  align-items: center;
  background: var(--white, #fff);

  div {
    display: flex;
    width: 100%;
    padding: 8px 10px;
    justify-content: space-between;
    border-radius: 10px;
    background: var(--gray03, #f3f3f3);
    align-items: center;

    span {
      margin-top: 3px;
      color: var(--gray02, #c0c0c0);
      font-size: 14px;
      font-weight: 400;
    }

    svg {
      width: 24px;
      height: 24px;
      cursor: pointer;
    }
  }
`;
