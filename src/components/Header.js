import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineFire, AiOutlineQuestionCircle } from 'react-icons/ai';
import { HiOutlineNewspaper } from 'react-icons/hi';
import { BiShowAlt } from 'react-icons/bi';
import { TiBusinessCard } from 'react-icons/ti';

const Navbar = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 0.5em;
  flex-wrap: wrap;
  @media (min-width: ${(props) => props.theme.breakpoint}) {
    padding: 0 10em;
    height: 100vh;
    flex-direction: column;
    flex: 0 1 auto;
    overflow: auto;
  }
`;

const NavbarItem = styled(NavLink)`
  display: inline-flex;
  gap: 0.4em;
  align-items: center;
  color: ${(props) => props.theme.colors.font};
  text-decoration: none;
  padding: 0.75em 0;
  font-size: ${(props) => props.theme.fontSizes.large};
  &.active {
    color: ${(props) => props.theme.colors.primary};
  }
  @media (max-width: ${(props) => props.theme.breakpoint}) {
    font-size: ${(props) => props.theme.fontSizes.medium};
    padding: 0 0.25em;
  }
`;

const Header = (props) => {
  return (
    <Navbar>
      <NavbarItem to="/top" activeClassName={'active'}>
        <AiOutlineFire /> Top
      </NavbarItem>
      <NavbarItem to="/new" activeClassName={'active'}>
        <HiOutlineNewspaper /> New
      </NavbarItem>
      <NavbarItem to="/show" activeClassName={'active'}>
        <BiShowAlt /> Show
      </NavbarItem>
      <NavbarItem to="/ask" activeClassName={'active'}>
        <AiOutlineQuestionCircle /> Ask
      </NavbarItem>
      <NavbarItem to="/job" activeClassName={'active'}>
        <TiBusinessCard /> Jobs
      </NavbarItem>
      {props.children}
    </Navbar>
  );
};

export default Header;
