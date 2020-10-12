import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { AddIcon } from "./icons";

const LinkWrapper = styled.div`
  a{
    color: black;
    text-decoration: none;
  }
`

const Wrapper = styled.div`
  width: 420px;
  @media (max-width: 768px) {
    width: 95%;
  }
  padding: 16px;
  display: grid;
  grid-template-columns: 100px auto;
  grid-gap: 16px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors?.bgLight};
  border: ${(props) => `1px solid ${props.theme.colors?.borderLight}`};
`;

const Point = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors?.pointBg};
  border: ${(props) => `1px solid ${props.theme.colors?.borderDark}`};
  border-radius: 8px;
  a {
    color: black;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: 28px;
    font-weight: 600;
    text-transform: uppercase;
  }
`;

const Submit = () => {
  return (
    <LinkWrapper>
      <Link to="/enterNew">
        <Wrapper>
          <Point>
            <AddIcon />
          </Point>
          <Content>
            <p>submit a link</p>
          </Content>
        </Wrapper>
      </Link>
    </LinkWrapper>
  );
};
export default Submit;
