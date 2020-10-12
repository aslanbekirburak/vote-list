import React from "react";
import styled from "styled-components";

import logo from "../img/logo.png";
import challenge from "../img/challenge.png";

import Underline from "./underline";

const Header = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 2rem;
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }
`;

const Head = () => {
  return (
    <Header>
      <div>
        <img src={logo} width="320" alt="logo" />
        <img src={challenge} width="300" alt="challenge" />
      </div>
      <Underline height={1} color="underlineLight" />
    </Header>
  );
};
export default Head;
