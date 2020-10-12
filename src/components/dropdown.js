import React, { useState } from "react";
import styled from "styled-components";

const DropdownWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  select {
    width: 220px;
    height: 40px;
    padding: 6px;
    margin-bottom: 1rem;
    font-size: 16px;
    border-radius: 4px;
    background-color: ${(props) => props.theme.colors?.bgLight};
    border: ${(props) => `2px solid ${props.theme.colors?.dropdownBorder}`};
    outline: none;
    option {
      background: ${(props) => props.theme.colors?.optionColor};
      padding: 8px;
      font-size: 16px;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }
  }
`;

const Dropdown = ({ order, setOrder }) => {
  return (
    <DropdownWrapper>
      <select
        value={order}
        placeholder="Order By"
        onChange={(event) => setOrder(Number(event.target.value))}
      >
        <option value={0}>Most Voted (Z to A)</option>
        <option value={1}>Less Voted (A to Z)</option>
      </select>
    </DropdownWrapper>
  );
};
export default Dropdown;
