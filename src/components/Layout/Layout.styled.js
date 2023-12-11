import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledContainer = styled.div`
   position: fixed;
  top: 0;
  left: 0;
  width: 100%;
 
  z-index: 10;
`;

export const OutletWrapper = styled.div`
  margin-left: 200px;
  padding: 1px 16px;
  height: 100vh; 
  overflow-y: auto; 
  @media only screen and (max-width: 768px) {
    margin-left: 0;
  }
`;


export const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;
  list-style: none;
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    position: relative;
     display: flex;
  justify-content: space-around;
  list-style-type: none;
  padding: 1rem 0;
  }
`;

export const StyledLi = styled.li`
  color: black;
  @media only screen and (max-width: 768px) {
    float: left;
  }

  @media only screen and (max-width: 380px) {
    text-align: center;
    float: none;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  padding: 16px;
  display: block;
  transition: all 0.1s;

  &.active {
    background-color: #3470ff;
    color: white;
  }
  &:hover:not(.active) {
    background-color: #555;
    color: white;
  }
`;
