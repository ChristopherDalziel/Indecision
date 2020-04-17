import React from "react";

import styled from "@emotion/styled";

// const OptionDiv = styled.div`
//   float: right;
//   background: green;
//   width: 50vw;
//   text-align: right;
// `;

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        remove
      </button>
    </div>
  );
};

const Options = (props) => {
  return (
    <>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Please add an option to get started</p>}
      <div>
        {props.options.map((option) => (
          <Option
            key={option}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))}
      </div>
    </>
  );
};

export default Options;
