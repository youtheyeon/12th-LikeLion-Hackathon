import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Back } from "../../assets/icons/back.svg";

function Nav({ text = "", CompleteOn = false, isComplete = false }) {
  const navigate = useNavigate();

  return (
    <Wrapper isComplete={isComplete}>
      <div>
        <Back onClick={() => navigate(-1)} />
        <span>{text}</span>
        {CompleteOn && <p onClick={() => navigate("/main")}>완료</p>}
      </div>
    </Wrapper>
  );
}

export default Nav;

const Wrapper = styled.div`
  margin: 58px 16px 13px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;

    color: var(--bk, #191919);
    font-size: 16px;
    font-weight: 600;

    svg {
      position: absolute;
      left: 0;
    }

    p {
      position: absolute;
      right: 11px;
      font-weight: 400;
      color: ${(props) =>
        props.isComplete ? "var(--bk, #191919)" : "var(--gray03, #f3f3f3)"};
      cursor: pointer;
    }
  }
`;
