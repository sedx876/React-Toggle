import React from "react"
import styled from "styled-components"
import D2 from '../../images/D2.png'

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.div`
  width: 40px;
  height: 40px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoText = styled.h2`
  font-size: 16px;
  margin: 0;
  margin-left: 4px;
  font-weight: 500;
  color: #CA302D;
  background-color: #000;
  text-shadow: 1px 1px 0px #ff0000;
`;

export function Logo(props) {
  return (
    <LogoWrapper>
      <LogoImg>
        <img src={D2} alt="Diablo2" />
      </LogoImg>
      <LogoText>Diablo2PlayrPad</LogoText>
    </LogoWrapper>
  );
}