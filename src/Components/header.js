import React from "react";

import styled from "@emotion/styled";

const AppTitle = styled.h1`
  color: red;
`;

const AppSubTitle = styled.h2`
  color: yellow;
`;

class Header extends React.Component {
  render() {
    return (
      <div>
        <AppTitle>{this.props.title}</AppTitle>
        <AppSubTitle>{this.props.subTitle}</AppSubTitle>
      </div>
    );
  }
}

export default Header;
