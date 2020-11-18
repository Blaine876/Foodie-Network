import React from "react";
import styled from "styled-components";

interface ButtonProps {
  buttonText: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonContainer = styled.div`
  padding: 1rem;

  @media screen and (min-width: ${({ theme }) =>
      theme.mobile.sm}) and (max-width: ${({ theme }) => theme.mobile.md}) {
    width: 100%;
  }
`;

const StyledButton = styled.button`
  border-radius: 5px;
  padding: 0.5rem 5rem;
  background: #150152;
  border: none;
  width: 100%;
  font-family: "Poppins", sans-serif;
  color: white;
  cursor: pointer;
`;

const Button: React.FC<ButtonProps> = ({ buttonText, onClick }) => {
  return (
    <ButtonContainer>
      <StyledButton onClick={onClick}>{buttonText}</StyledButton>
    </ButtonContainer>
  );
};

export default Button;
