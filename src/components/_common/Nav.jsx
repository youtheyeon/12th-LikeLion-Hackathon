import styled from "styled-components";

import { ReactComponent as Back } from "../../assets/icons/back.svg";

function Nav({ text = "" }) {
  return (
    <Wrapper>
      <div>
        <Back />
        <span>{text}</span>
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
  }
`;
