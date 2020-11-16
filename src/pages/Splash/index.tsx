import React from "react";
import logo from "../../assets/logoLarge.png";
import styled from "styled-components";

const SplashContainer = styled.div`
  height: 100vh;
  background-color: #76ed68;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
`;

const SplashLogo = styled.img`
  height: 4rem;
`;

const LogoText = styled.h1`
  font-family: "Scope One", serif;
  font-size: 4rem;
  color: white;
`;

const Splash = () => {
  return (
    <SplashContainer>
      <LogoText>Island Dish</LogoText>
      <SplashLogo src={logo} alt="logo" />
    </SplashContainer>
  );
};

export default Splash;
