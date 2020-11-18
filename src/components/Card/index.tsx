import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

interface CardProps {
  username: string;
  image?: string;
  title: string;
}

const CardContainer = styled.div`
  padding: 0rem 1rem;
  margin-bottom: 2rem;
  border: 1px solid lightblue;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.2);
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const CardBox = styled.div``;

const CardImage = styled.img`
  width: 20rem;
  border: 1px solid lightgray;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
  object-fit: contain;
  border-radius: 5px;
  transition: 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardTitle = styled.p`
  font-size: 1.6rem;
  font-family: "Poppins", sans-serif;
`;

const UsernameText = styled.h3`
  font-size: 1.4rem;
  font-family: "Poppins", sans-serif;
`;

const Card: React.FC<CardProps> = ({ username, image, title }) => {
  const history = useHistory();
  return (
    <CardContainer>
      <CardBox>
        <UsernameText>{username}'s dishes</UsernameText>
        <CardImage
          onClick={() => history.push("/details")}
          src={image}
          alt="image"
        />
        <CardTitle>{title}</CardTitle>
      </CardBox>
    </CardContainer>
  );
};
export default Card;
