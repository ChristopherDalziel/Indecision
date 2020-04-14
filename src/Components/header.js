import React from "react";

import styled from "@emotion/styled";

const AppTitle = styled.h1`
  color: black;
  font-size: 175px;
  text-align: left;
  width: 15vw;
`;

const AppSubTitle = styled.h2`
  color: black;
  text-align: left;
`;

const Header = (props) => {
  return (
    <div>
      <AppTitle>{props.title}</AppTitle>
      <AppSubTitle>{props.subTitle}</AppSubTitle>
    </div>
  );
};

export default Header;
