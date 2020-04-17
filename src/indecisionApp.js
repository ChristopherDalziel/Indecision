import React from "react";
import Header from "./Components/Header";
import Options from "./Components/Options";
import Action from "./Components/Action";
import AddOption from "./Components/AddOption";
import OptionModal from "./Components/OptionModal";

import "./index.css";
import styled from "@emotion/styled";

const Body = styled.div`
  background-color: yellow;
  height: 96vh;
  padding: 2vh;
`;

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);

    this.state = {
      options: [],
      selected: undefined,
    };
  }

  componentDidMount() {
    try {
      const jsonOptions = localStorage.getItem("options");
      const options = JSON.parse(jsonOptions);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      console.log("There was an error!");
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const jsonOptions = JSON.stringify(this.state.options);
      localStorage.setItem("options", jsonOptions);
    }
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: [],
      };
    });
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      }),
    }));
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  handleAddOption(option) {
    if (!option) {
      return "Enter valid value to add option";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }
    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option),
      };
    });
  }

  render() {
    const title = "The Indecision App";
    const subTitle = "Put your life in the hands of a computer";

    return (
      <Body>
        <Header title={title} subTitle={subTitle} />

        <Action
          handlePick={this.handlePick}
          hasOptions={this.state.options.length > 0}
        />
        <Options
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
          handleAddOption={this.handleDeleteOption}
          options={this.state.options}
        />
        <AddOption handleAddOption={this.handleAddOption} />
        <OptionModal />
      </Body>
    );
  }
}

export default IndecisionApp;
