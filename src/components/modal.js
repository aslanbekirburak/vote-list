import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import styled from "styled-components";
import Toast from "./toast";

import Button from "../components/button";
import { Cancel } from "./icons";

const ModalWrapper = styled.div`
  position: absolute;
  width: 540px;
  top: 30%;
  left: 47%;
  transform: translate(-40%, -40%);
  @media (max-width: 768px) {
    width: 90%;
    left: 41%;
    transform: translate(-40%, -40%);
  }
  background-color: ${(props) => props.theme.colors?.bgLight};
  &:focus {
    outline: none;
  }
`;

const ModalHeader = styled.div`
  width: 100%;
  padding: 12px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    color: white;
    border: none;
    background: none;
    cursor: pointer;
    outline: none;
  }
`;

const ModalContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  p:nth-child(1) {
    font-size: 18px;
    font-weight: 700;
    margin-top: 2rem;
    color: ${(props) => props.theme.colors?.fontDark};
  }
  p:nth-child(2) {
    font-size: 36px;
    font-weight: 700;
  }
`;

const BtnGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  button {
    margin: 2rem;
  }
`;

const ModalComponent = ({ open, handleClose, deleteElement, elementName }) => {
  const [deleteElementName, setDeleteElementName] = useState("");
  const [isToastOpen, setToastOpen] = useState(false);

  const body = (
    <ModalWrapper>
      <ModalHeader>
        <p>Remove Link</p>
        <button onClick={handleClose}>
          <Cancel />
        </button>
      </ModalHeader>
      <ModalContent>
        <p>Do you want to remove:</p>
        <p>{elementName}</p>
      </ModalContent>
      <BtnGroup>
        <Button
          onClick={() => {
            setDeleteElementName(elementName);
            deleteElement();
            handleClose();
            setToastOpen(true);
          }}
          text="Ok"
        />
        <Button onClick={handleClose} text="Cancel" />
      </BtnGroup>
    </ModalWrapper>
  );

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
      <Toast
        text={`${deleteElementName} removed!`}
        isToastOpen={isToastOpen}
        setToastOpen={() => setToastOpen(false)}
      />
    </>
  );
};
export default ModalComponent;
