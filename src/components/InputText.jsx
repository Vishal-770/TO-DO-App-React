import React from "react";
import styled from "styled-components";

const InputText = ({ onTextChange }) => {
  return (
    <StyledWrapper>
      <input
        className="input"
        name="text"
        placeholder="Add to do"
        type="search"
        onChange={(event) => onTextChange(event)}
      />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .input {
    max-width: 190px;
    background-color: #f5f5f5;
    color: #242424;
    padding: 0.15rem 0.5rem;
    min-height: 40px;
    border-radius: 4px;
    outline: none;
    border: none;
    line-height: 1.15;
    box-shadow: 0px 10px 20px -18px;
  }

  input:focus {
    border-bottom: 2px solid #5b5fc7;
    border-radius: 4px 4px 2px 2px;
  }

  input:hover {
    outline: 1px solid lightgrey;
  }
`;

export default InputText;
