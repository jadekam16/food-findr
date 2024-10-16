import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaHome, FaQuestionCircle, FaBars } from 'react-icons/fa';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const SidebarContainer = styled.div<{ isOpen: boolean }>`
  height: 100vh;
  background-color: lightgreen;
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.3s ease-in-out;
  width: ${ props => props.isOpen ? '250px' : '60px' };
  padding: 20px 0;
  overflow-x: hidden;
`;

const ToggleButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
`;

const Logo = styled.h1<{ isOpen: boolean }>`
  font-size: 1.5em;
  margin-bottom: 20px;
  text-align: center;
  opacity: ${ props => props.isOpen ? 1 : 0 };
  transition: opacity 0.3s ease-in-out;
  white-space: nowrap;
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin-bottom: 5px;
`;

const NavLink = styled( Link ) <{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;
  font-size: 1.1em;
  padding: 10px 15px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e9ecef;
  }

  svg {
    min-width: 20px;
    margin-right: ${ props => props.isOpen ? '10px' : '0' };
  }

  span {
    opacity: ${ props => props.isOpen ? 1 : 0 };
    transition: opacity 0.3s ease-in-out;
    white-space: nowrap;
  }
`;

const Sidebar: React.FC<SidebarProps> = ( { isOpen, toggleSidebar } ) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <ToggleButton onClick={toggleSidebar}>
        <FaBars />
      </ToggleButton>
      <Logo isOpen={isOpen}>Food Findr</Logo>
      <nav>
        <NavList>
          <NavItem>
            <NavLink to="/" isOpen={isOpen}>
              <FaHome />
              <span>Home</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/quiz" isOpen={isOpen}>
              <FaQuestionCircle />
              <span>Quiz</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/search" isOpen={isOpen}>
              <FaQuestionCircle />
              <span>Search</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/profile" isOpen={isOpen}>
              <FaQuestionCircle />
              <span>Profile</span>
            </NavLink>
          </NavItem>
        </NavList>
      </nav>
    </SidebarContainer>
  );
};

export default Sidebar;