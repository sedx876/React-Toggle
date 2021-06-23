import React from "react";
import styled from "styled-components";

const AccessibilityContainer = styled.div`
  display: flex;
  margin-left: auto;
`;

const RegisterButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #000;
  font-size: 13px;
  font-weight: 600;
  border-radius: 20px;
  background-color: #6adf76;
  background-image: linear-gradient(to right, 
    #810020,
    #900A22, 
    #A41726,
    #BA262B,
    #CA302D);
    border: 2px solid #810020;
  transition: all 240ms ease-in-out;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: #00c9ff;
  }
  &:not(:last-of-type) {
    margin-right: 1px;
  }
  height: 35px;
  margin: 10px;
  
`;

const LoginButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #222;
  font-size: 13px;
  font-weight: 600;
  border-radius: 20px;
  background-color: #00c9ff;
  background-image: linear-gradient(to right, 
    #810020,
    #900A22, 
    #A41726,
    #BA262B,
    #CA302D);
  border: 2px solid #810020;
  transition: all 240ms ease-in-out;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: #00c9ff;
  }
  &:not(:last-of-type) {
    margin-right: 1px;
  }
  height: 35px;
  margin: 10px;
  
`;

export function Accessibility(props) {
  return (
    <AccessibilityContainer>
      <RegisterButton className='waves-effect waves-light'>Register</RegisterButton>
      <LoginButton className='waves-effect waves-light'>Login</LoginButton>
    </AccessibilityContainer>
  );
}