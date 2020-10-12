import React from "react";
import styled from "styled-components";


const Underline = ({height,color}) => {

const Line = styled.div`
  width: 100%;
  height: ${height}px;
  background-color: ${(props) => props.theme.colors?.[color]};
  margin: 1rem 0 2rem 0;
`;
  
  return <Line />;
};
export default Underline;
