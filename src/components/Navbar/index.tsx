import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: whitesmoke;
  height: 8vh;
  padding: 0rem 1rem;
`;

const Logo = styled.img`
  width: 3rem;
`;

const RightDiv = styled.div`
  display: flex;
  align-items: center;
`;

const SearchField = styled.input`
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 0rem 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo src={logo} alt="logo" />

      <RightDiv>
        <SearchIcon />
        <SearchField type="text" />
        <Avatar />
      </RightDiv>
    </NavbarContainer>
  );
};

export default Navbar;
