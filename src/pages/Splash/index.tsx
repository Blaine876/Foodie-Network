import React from "react";
import logo from "../../assets/logoLarge.png";
import styled from "styled-components";

const SplashContainer = styled.div`
  height: 100vh;
  background: linear-gradient(to right, #76ed68, #5fbf54);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SplashLogo = styled.img`
  height: 4rem;
`;

const LogoText = styled.h1`
  font-family: "Scope One", serif;
  font-size: 5rem;
  color: white;
  margin-right: 1rem;

  @media screen and (min-width: ${({ theme }) =>
      theme.mobile.sm}) and (max-width: ${({ theme }) => theme.mobile.md}) {
    font-size: 4rem;
  }
`;

const Splash = () => {
  return (
    <SplashContainer>
      <LogoText>Foodie Network</LogoText>
      <SplashLogo src={logo} alt="logo" />
    </SplashContainer>
  );
};

export default Splash;
