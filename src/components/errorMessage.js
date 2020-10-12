import React from 'react'
import styled from "styled-components";

const Error = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 1rem;
    padding: 8px;
    p{
        color: red;
        font-weight: 700;
        font-size: 20px;
    }
`

const ErrorMessage = () => {
    return(
        <Error>
            <p>
               Please fill empty fields.
            </p>
        </Error>
    )
}
export default ErrorMessage;