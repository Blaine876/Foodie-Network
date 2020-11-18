import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import AddIcon from "@material-ui/icons/Add";

import Navbar from "../../components/Navbar";
import Card from "../../components/Card";

import ricepeaschicken from "../../assets/rice_peas_chicken.jpg";

const HomeContainer = styled.div`
  position: relative;
`;

const AddButton = styled.button`
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  background-color: blue;
  border-radius: 999px;
  padding: 2rem;
  border: none;

  &:hover {
    background-color: green;
  }
`;

const StyledAddIcon = styled(AddIcon)`
  && {
    color: white;
    font-size: 3rem;
  }

  @media screen and (min-width: ${({ theme }) =>
      theme.mobile.sm}) and (max-width: ${({ theme }) => theme.mobile.md}) {
    && {
      font-size: 2rem;
    }
  }
`;

const Home = () => {
  const history = useHistory();
  return (
    <HomeContainer>
      <Navbar />

      <h1>Home</h1>
      <Card
        image={ricepeaschicken}
        title="Rice & Peas & Chicken"
        username="blaiineo"
      />
      <Card
        image={ricepeaschicken}
        title="Rice and Peas and Chicken"
        username="nadikeys"
      />
      <Card
        image={ricepeaschicken}
        title="Rice and Peas and Chicken"
        username="annferg"
      />
      <Card
        image={ricepeaschicken}
        title="Rice and Peas and Chicken"
        username="blaiineo"
      />
      <Card
        image={ricepeaschicken}
        title="Rice and Peas and Chicken"
        username="blaiineo"
      />
      <AddButton>
        <StyledAddIcon onClick={() => history.push("/addmeal")} />
      </AddButton>
    </HomeContainer>
  );
};

export default Home;
