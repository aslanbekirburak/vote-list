import React, { useState } from "react";
import styled from "styled-components";
import ModalComponent from "../components/modal";

import { UpVote, DownVote } from "./icons";
import remove from "../img/remove.png";

const Container = styled.div`
  width: 420px;
  @media (max-width: 768px) {
    width: 95%;
  }
  margin: 1rem 0;
  padding: 8px;
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 1rem;
  border-radius: 8px;
  border: 1px solid transparent;
  &:hover {
    background-color: ${(props) => props.theme.colors?.bgLight};
    border: ${(props) => `1px solid ${props.theme.colors?.borderLight}`};
    border-radius: 8px;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 100px auto;
  grid-gap: 16px;
`;

const Remove = styled.div`
  width: 105%;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  background-color: pink;
  div {
    display: none;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: white;
    box-shadow: 0 0 6px 6px #ececec;
    position: absolute;
    margin-top: -1.5rem;
    ${Container}:hover & {
      display: block;
    }
  }
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
  p:nth-child(1) {
    font-size: 36px;
    font-weight: 900;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  div:nth-child(1) {
    p {
      margin-top: 4px;
      color: ${(props) => props.theme.colors?.fontLight};
    }
  }
  div:nth-child(2) {
    display: flex;
    flex-direction: row;
    button {
      width: 100px;
      display: flex;
      align-items: center;
      background: none;
      border: none;
      font-weight: 700;
      color: ${(props) => props.theme.colors?.fontLight};
      cursor: pointer;
      &:nth-child(1) {
        &:hover {
          color: green;
        }
      }
      &:nth-child(2) {
        margin-left: 1rem;
        &:hover {
          color: red;
        }
      }
      &:focus {
        outline: 0;
      }
      p {
        margin-left: 4px;
      }
    }
  }
`;

const Card = ({ vote, title, link, downVote, upVote, deleteElement }) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <Container>
      <Remove onClick={() => setModalOpen(true)}>
        <div>
          <img src={remove} width="100%" alt="remove" />
        </div>
      </Remove>
      <Wrapper>
        <Point>
          <p>{vote}</p>
          <p>points</p>
        </Point>
        <Content>
          <div>
            <h2>{title}</h2>
            <p>{`( ${link} )`}</p>
          </div>
          <div>
            <button onClick={upVote}>
              <UpVote />
              <p>Up Vote</p>
            </button>
            <button onClick={downVote}>
              <DownVote />
              <p>Down Vote</p>
            </button>
          </div>
        </Content>
        <ModalComponent
          open={modalOpen}
          handleClose={() => setModalOpen(false)}
          deleteElement={deleteElement}
          elementName={title}
        />
      </Wrapper>
    </Container>
  );
};
export default Card;
