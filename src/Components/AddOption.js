import React from "react";

import styled from "@emotion/styled";

const OptionInput = styled.input`
  height: 150px;
  width: 65vw;
  float: right;
  font-size: 100px;
  margin-right: 10px;
  border: 1px solid black;
  text-align: right;
  &:focus {
    outline: none;
  }
`;

const OptionSubmitButton = styled.button`
  float: right;
  height: 150px;
  width: 150px;
  font-size: 25px;
  border: 1px solid black;
  margin-right: 10px;
`;

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);

    this.state = {
      error: undefined,
    };
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => {
      return {
        error,
      };
    });
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <OptionSubmitButton>Add new option</OptionSubmitButton>
          <OptionInput
            autoFocus
            align="right"
            type="text"
            name="option"
          ></OptionInput>
        </form>
      </div>
    );
  }
}

export default AddOption;
