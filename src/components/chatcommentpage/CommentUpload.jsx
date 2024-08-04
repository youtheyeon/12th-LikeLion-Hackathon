import React, { useRef } from "react";
import styled from "styled-components";

import { ReactComponent as AddImg } from "../../assets/icons/add-img.svg";
import { ReactComponent as Upload } from "../../assets/icons/upload.svg";

function CommentUpload() {
  const fileInputRef = useRef(null);
  const textarea = useRef(null);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("File selected:", file);
    }
  };

  const handleResizeHeight = () => {
    if (textarea.current) {
      textarea.current.style.height = "auto";
      textarea.current.style.height = textarea.current.scrollHeight + "px";
    }
  };

  return (
    <Wrapper>
      <AddImg onClick={handleIconClick} style={{ marginRight: "11px" }} />
      <form>
        <textarea
          placeholder="댓글을 입력해주세요"
          onInput={handleResizeHeight}
          ref={textarea}
          rows={1}
        />
        <Upload />
      </form>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </Wrapper>
  );
}

export default CommentUpload;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 85px;
  padding: 9px 10px 34px;
  align-items: center;
  background: var(--white, #fff);

  form {
    width: 100%;
    display: flex;
    padding: 8px 10px;
    justify-content: space-between;
    border-radius: 10px;
    background: var(--gray03, #f3f3f3);
    align-items: center;

    textarea {
      width: 100%;
      background: transparent;
      font-size: 14px;
      font-weight: 400;
      border: none;
      outline: none;
      resize: none;
      overflow: hidden;

      &::placeholder {
        color: var(--gray02, #c0c0c0);
      }
    }

    svg {
      width: 24px;
      height: 24px;
      cursor: pointer;
    }
  }
`;
