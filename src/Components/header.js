import React from "react";

import styled from "@emotion/styled";

const HeaderContainer = styled.div`
  width: 50vw;
  float: left;
`;

const AppTitle = styled.h1`
  display: flex;
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
    <HeaderContainer>
      <AppTitle>{props.title}</AppTitle>
      <AppSubTitle>{props.subTitle}</AppSubTitle>
    </HeaderContainer>
  );
};

export default Header;
