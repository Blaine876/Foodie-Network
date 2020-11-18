import React from "react";
import { Link, useHistory } from "react-router-dom";

import logo from "../../assets/logoLarge.png";

import Button from "../../components/Button";

import styled from "styled-components";

const LoginContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(to right, #76ed68, #5fbf54);
`;

const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const Logo = styled.img`
  width: 5rem;
  object-fit: contain;

  @media screen and (min-width: ${({ theme }) =>
      theme.mobile.sm}) and (max-width: ${({ theme }) => theme.mobile.md}) {
    width: 5rem;
  }

  @media screen and (min-width: ${({ theme }) =>
      theme.mobile.md}) and (max-width: ${({ theme }) => theme.mobile.lg}) {
    width: 8rem;
  }

  @media screen and (min-width: ${({ theme }) =>
      theme.mobile.lg}) and (max-width: ${({ theme }) => theme.mobile.xl}) {
    width: 10rem;
  }
`;

const LoginMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

const FormSection = styled.section`
  padding: 1rem;

  @media screen and (min-width: ${({ theme }) =>
      theme.mobile.sm}) and (max-width: ${({ theme }) => theme.mobile.md}) {
    width: 100%;
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
  padding: 1rem;
`;

const InputField = styled.input`
  font-size: 1.6rem;
  padding: 0.5rem 2rem;
  border-radius: 5px;
  outline: none;
  border: none;

  @media screen and (min-width: ${({ theme }) =>
      theme.mobile.sm}) and (max-width: ${({ theme }) => theme.mobile.md}) {
    width: 100%;
  }

  @media screen and (min-width: ${({ theme }) =>
      theme.mobile.md}) and (max-width: ${({ theme }) => theme.mobile.lg}) {
    width: 40rem;
  }

  @media screen and (min-width: ${({ theme }) =>
      theme.mobile.lg}) and (max-width: ${({ theme }) => theme.mobile.xl}) {
    width: 50rem;
  }
`;

const InputDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  width: 100%;
`;

const LoginText = styled.p`
  text-align: center;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.primary.dark};
`;

const LoginLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary.blue};

  &:hover {
    color: ${({ theme }) => theme.colors.secondary.blue};
  }
`;

const Login = () => {
  const history = useHistory();
  return (
    <LoginContainer>
      <LoginMain>
        <LogoDiv>
          <Logo src={logo} />
        </LogoDiv>
        <FormSection>
          <LoginForm>
            <InputDiv>
              <InputField type="text" placeholder="Username" />
            </InputDiv>
            <InputDiv>
              <InputField type="text" placeholder="Password" />
            </InputDiv>
            <Button onClick={() => history.push("/")} buttonText="Login" />
          </LoginForm>
          <LoginText>
            Don't have an account?
            <LoginLink to="/signup"> Sign Up</LoginLink>
          </LoginText>
        </FormSection>
      </LoginMain>
    </LoginContainer>
  );
};

export default Login;
