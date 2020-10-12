import React, { useState, useEffect } from "react"; // import { Button, TextField, Box } from "@material-ui/core";
import { Link } from "react-router-dom";

import { Back } from "../components/icons";
import Button from "../components/button";

import styled from "styled-components";
import Toast from "../components/toast";
import ErrorMessage from "../components/errorMessage";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 420px;
  @media (max-width: 768px) {
    width: 95%;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: black;
    text-decoration: none;
    p {
      margin-left: 8px;
      font-weight: 700;
    }
  }
`;

const Description = styled.p`
  font-size: 36px;
  font-weight: 900;
  margin: 3rem 0;
`;

const Form = styled.div`
  div {
    display: flex;
    justify-content: flex-end;
  }
`;

const LabelText = styled.label`
  margin-left: 8px;
`;

const InputText = styled.input`
  width: 100%;
  padding: 14px 7px;
  margin: 2px 0 32px 0;
  display: inline-block;
  border: 2px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box;
  font-size: 16px;
  outline: none;
  &:focus {
    border: ${(props) => `2px solid ${props.theme.colors?.borderDark}`};
  }
`;

const EnterUrl = () => {
  const [dataToSave, setData] = useState({ vote: 0 });
  const [oldData, setOldData] = useState([]);
  const [isToastOpen, setToastOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  useEffect(() => {
    let storedNames = JSON.parse(localStorage.getItem("names"));
    if (storedNames) setOldData(storedNames);
  }, []);

  const handleSave = async () => {
    if(dataToSave?.name && dataToSave?.url){
    await setOldData((oldArr) => [...oldArr, dataToSave]);
    let tempArr = oldData;
    tempArr.unshift(dataToSave);
    await localStorage.setItem("names", JSON.stringify(tempArr));
    setToastOpen(true);
    }else{
      setErrorOpen(true);
    }
  };
  return (
    <Wrapper>
      <Link to="/">
        <Back />
        <p>Return To list</p>
      </Link>
      <Description>Add New Link</Description>
      <Form>
        <LabelText htmlFor="link">Link Name:</LabelText>
        <InputText
          type="text"
          id="link"
          name="link"
          placeholder="e.g. Alphabet"
          onChange={(e) => {setData({ ...dataToSave, name: e.target.value });setErrorOpen(false)}}
        />

        <LabelText htmlfor="url">Link URL:</LabelText>
        <InputText
          type="text"
          id="url"
          name="url"
          placeholder="e.g. http://abc.xyz"
          onChange={(e) => {setData({ ...dataToSave, url: e.target.value });setErrorOpen(false)}}
        />
        {errorOpen && <ErrorMessage/>}
        <div>
          <Button onClick={handleSave} text="add" />
        </div>
      </Form>
      <Toast
        text={`${dataToSave?.name} added!`}
        isToastOpen={isToastOpen}
        setToastOpen={() => setToastOpen(false)}
      />
    </Wrapper>
  );
};

export default EnterUrl;
