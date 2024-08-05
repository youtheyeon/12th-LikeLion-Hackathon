import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import addChatIcon from "../../assets/icons/add-chat-icon.svg";

function ChatList() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Hr />
      <HeaderText>
        <span>내 인증방</span>
        <img
          src={addChatIcon}
          alt="add icon"
          onClick={() => navigate("/newchat")}
        />
      </HeaderText>
      <List>
        <ListBox onClick={() => navigate("/chat/1")}>
          <img src={addChatIcon} alt="profile" />
          <div className="content">
            <div>
              <span>식단방</span>
              <span style={{ color: "#d6d6d6", marginLeft: "11px" }}>10</span>
            </div>
            <div className="preview">
              회원님? 이것 뭐에요??🧐 회원님? 이것 뭐에요??🧐회원님? 이것
              뭐에요??🧐회원님? 이것 뭐에요??🧐
            </div>
          </div>
          <p>12:22</p>
        </ListBox>
      </List>
    </Wrapper>
  );
}

export default ChatList;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Hr = styled.div`
  width: 100%;
  height: 10px;
  flex-shrink: 0;
  background: var(--gray03, #f3f3f3);
`;

const HeaderText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px 15px 26px 17px;

  span {
    color: var(--bk, #191919);
    font-size: 16px;
    font-weight: 600;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 37px;
`;

const ListBox = styled.div`
  width: 100%;
  height: 81px;
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 52px;
    height: 52px;
    flex-shrink: 0;
    border-radius: 20px;
    border: 0.5px solid var(--gray01, #d6d6d6);
    margin: auto 16px;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
    margin: 11px 0;

    color: var(--bk, #191919);
    font-size: 16px;
    font-weight: 600;

    .preview {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      font-size: 14px;
      font-weight: 400;
    }
  }

  p {
    flex-shrink: 0;
    margin: 22px 15px auto 14px;
    color: var(--gray01, #d6d6d6);
    font-size: 12px;
    font-weight: 400;
  }
`;
