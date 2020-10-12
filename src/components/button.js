import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  text-transform: uppercase;
  color: white;
  background: black;
  width: 130px;
  height: 44px;
  font-size: 1.2rem;
  font-weight: 700;
  border-radius: 99px;
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    background: #262626;
  }
`;

const Button = ({ text, onClick }) => {
  return <Btn onClick={onClick}>{text}</Btn>;
};
export default Button;
